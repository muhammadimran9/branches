'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Minimize2 } from 'lucide-react'
import { INITIAL_MESSAGE, QUICK_ACTIONS, SAMPLE_PROMPTS } from '@/lib/chatContext'
import {
  TOTAL_STEPS,
  detectListingIntent,
  generateSessionId,
  delay,
  buildIntroMessage,
  buildStepMessage,
  buildAckMessage,
  generateSummaryPrompt,
  createLeadDoc,
  updateLeadDoc,
  trackAnalytics,
  CONSULTATION_STEPS,
} from '@/lib/consultation'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mr-1.5 mt-0.5 shrink-0">
        <MessageCircle size={12} className="text-white" />
      </div>
      <div className="px-3 py-2.5 rounded-2xl bg-neutral-100 dark:bg-neutral-800 rounded-tl-sm">
        <div className="flex gap-1 items-center h-4">
          {[0, 150, 300].map(d => (
            <span
              key={d}
              className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce"
              style={{ animationDelay: `${d}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

async function streamChat(
  messages: Message[],
  onChunk: (chunk: string) => void,
  onDone: () => void,
  onError: (error: string) => void
) {
  try {
    const response = await fetch('/api/smarttalk/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages }),
    })

    if (!response.ok) {
      onError('Failed to connect to AI. Please try again.')
      return
    }

    const reader = response.body?.getReader()
    const decoder = new TextDecoder()

    if (!reader) {
      onError('Failed to stream response.')
      return
    }

    while (true) {
      const { done, value } = await reader.read()
      if (done) break

      const text = decoder.decode(value)
      const lines = text.split('\n')

      for (const line of lines) {
        if (line.startsWith('data:')) {
          try {
            const json = JSON.parse(line.slice(5))
            if (json.content) onChunk(json.content)
            if (json.done) onDone()
            if (json.error) onError(json.error)
          } catch {}
        }
      }
    }
  } catch (error) {
    onError('Something went wrong. Contact us on WhatsApp: +92 334 563 6230 or email mi6062610@gmail.com')
  }
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: INITIAL_MESSAGE },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [hasNew, setHasNew] = useState(false)
  const [consultMode, setConsultMode] = useState(false)
  const [consultStep, setConsultStep] = useState(0)
  const [leadAnswers, setLeadAnswers] = useState<string[]>([])

  const endRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const sessionId = useRef(generateSessionId())
  const leadDocId = useRef<string>('')
  const isSendingRef = useRef(false)
  const hasTrackedOpen = useRef(false)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (open && !hasTrackedOpen.current) {
      hasTrackedOpen.current = true
      trackAnalytics('chatbot_opened', sessionId.current)
    }
  }, [open])

  async function showDelayed(content: string, ms: number) {
    setIsTyping(true)
    await delay(ms)
    setIsTyping(false)
    setMessages(prev => [...prev, { role: 'assistant', content }])
  }

  function appendLastChunk(chunk: string) {
    setMessages(prev => {
      const newMessages = [...prev]
      const lastMessage = newMessages[newMessages.length - 1]
      if (lastMessage && lastMessage.role === 'assistant') {
        lastMessage.content += chunk
      }
      return newMessages
    })
  }

  async function sendMessage(text: string) {
    if (!text.trim() || loading || isTyping || isSendingRef.current) return

    isSendingRef.current = true

    try {
      setMessages(prev => [...prev, { role: 'user', content: text }])
      setInput('')

      if (!consultMode) {
        if (detectListingIntent(text)) {
          setConsultMode(true)
          setConsultStep(1)

          try {
            leadDocId.current = await createLeadDoc(sessionId.current, 'chat_widget')
          } catch (error) {
            console.error('Failed to create lead doc:', error)
          }

          trackAnalytics('consultation_started', sessionId.current)
          await showDelayed(buildIntroMessage(), 1000)
          return
        } else {
          setLoading(true)
          setMessages(prev => [...prev, { role: 'assistant', content: '' }])

          streamChat(
            messages,
            chunk => appendLastChunk(chunk),
            () => setLoading(false),
            error => {
              setMessages(prev => {
                const newMessages = [...prev]
                const lastMessage = newMessages[newMessages.length - 1]
                if (lastMessage) lastMessage.content = error
                return newMessages
              })
              setLoading(false)
            }
          )
          return
        }
      }

      // Consultation mode
      const newAnswers = [...leadAnswers, text]
      setLeadAnswers(newAnswers)

      if (leadDocId.current) {
        updateLeadDoc(leadDocId.current, newAnswers, consultStep)
      }

      if (consultStep < TOTAL_STEPS) {
        const nextStep = consultStep + 1
        setConsultStep(nextStep)
        await showDelayed(buildAckMessage(nextStep), 850)
        if (!open) setHasNew(true)
        return
      }

      if (consultStep === TOTAL_STEPS) {
        setConsultStep(TOTAL_STEPS + 1)
        if (leadDocId.current) {
          updateLeadDoc(leadDocId.current, newAnswers, TOTAL_STEPS, true)
        }
        trackAnalytics('consultation_completed', sessionId.current, { answers: newAnswers })

        setLoading(true)
        setMessages(prev => [...prev, { role: 'assistant', content: '' }])

        streamChat(
          [
            ...messages,
            { role: 'user', content: text },
            { role: 'assistant', content: '' },
          ],
          chunk => appendLastChunk(chunk),
          () => setLoading(false),
          error => {
            setMessages(prev => {
              const newMessages = [...prev]
              const lastMessage = newMessages[newMessages.length - 1]
              if (lastMessage) lastMessage.content = error
              return newMessages
            })
            setLoading(false)
          }
        )
        return
      }
    } finally {
      isSendingRef.current = false
    }
  }

  const progressPercent = consultMode
    ? (consultStep / TOTAL_STEPS) * 100
    : 0

  return (
    <>
      {!open && (
        <button
          onClick={() => {
            setOpen(true)
            setHasNew(false)
          }}
          className="fixed bottom-24 right-6 z-[60] w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 flex items-center justify-center relative"
        >
          <MessageCircle size={24} />
          {hasNew && (
            <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
          )}
        </button>
      )}

      {open && (
        <div className="fixed bottom-24 right-6 z-[60] w-[calc(100vw-24px)] sm:w-96 h-[580px] max-h-[84vh] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white p-4 flex-shrink-0">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle size={16} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">PakBiz Assistant</h3>
                  <p className="text-xs opacity-90">
                    {isTyping
                      ? 'AI is typing...'
                      : consultMode && consultStep <= TOTAL_STEPS
                      ? `Step ${consultStep} of ${TOTAL_STEPS}`
                      : consultStep === TOTAL_STEPS + 1
                      ? 'Listing Ready ✓'
                      : 'Business Directory AI'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-1 hover:bg-white/20 rounded-lg transition-colors"
              >
                <Minimize2 size={16} />
              </button>
            </div>

            {/* Progress bar */}
            {consultMode && consultStep <= TOTAL_STEPS && (
              <>
                <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <div className="flex gap-1 mt-2">
                  {[...Array(TOTAL_STEPS)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 flex-1 rounded-full transition-colors ${
                        i < consultStep ? 'bg-white' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3 bg-gray-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mr-1.5 mt-0.5 shrink-0">
                    <MessageCircle size={12} className="text-white" />
                  </div>
                )}
                <div
                  className={`px-4 py-2.5 rounded-2xl max-w-xs whitespace-pre-wrap break-words ${
                    msg.role === 'user'
                      ? 'bg-green-600 text-white rounded-br-none'
                      : 'bg-neutral-100 text-gray-900 rounded-bl-none'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {(loading || isTyping) && <TypingIndicator />}

            {!consultMode && messages.length === 1 && !loading && (
              <>
                <div className="pt-2">
                  <p className="text-xs text-gray-600 font-semibold mb-2">Quick Actions:</p>
                  <div className="space-y-1.5">
                    {QUICK_ACTIONS.map((action, i) => (
                      <button
                        key={i}
                        onClick={() => sendMessage(action.message)}
                        className="w-full text-left px-3 py-2 rounded-lg bg-white hover:bg-green-50 border border-gray-200 hover:border-green-300 text-sm text-gray-700 transition-colors"
                      >
                        {action.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-xs text-gray-600 font-semibold mb-2">Common Questions:</p>
                  <div className="space-y-1">
                    {SAMPLE_PROMPTS.slice(0, 2).map((prompt, i) => (
                      <button
                        key={i}
                        onClick={() => sendMessage(prompt)}
                        className="w-full text-left text-xs px-2 py-1.5 rounded bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-300 text-gray-700 transition-colors"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}

            <div ref={endRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 p-3 bg-white flex-shrink-0">
            <div className="flex gap-2">
              <textarea
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault()
                    sendMessage(input)
                  }
                }}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm resize-none max-h-20"
                rows={1}
                disabled={loading || isTyping}
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={loading || isTyping || !input.trim()}
                className="w-10 h-10 rounded-lg bg-green-600 hover:bg-green-700 text-white disabled:bg-gray-300 transition-colors flex items-center justify-center flex-shrink-0"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

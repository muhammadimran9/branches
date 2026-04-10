'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { INITIAL_MESSAGE, QUICK_ACTIONS, SAMPLE_PROMPTS } from '@/lib/chatContext'
import {
  TOTAL_STEPS,
  detectListingIntent,
  generateSessionId,
  delay,
  buildIntroMessage,
  buildAckMessage,
  generateSummaryPrompt,
  createLeadDoc,
  updateLeadDoc,
  trackAnalytics,
} from '@/lib/consultation'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mr-1.5 mt-0.5 shrink-0">
        <span className="text-white text-xs">🤖</span>
      </div>
      <div className="px-3 py-2.5 rounded-2xl bg-neutral-100 rounded-tl-sm">
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

export default function SmartTalkPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: INITIAL_MESSAGE },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [consultMode, setConsultMode] = useState(false)
  const [consultStep, setConsultStep] = useState(0)
  const [leadAnswers, setLeadAnswers] = useState<string[]>([])

  const endRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const sessionId = useRef(generateSessionId())
  const leadDocId = useRef<string>('')
  const isSendingRef = useRef(false)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    trackAnalytics('smarttalk_page_opened', sessionId.current)
  }, [])

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
            leadDocId.current = await createLeadDoc(sessionId.current, 'smarttalk_page')
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

  const progressPercent = consultMode && consultStep <= TOTAL_STEPS
    ? (consultStep / TOTAL_STEPS) * 100
    : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white sticky top-0 z-10 shadow-md">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <ArrowLeft size={20} />
            <span className="text-sm font-medium">Back to PakBizBranches</span>
          </Link>
          <div className="text-center">
            <h1 className="text-2xl font-bold">PakBiz Assistant</h1>
            <p className="text-sm opacity-90">
              {isTyping
                ? 'AI is typing...'
                : consultMode && consultStep <= TOTAL_STEPS
                ? `Step ${consultStep} of ${TOTAL_STEPS}`
                : consultStep === TOTAL_STEPS + 1
                ? 'Listing Ready ✓'
                : 'Chat with us'}
            </p>
          </div>
          <div className="w-16" /> {/* Spacer for centering */}
        </div>

        {/* Progress */}
        {consultMode && consultStep <= TOTAL_STEPS && (
          <div className="max-w-4xl mx-auto px-4 pb-4">
            <div className="w-full h-1.5 bg-white/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="flex gap-1 mt-2">
              {[...Array(TOTAL_STEPS)].map((_, i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-colors ${
                    i < consultStep ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto w-full px-4 py-6 space-y-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.role === 'assistant' && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mr-3 mt-1 shrink-0">
                  <span className="text-white text-sm">🤖</span>
                </div>
              )}
              <div
                className={`px-5 py-3 rounded-2xl max-w-2xl whitespace-pre-wrap break-words ${
                  msg.role === 'user'
                    ? 'bg-green-600 text-white rounded-br-none'
                    : 'bg-white text-gray-900 rounded-bl-none shadow-sm border border-gray-200'
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {(loading || isTyping) && <TypingIndicator />}

          {!consultMode && messages.length === 1 && !loading && (
            <>
              <div className="pt-4">
                <p className="text-sm text-gray-600 font-semibold mb-3">Quick Actions:</p>
                <div className="space-y-2">
                  {QUICK_ACTIONS.map((action, i) => (
                    <button
                      key={i}
                      onClick={() => sendMessage(action.message)}
                      className="w-full text-left px-4 py-3 rounded-lg bg-white hover:bg-green-50 border border-gray-200 hover:border-green-300 text-gray-700 transition-colors font-medium"
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <p className="text-sm text-gray-600 font-semibold mb-3">Common Questions:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {SAMPLE_PROMPTS.map((prompt, i) => (
                    <button
                      key={i}
                      onClick={() => sendMessage(prompt)}
                      className="text-left text-sm px-4 py-2.5 rounded-lg bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-300 text-gray-700 transition-colors"
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
      </div>

      {/* Input */}
      <div className="bg-white border-t border-gray-200 sticky bottom-0 shadow-lg">
        <div className="max-w-4xl mx-auto w-full px-4 py-4 flex gap-3">
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
            placeholder="Type your message or question..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm resize-none max-h-24"
            rows={1}
            disabled={loading || isTyping}
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={loading || isTyping || !input.trim()}
            className="w-12 h-12 rounded-lg bg-green-600 hover:bg-green-700 text-white disabled:bg-gray-300 transition-colors flex items-center justify-center flex-shrink-0"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

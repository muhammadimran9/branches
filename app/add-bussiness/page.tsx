import { Metadata } from 'next'
import AddBussinessClient from './add-bussiness-client'

// Add metadata for SEO
export const metadata: Metadata = {
  title: 'Add Bussiness Free – PakBizBranches Pakistan Directory',
  description: 'Add your bussiness to Pakistan\'s free directory. Get instant online visibility, WhatsApp integration, and reach thousands of customers across Pakistan.',
  keywords: 'add bussiness Pakistan, free bussiness listing Pakistan, bussiness directory submission Pakistan, add bussiness free Pakistan, bussiness registration Pakistan, local bussiness listing Pakistan',
}

export default function AddBussinessPage() {
  return <AddBussinessClient />
}

import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import UserProfileClient from './user-profile-client'

export const metadata: Metadata = {
  title: 'My Profile - PakBizBranches',
  description: 'Manage your PakBizBranches profile and business listings',
  robots: {
    index: false,
    follow: false,
  },
}

export default function UserProfilePage() {
  // In production, verify auth here - for now, render the client component
  // The client component will handle redirect if not authenticated
  return (
    <>
      <Navbar />
      <UserProfileClient />
      <Footer />
    </>
  )
}

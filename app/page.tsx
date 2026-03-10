import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import HeroSection from '@/components/home/hero-section'
import StatsSection from '@/components/home/stats-section'
import CategoriesGrid from '@/components/home/categories-grid'
import CitiesGrid from '@/components/home/cities-grid'
import CTASection from '@/components/home/cta-section'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <StatsSection />
        <CategoriesGrid />
        <CitiesGrid />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}

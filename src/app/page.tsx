import { Hero } from '@/components/sections/hero'
import { EventsSection } from '@/components/sections/events-section'
import { NewsSection } from '@/components/sections/news-section'
import { CTASection } from '@/components/sections/cta-section'
import { ElectedOfficialsSection } from '@/components/sections/elected-officials'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <EventsSection />
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-light text-white mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl text-white/80 font-light">Join thousands of Democrats working for positive change in Baltimore County</p>
        </div>
      </div>
      <CTASection />
      <NewsSection />
      <ElectedOfficialsSection />
    </div>
  )
}
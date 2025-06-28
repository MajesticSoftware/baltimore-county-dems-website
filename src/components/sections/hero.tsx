import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Users, Calendar, Heart } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute -top-48 -left-48 w-96 h-96 bg-white rounded-full" />
        <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-white rounded-full" />
      </div>
      
      <div className="container mx-auto px-4 py-24 lg:py-36 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-light text-black mb-2 animate-fade-up tracking-wide">
                BALTIMORE COUNTY
              </h1>
              <p className="text-xl lg:text-2xl text-black mb-8 animate-fade-up animation-delay-100 font-light">
                Democratic Party
              </p>
              
              <h2 className="text-2xl lg:text-3xl text-black mb-6 animate-fade-up animation-delay-200 font-light leading-relaxed">
                Building a stronger future for Baltimore County through Democratic values and community leadership.
              </h2>
              
              
          
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-300">
                <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 text-base font-medium shadow-lg hover:shadow-xl transition-all rounded-lg" asChild>
                  <Link href="/about">
                    Learn More
                  </Link>
                </Button>
                <Button size="lg" className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-base font-medium transition-all rounded-lg" asChild>
                  <Link href="/get-involved/volunteer">
                    Get Involved
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Right Column - Stats or Image */}
            <div className="hidden lg:block">
              <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
                <h3 className="text-2xl font-bold text-black mb-6">Our Impact</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl font-bold text-black">5,000+</div>
                    <div className="text-gray-600">Active Volunteers</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-black">100+</div>
                    <div className="text-gray-600">Events Per Year</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-black">50+</div>
                    <div className="text-gray-600">Democratic Clubs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Announcement Bar */}
      <div className="bg-blue-100 text-black py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm md:text-base flex items-center justify-center gap-2">
            <span className="font-medium">Upcoming:</span> 2024 Unity Dinner on March 15th • 
            <Link href="/events/unity-dinner" className="font-medium hover:underline transition-all text-blue-600">
              Get Your Tickets →
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
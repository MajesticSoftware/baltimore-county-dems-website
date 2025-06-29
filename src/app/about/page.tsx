import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Users, Target, Heart, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us - Baltimore County Democratic Central Committee',
  description: 'Learn about our mission, vision, and values as we work to build a stronger, more inclusive Baltimore County through Democratic principles.',
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-light text-black mb-6">
              About the Baltimore County Democratic Central Committee
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We are dedicated to building a stronger, more inclusive Baltimore County through 
              Democratic values of equality, opportunity, and community engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/get-involved/volunteer">
                  Get Involved
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about/leadership">
                  Meet Our Leadership
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-light text-black">Our Mission</h2>
              </div>
              <p className="text-lg text-black mb-6 leading-relaxed">
                To advance Democratic values and principles in Baltimore County by electing 
                qualified Democratic candidates, engaging citizens in the democratic process, 
                and advocating for policies that promote equality, economic opportunity, 
                environmental protection, and social justice.
              </p>
              <p className="text-black">
                We work tirelessly to ensure that every voice is heard and every vote counts 
                in building the inclusive, prosperous community we all deserve.
              </p>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <Globe className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-light text-black">Our Vision</h2>
              </div>
              <p className="text-lg text-black mb-6 leading-relaxed">
                A Baltimore County where every resident has access to quality education, 
                affordable healthcare, good-paying jobs, safe communities, and the opportunity 
                to achieve their American Dream regardless of their background or zip code.
              </p>
              <p className="text-black">
                We envision a county government that is transparent, responsive, and works 
                for all people, not just the privileged few.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-black mb-4">
              Our Democratic Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do as Baltimore County Democrats
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Equality & Justice",
                description: "Fighting for civil rights, equal opportunity, and justice for all residents regardless of race, gender, religion, or sexual orientation."
              },
              {
                icon: Heart,
                title: "Community Care",
                description: "Supporting policies that strengthen our social safety net, including healthcare, education, and assistance for those in need."
              },
              {
                icon: Target,
                title: "Economic Opportunity",
                description: "Promoting policies that create good-paying jobs, support small businesses, and build a thriving middle class."
              },
              {
                icon: Globe,
                title: "Environmental Protection",
                description: "Safeguarding our natural resources, addressing climate change, and promoting sustainable development practices."
              },
              {
                icon: Users,
                title: "Democratic Participation",
                description: "Encouraging civic engagement, protecting voting rights, and ensuring government transparency and accountability."
              },
              {
                icon: Heart,
                title: "Inclusive Community",
                description: "Building bridges across communities and celebrating the diversity that makes Baltimore County strong."
              }
            ].map((value, index) => (
              <div key={index} className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <div className="flex items-center mb-4">
                  <value.icon className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-medium text-black">{value.title}</h3>
                </div>
                <p className="text-black leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="bg-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-light text-black mb-8 text-center">
              Our History
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-black leading-relaxed mb-6">
                The Baltimore County Democratic Central Committee has a proud history of fighting for progressive 
                values and representing the interests of working families in our community. Founded on 
                the principles of the national Democratic Party, we have been a driving force for 
                positive change in Baltimore County for decades.
              </p>
              <p className="text-black leading-relaxed mb-6">
                Throughout our history, Baltimore County Democrats have championed landmark legislation 
                on education funding, environmental protection, healthcare access, and civil rights. 
                We have elected leaders who have fought tirelessly for our values at every level of 
                government, from local school boards to the halls of Congress.
              </p>
              <p className="text-black leading-relaxed">
                Today, we continue that tradition of leadership and service, building coalitions 
                across our diverse community and working to ensure that Baltimore County remains 
                a place where everyone can thrive and succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-light text-black mb-4">
              Join Our Movement
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Whether you're a longtime Democrat or new to our party, there's a place for you 
              in our movement for progress and positive change.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Button size="lg" asChild>
                <Link href="/get-involved/membership">
                  Become a Member
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about/leadership">
                  Meet Our Team
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
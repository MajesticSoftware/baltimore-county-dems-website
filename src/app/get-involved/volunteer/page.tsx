'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  Users, 
  Calendar, 
  Phone, 
  Mail, 
  MapPin,
  Clock,
  Target,
  Megaphone,
  FileText,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const volunteerOpportunities = [
  {
    id: 'campaigns',
    title: 'Campaign Support',
    icon: Target,
    description: 'Help elect Democratic candidates at all levels of government',
    timeCommitment: 'Flexible, 2-20 hours/week',
    activities: [
      'Phone banking and voter outreach calls',
      'Canvassing neighborhoods and door-to-door outreach',
      'Data entry and voter file management',
      'Event planning and coordination',
      'Social media and digital outreach'
    ]
  },
  {
    id: 'events',
    title: 'Event Organization',
    icon: Calendar,
    description: 'Plan and execute Democratic events, fundraisers, and community gatherings',
    timeCommitment: '5-10 hours/month',
    activities: [
      'Unity Dinner planning and coordination',
      'Fundraising event management',
      'Community forum organization',
      'Rally and demonstration planning',
      'Vendor coordination and logistics'
    ]
  },
  {
    id: 'outreach',
    title: 'Community Outreach',
    icon: Users,
    description: 'Connect with community members and expand Democratic participation',
    timeCommitment: '3-8 hours/month',
    activities: [
      'Voter registration drives',
      'Community fair and festival tabling',
      'Senior center and community presentations',
      'Student and young voter engagement',
      'Multilingual outreach programs'
    ]
  },
  {
    id: 'communications',
    title: 'Communications & Media',
    icon: Megaphone,
    description: 'Help spread our message through various media channels',
    timeCommitment: '2-6 hours/week',
    activities: [
      'Social media content creation and management',
      'Newsletter writing and distribution',
      'Press release writing and media relations',
      'Website content updates',
      'Graphic design and visual communications'
    ]
  },
  {
    id: 'admin',
    title: 'Administrative Support',
    icon: FileText,
    description: 'Provide essential behind-the-scenes support for party operations',
    timeCommitment: '2-5 hours/week',
    activities: [
      'Database management and data entry',
      'Office administration and filing',
      'Volunteer coordination and scheduling',
      'Financial record keeping',
      'Meeting preparation and note-taking'
    ]
  },
  {
    id: 'special',
    title: 'Special Skills',
    icon: CheckCircle,
    description: 'Use your professional skills to support Democratic causes',
    timeCommitment: 'Project-based',
    activities: [
      'Legal and compliance support',
      'Financial planning and accounting',
      'Technology and website development',
      'Translation and interpretation services',
      'Professional training and workshops'
    ]
  }
]

export default function VolunteerPage() {
  const [selectedOpportunity, setSelectedOpportunity] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    interests: [] as string[],
    experience: '',
    availability: '',
    skills: '',
    motivation: ''
  })

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Volunteer signup:', formData)
    alert('Thank you for your interest in volunteering! We will contact you soon.')
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-light text-black mb-6">
              Volunteer with Us
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join thousands of Baltimore County Democrats who are making a real difference 
              in our community. Whether you have an hour a week or several hours a day, 
              there's a meaningful way for you to contribute.
            </p>
            <Button size="lg" asChild>
              <Link href="#signup">
                Sign Up to Volunteer
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Volunteer Benefits */}
      <section className="bg-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-black mb-4">
              Why Volunteer with Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Volunteering with the Baltimore County Democratic Party offers more than just civic engagement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Build Community",
                description: "Connect with like-minded neighbors and build lasting friendships"
              },
              {
                icon: Target,
                title: "Make Real Impact",
                description: "See the direct results of your work in election victories and policy changes"
              },
              {
                icon: CheckCircle,
                title: "Develop Skills",
                description: "Gain experience in organizing, communications, and political engagement"
              },
              {
                icon: Calendar,
                title: "Flexible Schedule",
                description: "Find volunteer opportunities that fit your schedule and availability"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-blue-100 text-center">
                <benefit.icon className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-black mb-2">{benefit.title}</h3>
                <p className="text-black text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-black mb-4">
              Volunteer Opportunities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore different ways to get involved based on your interests and skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteerOpportunities.map((opportunity) => (
              <div 
                key={opportunity.id}
                className="bg-blue-50 rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-all cursor-pointer"
                onClick={() => setSelectedOpportunity(
                  selectedOpportunity === opportunity.id ? null : opportunity.id
                )}
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <opportunity.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-black mb-2">{opportunity.title}</h3>
                    <p className="text-black text-sm mb-2">{opportunity.description}</p>
                    <div className="flex items-center text-xs text-gray-600">
                      <Clock className="w-3 h-3 mr-1" />
                      {opportunity.timeCommitment}
                    </div>
                  </div>
                </div>

                {selectedOpportunity === opportunity.id && (
                  <div className="mt-4 pt-4 border-t border-blue-200">
                    <h4 className="text-sm font-medium text-black mb-2">Activities include:</h4>
                    <ul className="space-y-1">
                      {opportunity.activities.map((activity, index) => (
                        <li key={index} className="flex items-start text-xs text-black">
                          <span className="text-blue-600 mr-2 mt-1">•</span>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Signup Form */}
      <section id="signup" className="bg-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-light text-black mb-4">
                Join Our Volunteer Team
              </h2>
              <p className="text-lg text-black">
                Fill out this form to get started. We'll contact you with volunteer opportunities 
                that match your interests and availability.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 border border-blue-100">
              {/* Personal Information */}
              <div className="mb-8">
                <h3 className="text-xl font-medium text-black mb-4">Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">First Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData(prev => ({...prev, firstName: e.target.value}))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Last Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData(prev => ({...prev, lastName: e.target.value}))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-black mb-2">Address</label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => setFormData(prev => ({...prev, address: e.target.value}))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">City</label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData(prev => ({...prev, city: e.target.value}))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">ZIP Code</label>
                    <input
                      type="text"
                      value={formData.zipCode}
                      onChange={(e) => setFormData(prev => ({...prev, zipCode: e.target.value}))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Volunteer Interests */}
              <div className="mb-8">
                <h3 className="text-xl font-medium text-black mb-4">Areas of Interest</h3>
                <p className="text-sm text-gray-600 mb-4">Select all that apply:</p>
                <div className="grid md:grid-cols-2 gap-3">
                  {volunteerOpportunities.map((opportunity) => (
                    <label key={opportunity.id} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(opportunity.id)}
                        onChange={() => handleInterestChange(opportunity.id)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-black text-sm">{opportunity.title}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Additional Information */}
              <div className="mb-8">
                <h3 className="text-xl font-medium text-black mb-4">Additional Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Previous volunteer or political experience
                    </label>
                    <textarea
                      value={formData.experience}
                      onChange={(e) => setFormData(prev => ({...prev, experience: e.target.value}))}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Describe any relevant experience..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Availability (days/times you're generally available)
                    </label>
                    <textarea
                      value={formData.availability}
                      onChange={(e) => setFormData(prev => ({...prev, availability: e.target.value}))}
                      rows={2}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., Weekends, weekday evenings, flexible..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Special skills or talents
                    </label>
                    <textarea
                      value={formData.skills}
                      onChange={(e) => setFormData(prev => ({...prev, skills: e.target.value}))}
                      rows={2}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., graphic design, bilingual, social media, event planning..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      What motivates you to volunteer with the Democratic Party?
                    </label>
                    <textarea
                      value={formData.motivation}
                      onChange={(e) => setFormData(prev => ({...prev, motivation: e.target.value}))}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tell us what drives your commitment to Democratic values..."
                    />
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button type="submit" size="lg" className="px-8">
                  Submit Volunteer Application
                </Button>
                <p className="text-sm text-gray-600 mt-4">
                  We'll review your application and contact you within 1-2 business days with next steps.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-light text-black mb-6">
              Questions About Volunteering?
            </h2>
            <p className="text-lg text-black mb-8">
              Our volunteer coordinator is here to help you find the perfect way to get involved.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                <Mail className="w-6 h-6 text-blue-600 mx-auto mb-3" />
                <h3 className="text-lg font-medium text-black mb-2">Email Us</h3>
                <a href="mailto:volunteer@baltimorecountydems.com" className="text-blue-600 hover:text-blue-700">
                  volunteer@baltimorecountydems.com
                </a>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                <Phone className="w-6 h-6 text-blue-600 mx-auto mb-3" />
                <h3 className="text-lg font-medium text-black mb-2">Call Us</h3>
                <a href="tel:(410) 555-0150" className="text-blue-600 hover:text-blue-700">
                  (410) 555-0150
                </a>
              </div>
            </div>

            <Button size="lg" variant="outline" asChild>
              <Link href="/about/clubs">
                Find Local Democratic Clubs
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  Users, 
  Star, 
  Calendar, 
  Mail, 
  Phone, 
  MapPin,
  CreditCard,
  Shield,
  Network,
  Award,
  CheckCircle,
  ArrowRight,
  Crown,
  Gift,
  UserCheck
} from 'lucide-react'

const membershipTiers = [
  {
    id: 'basic',
    name: 'Basic Member',
    price: 25,
    period: 'annual',
    description: 'Perfect for getting started with Democratic activism',
    features: [
      'Quarterly newsletter and updates',
      'Access to member-only events',
      'Voting rights in party elections',
      'Volunteer opportunity notifications',
      'Digital member directory access'
    ],
    popular: false
  },
  {
    id: 'supporter',
    name: 'Active Supporter',
    price: 75,
    period: 'annual',
    description: 'For committed Democrats who want more involvement',
    features: [
      'All Basic Member benefits',
      'Priority event registration',
      'Monthly member meetups',
      'Candidate meet-and-greet access',
      'Democratic training workshop discounts',
      'Member mentorship program'
    ],
    popular: true
  },
  {
    id: 'champion',
    name: 'Democratic Champion',
    price: 150,
    period: 'annual',
    description: 'For leaders who want maximum impact and access',
    features: [
      'All Active Supporter benefits',
      'VIP seating at major events',
      'Private donor receptions',
      'One-on-one meetings with officials',
      'Campaign strategy briefings',
      'Exclusive policy discussions',
      'Recognition in annual materials'
    ],
    popular: false
  }
]

const memberBenefits = [
  {
    icon: Network,
    title: 'Networking Opportunities',
    description: 'Connect with fellow Democrats, elected officials, and community leaders at exclusive member events.'
  },
  {
    icon: Award,
    title: 'Leadership Development',
    description: 'Access training programs, workshops, and mentorship to develop your political and organizing skills.'
  },
  {
    icon: Calendar,
    title: 'Exclusive Events',
    description: 'Priority access to fundraisers, candidate forums, and special events throughout the year.'
  },
  {
    icon: UserCheck,
    title: 'Democratic Voice',
    description: 'Vote in party elections and have a say in endorsements, platform positions, and party leadership.'
  }
]

export default function MembershipPage() {
  const [selectedTier, setSelectedTier] = useState<string>('supporter')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    employer: '',
    occupation: '',
    paymentMethod: 'credit',
    membershipType: 'supporter',
    autoRenew: true,
    newsletter: true,
    volunteer: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Membership signup:', formData)
    alert('Thank you for joining! You will receive a confirmation email with your membership details.')
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-light text-black mb-6">
              Join Our Community
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Become a member of the Baltimore County Democratic Central Committee and join thousands 
              of Democrats working together to build a stronger, more inclusive community. 
              Your membership supports our candidates, causes, and democratic values.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#membership-tiers">
                  Choose Your Membership
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#benefits">
                  See Benefits
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Member Benefits */}
      <section id="benefits" className="bg-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-black mb-4">
              Member Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              As a Baltimore County Democratic Central Committee member, you gain access to exclusive 
              opportunities and resources that help you make a real difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {memberBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-blue-100 text-center">
                <benefit.icon className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-black mb-3">{benefit.title}</h3>
                <p className="text-black text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Member Stats */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: "2,500+", label: "Active Members", description: "Democrats building our movement" },
              { number: "50+", label: "Member Events", description: "Networking and training opportunities annually" },
              { number: "98%", label: "Satisfaction Rate", description: "Members who renew their membership" }
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-blue-100 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-lg font-medium text-black mb-1">{stat.label}</div>
                <div className="text-black text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Membership Works */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-black mb-4">
              How Membership Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple steps to join our community and start making a difference
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Choose Your Level",
                  description: "Select the membership tier that matches your commitment level and desired benefits",
                  icon: UserCheck
                },
                {
                  step: "2", 
                  title: "Complete Signup",
                  description: "Fill out the membership form with your information and payment details",
                  icon: CreditCard
                },
                {
                  step: "3",
                  title: "Get Involved",
                  description: "Receive your welcome packet and start participating in events and activities",
                  icon: Calendar
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <step.icon className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-black mb-3">{step.title}</h3>
                  <p className="text-black text-sm">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-blue-50 rounded-xl p-8 border border-blue-100">
              <div className="text-center mb-6">
                <h3 className="text-xl font-medium text-black mb-3">What Happens After You Join?</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-black text-sm">Welcome Package</div>
                      <div className="text-black text-xs">Receive membership materials and event calendar</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-black text-sm">Member Directory Access</div>
                      <div className="text-black text-xs">Connect with other Democrats in your area</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-black text-sm">Event Invitations</div>
                      <div className="text-black text-xs">Get invited to member-only gatherings and training</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-black text-sm">Monthly Newsletter</div>
                      <div className="text-black text-xs">Stay informed with insider political updates</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-black text-sm">Voting Rights</div>
                      <div className="text-black text-xs">Participate in party elections and endorsements</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-black text-sm">Volunteer Opportunities</div>
                      <div className="text-black text-xs">Get matched with activities that fit your schedule</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section id="membership-tiers" className="bg-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-black mb-4">
              Membership Options
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the membership level that best fits your commitment and involvement goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {membershipTiers.map((tier) => (
              <div 
                key={tier.id}
                className={`relative rounded-2xl p-8 border-2 transition-all ${
                  tier.popular 
                    ? 'border-blue-600 bg-blue-50 shadow-lg' 
                    : 'border-blue-200 bg-white hover:shadow-md'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-medium text-black mb-2">{tier.name}</h3>
                  <p className="text-black text-sm mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-black">${tier.price}</span>
                    <span className="text-black text-lg ml-1">/{tier.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-black text-sm">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full"
                  variant={tier.popular ? 'default' : 'outline'}
                  onClick={() => {
                    setSelectedTier(tier.id)
                    setFormData(prev => ({...prev, membershipType: tier.id}))
                    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Select {tier.name}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Signup Form */}
      <section id="signup" className="bg-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-light text-black mb-4">
                Complete Your Membership
              </h2>
              <p className="text-lg text-black">
                Join the Baltimore County Democratic Central Committee and start making a difference today
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 border border-blue-100">
              {/* Selected Membership Tier */}
              <div className="mb-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-medium text-black">
                      {membershipTiers.find(t => t.id === selectedTier)?.name}
                    </h3>
                    <p className="text-black text-sm">
                      {membershipTiers.find(t => t.id === selectedTier)?.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-black">
                      ${membershipTiers.find(t => t.id === selectedTier)?.price}
                    </div>
                    <div className="text-black text-sm">per year</div>
                  </div>
                </div>
              </div>

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
                    <label className="block text-sm font-medium text-black mb-2">Address *</label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData(prev => ({...prev, address: e.target.value}))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">City *</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData(prev => ({...prev, city: e.target.value}))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">ZIP Code *</label>
                    <input
                      type="text"
                      required
                      value={formData.zipCode}
                      onChange={(e) => setFormData(prev => ({...prev, zipCode: e.target.value}))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Employer</label>
                    <input
                      type="text"
                      value={formData.employer}
                      onChange={(e) => setFormData(prev => ({...prev, employer: e.target.value}))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Occupation</label>
                    <input
                      type="text"
                      value={formData.occupation}
                      onChange={(e) => setFormData(prev => ({...prev, occupation: e.target.value}))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div className="mb-8">
                <h3 className="text-xl font-medium text-black mb-4">Payment Information</h3>
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 mb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <Shield className="w-6 h-6 text-blue-600" />
                    <div>
                      <h4 className="text-lg font-medium text-black">Secure Payment Processing</h4>
                      <p className="text-black text-sm">
                        Your payment information is encrypted and processed securely through our trusted payment partner.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">Payment Method</label>
                      <div className="flex space-x-4">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="credit"
                            checked={formData.paymentMethod === 'credit'}
                            onChange={(e) => setFormData(prev => ({...prev, paymentMethod: e.target.value}))}
                            className="text-blue-600 focus:ring-blue-500"
                          />
                          <span className="text-black text-sm">Credit/Debit Card</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="bank"
                            checked={formData.paymentMethod === 'bank'}
                            onChange={(e) => setFormData(prev => ({...prev, paymentMethod: e.target.value}))}
                            className="text-blue-600 focus:ring-blue-500"
                          />
                          <span className="text-black text-sm">Bank Transfer</span>
                        </label>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-black mb-2">Card Number</label>
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-black mb-2">Expiry Date</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-black mb-2">CVV</label>
                        <input
                          type="text"
                          placeholder="123"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-black mb-2">Cardholder Name</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Preferences */}
              <div className="mb-8">
                <h3 className="text-xl font-medium text-black mb-4">Preferences</h3>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={formData.autoRenew}
                      onChange={(e) => setFormData(prev => ({...prev, autoRenew: e.target.checked}))}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-black text-sm">
                      Automatically renew my membership annually
                    </span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={formData.newsletter}
                      onChange={(e) => setFormData(prev => ({...prev, newsletter: e.target.checked}))}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-black text-sm">
                      Send me the Democratic newsletter and event updates
                    </span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={formData.volunteer}
                      onChange={(e) => setFormData(prev => ({...prev, volunteer: e.target.checked}))}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-black text-sm">
                      I'm interested in volunteer opportunities
                    </span>
                  </label>
                </div>
              </div>

              <div className="text-center">
                <Button type="submit" size="lg" className="px-12">
                  <CreditCard className="mr-2 h-5 w-5" />
                  Complete Membership
                </Button>
                <p className="text-sm text-gray-600 mt-4">
                  By joining, you agree to our membership terms and privacy policy. 
                  Your membership is tax-deductible to the extent allowed by law.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Member Resources */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-black mb-4">
              Exclusive Member Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get the most out of your membership with these exclusive resources and opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Calendar,
                title: "Member Calendar",
                description: "Access exclusive member events, training sessions, and networking opportunities",
                link: "/events/members"
              },
              {
                icon: Network,
                title: "Member Directory",
                description: "Connect with fellow Democrats in your area and across Baltimore County",
                link: "/members/directory"
              },
              {
                icon: Mail,
                title: "Member Newsletter",
                description: "Get insider updates on party activities, candidate news, and political insights",
                link: "/newsletter"
              },
              {
                icon: Award,
                title: "Training Center",
                description: "Access workshops on organizing, campaigning, public speaking, and leadership",
                link: "/training"
              },
              {
                icon: Users,
                title: "Committee Participation",
                description: "Join party committees and have direct input on party positions and activities",
                link: "/committees"
              },
              {
                icon: Gift,
                title: "Member Discounts",
                description: "Exclusive discounts on Democratic merchandise, event tickets, and training programs",
                link: "/shop/members"
              }
            ].map((resource, index) => (
              <div key={index} className="bg-blue-50 rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-all">
                <resource.icon className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-medium text-black mb-3">{resource.title}</h3>
                <p className="text-black text-sm mb-4">{resource.description}</p>
                <Button size="sm" variant="outline" asChild>
                  <Link href={resource.link}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Testimonials */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-black mb-4">
              What Our Members Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from fellow Democrats about their membership experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Active Supporter Member",
                location: "Towson",
                quote: "Being a member has connected me with amazing people who share my values. The training workshops have helped me become a more effective advocate for the causes I care about.",
                memberSince: "2019"
              },
              {
                name: "Michael Chen",
                role: "Democratic Champion",
                location: "Catonsville",
                quote: "The exclusive events and briefings keep me informed about what's happening in our community. I've made lasting friendships and feel like I'm truly making a difference.",
                memberSince: "2017"
              },
              {
                name: "Dr. Angela Williams",
                role: "Basic Member",
                location: "Dundalk",
                quote: "Even as a basic member, I feel valued and included. The newsletters keep me informed, and the volunteer opportunities fit perfectly with my busy schedule as a physician.",
                memberSince: "2021"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <div className="mb-4">
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-black text-sm italic mb-4">"{testimonial.quote}"</p>
                </div>
                <div className="border-t border-blue-200 pt-4">
                  <div className="font-medium text-black">{testimonial.name}</div>
                  <div className="text-blue-600 text-sm">{testimonial.role}</div>
                  <div className="text-gray-600 text-xs">{testimonial.location} • Member since {testimonial.memberSince}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-light text-black mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Common questions about Democratic Central Committee membership
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "What's the difference between the membership tiers?",
                  answer: "Our membership tiers offer different levels of engagement and benefits. Basic Members get essential updates and voting rights. Active Supporters receive priority event access and additional networking opportunities. Democratic Champions enjoy VIP access, private meetings with officials, and recognition at events."
                },
                {
                  question: "Can I change my membership level later?",
                  answer: "Yes! You can upgrade your membership at any time by paying the difference. If you want to downgrade, the change will take effect at your next renewal date. Contact our membership team for assistance with changes."
                },
                {
                  question: "Are membership dues tax-deductible?",
                  answer: "No, membership dues to the Democratic Central Committee are not tax-deductible as they are contributions to a political organization. However, you'll receive a receipt for your records."
                },
                {
                  question: "What voting rights do members have?",
                  answer: "All members can vote in party elections for Central Committee positions, participate in candidate endorsements, and have input on party platform positions. Voting typically occurs at monthly meetings and special conventions."
                },
                {
                  question: "How often are member events held?",
                  answer: "We host multiple events each month including social gatherings, training workshops, candidate forums, and policy discussions. Active Supporters and Champions get priority access and advance notice."
                },
                {
                  question: "Can I volunteer even if I'm not a member?",
                  answer: "While we welcome all volunteers, membership provides additional opportunities and helps sustain our ongoing work. Many volunteer activities are available to non-members, but some exclusive opportunities are reserved for members."
                },
                {
                  question: "What happens if I miss a membership payment?",
                  answer: "We'll send friendly reminders before your membership expires. You have a 30-day grace period to renew. After that, you'll need to rejoin, but you won't lose any previous member benefits or recognition."
                },
                {
                  question: "Do you offer membership assistance for those with financial hardship?",
                  answer: "Yes, we believe financial circumstances shouldn't prevent Democratic participation. Contact our membership team confidentially to discuss reduced-rate or scholarship options based on your situation."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border border-blue-100">
                  <h3 className="text-lg font-medium text-black mb-3">{faq.question}</h3>
                  <p className="text-black text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-light text-black mb-6">
              Questions About Membership?
            </h2>
            <p className="text-lg text-black mb-8">
              Our membership team is here to help you choose the right membership level 
              and answer any questions about benefits and activities.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 border border-blue-100">
                <Mail className="w-6 h-6 text-blue-600 mx-auto mb-3" />
                <h3 className="text-lg font-medium text-black mb-2">Email Us</h3>
                <a href="mailto:membership@baltimorecountydems.com" className="text-blue-600 hover:text-blue-700">
                  membership@baltimorecountydems.com
                </a>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-blue-100">
                <Phone className="w-6 h-6 text-blue-600 mx-auto mb-3" />
                <h3 className="text-lg font-medium text-black mb-2">Call Us</h3>
                <a href="tel:(410) 555-0160" className="text-blue-600 hover:text-blue-700">
                  (410) 555-0160
                </a>
              </div>
            </div>

            <Button size="lg" variant="outline" asChild>
              <Link href="/get-involved/volunteer">
                Want to Volunteer Instead?
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}


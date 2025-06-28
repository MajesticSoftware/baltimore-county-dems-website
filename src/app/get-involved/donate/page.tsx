'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  Heart, 
  Shield, 
  CreditCard, 
  Users, 
  Target,
  CheckCircle,
  DollarSign,
  Calendar,
  Star,
  ArrowRight,
  ExternalLink
} from 'lucide-react'

const donationAmounts = [25, 50, 100, 250, 500, 1000]

const monthlyAmounts = [10, 25, 50, 100, 250]

const impactExamples = [
  {
    amount: 25,
    impact: "Helps register 10 new voters through our outreach programs"
  },
  {
    amount: 50,
    impact: "Funds campaign materials for a local Democratic candidate"
  },
  {
    amount: 100,
    impact: "Sponsors a community forum on important local issues"
  },
  {
    amount: 250,
    impact: "Supports a month of digital outreach to young voters"
  },
  {
    amount: 500,
    impact: "Funds training for 20 new volunteer organizers"
  },
  {
    amount: 1000,
    impact: "Sponsors a major get-out-the-vote effort in underserved communities"
  }
]

const waysToDonate = [
  {
    icon: CreditCard,
    title: "ActBlue Secure Donations",
    description: "Make secure online contributions through our ActBlue page with credit card or bank transfer",
    buttonText: "Donate via ActBlue",
    href: "https://secure.actblue.com/donate/baltimore-county-dems",
    isExternal: true
  },
  {
    icon: Calendar,
    title: "Monthly Sustaining Gifts",
    description: "Set up recurring monthly donations to provide steady support for our ongoing work",
    buttonText: "Set Up Monthly Giving",
    href: "#monthly",
    isExternal: false
  },
  {
    icon: Users,
    title: "Major Donor Program",
    description: "Join our major donor circle for exclusive events and direct access to Democratic leaders",
    buttonText: "Learn About Major Giving",
    href: "#major-donor",
    isExternal: false
  },
  {
    icon: Star,
    title: "Corporate Partnerships",
    description: "Explore corporate sponsorship opportunities for events and voter outreach programs",
    buttonText: "Corporate Giving Info",
    href: "mailto:treasurer@baltimorecountydems.com",
    isExternal: true
  }
]

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState('')
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time')
  const [showImpact, setShowImpact] = useState(false)

  const getCurrentAmount = () => {
    if (selectedAmount) return selectedAmount
    if (customAmount) return parseInt(customAmount) || 0
    return 0
  }

  const getImpactMessage = (amount: number) => {
    const impact = impactExamples.find(example => example.amount <= amount)
    return impact ? impact.impact : "Every dollar makes a difference in our fight for Democratic values"
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-light text-black mb-6">
              Support Democratic Values
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Your contributions help elect Democratic candidates, register voters, 
              and build a stronger, more inclusive Baltimore County. Every donation, 
              no matter the size, makes a real difference in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="https://secure.actblue.com/donate/baltimore-county-dems" target="_blank">
                  Donate Now via ActBlue
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#donation-form">
                  Choose Amount
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Donate */}
      <section className="bg-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-black mb-4">
              Why Your Donation Matters
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how your contributions directly support Democratic causes and candidates in Baltimore County
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Elect Democrats",
                description: "Fund campaigns for Democratic candidates at all levels of government",
                examples: ["Campaign materials and advertising", "Get-out-the-vote efforts", "Volunteer coordination"]
              },
              {
                icon: Users,
                title: "Register Voters",
                description: "Expand Democratic participation through voter registration drives",
                examples: ["Community outreach programs", "Student voter registration", "Multilingual voter education"]
              },
              {
                icon: Heart,
                title: "Build Community",
                description: "Strengthen Democratic organizing and community engagement",
                examples: ["Training new volunteers", "Democratic club support", "Community forums and events"]
              }
            ].map((reason, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-blue-100">
                <reason.icon className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-medium text-black mb-3">{reason.title}</h3>
                <p className="text-black text-sm mb-4">{reason.description}</p>
                <ul className="space-y-1">
                  {reason.examples.map((example, idx) => (
                    <li key={idx} className="flex items-start text-xs text-gray-600">
                      <span className="text-blue-600 mr-2">•</span>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section id="donation-form" className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-light text-black mb-4">
                Make a Contribution
              </h2>
              <p className="text-lg text-black">
                Choose your contribution amount and type. All donations are processed securely through ActBlue.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 border border-blue-100">
              {/* Donation Type Toggle */}
              <div className="flex justify-center mb-8">
                <div className="bg-white rounded-lg p-1 flex">
                  <button
                    onClick={() => setDonationType('one-time')}
                    className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                      donationType === 'one-time' 
                        ? 'bg-blue-600 text-white' 
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    One-time
                  </button>
                  <button
                    onClick={() => setDonationType('monthly')}
                    className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                      donationType === 'monthly' 
                        ? 'bg-blue-600 text-white' 
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    Monthly
                  </button>
                </div>
              </div>

              {/* Amount Selection */}
              <div className="mb-8">
                <h3 className="text-lg font-medium text-black mb-4 text-center">
                  Select {donationType === 'monthly' ? 'Monthly ' : ''}Contribution Amount
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                  {(donationType === 'monthly' ? monthlyAmounts : donationAmounts).map((amount) => (
                    <button
                      key={amount}
                      onClick={() => {
                        setSelectedAmount(amount)
                        setCustomAmount('')
                        setShowImpact(true)
                      }}
                      className={`p-4 rounded-lg border-2 text-center font-medium transition-all ${
                        selectedAmount === amount
                          ? 'border-blue-600 bg-blue-600 text-white'
                          : 'border-gray-300 bg-white text-black hover:border-blue-400'
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-black font-medium">$</span>
                  <input
                    type="number"
                    placeholder="Other amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value)
                      setSelectedAmount(null)
                      setShowImpact(!!e.target.value)
                    }}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Impact Message */}
              {showImpact && getCurrentAmount() > 0 && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="text-green-800 font-medium mb-1">Your Impact</h4>
                      <p className="text-green-700 text-sm">
                        Your ${getCurrentAmount()} {donationType === 'monthly' ? 'monthly ' : ''}
                        contribution {getImpactMessage(getCurrentAmount())}.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Proceed to ActBlue */}
              <div className="text-center">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto px-8"
                  disabled={getCurrentAmount() === 0}
                  asChild
                >
                  <Link 
                    href={`https://secure.actblue.com/donate/baltimore-county-dems?amount=${getCurrentAmount()}&recurring=${donationType === 'monthly'}`}
                    target="_blank"
                  >
                    Contribute ${getCurrentAmount() || '___'} via ActBlue
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                
                <div className="flex items-center justify-center mt-4 text-sm text-gray-600">
                  <Shield className="w-4 h-4 mr-2" />
                  Secure donation processing powered by ActBlue
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Donate */}
      <section className="bg-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-black mb-4">
              Other Ways to Support Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore different giving options that work best for your situation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {waysToDonate.map((way, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-blue-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <way.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-black mb-2">{way.title}</h3>
                    <p className="text-black text-sm mb-4">{way.description}</p>
                    <Button size="sm" variant="outline" asChild>
                      <Link 
                        href={way.href}
                        target={way.isExternal ? "_blank" : undefined}
                      >
                        {way.buttonText}
                        {way.isExternal && <ExternalLink className="ml-2 h-4 w-4" />}
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Donor Program */}
      <section id="major-donor" className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-light text-black mb-4">
                Major Donor Circle
              </h2>
              <p className="text-lg text-black">
                Join our Major Donor Circle for enhanced engagement and exclusive access 
                to Democratic leaders and events.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  level: "Supporter",
                  amount: "$500+",
                  color: "blue",
                  benefits: [
                    "Quarterly newsletter",
                    "Annual appreciation event",
                    "Priority event seating",
                    "Tax-deductible receipt"
                  ]
                },
                {
                  level: "Advocate",
                  amount: "$1,000+",
                  color: "green",
                  benefits: [
                    "All Supporter benefits",
                    "Exclusive briefings with candidates",
                    "VIP reception access",
                    "Direct line to party leadership"
                  ]
                },
                {
                  level: "Champion",
                  amount: "$2,500+",
                  color: "purple",
                  benefits: [
                    "All Advocate benefits",
                    "Private dinners with elected officials",
                    "Policy consultation opportunities",
                    "Recognition at major events"
                  ]
                }
              ].map((tier, index) => (
                <div key={index} className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-medium text-black mb-2">{tier.level}</h3>
                    <div className="text-2xl font-bold text-blue-600">{tier.amount}</div>
                    <div className="text-sm text-gray-600">annually</div>
                  </div>
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm text-black">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button size="lg" asChild>
                <Link href="mailto:treasurer@baltimorecountydems.com">
                  Contact Us About Major Giving
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Information */}
      <section className="bg-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-light text-black mb-6 text-center">
              Important Legal Information
            </h2>
            
            <div className="bg-white rounded-xl p-8 border border-blue-100">
              <div className="space-y-4 text-sm text-black">
                <p>
                  <strong>Contribution Limits:</strong> Federal law limits individual contributions to $3,300 per calendar year 
                  to the Baltimore County Democratic State Central Committee. Corporate contributions are prohibited.
                </p>
                
                <p>
                  <strong>Required Disclosure:</strong> Contributions to political organizations may be subject to 
                  public disclosure requirements. Donors contributing $100 or more must provide name, 
                  address, and occupation information.
                </p>
                
                <p>
                  <strong>Tax Information:</strong> Contributions to political organizations are not tax-deductible 
                  as charitable contributions for federal income tax purposes.
                </p>
                
                <p>
                  <strong>Employer Disclaimer:</strong> By donating, you confirm that the funds are your own and 
                  not from a prohibited source, including corporate funds or funds from foreign nationals.
                </p>
                
                <p className="text-xs text-gray-600 pt-4 border-t border-gray-200">
                  Paid for by the Baltimore County Democratic State Central Committee. 
                  Not authorized by any candidate or candidate's committee. For questions about contributions, 
                  contact treasurer@baltimorecountydems.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
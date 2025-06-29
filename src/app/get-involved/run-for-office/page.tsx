'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  Vote, 
  Target, 
  Calendar, 
  Mail, 
  Phone, 
  FileText,
  Users,
  DollarSign,
  Megaphone,
  BookOpen,
  CheckCircle,
  ArrowRight,
  MapPin,
  Clock,
  Award,
  Shield,
  Briefcase,
  Star
} from 'lucide-react'

const candidatePrograms = [
  {
    id: 'training',
    title: 'Candidate Training Program',
    icon: BookOpen,
    description: 'Comprehensive training covering all aspects of running for office',
    duration: '8-week program',
    format: 'In-person & virtual sessions',
    topics: [
      'Campaign planning and strategy development',
      'Fundraising techniques and donor cultivation',
      'Public speaking and debate preparation',
      'Media relations and communications',
      'Digital campaigning and social media',
      'Voter outreach and door-to-door canvassing',
      'Campaign finance and legal compliance',
      'Building volunteer teams and coalitions'
    ]
  },
  {
    id: 'mentorship',
    title: 'Candidate Mentorship',
    icon: Users,
    description: 'One-on-one guidance from experienced elected officials',
    duration: 'Throughout campaign',
    format: 'Personal mentoring relationship',
    topics: [
      'Strategic campaign advice from veterans',
      'Introduction to key community leaders',
      'Navigation of local political landscape',
      'Personal brand development',
      'Stress management and work-life balance',
      'Family and career transition support',
      'Post-election transition guidance',
      'Ongoing governance support'
    ]
  },
  {
    id: 'resources',
    title: 'Campaign Resource Center',
    icon: FileText,
    description: 'Access to essential campaign tools and materials',
    duration: 'Ongoing access',
    format: 'Digital platform and physical resources',
    topics: [
      'Campaign plan templates and worksheets',
      'Fundraising tracking and donor management tools',
      'Sample campaign materials and designs',
      'Voter file access and targeting tools',
      'Legal compliance checklists and forms',
      'Budget planning and financial tracking',
      'Opposition research and policy briefings',
      'Technology platforms and software discounts'
    ]
  }
]

const officeTypes = [
  {
    level: 'Local',
    positions: [
      'School Board',
      'City Council',
      'Mayor',
      'Planning Commission',
      'Park Board'
    ],
    filingDeadline: 'March 15, 2024',
    requirements: 'Must be 18+ and registered voter in district',
    support: 'Local endorsement process'
  },
  {
    level: 'County',
    positions: [
      'County Council',
      'County Executive',
      'Sheriff',
      'Register of Wills',
      'Orphans Court Judge'
    ],
    filingDeadline: 'February 28, 2024',
    requirements: 'Must be 21+ and county resident for 1+ years',
    support: 'County Party endorsement available'
  },
  {
    level: 'State',
    positions: [
      'House of Delegates',
      'State Senate',
      'Governor',
      'Attorney General',
      'Comptroller'
    ],
    filingDeadline: 'February 14, 2024',
    requirements: 'Varies by office, minimum 21-30 years old',
    support: 'State Party coordination and resources'
  },
  {
    level: 'Federal',
    positions: [
      'U.S. House of Representatives',
      'U.S. Senate',
      'President'
    ],
    filingDeadline: 'January 31, 2024',
    requirements: 'Constitutional requirements vary by office',
    support: 'National Party coordination'
  }
]

const supportServices = [
  {
    icon: DollarSign,
    title: 'Fundraising Support',
    description: 'Training, donor lists, and fundraising event coordination to help build your campaign war chest.',
    services: [
      'Fundraising strategy development',
      'Donor prospect research and lists',
      'Event planning and coordination',
      'Online fundraising platform setup',
      'Compliance training and oversight'
    ]
  },
  {
    icon: Megaphone,
    title: 'Communications & Media',
    description: 'Professional messaging, media training, and communications support throughout your campaign.',
    services: [
      'Message development and testing',
      'Media training and interview prep',
      'Press release writing and distribution',
      'Social media strategy and management',
      'Crisis communications support'
    ]
  },
  {
    icon: Target,
    title: 'Campaign Strategy',
    description: 'Data-driven campaign planning and voter targeting to maximize your path to victory.',
    services: [
      'Voter file analysis and targeting',
      'Opposition research and candidate briefings',
      'Campaign timeline and milestone planning',
      'Field operation planning and execution',
      'Get-out-the-vote strategy development'
    ]
  },
  {
    icon: Users,
    title: 'Volunteer Mobilization',
    description: 'Help building and managing volunteer teams for canvassing, phone banking, and events.',
    services: [
      'Volunteer recruitment strategies',
      'Training program development',
      'Volunteer management systems',
      'Event and activity coordination',
      'Recognition and retention programs'
    ]
  }
]

export default function RunForOfficePage() {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    officeInterest: '',
    experience: '',
    timeline: '',
    priorities: '',
    availability: '',
    background: '',
    motivation: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Candidate inquiry:', formData)
    alert('Thank you for your interest in running for office! Our candidate recruitment team will contact you within 2-3 business days.')
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-light text-black mb-6">
              Run for Office
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ready to make a direct impact in your community? The Baltimore County Democratic 
              Party is here to support you every step of the way, from deciding to run to 
              winning your election and governing effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#candidate-inquiry">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#training-programs">
                  Explore Training
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Run for Office */}
      <section className="bg-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-black mb-4">
              Why Run for Office?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Elected office offers the opportunity to create meaningful change and represent 
              your community's values at every level of government.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: "Direct Impact",
                description: "Create real change on issues that matter to your community"
              },
              {
                icon: Users,
                title: "Represent Values",
                description: "Be a voice for Democratic principles and progressive policies"
              },
              {
                icon: Award,
                title: "Serve Others",
                description: "Use your skills and experience to improve people's lives"
              },
              {
                icon: Shield,
                title: "Protect Rights",
                description: "Defend civil rights, voting rights, and democratic institutions"
              }
            ].map((reason, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-blue-100 text-center">
                <reason.icon className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-black mb-3">{reason.title}</h3>
                <p className="text-black text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section id="training-programs" className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-black mb-4">
              Candidate Development Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive training and support programs to prepare you for a successful campaign and effective governance
            </p>
          </div>

          <div className="space-y-8">
            {candidatePrograms.map((program) => (
              <div 
                key={program.id}
                className="bg-blue-50 rounded-2xl p-8 border border-blue-100 hover:shadow-lg transition-all"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                      <program.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-medium text-black mb-2">
                          {program.title}
                        </h3>
                        <p className="text-black mb-4 leading-relaxed">
                          {program.description}
                        </p>
                      </div>
                      <div className="flex flex-col space-y-2 text-sm text-black">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-blue-600" />
                          {program.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                          {program.format}
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <button
                        onClick={() => setSelectedProgram(
                          selectedProgram === program.id ? null : program.id
                        )}
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center"
                      >
                        {selectedProgram === program.id ? 'Hide' : 'Show'} Program Details
                        <ArrowRight 
                          className={`ml-2 h-4 w-4 transition-transform ${
                            selectedProgram === program.id ? 'rotate-90' : ''
                          }`} 
                        />
                      </button>
                    </div>

                    {selectedProgram === program.id && (
                      <div className="bg-white rounded-xl p-6 border border-blue-200">
                        <h4 className="text-lg font-medium text-black mb-4">Program Topics:</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {program.topics.map((topic, index) => (
                            <div key={index} className="flex items-start text-black text-sm">
                              <CheckCircle className="w-4 h-4 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                              {topic}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-6">
                      <Button asChild>
                        <Link href="#candidate-inquiry">
                          Apply for This Program
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Types and Requirements */}
      <section className="bg-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-black mb-4">
              Types of Office & Requirements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore different levels of office and understand the requirements and deadlines for each
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {officeTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-blue-100">
                <h3 className="text-xl font-medium text-black mb-4">{type.level} Office</h3>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-black mb-2">Positions Include:</h4>
                  <ul className="space-y-1">
                    {type.positions.map((position, i) => (
                      <li key={i} className="text-black text-sm flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        {position}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 text-sm">
                  <div>
                    <div className="flex items-center text-black font-medium mb-1">
                      <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                      Filing Deadline
                    </div>
                    <p className="text-black">{type.filingDeadline}</p>
                  </div>

                  <div>
                    <div className="flex items-center text-black font-medium mb-1">
                      <FileText className="w-4 h-4 mr-2 text-blue-600" />
                      Requirements
                    </div>
                    <p className="text-black">{type.requirements}</p>
                  </div>

                  <div>
                    <div className="flex items-center text-black font-medium mb-1">
                      <Star className="w-4 h-4 mr-2 text-blue-600" />
                      Party Support
                    </div>
                    <p className="text-black">{type.support}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-xl p-8 border border-blue-100 max-w-2xl mx-auto">
              <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-medium text-black mb-4">
                2024 Election Calendar
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="text-left">
                  <div className="font-medium text-black mb-2">Key Dates:</div>
                  <ul className="space-y-1 text-black">
                    <li>• Federal filing deadline: Jan 31</li>
                    <li>• State filing deadline: Feb 14</li>
                    <li>• County filing deadline: Feb 28</li>
                    <li>• Local filing deadline: Mar 15</li>
                  </ul>
                </div>
                <div className="text-left">
                  <div className="font-medium text-black mb-2">Election Dates:</div>
                  <ul className="space-y-1 text-black">
                    <li>• Primary Election: May 14</li>
                    <li>• General Election: Nov 5</li>
                    <li>• Early voting: Oct 24-31</li>
                    <li>• Absentee deadline: Oct 29</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Support Services */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-black mb-4">
              Campaign Support Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive support services help Democratic candidates run effective, 
              professional campaigns at every level of office.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {supportServices.map((service, index) => (
              <div key={index} className="bg-blue-50 rounded-xl p-8 border border-blue-100">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-black mb-2">{service.title}</h3>
                    <p className="text-black leading-relaxed">{service.description}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-black mb-3">Services Include:</h4>
                  <ul className="space-y-2">
                    {service.services.map((item, i) => (
                      <li key={i} className="flex items-start text-black text-sm">
                        <CheckCircle className="w-4 h-4 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Endorsement Process */}
      <section className="bg-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-black mb-4">
              Democratic Party Endorsement
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn about our endorsement process and how to earn the support of the 
              Baltimore County Democratic Party for your campaign.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border border-blue-100">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-lg font-medium text-black mb-3">Application</h3>
                  <p className="text-black text-sm">
                    Submit your endorsement application with candidate information, 
                    campaign plan, and policy positions.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-lg font-medium text-black mb-3">Interview</h3>
                  <p className="text-black text-sm">
                    Participate in endorsement interviews with party leadership 
                    and relevant committees.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-lg font-medium text-black mb-3">Decision</h3>
                  <p className="text-black text-sm">
                    Committee votes on endorsements based on qualifications, 
                    electability, and alignment with Democratic values.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="text-lg font-medium text-black mb-4">Endorsement Benefits:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-start text-black text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      Official party backing and credibility
                    </li>
                    <li className="flex items-start text-black text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      Access to party voter files and data
                    </li>
                    <li className="flex items-start text-black text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      Volunteer recruitment assistance
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start text-black text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      Fundraising support and donor introductions
                    </li>
                    <li className="flex items-start text-black text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      Media and communications support
                    </li>
                    <li className="flex items-start text-black text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      Get-out-the-vote operations
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Candidate Inquiry Form */}
      <section id="candidate-inquiry" className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-light text-black mb-4">
                Ready to Run?
              </h2>
              <p className="text-lg text-black">
                Tell us about your interest in running for office. Our candidate recruitment 
                team will follow up to discuss opportunities and next steps.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-blue-50 rounded-xl p-8 border border-blue-100">
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Last Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData(prev => ({...prev, lastName: e.target.value}))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-black mb-2">Address *</label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData(prev => ({...prev, address: e.target.value}))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">City *</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData(prev => ({...prev, city: e.target.value}))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">ZIP Code *</label>
                    <input
                      type="text"
                      required
                      value={formData.zipCode}
                      onChange={(e) => setFormData(prev => ({...prev, zipCode: e.target.value}))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Candidate Information */}
              <div className="mb-8">
                <h3 className="text-xl font-medium text-black mb-4">Candidate Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      What office are you interested in running for? *
                    </label>
                    <select
                      required
                      value={formData.officeInterest}
                      onChange={(e) => setFormData(prev => ({...prev, officeInterest: e.target.value}))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    >
                      <option value="">Select an office...</option>
                      <option value="school-board">School Board</option>
                      <option value="city-council">City Council</option>
                      <option value="mayor">Mayor</option>
                      <option value="county-council">County Council</option>
                      <option value="county-executive">County Executive</option>
                      <option value="state-house">Maryland House of Delegates</option>
                      <option value="state-senate">Maryland State Senate</option>
                      <option value="us-house">U.S. House of Representatives</option>
                      <option value="other">Other (please specify in background)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      When are you planning to run?
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData(prev => ({...prev, timeline: e.target.value}))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    >
                      <option value="">Select timeline...</option>
                      <option value="2024">2024 Election</option>
                      <option value="2025">2025 Election</option>
                      <option value="2026">2026 Election</option>
                      <option value="future">Future (exploring options)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Previous political or community experience
                    </label>
                    <textarea
                      value={formData.experience}
                      onChange={(e) => setFormData(prev => ({...prev, experience: e.target.value}))}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                      placeholder="Describe any relevant experience in politics, community service, or leadership roles..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Top policy priorities or issues you care about
                    </label>
                    <textarea
                      value={formData.priorities}
                      onChange={(e) => setFormData(prev => ({...prev, priorities: e.target.value}))}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                      placeholder="What issues motivate you to run for office? What would be your top priorities?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Professional background and qualifications
                    </label>
                    <textarea
                      value={formData.background}
                      onChange={(e) => setFormData(prev => ({...prev, background: e.target.value}))}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                      placeholder="Tell us about your professional experience, education, and other qualifications..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      What motivates you to run for office?
                    </label>
                    <textarea
                      value={formData.motivation}
                      onChange={(e) => setFormData(prev => ({...prev, motivation: e.target.value}))}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                      placeholder="Share your personal motivation and vision for serving in elected office..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Availability for candidate training and meetings
                    </label>
                    <textarea
                      value={formData.availability}
                      onChange={(e) => setFormData(prev => ({...prev, availability: e.target.value}))}
                      rows={2}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                      placeholder="When are you generally available for training sessions, meetings, and candidate activities?"
                    />
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button type="submit" size="lg" className="px-8">
                  Submit Candidate Inquiry
                </Button>
                <p className="text-sm text-gray-600 mt-4">
                  Our candidate recruitment team will review your inquiry and contact you within 2-3 business days 
                  to discuss opportunities and next steps.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-light text-black mb-6">
              Questions About Running for Office?
            </h2>
            <p className="text-lg text-black mb-8">
              Our candidate recruitment team is here to help you explore opportunities 
              and understand the process of running for office in Baltimore County.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 border border-blue-100">
                <Mail className="w-6 h-6 text-blue-600 mx-auto mb-3" />
                <h3 className="text-lg font-medium text-black mb-2">Email Us</h3>
                <a href="mailto:candidates@baltimorecountydems.com" className="text-blue-600 hover:text-blue-700">
                  candidates@baltimorecountydems.com
                </a>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-blue-100">
                <Phone className="w-6 h-6 text-blue-600 mx-auto mb-3" />
                <h3 className="text-lg font-medium text-black mb-2">Call Us</h3>
                <a href="tel:(410) 555-0170" className="text-blue-600 hover:text-blue-700">
                  (410) 555-0170
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" asChild>
                <Link href="/get-involved/volunteer">
                  Start with Volunteering
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about/leadership">
                  Meet Our Leaders
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
'use client'

import { Metadata } from 'next'
import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  Vote,
  Search,
  FileText,
  Clock,
  Mail,
  Calendar,
  Users,
  Phone,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  MapPin,
  Globe,
  UserCheck,
  RefreshCw
} from 'lucide-react'

export default function VoterRegistrationPage() {
  const [searchStatus, setSearchStatus] = useState('')

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Vote className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-light text-black mb-6">
              Voter Registration in Baltimore County
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Your vote is your voice. Register to vote in Maryland and make sure your voice is heard 
              in every election. The Baltimore County Democratic Central Committee is here to help you 
              navigate the voter registration process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="https://elections.maryland.gov/voter_registration/index.html" target="_blank" rel="noopener noreferrer">
                  Register Online Now
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#check-status">
                  Check Registration Status
                  <Search className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Check Registration Status */}
      <section id="check-status" className="bg-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Search className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-light text-black">Check Your Registration Status</h2>
            </div>
            <p className="text-lg text-black mb-8 leading-relaxed">
              Already registered? Verify your registration status and polling location using Maryland's 
              official voter lookup tool.
            </p>
            <div className="bg-white rounded-xl p-8 border border-blue-100 shadow-sm">
              <h3 className="text-xl font-medium text-black mb-4">Maryland Voter Lookup</h3>
              <p className="text-black mb-6">
                Use the Maryland State Board of Elections official voter lookup to check your registration 
                status, polling location, and sample ballot.
              </p>
              <Button size="lg" asChild>
                <Link href="https://voterservices.elections.maryland.gov/VoterSearch" target="_blank" rel="noopener noreferrer">
                  Check My Registration
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Online Registration */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <FileText className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl lg:text-4xl font-light text-black">Register to Vote Online</h2>
              </div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Maryland offers secure online voter registration for eligible citizens
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-xl p-8 border border-blue-100">
                <h3 className="text-xl font-medium text-black mb-4">Online Registration Requirements</h3>
                <ul className="space-y-3 text-black">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    Valid Maryland driver's license or MVA ID card
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    U.S. citizen
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    Maryland resident
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    At least 18 years old by the next general election
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    Not currently serving a court-ordered sentence for felony conviction
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-medium text-black mb-4">Register Now</h3>
                <p className="text-black mb-6">
                  The online registration process takes just a few minutes. You'll need your Maryland 
                  driver's license or MVA ID card number and the last four digits of your Social Security number.
                </p>
                <Button size="lg" asChild className="w-full">
                  <Link href="https://elections.maryland.gov/voter_registration/index.html" target="_blank" rel="noopener noreferrer">
                    Start Online Registration
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Requirements */}
      <section className="bg-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <UserCheck className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl lg:text-4xl font-light text-black">Voter Eligibility Requirements</h2>
              </div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                To register to vote in Maryland, you must meet these requirements
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-blue-100 shadow-sm">
                  <h3 className="text-lg font-medium text-black mb-3">Age Requirements</h3>
                  <p className="text-black">
                    You must be at least 18 years old by the next general election. 16 and 17-year-olds 
                    can pre-register and will be automatically registered when they turn 18.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-blue-100 shadow-sm">
                  <h3 className="text-lg font-medium text-black mb-3">Residency</h3>
                  <p className="text-black">
                    You must be a resident of Maryland and live at the address where you're registering 
                    to vote. You'll vote in the precinct where you live.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-blue-100 shadow-sm">
                  <h3 className="text-lg font-medium text-black mb-3">Citizenship</h3>
                  <p className="text-black">
                    You must be a U.S. citizen. Naturalized citizens are eligible to vote and should 
                    have their naturalization certificate or passport as proof of citizenship.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-blue-100 shadow-sm">
                  <h3 className="text-lg font-medium text-black mb-3">Legal Status</h3>
                  <p className="text-black">
                    You cannot be serving a court-ordered sentence for a felony conviction. Voting 
                    rights are restored upon completion of sentence, including parole and probation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Deadlines */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl lg:text-4xl font-light text-black">Important Deadlines & Dates</h2>
              </div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Mark these important dates on your calendar to ensure you can vote
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-xl p-8 border border-blue-100">
                <h3 className="text-xl font-medium text-black mb-6">Registration Deadlines</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-black">21 days before election</p>
                      <p className="text-black text-sm">Online and mail registration deadline</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-black">Election Day</p>
                      <p className="text-black text-sm">In-person registration at local election office (with provisional ballot)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-medium text-black mb-6">2024 Election Dates</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Vote className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-black">November 5, 2024</p>
                      <p className="text-black text-sm">General Election</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-black">October 15, 2024</p>
                      <p className="text-black text-sm">Registration deadline for General Election</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="https://elections.maryland.gov/elections/election_calendar.html" target="_blank" rel="noopener noreferrer">
                      View Full Election Calendar
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Register by Mail */}
      <section className="bg-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <Mail className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl lg:text-4xl font-light text-black">Register by Mail</h2>
              </div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                If you can't register online, you can download and mail a registration form
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 border border-blue-100 shadow-sm">
                <h3 className="text-xl font-medium text-black mb-4">How to Register by Mail</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5 flex-shrink-0">1</span>
                    <p className="text-black">Download the Maryland Voter Registration Application</p>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5 flex-shrink-0">2</span>
                    <p className="text-black">Complete the form in black or blue ink</p>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5 flex-shrink-0">3</span>
                    <p className="text-black">Sign and date the application</p>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5 flex-shrink-0">4</span>
                    <p className="text-black">Mail to your local election office</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-blue-100 shadow-sm">
                <h3 className="text-xl font-medium text-black mb-4">Download Forms</h3>
                <p className="text-black mb-6">
                  Get the official Maryland voter registration form and instructions.
                </p>
                <div className="space-y-3">
                  <Button size="lg" asChild className="w-full">
                    <Link href="https://elections.maryland.gov/pdf/vrar2en.pdf" target="_blank" rel="noopener noreferrer">
                      Download Registration Form (English)
                      <FileText className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="w-full">
                    <Link href="https://elections.maryland.gov/pdf/vrar2sp.pdf" target="_blank" rel="noopener noreferrer">
                      Download Registration Form (Spanish)
                      <FileText className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-black text-sm">
                    <strong>Mail to:</strong> Baltimore County Board of Elections<br />
                    11112 Gilroy Road, Hunt Valley, MD 21031
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voter Registration Drives */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl lg:text-4xl font-light text-black">Voter Registration Drives & Events</h2>
              </div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The Baltimore County Democratic Central Committee regularly hosts voter registration events
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-xl p-8 border border-blue-100">
                <h3 className="text-xl font-medium text-black mb-4">Upcoming Registration Events</h3>
                <p className="text-black mb-6">
                  We host voter registration drives throughout Baltimore County, especially before 
                  major elections. Our trained volunteers can help you register on the spot.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-black">Community centers and libraries</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-black">Festivals and community events</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-black">College campuses</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-medium text-black mb-4">Request a Registration Drive</h3>
                <p className="text-black mb-6">
                  Planning a community event? We can bring voter registration to your organization, 
                  workplace, or community gathering.
                </p>
                <Button size="lg" asChild className="w-full mb-4">
                  <Link href="/get-involved/volunteer">
                    Request a Drive
                    <Users className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <div className="text-center">
                  <Button variant="link" asChild>
                    <Link href="/events">
                      View Upcoming Events
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Situations */}
      <section className="bg-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <RefreshCw className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl lg:text-4xl font-light text-black">Special Situations</h2>
              </div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Guidance for specific registration scenarios
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "New Maryland Residents",
                  description: "Just moved to Maryland? You need to register with your new address. You can register immediately upon establishing residency.",
                  icon: MapPin
                },
                {
                  title: "Name Changes",
                  description: "Changed your name due to marriage, divorce, or other reason? Update your registration with your new name.",
                  icon: UserCheck
                },
                {
                  title: "Address Changes",
                  description: "Moved within Maryland? Update your registration with your new address to vote in the correct precinct.",
                  icon: RefreshCw
                },
                {
                  title: "College Students",
                  description: "Students can register using either their home or school address, but must choose one for all elections.",
                  icon: Users
                },
                {
                  title: "Military & Overseas",
                  description: "Special provisions exist for military personnel and U.S. citizens living abroad.",
                  icon: Globe
                },
                {
                  title: "Previously Registered",
                  description: "Haven't voted in a while? Your registration may have been cancelled. Check your status and re-register if needed.",
                  icon: AlertCircle
                }
              ].map((situation, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-blue-100 shadow-sm">
                  <div className="flex items-center mb-4">
                    <situation.icon className="h-6 w-6 text-blue-600 mr-3" />
                    <h3 className="text-lg font-medium text-black">{situation.title}</h3>
                  </div>
                  <p className="text-black text-sm leading-relaxed">{situation.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Language Accessibility */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl lg:text-4xl font-light text-black">Language Accessibility</h2>
              </div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Voter registration materials and assistance available in multiple languages
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-xl p-8 border border-blue-100">
                <h3 className="text-xl font-medium text-black mb-4">Available Languages</h3>
                <p className="text-black mb-6">
                  Maryland provides voter registration materials in multiple languages to ensure 
                  all eligible citizens can participate in the democratic process.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="font-medium text-black">Primary Languages:</p>
                    <ul className="text-black text-sm space-y-1">
                      <li>• English</li>
                      <li>• Spanish</li>
                      <li>• Chinese</li>
                      <li>• Korean</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium text-black">Additional Support:</p>
                    <ul className="text-black text-sm space-y-1">
                      <li>• Vietnamese</li>
                      <li>• Russian</li>
                      <li>• Arabic</li>
                      <li>• ASL interpreters</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-medium text-black mb-4">Get Help in Your Language</h3>
                <p className="text-black mb-6">
                  Need assistance in a language other than English? Contact the Baltimore County 
                  Board of Elections for language assistance and translated materials.
                </p>
                <div className="space-y-3">
                  <Button size="lg" variant="outline" asChild className="w-full">
                    <Link href="tel:410-887-5700">
                      <Phone className="mr-2 h-5 w-5" />
                      Call for Language Help
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="w-full">
                    <Link href="https://elections.maryland.gov/voter_registration/index.html" target="_blank" rel="noopener noreferrer">
                      Multilingual Resources
                      <ExternalLink className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <Phone className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl lg:text-4xl font-light text-black">Get Help with Voter Registration</h2>
              </div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Need assistance? Contact us or the Baltimore County Board of Elections
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 border border-blue-100 shadow-sm">
                <h3 className="text-xl font-medium text-black mb-6">Baltimore County Board of Elections</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-black">Address:</p>
                      <p className="text-black">11112 Gilroy Road<br />Hunt Valley, MD 21031</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-black">Phone:</p>
                      <p className="text-black">(410) 887-5700</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-black">Hours:</p>
                      <p className="text-black">Monday-Friday: 8:30 AM - 4:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-blue-100 shadow-sm">
                <h3 className="text-xl font-medium text-black mb-6">Baltimore County Democratic Central Committee</h3>
                <p className="text-black mb-6">
                  Our volunteers are here to help you navigate the voter registration process 
                  and answer any questions about voting in Baltimore County.
                </p>
                <div className="space-y-3">
                  <Button size="lg" asChild className="w-full">
                    <Link href="/get-involved/volunteer">
                      Contact Our Volunteers
                      <Users className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="w-full">
                    <Link href="/about/leadership">
                      Meet Our Leadership
                      <UserCheck className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Vote className="h-12 w-12 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-light text-black mb-4">
              Your Vote Matters
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Every vote counts in building the future of Baltimore County. Register today and 
              make your voice heard in every election.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Button size="lg" asChild>
                <Link href="https://elections.maryland.gov/voter_registration/index.html" target="_blank" rel="noopener noreferrer">
                  Register Now
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/get-involved">
                  Get Involved
                  <Users className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
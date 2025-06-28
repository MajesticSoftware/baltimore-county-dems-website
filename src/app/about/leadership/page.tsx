import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, ExternalLink, User } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Leadership - Baltimore County Democratic Party',
  description: 'Meet the dedicated leaders of the Baltimore County Democratic Party who work tirelessly to advance our values and serve our community.',
}

interface Leader {
  id: string
  name: string
  title: string
  bio: string
  accomplishments: string[]
  email?: string
  phone?: string
  photo?: string
  yearsServed?: string
}

const leadership: Leader[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    title: 'Chair, Baltimore County Democratic State Central Committee',
    bio: 'Sarah has been a lifelong advocate for progressive values and has led the Baltimore County Democratic Party with distinction for over 6 years. A former educator and community organizer, she brings decades of experience in coalition building and grassroots organizing.',
    accomplishments: [
      'Led successful campaigns that elected 15 Democratic candidates in 2022',
      'Increased party membership by 40% during her tenure',
      'Established the Young Democrats mentorship program',
      'Organized largest Unity Dinner in party history'
    ],
    email: 'chair@baltimorecountydems.com',
    phone: '(410) 555-0100',
    yearsServed: '2018 - Present'
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    title: 'Vice Chair',
    bio: 'Michael brings extensive experience in campaign management and voter outreach to his role as Vice Chair. A small business owner and father of three, he is passionate about economic development and education policy.',
    accomplishments: [
      'Managed successful County Executive campaign in 2018',
      'Launched innovative voter registration drives',
      'Built partnerships with local labor unions',
      'Established scholarship fund for Democratic activists'
    ],
    email: 'vicechair@baltimorecountydems.com',
    phone: '(410) 555-0101',
    yearsServed: '2020 - Present'
  },
  {
    id: '3',
    name: 'Dr. Angela Washington',
    title: 'Secretary',
    bio: 'Dr. Washington is a retired public school principal and longtime civil rights advocate. She has been instrumental in developing the party\'s education platform and community outreach programs.',
    accomplishments: [
      'Developed comprehensive education policy platform',
      'Organized annual Martin Luther King Jr. Day service events',
      'Established partnerships with 20+ community organizations',
      'Led successful school board candidate recruitment'
    ],
    email: 'secretary@baltimorecountydems.com',
    yearsServed: '2019 - Present'
  },
  {
    id: '4',
    name: 'James Chen',
    title: 'Treasurer',
    bio: 'James is a CPA and financial advisor who ensures the party\'s fiscal responsibility and transparency. He has modernized the party\'s financial systems and established strong fundraising practices.',
    accomplishments: [
      'Implemented modern financial tracking systems',
      'Increased fundraising efficiency by 60%',
      'Established annual financial transparency reports',
      'Created donor management database'
    ],
    email: 'treasurer@baltimorecountydems.com',
    yearsServed: '2021 - Present'
  },
  {
    id: '5',
    name: 'Maria Santos',
    title: 'Communications Director',
    bio: 'Maria is a former journalist and communications professional who leads the party\'s messaging and media outreach efforts. She has built strong relationships with local media and expanded the party\'s digital presence.',
    accomplishments: [
      'Tripled social media engagement rates',
      'Launched weekly newsletter with 5,000+ subscribers',
      'Coordinated messaging for major campaigns',
      'Established media training program for candidates'
    ],
    email: 'communications@baltimorecountydems.com',
    yearsServed: '2020 - Present'
  },
  {
    id: '6',
    name: 'Robert Kim',
    title: 'Volunteer Coordinator',
    bio: 'Robert coordinates the party\'s extensive volunteer network and organizes community events. A retired union organizer, he brings decades of experience in grassroots mobilization.',
    accomplishments: [
      'Built volunteer network of 2,000+ active members',
      'Organized 50+ community events annually',
      'Established voter protection program',
      'Created volunteer training curriculum'
    ],
    email: 'volunteers@baltimorecountydems.com',
    yearsServed: '2019 - Present'
  }
]

export default function LeadershipPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-light text-black mb-6">
              Our Leadership Team
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Meet the dedicated volunteers who lead the Baltimore County Democratic Party 
              and work tirelessly to advance our values and serve our community.
            </p>
            <Button size="lg" asChild>
              <Link href="/get-involved/volunteer">
                Join Our Team
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="bg-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {leadership.map((leader) => (
              <div
                key={leader.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-8 border border-blue-100"
              >
                {/* Leader Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-blue-200">
                    {leader.photo ? (
                      <img 
                        src={leader.photo} 
                        alt={leader.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <User className="w-10 h-10 text-blue-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-medium text-black mb-1">
                      {leader.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-2">{leader.title}</p>
                    {leader.yearsServed && (
                      <p className="text-sm text-gray-600">
                        Service: {leader.yearsServed}
                      </p>
                    )}
                  </div>
                </div>

                {/* Bio */}
                <p className="text-black mb-6 leading-relaxed">
                  {leader.bio}
                </p>

                {/* Key Accomplishments */}
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-black mb-3">
                    Key Accomplishments
                  </h4>
                  <ul className="space-y-2">
                    {leader.accomplishments.slice(0, 3).map((accomplishment, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">•</span>
                        <span className="text-black text-sm">{accomplishment}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact Info */}
                <div className="space-y-2 pt-4 border-t border-gray-100">
                  {leader.email && (
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail className="w-4 h-4 mr-2 text-gray-400" />
                      <a href={`mailto:${leader.email}`} className="hover:text-blue-600 transition-colors">
                        {leader.email}
                      </a>
                    </div>
                  )}
                  {leader.phone && (
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="w-4 h-4 mr-2 text-gray-400" />
                      <a href={`tel:${leader.phone}`} className="hover:text-blue-600 transition-colors">
                        {leader.phone}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-light text-black mb-6">
              Ready to Lead?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              The Baltimore County Democratic Party is always looking for dedicated volunteers 
              to take on leadership roles. Whether you're interested in running for office, 
              organizing events, or leading committees, there's a place for you on our team.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                <h3 className="text-lg font-medium text-black mb-2">Committee Chairs</h3>
                <p className="text-black text-sm">Lead issue-based committees and policy development</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                <h3 className="text-lg font-medium text-black mb-2">Event Organizers</h3>
                <p className="text-black text-sm">Plan and execute fundraisers, rallies, and community events</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                <h3 className="text-lg font-medium text-black mb-2">Campaign Leaders</h3>
                <p className="text-black text-sm">Manage campaigns for Democratic candidates at all levels</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Button size="lg" asChild>
                <Link href="/get-involved/volunteer">
                  Volunteer Today
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about/run-for-office">
                  Run for Office
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
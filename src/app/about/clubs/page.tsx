import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MapPin, Users, Calendar, Mail, Phone, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Democratic Clubs - Baltimore County Democratic Party',
  description: 'Join one of our many local Democratic clubs throughout Baltimore County. Connect with like-minded neighbors and get involved in your community.',
}

interface Club {
  id: string
  name: string
  location: string
  description: string
  meetingInfo: string
  contact: {
    email?: string
    phone?: string
    website?: string
  }
  activities: string[]
  memberCount?: string
}

const clubs: Club[] = [
  {
    id: '1',
    name: 'Towson Democratic Club',
    location: 'Towson',
    description: 'The largest Democratic club in Baltimore County, serving the Towson area and surrounding communities. We focus on local issues, candidate support, and community engagement.',
    meetingInfo: 'Third Thursday of each month, 7:00 PM at Towson Library',
    contact: {
      email: 'towsondemocrats@gmail.com',
      phone: '(410) 555-0200',
      website: 'www.towsondemocrats.org'
    },
    activities: [
      'Monthly speaker series',
      'Voter registration drives',
      'Campaign volunteer coordination',
      'Community service projects'
    ],
    memberCount: '150+'
  },
  {
    id: '2',
    name: 'Catonsville Democratic Club',
    location: 'Catonsville',
    description: 'A vibrant community of Democrats working to advance progressive values in Catonsville and the surrounding areas. We pride ourselves on grassroots organizing and community involvement.',
    meetingInfo: 'Second Tuesday of each month, 7:30 PM at Catonsville Community Center',
    contact: {
      email: 'catonsvilledems@yahoo.com',
      phone: '(410) 555-0201'
    },
    activities: [
      'Environmental advocacy',
      'Education policy forums',
      'Local candidate recruitment',
      'Social justice initiatives'
    ],
    memberCount: '120+'
  },
  {
    id: '3',
    name: 'Dundalk Democratic Club',
    location: 'Dundalk',
    description: 'Representing the working families of Dundalk, we focus on economic justice, labor rights, and ensuring that all residents have access to opportunity and prosperity.',
    meetingInfo: 'First Monday of each month, 7:00 PM at Dundalk Renaissance Corporation',
    contact: {
      email: 'dundalkdems@outlook.com',
      phone: '(410) 555-0202'
    },
    activities: [
      'Labor union partnerships',
      'Economic development advocacy',
      'Healthcare access campaigns',
      'Senior citizen outreach'
    ],
    memberCount: '90+'
  },
  {
    id: '4',
    name: 'Essex Democratic Club',
    location: 'Essex',
    description: 'A growing club serving the Essex community with a focus on environmental protection, given our proximity to the Chesapeake Bay, and supporting working families.',
    meetingInfo: 'Second Wednesday of each month, 6:30 PM at Essex Library',
    contact: {
      email: 'essexdemocrats@gmail.com'
    },
    activities: [
      'Chesapeake Bay protection',
      'Community clean-up events',
      'Youth engagement programs',
      'Veterans affairs advocacy'
    ],
    memberCount: '75+'
  },
  {
    id: '5',
    name: 'Pikesville Democratic Club',
    location: 'Pikesville',
    description: 'Serving the diverse Pikesville community, we work on issues of education, healthcare, and ensuring that all voices are heard in our democratic process.',
    meetingInfo: 'Fourth Sunday of each month, 2:00 PM at Pikesville Library',
    contact: {
      email: 'pikesvilledems@hotmail.com',
      phone: '(410) 555-0203'
    },
    activities: [
      'Education funding advocacy',
      'Healthcare policy forums',
      'Interfaith community building',
      'Immigrant rights support'
    ],
    memberCount: '110+'
  },
  {
    id: '6',
    name: 'Cockeysville Democratic Club',
    location: 'Cockeysville',
    description: 'A newer club serving northern Baltimore County, focused on smart growth, transportation issues, and maintaining the character of our suburban communities.',
    meetingInfo: 'Third Saturday of each month, 10:00 AM at Hunt Valley Library',
    contact: {
      email: 'cockeysvilledems@gmail.com'
    },
    activities: [
      'Smart growth planning',
      'Public transportation advocacy',
      'Open space preservation',
      'Local business support'
    ],
    memberCount: '60+'
  },
  {
    id: '7',
    name: 'Baltimore County Young Democrats',
    location: 'County-wide',
    description: 'For Democrats under 36 throughout Baltimore County. We focus on mentorship, professional development, and training the next generation of Democratic leaders.',
    meetingInfo: 'First Thursday of each month, 7:00 PM (rotating locations)',
    contact: {
      email: 'bcyoungdems@gmail.com',
      website: 'www.bcyoungdems.org'
    },
    activities: [
      'Leadership training programs',
      'Networking events',
      'Campaign schools',
      'Social events and mixers'
    ],
    memberCount: '200+'
  },
  {
    id: '8',
    name: 'Baltimore County Democratic Women',
    location: 'County-wide',
    description: 'Supporting women in politics and advancing issues important to women and families throughout Baltimore County.',
    meetingInfo: 'Second Saturday of each month, 11:00 AM (rotating locations)',
    contact: {
      email: 'bcdwomen@gmail.com',
      phone: '(410) 555-0204'
    },
    activities: [
      'Candidate training for women',
      'Reproductive rights advocacy',
      'Pay equity campaigns',
      'Childcare and family support'
    ],
    memberCount: '180+'
  }
]

export default function ClubsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-light text-black mb-6">
              Democratic Clubs
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join one of our many local Democratic clubs throughout Baltimore County. 
              Connect with like-minded neighbors, get involved in your community, and 
              make a difference in local politics.
            </p>
            <Button size="lg" asChild>
              <Link href="#clubs">
                Find Your Local Club
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-black mb-4">
              Why Join a Democratic Club?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Democratic clubs are the backbone of our party's grassroots organizing efforts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Build Community",
                description: "Connect with fellow Democrats in your neighborhood and build lasting friendships."
              },
              {
                icon: Calendar,
                title: "Stay Informed",
                description: "Learn about local issues, candidates, and upcoming elections that affect your community."
              },
              {
                icon: Users,
                title: "Make an Impact",
                description: "Work together on campaigns, advocacy, and community service projects."
              },
              {
                icon: Calendar,
                title: "Develop Skills",
                description: "Gain experience in organizing, public speaking, and political engagement."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-blue-100 text-center">
                <benefit.icon className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-black mb-2">{benefit.title}</h3>
                <p className="text-black text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs Grid */}
      <section id="clubs" className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-black mb-4">
              Our Local Clubs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find a club near you and start making a difference in your community
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {clubs.map((club) => (
              <div
                key={club.id}
                className="bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition-all p-6 border border-blue-100"
              >
                {/* Club Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-medium text-black mb-1">
                      {club.name}
                    </h3>
                    <div className="flex items-center text-blue-600 mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm font-medium">{club.location}</span>
                    </div>
                    {club.memberCount && (
                      <div className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 mr-1" />
                        <span className="text-sm">{club.memberCount} members</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-black mb-4 leading-relaxed text-sm">
                  {club.description}
                </p>

                {/* Meeting Info */}
                <div className="mb-4 p-3 bg-white rounded-lg border border-blue-200">
                  <div className="flex items-center mb-1">
                    <Calendar className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-sm font-medium text-black">Meeting Schedule</span>
                  </div>
                  <p className="text-black text-sm">{club.meetingInfo}</p>
                </div>

                {/* Activities */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-black mb-2">Key Activities</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {club.activities.slice(0, 4).map((activity, index) => (
                      <div key={index} className="flex items-start">
                        <span className="text-blue-600 mr-1 text-xs mt-1">•</span>
                        <span className="text-black text-xs">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-2 pt-4 border-t border-blue-200">
                  {club.contact.email && (
                    <div className="flex items-center text-sm">
                      <Mail className="w-4 h-4 mr-2 text-gray-400" />
                      <a href={`mailto:${club.contact.email}`} className="text-blue-600 hover:text-blue-700 transition-colors">
                        {club.contact.email}
                      </a>
                    </div>
                  )}
                  {club.contact.phone && (
                    <div className="flex items-center text-sm">
                      <Phone className="w-4 h-4 mr-2 text-gray-400" />
                      <a href={`tel:${club.contact.phone}`} className="text-blue-600 hover:text-blue-700 transition-colors">
                        {club.contact.phone}
                      </a>
                    </div>
                  )}
                  {club.contact.website && (
                    <div className="flex items-center text-sm">
                      <ExternalLink className="w-4 h-4 mr-2 text-gray-400" />
                      <a 
                        href={`https://${club.contact.website}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        {club.contact.website}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Start a Club */}
      <section className="bg-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-light text-black mb-6">
              Don't See a Club Near You?
            </h2>
            <p className="text-lg text-black mb-8 leading-relaxed">
              Start your own Democratic club! We'll provide you with the resources, 
              training, and support you need to build a strong Democratic presence 
              in your community.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white rounded-lg p-4 border border-blue-100">
                <h3 className="text-lg font-medium text-black mb-2">Step 1</h3>
                <p className="text-black text-sm">Gather 10+ interested Democrats in your area</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-blue-100">
                <h3 className="text-lg font-medium text-black mb-2">Step 2</h3>
                <p className="text-black text-sm">Contact us for charter application and guidance</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-blue-100">
                <h3 className="text-lg font-medium text-black mb-2">Step 3</h3>
                <p className="text-black text-sm">Hold your first meeting and start making change</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Button size="lg" asChild>
                <Link href="mailto:clubs@baltimorecountydems.com">
                  Start a New Club
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/get-involved/volunteer">
                  Get Involved Today
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
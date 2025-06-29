import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, User, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Central Committee Members - Baltimore County Democratic Central Committee',
  description: 'Meet the elected members of the Baltimore County Democratic Central Committee representing districts throughout the county.',
}

interface CommitteeMember {
  id: string
  name: string
  district: string
  bio?: string
  email?: string
  phone?: string
  photo?: string
}

const committeMembers: CommitteeMember[] = [
  // District 6
  { id: '1', name: 'Ed Crizer', district: 'District 6' },
  { id: '2', name: 'Justin Holliday', district: 'District 6' },
  { id: '3', name: 'Cory Edwards', district: 'District 6' },
  { id: '4', name: 'Lakesha Hawes', district: 'District 6' },
  { id: '5', name: 'Rodcita Gray', district: 'District 6' },
  { id: '6', name: 'Sandra Skordalos', district: 'District 6' },
  
  // District 7A
  { id: '7', name: 'Satish Chapargain', district: 'District 7A' },
  { id: '8', name: 'Lydia Brown', district: 'District 7A' },
  { id: '9', name: 'Nina McHugh', district: 'District 7A' },
  { id: '10', name: 'Lauren Noël', district: 'District 7A' },
  
  // District 8
  { id: '11', name: 'Charles Kropfelder', district: 'District 8' },
  { id: '12', name: 'Deli Okafor', district: 'District 8' },
  { id: '13', name: 'Margaret Forte', district: 'District 8' },
  { id: '14', name: 'Shannon Sheetz', district: 'District 8' },
  { id: '15', name: 'Brad Kroner', district: 'District 8' },
  
  // District 10
  { id: '16', name: 'Shayla Marie Brooks', district: 'District 10' },
  { id: '17', name: 'Danny Blount', district: 'District 10' },
  { id: '18', name: 'Jennifer Dwyer', district: 'District 10' },
  { id: '19', name: 'Jay Jalisi', district: 'District 10' },
  { id: '20', name: 'Reginald Hatcher Jr.', district: 'District 10' },
  { id: '21', name: 'Danita Tolson', district: 'District 10' },
  
  // District 11A
  { id: '22', name: 'Linda Dorsey-Walker', district: 'District 11A' },
  { id: '23', name: 'Tyrod Haynes', district: 'District 11A' },
  
  // District 11B
  { id: '24', name: 'Lela Campbell', district: 'District 11B' },
  { id: '25', name: 'Reece Peak', district: 'District 11B' },
  { id: '26', name: 'Noel Levy', district: 'District 11B' },
  { id: '27', name: 'Hannah Swird', district: 'District 11B' },
  
  // District 42A
  { id: '28', name: 'Connor White', district: 'District 42A' },
  { id: '29', name: 'Jyoti Mohan', district: 'District 42A' },
  
  // District 42B
  { id: '30', name: 'Susan Lobas', district: 'District 42B' },
  { id: '31', name: 'James Kraft', district: 'District 42B' },
  
  // District 43B
  { id: '32', name: 'Cheryl Gottlieb', district: 'District 43B' },
  { id: '33', name: 'Fergal Mullaly', district: 'District 43B' },
  
  // District 44A
  { id: '34', name: 'John Sanick', district: 'District 44A' },
  { id: '35', name: 'Charlotte Wood', district: 'District 44A' },
  
  // District 44B
  { id: '36', name: 'Ian Miller', district: 'District 44B' },
  { id: '37', name: 'Sherida Morrison', district: 'District 44B' },
  { id: '38', name: 'Shazia Shah', district: 'District 44B' },
  { id: '39', name: 'Bishop Barry Chapman', district: 'District 44B' },
]

// Group members by district
const membersByDistrict = committeMembers.reduce((acc, member) => {
  if (!acc[member.district]) {
    acc[member.district] = []
  }
  acc[member.district].push(member)
  return acc
}, {} as Record<string, CommitteeMember[]>)

const districtOrder = ['District 6', 'District 7A', 'District 8', 'District 10', 'District 11A', 'District 11B', 'District 42A', 'District 42B', 'District 43B', 'District 44A', 'District 44B']

export default function LeadershipPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-light text-black mb-6">
              Central Committee Members
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Meet the elected members of the Baltimore County Democratic Central Committee. 
              These dedicated volunteers represent Democratic voters in districts throughout 
              Baltimore County and work to advance our shared values.
            </p>
            <Button size="lg" asChild>
              <Link href="/get-involved/volunteer">
                Get Involved
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Central Committee */}
      <section className="bg-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-light text-black mb-8 text-center">
              About the Central Committee
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl p-6 border border-blue-100">
                <h3 className="text-xl font-medium text-black mb-4">Our Role</h3>
                <p className="text-black leading-relaxed mb-4">
                  The Baltimore County Democratic Central Committee is the official governing 
                  body of the Democratic Party in Baltimore County. We coordinate party activities, 
                  support Democratic candidates, and work to advance Democratic values throughout 
                  the county.
                </p>
                <ul className="space-y-2 text-black">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Organize party events and activities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Support Democratic candidates for office</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Coordinate voter outreach and registration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Advocate for Democratic policies and values</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border border-blue-100">
                <h3 className="text-xl font-medium text-black mb-4">How We're Elected</h3>
                <p className="text-black leading-relaxed mb-4">
                  Central Committee members are elected by Democratic voters in each district 
                  during the primary election every four years. Each district elects multiple 
                  representatives to ensure broad representation across the county.
                </p>
                <ul className="space-y-2 text-black">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Elected every four years during primary elections</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Must be registered Democrats in their district</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Serve four-year terms as volunteers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Meet monthly to coordinate party activities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Committee Members by District */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-black mb-4">
              Our Committee Members
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Central Committee members organized by legislative district
            </p>
          </div>

          <div className="space-y-8">
            {districtOrder.map((district) => {
              const members = membersByDistrict[district] || []
              return (
                <div key={district} className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <div className="flex items-center mb-6">
                    <Users className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-medium text-black">{district}</h3>
                    <span className="ml-auto text-sm text-gray-600">
                      {members.length} member{members.length !== 1 ? 's' : ''}
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {members.map((member) => (
                      <div
                        key={member.id}
                        className="bg-white rounded-lg p-4 border border-blue-200 hover:shadow-sm transition-shadow"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-blue-200">
                            {member.photo ? (
                              <img 
                                src={member.photo} 
                                alt={member.name}
                                className="w-full h-full rounded-full object-cover"
                              />
                            ) : (
                              <User className="w-6 h-6 text-blue-600" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-lg font-medium text-black truncate">
                              {member.name}
                            </h4>
                            <p className="text-sm text-blue-600">{member.district}</p>
                            
                            {member.bio && (
                              <p className="text-sm text-black mt-2 line-clamp-2">
                                {member.bio}
                              </p>
                            )}

                            {(member.email || member.phone) && (
                              <div className="mt-3 space-y-1">
                                {member.email && (
                                  <div className="flex items-center text-xs text-gray-600">
                                    <Mail className="w-3 h-3 mr-1" />
                                    <a href={`mailto:${member.email}`} className="hover:text-blue-600 transition-colors truncate">
                                      {member.email}
                                    </a>
                                  </div>
                                )}
                                {member.phone && (
                                  <div className="flex items-center text-xs text-gray-600">
                                    <Phone className="w-3 h-3 mr-1" />
                                    <a href={`tel:${member.phone}`} className="hover:text-blue-600 transition-colors">
                                      {member.phone}
                                    </a>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="bg-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-light text-black mb-6">
              Want to Get Involved?
            </h2>
            <p className="text-lg text-black mb-8 leading-relaxed">
              The Central Committee is always looking for dedicated Democrats to help 
              with party activities. Whether you want to volunteer for campaigns, help 
              with events, or consider running for Central Committee yourself, there 
              are many ways to get involved.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 border border-blue-100">
                <h3 className="text-lg font-medium text-black mb-3">Volunteer</h3>
                <p className="text-black text-sm mb-4">
                  Help with voter outreach, events, and campaign support activities.
                </p>
                <Button size="sm" variant="outline" asChild>
                  <Link href="/get-involved/volunteer">
                    Volunteer Now
                  </Link>
                </Button>
              </div>

              <div className="bg-white rounded-lg p-6 border border-blue-100">
                <h3 className="text-lg font-medium text-black mb-3">Join a Club</h3>
                <p className="text-black text-sm mb-4">
                  Connect with Democrats in your area through local Democratic clubs.
                </p>
                <Button size="sm" variant="outline" asChild>
                  <Link href="/about/clubs">
                    Find a Club
                  </Link>
                </Button>
              </div>

              <div className="bg-white rounded-lg p-6 border border-blue-100">
                <h3 className="text-lg font-medium text-black mb-3">Run for Committee</h3>
                <p className="text-black text-sm mb-4">
                  Consider running for Central Committee in the next primary election.
                </p>
                <Button size="sm" variant="outline" asChild>
                  <Link href="/get-involved/run-for-office">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>

            <Button size="lg" asChild>
              <Link href="mailto:info@baltimorecountydems.com">
                Contact the Central Committee
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
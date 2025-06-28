'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  User,
  ChevronDown
} from 'lucide-react'

type OfficeLevel = 'all' | 'federal' | 'state' | 'county' | 'local'

interface ElectedOfficial {
  id: string
  name: string
  title: string
  level: Exclude<OfficeLevel, 'all'>
  district?: string
  jurisdiction?: string
  photo?: string
  bio: string
  accomplishments?: string[]
  email?: string
  phone?: string
  website?: string
  office?: string
}

// Sample data - replace with actual data from API/CMS
const officials: ElectedOfficial[] = [
  {
    id: '1',
    name: 'John P. Sarbanes',
    title: 'U.S. Representative',
    level: 'federal',
    district: '3rd Congressional District',
    bio: 'Serving Maryland\'s 3rd Congressional District, fighting for healthcare reform, campaign finance reform, and environmental protection.',
    accomplishments: [
      'Authored the For the People Act (H.R. 1)',
      'Champion of the Chesapeake Bay restoration',
      'Advocate for affordable healthcare'
    ],
    email: 'contact@sarbanes.house.gov',
    phone: '(410) 832-8890',
    website: 'https://sarbanes.house.gov',
    office: 'Towson, MD'
  },
  {
    id: '2',
    name: 'Benjamin L. Cardin',
    title: 'U.S. Senator',
    level: 'federal',
    bio: 'Senior United States Senator from Maryland, serving on key committees including Foreign Relations and Finance.',
    accomplishments: [
      'Leader on healthcare reform',
      'Environmental protection advocate',
      'Small business champion'
    ],
    email: 'senator@cardin.senate.gov',
    phone: '(410) 962-4436',
    website: 'https://cardin.senate.gov',
    office: 'Baltimore, MD'
  },
  {
    id: '3',
    name: 'Chris Van Hollen',
    title: 'U.S. Senator',
    level: 'federal',
    bio: 'United States Senator from Maryland, focused on economic opportunity, education, and protecting our democracy.',
    accomplishments: [
      'Advocate for campaign finance reform',
      'Champion of federal employee rights',
      'Leader on budget and appropriations'
    ],
    email: 'senator@vanhollen.senate.gov',
    phone: '(410) 263-1325',
    website: 'https://vanhollen.senate.gov',
    office: 'Baltimore, MD'
  },
  {
    id: '4',
    name: 'Johnny Olszewski',
    title: 'County Executive',
    level: 'county',
    jurisdiction: 'Baltimore County',
    bio: 'Leading Baltimore County with a focus on education, public safety, and economic development for all residents.',
    accomplishments: [
      'Increased education funding',
      'Enhanced public safety initiatives',
      'Promoted sustainable development'
    ],
    email: 'countyexec@baltimorecountymd.gov',
    phone: '(410) 887-2450',
    website: 'https://baltimorecountymd.gov',
    office: 'Towson, MD'
  },
  {
    id: '5',
    name: 'Julian E. Jones Jr.',
    title: 'County Council Chair',
    level: 'county',
    district: 'District 4',
    bio: 'Serving as County Council Chair and representing District 4, focusing on community development and constituent services.',
    accomplishments: [
      'Championed community investment',
      'Improved county services',
      'Enhanced transparency in government'
    ],
    email: 'council4@baltimorecountymd.gov',
    phone: '(410) 887-3384',
    office: 'Towson, MD'
  },
  {
    id: '6',
    name: 'Sample State Delegate',
    title: 'State Delegate',
    level: 'state',
    district: 'District 8',
    bio: 'Representing Baltimore County in the Maryland House of Delegates, advocating for education, healthcare, and economic opportunity.',
    accomplishments: [
      'Sponsored education funding bills',
      'Advocated for healthcare access',
      'Supported small business initiatives'
    ],
    email: 'delegate@mdhouse.gov',
    phone: '(410) 841-3000',
    office: 'Annapolis, MD'
  }
]

const levelLabels: Record<OfficeLevel, string> = {
  all: 'All Levels',
  federal: 'Federal',
  state: 'State',
  county: 'County',
  local: 'Local'
}

export function ElectedOfficialsSection() {
  const [selectedLevel, setSelectedLevel] = useState<OfficeLevel>('all')
  const [showMobileFilter, setShowMobileFilter] = useState(false)

  const filteredOfficials = selectedLevel === 'all' 
    ? officials 
    : officials.filter(official => official.level === selectedLevel)

  const getLevelColor = (level: Exclude<OfficeLevel, 'all'>) => {
    switch (level) {
      case 'federal':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'state':
        return 'bg-purple-100 text-purple-800 border-purple-200'
      case 'county':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'local':
        return 'bg-orange-100 text-orange-800 border-orange-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <section className="py-16 lg:py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
            Our Elected Officials
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the Democratic leaders representing Baltimore County at every level of government, 
            working tirelessly to serve our community and advance our shared values.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="mb-8">
          {/* Desktop Filter */}
          <div className="hidden md:flex justify-center items-center space-x-2">
            {(Object.keys(levelLabels) as OfficeLevel[]).map((level) => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedLevel === level
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {levelLabels[level]}
              </button>
            ))}
          </div>

          {/* Mobile Filter */}
          <div className="md:hidden">
            <button
              onClick={() => setShowMobileFilter(!showMobileFilter)}
              className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-300 rounded-lg"
            >
              <span className="font-medium text-gray-700">
                Filter: {levelLabels[selectedLevel]}
              </span>
              <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${
                showMobileFilter ? 'rotate-180' : ''
              }`} />
            </button>
            
            {showMobileFilter && (
              <div className="mt-2 bg-white border border-gray-300 rounded-lg overflow-hidden">
                {(Object.keys(levelLabels) as OfficeLevel[]).map((level) => (
                  <button
                    key={level}
                    onClick={() => {
                      setSelectedLevel(level)
                      setShowMobileFilter(false)
                    }}
                    className={`w-full px-4 py-3 text-left hover:bg-gray-50 ${
                      selectedLevel === level ? 'bg-blue-50 text-blue-600 font-medium' : ''
                    }`}
                  >
                    {levelLabels[level]}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Officials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOfficials.map((official) => (
            <div
              key={official.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 border border-blue-100"
            >
              {/* Photo placeholder */}
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                  {official.photo ? (
                    <img 
                      src={official.photo} 
                      alt={official.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <User className="w-10 h-10 text-gray-400" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {official.name}
                  </h3>
                  <p className="text-gray-600 font-medium">{official.title}</p>
                  {(official.district || official.jurisdiction) && (
                    <p className="text-sm text-gray-500 mt-1">
                      {official.district || official.jurisdiction}
                    </p>
                  )}
                </div>
              </div>

              {/* Level Badge */}
              <div className="mb-4">
                <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full border ${
                  getLevelColor(official.level)
                }`}>
                  {levelLabels[official.level]} Official
                </span>
              </div>

              {/* Bio */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {official.bio}
              </p>

              {/* Key Accomplishments */}
              {official.accomplishments && official.accomplishments.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    Key Accomplishments:
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {official.accomplishments.slice(0, 2).map((accomplishment, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span className="line-clamp-1">{accomplishment}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Contact Info */}
              <div className="space-y-2 pt-4 border-t border-gray-100">
                {official.office && (
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                    <span>{official.office}</span>
                  </div>
                )}
                {official.phone && (
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="w-4 h-4 mr-2 text-gray-400" />
                    <a href={`tel:${official.phone}`} className="hover:text-blue-600">
                      {official.phone}
                    </a>
                  </div>
                )}
                {official.email && (
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="w-4 h-4 mr-2 text-gray-400" />
                    <a href={`mailto:${official.email}`} className="hover:text-blue-600 truncate">
                      {official.email}
                    </a>
                  </div>
                )}
                {official.website && (
                  <div className="flex items-center text-sm text-gray-600">
                    <ExternalLink className="w-4 h-4 mr-2 text-gray-400" />
                    <a 
                      href={official.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 truncate"
                    >
                      Official Website
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Want to Make a Difference?
            </h3>
            <p className="text-gray-600 mb-6">
              Join us in supporting our Democratic elected officials and help elect more leaders 
              who share our values. Get involved in campaigns, volunteer, or consider running for office yourself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/get-involved/volunteer">
                  Volunteer for Campaigns
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/resources/run-for-office">
                  Run for Office
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
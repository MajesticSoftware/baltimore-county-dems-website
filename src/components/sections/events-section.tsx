import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, MapPin, ArrowRight, Users, Megaphone, DollarSign, Vote } from 'lucide-react'

interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  type: 'fundraiser' | 'meeting' | 'rally' | 'volunteer' | 'campaign'
  slug: string
}

const eventTypeConfig = {
  fundraiser: {
    label: 'Fundraiser',
    icon: DollarSign,
    bgColor: 'bg-green-100',
    textColor: 'text-green-700',
  },
  meeting: {
    label: 'Meeting',
    icon: Users,
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-700',
  },
  rally: {
    label: 'Rally',
    icon: Megaphone,
    bgColor: 'bg-purple-100',
    textColor: 'text-purple-700',
  },
  volunteer: {
    label: 'Volunteer',
    icon: Users,
    bgColor: 'bg-orange-100',
    textColor: 'text-orange-700',
  },
  campaign: {
    label: 'Campaign',
    icon: Vote,
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-700',
  },
}

// Sample events data - in a real app, this would come from props or an API
const upcomingEvents: Event[] = [
  {
    id: '1',
    title: '2024 Unity Dinner',
    description: 'Join fellow Democrats for our annual Unity Dinner featuring keynote speakers and celebration of our local leaders.',
    date: 'March 15, 2024',
    time: '6:00 PM - 9:00 PM',
    location: 'Martin\'s Valley Mansion, Cockeysville',
    type: 'fundraiser',
    slug: 'unity-dinner-2024',
  },
  {
    id: '2',
    title: 'Monthly Democratic Club Meeting',
    description: 'Regular meeting to discuss upcoming initiatives, volunteer opportunities, and community concerns.',
    date: 'March 20, 2024',
    time: '7:00 PM - 8:30 PM',
    location: 'Towson Library Community Room',
    type: 'meeting',
    slug: 'march-democratic-club-meeting',
  },
  {
    id: '3',
    title: 'Voter Registration Drive',
    description: 'Help register new voters and ensure our community is ready for the upcoming elections.',
    date: 'March 23, 2024',
    time: '10:00 AM - 2:00 PM',
    location: 'Hunt Valley Towne Centre',
    type: 'volunteer',
    slug: 'voter-registration-drive-march',
  },
  {
    id: '4',
    title: 'Rally for Education Funding',
    description: 'Stand with us as we advocate for increased education funding and support for our teachers and students.',
    date: 'March 28, 2024',
    time: '5:00 PM - 7:00 PM',
    location: 'Baltimore County Courthouse Steps',
    type: 'rally',
    slug: 'education-funding-rally',
  },
  {
    id: '5',
    title: 'Campaign Kickoff: County Executive',
    description: 'Join us for the official campaign kickoff for our Democratic candidate for County Executive.',
    date: 'April 2, 2024',
    time: '4:00 PM - 6:00 PM',
    location: 'Catonsville Community Center',
    type: 'campaign',
    slug: 'county-executive-campaign-kickoff',
  },
  {
    id: '6',
    title: 'Spring Fundraising Gala',
    description: 'An elegant evening supporting Democratic candidates and initiatives in Baltimore County.',
    date: 'April 10, 2024',
    time: '7:00 PM - 10:00 PM',
    location: 'The Grand Lodge of Maryland',
    type: 'fundraiser',
    slug: 'spring-fundraising-gala-2024',
  },
]

function EventCard({ event }: { event: Event }) {
  const typeConfig = eventTypeConfig[event.type]
  const Icon = typeConfig.icon

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group border border-blue-100">
      <div className="p-6">
        {/* Event Type Badge */}
        <div className="flex items-center justify-between mb-4">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${typeConfig.bgColor} ${typeConfig.textColor}`}>
            <Icon className="w-4 h-4" />
            {typeConfig.label}
          </span>
        </div>

        {/* Event Title */}
        <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {event.title}
        </h3>

        {/* Event Description */}
        <p className="text-gray-700 mb-4 line-clamp-2">
          {event.description}
        </p>

        {/* Event Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600 font-medium">
            <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600 font-medium">
            <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600 font-medium">
            <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
            <span>{event.location}</span>
          </div>
        </div>

        {/* CTA Button */}
        <Link 
          href={`/events/${event.slug}`}
          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors group/link"
        >
          Learn More
          <ArrowRight className="ml-1 w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  )
}

export function EventsSection() {
  return (
    <section className="py-16 lg:py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
            Upcoming Events
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us at our upcoming events to make a difference in Baltimore County. 
            From rallies to fundraisers, there's a way for everyone to get involved.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* View All Events CTA */}
        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/events">
              View All Events
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
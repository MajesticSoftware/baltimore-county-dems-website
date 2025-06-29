'use client'

import { Metadata } from 'next'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  Users, 
  ChevronLeft, 
  ChevronRight,
  Filter,
  X,
  Plus,
  Download,
  Mail,
  Phone,
  ExternalLink
} from 'lucide-react'

// TypeScript types for events
interface Event {
  id: string
  title: string
  description: string
  date: Date
  time: string
  location: string
  category: 'meeting' | 'fundraiser' | 'community' | 'training'
  featured: boolean
  registrationUrl?: string
  cost?: string
  capacity?: number
  organizer: {
    name: string
    email: string
    phone?: string
  }
}

interface CalendarDay {
  date: Date
  isCurrentMonth: boolean
  events: Event[]
}

// Sample events data for 2024
const sampleEvents: Event[] = [
  {
    id: '1',
    title: 'Central Committee Monthly Meeting',
    description: 'Join us for our monthly business meeting where we discuss local issues, upcoming elections, and party business.',
    date: new Date(2024, 6, 15), // July 15, 2024
    time: '7:00 PM - 9:00 PM',
    location: 'Baltimore County Government Building, Towson',
    category: 'meeting',
    featured: true,
    organizer: {
      name: 'Executive Committee',
      email: 'info@baltimorecountydems.com',
      phone: '(410) 555-0123'
    }
  },
  {
    id: '2',
    title: 'Unity Dinner 2024',
    description: 'Our annual Unity Dinner celebrating Democratic achievements and fundraising for upcoming campaigns.',
    date: new Date(2024, 8, 20), // September 20, 2024
    time: '6:00 PM - 10:00 PM',
    location: 'Marriott Baltimore Hunt Valley',
    category: 'fundraiser',
    featured: true,
    cost: '$75 per person',
    capacity: 300,
    registrationUrl: '#',
    organizer: {
      name: 'Fundraising Committee',
      email: 'fundraising@baltimorecountydems.com',
      phone: '(410) 555-0124'
    }
  },
  {
    id: '3',
    title: 'Voter Registration Drive',
    description: 'Help register new voters in our community. Volunteers needed to staff tables at local events.',
    date: new Date(2024, 7, 10), // August 10, 2024
    time: '10:00 AM - 4:00 PM',
    location: 'Towson Town Center',
    category: 'community',
    featured: false,
    organizer: {
      name: 'Voter Outreach Team',
      email: 'outreach@baltimorecountydems.com'
    }
  },
  {
    id: '4',
    title: 'Campaign Training Workshop',
    description: 'Learn essential campaign skills including voter contact, fundraising, and digital organizing.',
    date: new Date(2024, 7, 25), // August 25, 2024
    time: '9:00 AM - 3:00 PM',
    location: 'CCBC Catonsville Campus',
    category: 'training',
    featured: false,
    cost: 'Free for members',
    registrationUrl: '#',
    organizer: {
      name: 'Training Committee',
      email: 'training@baltimorecountydems.com'
    }
  },
  {
    id: '5',
    title: 'Phone Bank for Local Candidates',
    description: 'Make calls to support our Democratic candidates in the upcoming election.',
    date: new Date(2024, 9, 5), // October 5, 2024
    time: '2:00 PM - 6:00 PM',
    location: 'Democratic HQ, Towson',
    category: 'community',
    featured: false,
    organizer: {
      name: 'Campaign Coordinator',
      email: 'campaigns@baltimorecountydems.com'
    }
  },
  {
    id: '6',
    title: 'Young Democrats Meet & Greet',
    description: 'Networking event for Democrats under 35. Learn about opportunities to get involved.',
    date: new Date(2024, 8, 15), // September 15, 2024
    time: '7:00 PM - 9:00 PM',
    location: 'The Brass Tap, Towson',
    category: 'community',
    featured: false,
    cost: 'Pay as you go',
    organizer: {
      name: 'Young Democrats Club',
      email: 'youngdems@baltimorecountydems.com'
    }
  }
]

const categoryColors = {
  meeting: 'bg-blue-100 text-blue-800',
  fundraiser: 'bg-green-100 text-green-800',
  community: 'bg-purple-100 text-purple-800',
  training: 'bg-orange-100 text-orange-800'
}

const categoryLabels = {
  meeting: 'Central Committee Meeting',
  fundraiser: 'Fundraiser',
  community: 'Community Event',
  training: 'Training/Workshop'
}

export default function EventsPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [showModal, setShowModal] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [showSubmissionForm, setShowSubmissionForm] = useState(false)

  // Calendar logic
  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)
  const startOfCalendar = new Date(startOfMonth)
  startOfCalendar.setDate(startOfCalendar.getDate() - startOfCalendar.getDay())
  
  const calendarDays: CalendarDay[] = []
  const current = new Date(startOfCalendar)
  
  for (let i = 0; i < 42; i++) {
    const dayEvents = sampleEvents.filter(event => 
      event.date.toDateString() === current.toDateString()
    )
    
    calendarDays.push({
      date: new Date(current),
      isCurrentMonth: current.getMonth() === currentDate.getMonth(),
      events: dayEvents
    })
    
    current.setDate(current.getDate() + 1)
  }

  const filteredEvents = selectedCategory === 'all' 
    ? sampleEvents 
    : sampleEvents.filter(event => event.category === selectedCategory)

  const featuredEvents = sampleEvents.filter(event => event.featured)

  const upcomingEvents = sampleEvents
    .filter(event => event.date >= new Date())
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .slice(0, 6)

  const pastEvents = sampleEvents
    .filter(event => event.date < new Date())
    .sort((a, b) => b.date.getTime() - a.date.getTime())

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const openEventModal = (event: Event) => {
    setSelectedEvent(event)
    setShowModal(true)
  }

  const addToCalendar = (event: Event) => {
    const startDate = event.date.toISOString().split('T')[0].replace(/-/g, '')
    const title = encodeURIComponent(event.title)
    const description = encodeURIComponent(event.description)
    const location = encodeURIComponent(event.location)
    
    const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${startDate}&details=${description}&location=${location}`
    window.open(googleUrl, '_blank')
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-light text-black mb-6">
              Events Calendar
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Stay connected with the Baltimore County Democratic Central Committee through our 
              meetings, community events, training sessions, and fundraising activities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => setShowSubmissionForm(true)}>
                <Plus className="mr-2 h-5 w-5" />
                Submit Event
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#calendar">
                  View Calendar
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      {featuredEvents.length > 0 && (
        <section className="bg-blue-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light text-black mb-12 text-center">
              Featured Upcoming Events
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredEvents.map((event) => (
                <Card key={event.id} className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${categoryColors[event.category]}`}>
                          {categoryLabels[event.category]}
                        </span>
                        <CardTitle className="text-black mb-2">{event.title}</CardTitle>
                        <CardDescription className="text-black">
                          {event.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-black mb-4">
                      <div className="flex items-center">
                        <CalendarIcon className="h-4 w-4 mr-2 text-blue-600" />
                        <span>{event.date.toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-blue-600" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                        <span>{event.location}</span>
                      </div>
                      {event.cost && (
                        <div className="flex items-center">
                          <span className="font-medium text-green-600">{event.cost}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        onClick={() => openEventModal(event)}
                      >
                        Learn More
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => addToCalendar(event)}
                      >
                        <Download className="h-4 w-4 mr-1" />
                        Add to Calendar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Event Categories Filter */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
              className="mb-2"
            >
              All Events
            </Button>
            {Object.entries(categoryLabels).map(([key, label]) => (
              <Button
                key={key}
                variant={selectedCategory === key ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(key)}
                className="mb-2"
              >
                {label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Calendar */}
      <section id="calendar" className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Calendar Header */}
              <div className="bg-blue-600 text-white p-6">
                <div className="flex items-center justify-between">
                  <button onClick={prevMonth} className="p-2 hover:bg-blue-700 rounded">
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <h3 className="text-xl font-medium">
                    {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </h3>
                  <button onClick={nextMonth} className="p-2 hover:bg-blue-700 rounded">
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="p-6">
                {/* Day headers */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="p-2 text-center font-medium text-gray-500">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar days */}
                <div className="grid grid-cols-7 gap-1">
                  {calendarDays.map((day, index) => (
                    <div
                      key={index}
                      className={`min-h-[80px] p-1 border border-gray-200 ${
                        day.isCurrentMonth ? 'bg-white' : 'bg-gray-50'
                      } ${
                        day.date.toDateString() === new Date().toDateString() 
                          ? 'ring-2 ring-blue-500' 
                          : ''
                      }`}
                    >
                      <div className={`text-sm ${
                        day.isCurrentMonth ? 'text-black' : 'text-gray-400'
                      }`}>
                        {day.date.getDate()}
                      </div>
                      <div className="space-y-1">
                        {day.events.slice(0, 2).map((event) => (
                          <div
                            key={event.id}
                            className={`text-xs p-1 rounded cursor-pointer ${categoryColors[event.category]}`}
                            onClick={() => openEventModal(event)}
                          >
                            {event.title.length > 15 
                              ? `${event.title.substring(0, 15)}...` 
                              : event.title
                            }
                          </div>
                        ))}
                        {day.events.length > 2 && (
                          <div className="text-xs text-gray-500 p-1">
                            +{day.events.length - 2} more
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events List */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-black mb-12 text-center">
            Upcoming Events
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${categoryColors[event.category]}`}>
                          {categoryLabels[event.category]}
                        </span>
                        {event.featured && (
                          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-medium">
                            Featured
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-medium text-black mb-2">{event.title}</h3>
                      <p className="text-black mb-3">{event.description}</p>
                      <div className="grid sm:grid-cols-2 gap-2 text-sm text-black">
                        <div className="flex items-center">
                          <CalendarIcon className="h-4 w-4 mr-2 text-blue-600" />
                          <span>{event.date.toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-blue-600" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center sm:col-span-2">
                          <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:ml-6">
                      <div className="flex gap-2">
                        <Button size="sm" onClick={() => openEventModal(event)}>
                          Details
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => addToCalendar(event)}
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Archive */}
      {pastEvents.length > 0 && (
        <section className="bg-blue-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light text-black mb-12 text-center">
              Past Events Archive
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {pastEvents.slice(0, 4).map((event) => (
                  <Card key={event.id}>
                    <CardHeader>
                      <CardTitle className="text-black text-lg">{event.title}</CardTitle>
                      <CardDescription className="text-black">
                        {event.date.toLocaleDateString('en-US', { 
                          month: 'long', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-black">{event.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {pastEvents.length > 4 && (
                <div className="text-center mt-8">
                  <Button variant="outline">
                    View All Past Events
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Contact Information */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-light text-black mb-8">
              Event Organizers Contact
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-black">General Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-black">
                    <div className="flex items-center justify-center">
                      <Mail className="h-4 w-4 mr-2 text-blue-600" />
                      <a href="mailto:events@baltimorecountydems.com" className="text-blue-600 hover:underline">
                        events@baltimorecountydems.com
                      </a>
                    </div>
                    <div className="flex items-center justify-center">
                      <Phone className="h-4 w-4 mr-2 text-blue-600" />
                      <span>(410) 555-0123</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-black">Fundraising Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-black">
                    <div className="flex items-center justify-center">
                      <Mail className="h-4 w-4 mr-2 text-blue-600" />
                      <a href="mailto:fundraising@baltimorecountydems.com" className="text-blue-600 hover:underline">
                        fundraising@baltimorecountydems.com
                      </a>
                    </div>
                    <div className="flex items-center justify-center">
                      <Phone className="h-4 w-4 mr-2 text-blue-600" />
                      <span>(410) 555-0124</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Modal */}
      {showModal && selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${categoryColors[selectedEvent.category]}`}>
                    {categoryLabels[selectedEvent.category]}
                  </span>
                  <h3 className="text-2xl font-medium text-black mb-2">{selectedEvent.title}</h3>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 hover:bg-gray-100 rounded"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <p className="text-black mb-6">{selectedEvent.description}</p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CalendarIcon className="h-5 w-5 mr-3 text-blue-600" />
                    <div>
                      <div className="font-medium text-black">Date</div>
                      <div className="text-black">
                        {selectedEvent.date.toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-3 text-blue-600" />
                    <div>
                      <div className="font-medium text-black">Time</div>
                      <div className="text-black">{selectedEvent.time}</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 text-blue-600 mt-0.5" />
                    <div>
                      <div className="font-medium text-black">Location</div>
                      <div className="text-black">{selectedEvent.location}</div>
                    </div>
                  </div>
                  
                  {selectedEvent.cost && (
                    <div className="flex items-center">
                      <span className="font-medium text-black mr-3">Cost:</span>
                      <span className="text-green-600 font-medium">{selectedEvent.cost}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="border-t pt-4 mb-6">
                <h4 className="font-medium text-black mb-2">Event Organizer</h4>
                <div className="space-y-2">
                  <div className="text-black">{selectedEvent.organizer.name}</div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-blue-600" />
                    <a href={`mailto:${selectedEvent.organizer.email}`} className="text-blue-600 hover:underline">
                      {selectedEvent.organizer.email}
                    </a>
                  </div>
                  {selectedEvent.organizer.phone && (
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-blue-600" />
                      <span className="text-black">{selectedEvent.organizer.phone}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button onClick={() => addToCalendar(selectedEvent)}>
                  <Download className="h-4 w-4 mr-2" />
                  Add to Calendar
                </Button>
                {selectedEvent.registrationUrl && (
                  <Button variant="outline" asChild>
                    <a href={selectedEvent.registrationUrl} target="_blank" rel="noopener noreferrer">
                      Register
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Event Submission Form Modal */}
      {showSubmissionForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-medium text-black">Submit an Event</h3>
                <button
                  onClick={() => setShowSubmissionForm(false)}
                  className="p-2 hover:bg-gray-100 rounded"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Event Title *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Category *
                    </label>
                    <select
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select category</option>
                      {Object.entries(categoryLabels).map(([key, label]) => (
                        <option key={key} value={key}>{label}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Description *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Date *
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Time *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., 7:00 PM - 9:00 PM"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Organizer Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Organizer Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Cost (optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Free, $25 per person"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Registration URL (optional)
                    </label>
                    <input
                      type="url"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button type="submit">
                    Submit Event
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => setShowSubmissionForm(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
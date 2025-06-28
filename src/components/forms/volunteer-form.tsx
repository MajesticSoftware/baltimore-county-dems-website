'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, User, Mail, Phone, MapPin } from 'lucide-react'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  zipCode: string
  interests: string[]
  availability: string[]
  experience: string
  howHeard: string
}

const volunteerInterests = [
  'Canvassing & Door-to-Door',
  'Phone Banking',
  'Text Banking',
  'Data Entry',
  'Event Planning',
  'Social Media',
  'Graphic Design',
  'Writing & Communications',
  'Fundraising',
  'Voter Registration',
  'Poll Monitoring',
  'Translation Services'
]

const availabilityOptions = [
  'Weekday Mornings',
  'Weekday Afternoons',
  'Weekday Evenings',
  'Weekend Mornings',
  'Weekend Afternoons',
  'Weekend Evenings',
  'Election Days Only',
  'Special Events Only'
]

export function VolunteerForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    interests: [],
    availability: [],
    experience: '',
    howHeard: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.zipCode.trim()) newErrors.zipCode = 'ZIP code is required'
    if (formData.interests.length === 0) newErrors.interests = 'Please select at least one interest'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const handleCheckboxChange = (field: 'interests' | 'availability', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-black mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-6">
            Your volunteer application has been submitted successfully. We'll be in touch soon with next steps and upcoming opportunities.
          </p>
          <Button onClick={() => { setIsSubmitted(false); setFormData({
            firstName: '', lastName: '', email: '', phone: '', address: '', city: '', zipCode: '',
            interests: [], availability: [], experience: '', howHeard: ''
          }) }} variant="outline">
            Submit Another Application
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-black">Volunteer Sign-Up</CardTitle>
        <CardDescription className="text-gray-600">
          Join our team of dedicated volunteers working to strengthen Baltimore County's Democratic future.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                <User className="inline w-4 h-4 mr-1" />
                First Name *
              </label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.firstName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your first name"
              />
              {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Last Name *
              </label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.lastName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your last name"
              />
              {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                <Mail className="inline w-4 h-4 mr-1" />
                Email Address *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                <Phone className="inline w-4 h-4 mr-1" />
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="(555) 123-4567"
              />
            </div>
          </div>

          {/* Address Information */}
          <div>
            <label className="block text-sm font-medium text-black mb-2">
              <MapPin className="inline w-4 h-4 mr-1" />
              Address
            </label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Street address"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                City
              </label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Baltimore"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                ZIP Code *
              </label>
              <input
                type="text"
                value={formData.zipCode}
                onChange={(e) => handleInputChange('zipCode', e.target.value)}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.zipCode ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="21201"
              />
              {errors.zipCode && <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>}
            </div>
          </div>

          {/* Volunteer Interests */}
          <div>
            <label className="block text-sm font-medium text-black mb-3">
              Areas of Interest * (Select all that apply)
            </label>
            <div className="grid md:grid-cols-3 gap-3">
              {volunteerInterests.map((interest) => (
                <label key={interest} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.interests.includes(interest)}
                    onChange={() => handleCheckboxChange('interests', interest)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-black">{interest}</span>
                </label>
              ))}
            </div>
            {errors.interests && <p className="text-red-500 text-sm mt-1">{errors.interests}</p>}
          </div>

          {/* Availability */}
          <div>
            <label className="block text-sm font-medium text-black mb-3">
              Availability (Select all that apply)
            </label>
            <div className="grid md:grid-cols-4 gap-3">
              {availabilityOptions.map((option) => (
                <label key={option} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.availability.includes(option)}
                    onChange={() => handleCheckboxChange('availability', option)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-black">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Previous Volunteer Experience
            </label>
            <textarea
              value={formData.experience}
              onChange={(e) => handleInputChange('experience', e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tell us about any previous political or volunteer experience (optional)"
            />
          </div>

          {/* How did you hear about us */}
          <div>
            <label className="block text-sm font-medium text-black mb-2">
              How did you hear about us?
            </label>
            <select
              value={formData.howHeard}
              onChange={(e) => handleInputChange('howHeard', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select an option</option>
              <option value="website">Website</option>
              <option value="social-media">Social Media</option>
              <option value="friend">Friend/Family</option>
              <option value="event">Event</option>
              <option value="email">Email Newsletter</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
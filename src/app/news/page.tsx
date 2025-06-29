'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { 
  Search, 
  Filter, 
  Calendar as CalendarIcon, 
  User, 
  ExternalLink,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  ChevronLeft,
  ChevronRight,
  Star,
  Clock,
  Tag,
  Share2,
  Download,
  Archive,
  FileText,
  Users,
  Megaphone
} from 'lucide-react'

// TypeScript types for news articles
interface NewsArticle {
  id: string
  title: string
  excerpt: string
  content: string
  category: 'press-release' | 'elections' | 'community' | 'events' | 'announcement'
  author: string
  publishDate: Date
  lastUpdated?: Date
  featured: boolean
  breaking: boolean
  tags: string[]
  imageUrl?: string
  readingTime: number
  source?: string
  externalUrl?: string
}

interface MediaContact {
  name: string
  title: string
  email: string
  phone: string
  bio: string
}

// Sample news articles for 2024
const sampleArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'Baltimore County Democrats Announce 2024 Election Endorsements',
    excerpt: 'The Baltimore County Democratic Central Committee announces its endorsements for the November 2024 elections, supporting candidates committed to progressive values.',
    content: 'The Baltimore County Democratic Central Committee is proud to announce our official endorsements for the November 2024 elections. After careful consideration and candidate interviews, we are supporting candidates who demonstrate strong commitment to Democratic values, community service, and effective governance. Our endorsed candidates include incumbents and challengers who have shown dedication to affordable healthcare, quality education, environmental protection, and economic opportunity for all Baltimore County residents.',
    category: 'elections',
    author: 'Central Committee Communications',
    publishDate: new Date(2024, 9, 1), // October 1, 2024
    featured: true,
    breaking: true,
    tags: ['endorsements', '2024 election', 'candidates', 'voting'],
    imageUrl: '/images/news/endorsements-2024.jpg',
    readingTime: 4
  },
  {
    id: '2',
    title: 'Record Turnout at Unity Dinner Raises Over $150,000 for Democratic Campaigns',
    excerpt: 'The 2024 Unity Dinner brought together over 400 Democrats from across Baltimore County, raising critical funds for local campaigns.',
    content: 'Our annual Unity Dinner on September 20, 2024, was a tremendous success, bringing together over 400 Democrats from across Baltimore County. The event raised over $150,000 that will directly support Democratic candidates and voter outreach efforts in the upcoming election. Keynote speaker State Senator Sarah Johnson delivered an inspiring address about the importance of local engagement in protecting democratic values. The evening featured recognition of outstanding volunteers and community leaders who have made significant contributions to our Democratic mission.',
    category: 'events',
    author: 'Fundraising Committee',
    publishDate: new Date(2024, 8, 21), // September 21, 2024
    featured: true,
    breaking: false,
    tags: ['unity dinner', 'fundraising', 'volunteers', 'community'],
    imageUrl: '/images/news/unity-dinner-2024.jpg',
    readingTime: 3
  },
  {
    id: '3',
    title: 'New Voter Registration Initiative Targets Young Adults in Baltimore County',
    excerpt: 'The Central Committee launches comprehensive voter registration drive focused on engaging young adults aged 18-30 ahead of the 2024 elections.',
    content: 'The Baltimore County Democratic Central Committee has launched an ambitious voter registration initiative specifically targeting young adults aged 18-30. The "Your Voice Matters" campaign includes partnerships with local colleges, community centers, and youth organizations to register new voters and educate them about the electoral process. Mobile registration units will visit college campuses, community events, and high-traffic areas throughout the county. Early data shows promising engagement, with over 500 new registrations in the first month of the campaign.',
    category: 'community',
    author: 'Voter Outreach Team',
    publishDate: new Date(2024, 7, 15), // August 15, 2024
    featured: false,
    breaking: false,
    tags: ['voter registration', 'young voters', 'outreach', 'education'],
    readingTime: 3
  },
  {
    id: '4',
    title: 'Press Release: Central Committee Responds to County Budget Proposal',
    excerpt: 'Baltimore County Democratic Central Committee issues statement on the proposed 2025 county budget, calling for increased education funding.',
    content: 'FOR IMMEDIATE RELEASE - The Baltimore County Democratic Central Committee today issued the following statement regarding the proposed 2025 county budget: "While we appreciate the County Executive\'s efforts to balance competing priorities, we believe the proposed budget falls short in adequately funding our public schools and social services. We call for increased investment in education, including teacher salary improvements and school infrastructure upgrades. Additionally, we urge the County Council to consider expanding funding for affordable housing initiatives and mental health services. Our committee stands ready to work with county leadership to ensure the budget reflects the values and needs of all Baltimore County residents."',
    category: 'press-release',
    author: 'Central Committee Chair',
    publishDate: new Date(2024, 6, 30), // July 30, 2024
    featured: false,
    breaking: false,
    tags: ['budget', 'education', 'county council', 'public policy'],
    readingTime: 2
  },
  {
    id: '5',
    title: 'Democratic Women\'s Caucus Announces Leadership Development Program',
    excerpt: 'New program aims to train and support women interested in running for local office in Baltimore County.',
    content: 'The Baltimore County Democratic Women\'s Caucus has announced the launch of its Leadership Development Program, designed to train and support women interested in running for local office. The six-month program will cover campaign strategy, fundraising, public speaking, policy development, and media relations. Applications are now being accepted for the inaugural cohort, which will begin in January 2025. The program represents a significant investment in developing the next generation of Democratic women leaders in Baltimore County.',
    category: 'announcement',
    author: 'Women\'s Caucus',
    publishDate: new Date(2024, 6, 10), // July 10, 2024
    featured: false,
    breaking: false,
    tags: ['women in politics', 'leadership', 'training', 'local office'],
    readingTime: 3
  },
  {
    id: '6',
    title: 'Central Committee Hosts Climate Action Forum',
    excerpt: 'Environmental experts and community leaders discuss climate change impacts and solutions for Baltimore County.',
    content: 'The Baltimore County Democratic Central Committee hosted a Climate Action Forum on June 25, 2024, bringing together environmental experts, community leaders, and residents to discuss climate change impacts and potential solutions for our county. The forum featured presentations on renewable energy initiatives, flood mitigation strategies, and sustainable transportation options. Over 150 attendees participated in breakout sessions focusing on specific environmental challenges facing different areas of the county. The committee will use input from the forum to develop policy recommendations for county leadership.',
    category: 'community',
    author: 'Environmental Committee',
    publishDate: new Date(2024, 5, 26), // June 26, 2024
    featured: false,
    breaking: false,
    tags: ['climate change', 'environment', 'sustainability', 'community input'],
    readingTime: 4
  },
  {
    id: '7',
    title: 'Successful Candidate Training Workshop Prepares Local Democrats',
    excerpt: 'Forty aspiring candidates completed intensive training program covering campaign fundamentals and local issues.',
    content: 'Forty aspiring Democratic candidates successfully completed our intensive Candidate Training Workshop held on May 18, 2024. The day-long program covered campaign fundamentals including message development, voter contact strategies, fundraising best practices, and debate preparation. Participants also received training on Baltimore County-specific issues such as zoning, transportation, and education policy. Many workshop attendees have since announced candidacies for local offices including school board, county council, and state legislature positions.',
    category: 'events',
    author: 'Training Committee',
    publishDate: new Date(2024, 4, 20), // May 20, 2024
    featured: false,
    breaking: false,
    tags: ['candidate training', 'campaign skills', 'local elections', 'professional development'],
    readingTime: 2
  },
  {
    id: '8',
    title: 'Central Committee Partners with Food Banks for Holiday Drive',
    excerpt: 'Annual holiday food drive collected over 10,000 pounds of donations for Baltimore County families in need.',
    content: 'The Baltimore County Democratic Central Committee\'s annual holiday food drive was a tremendous success, collecting over 10,000 pounds of food donations for local families in need. The drive, conducted in partnership with three local food banks, ran from November 15 through December 20, 2023. Volunteers from Democratic clubs across the county staffed collection sites at grocery stores, community centers, and party events. The collected food provided holiday meals for over 500 families throughout Baltimore County.',
    category: 'community',
    author: 'Community Service Committee',
    publishDate: new Date(2023, 11, 22), // December 22, 2023
    featured: false,
    breaking: false,
    tags: ['community service', 'food drive', 'volunteers', 'holidays'],
    readingTime: 2
  }
]

// Sample media contacts
const mediaContacts: MediaContact[] = [
  {
    name: 'Jennifer Martinez',
    title: 'Communications Director',
    email: 'media@baltimorecountydems.com',
    phone: '(410) 555-0130',
    bio: 'Jennifer has over 8 years of experience in political communications and serves as the primary media contact for the Central Committee.'
  },
  {
    name: 'Michael Chen',
    title: 'Press Secretary',
    email: 'press@baltimorecountydems.com',
    phone: '(410) 555-0131',
    bio: 'Michael handles day-to-day press inquiries and coordinates interviews with Central Committee leadership.'
  }
]

const categoryLabels = {
  'press-release': 'Press Release',
  'elections': 'Elections',
  'community': 'Community',
  'events': 'Events',
  'announcement': 'Announcements'
}

const categoryColors = {
  'press-release': 'bg-red-100 text-red-800',
  'elections': 'bg-blue-100 text-blue-800',
  'community': 'bg-green-100 text-green-800',
  'events': 'bg-purple-100 text-purple-800',
  'announcement': 'bg-orange-100 text-orange-800'
}

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [showNewsletterModal, setShowNewsletterModal] = useState(false)
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null)
  const articlesPerPage = 6

  // Filter and search articles
  const filteredArticles = useMemo(() => {
    let filtered = sampleArticles

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(article => article.category === selectedCategory)
    }

    // Filter by search term
    if (searchTerm) {
      const search = searchTerm.toLowerCase()
      filtered = filtered.filter(article => 
        article.title.toLowerCase().includes(search) ||
        article.excerpt.toLowerCase().includes(search) ||
        article.tags.some(tag => tag.toLowerCase().includes(search))
      )
    }

    return filtered.sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime())
  }, [searchTerm, selectedCategory])

  // Pagination
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage)
  const currentArticles = filteredArticles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  )

  const featuredArticles = sampleArticles.filter(article => article.featured)
  const breakingNews = sampleArticles.filter(article => article.breaking)
  const pressReleases = sampleArticles.filter(article => article.category === 'press-release')

  const handleShare = (article: NewsArticle) => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href
      })
    } else {
      // Fallback for browsers without Web Share API
      navigator.clipboard.writeText(window.location.href)
    }
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-light text-black mb-6">
              News & Updates
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Stay informed with the latest news, press releases, and updates from the 
              Baltimore County Democratic Central Committee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => setShowNewsletterModal(true)}>
                <Mail className="mr-2 h-5 w-5" />
                Subscribe to Newsletter
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#press-releases">
                  <FileText className="mr-2 h-5 w-5" />
                  Press Releases
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Breaking News */}
      {breakingNews.length > 0 && (
        <section className="bg-red-50 py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-4">
                <Megaphone className="h-6 w-6 text-red-600 mr-2" />
                <h2 className="text-2xl font-medium text-red-800">Breaking News</h2>
              </div>
              <div className="space-y-4">
                {breakingNews.map((article) => (
                  <Card key={article.id} className="border-red-200">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-medium text-black mb-2">{article.title}</h3>
                          <p className="text-black mb-2">{article.excerpt}</p>
                          <div className="flex items-center text-sm text-gray-600">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{article.publishDate.toLocaleDateString()}</span>
                            <span className="mx-2">•</span>
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{article.readingTime} min read</span>
                          </div>
                        </div>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => setSelectedArticle(article)}
                        >
                          Read More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="bg-blue-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light text-black mb-12 text-center">
              Featured Stories
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArticles.slice(0, 3).map((article) => (
                <Card key={article.id} className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${categoryColors[article.category]}`}>
                        {categoryLabels[article.category]}
                      </span>
                      <Star className="h-5 w-5 text-yellow-500" />
                    </div>
                    <CardTitle className="text-black text-lg leading-tight">{article.title}</CardTitle>
                    <CardDescription className="text-black">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{article.readingTime} min read</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        {article.publishDate.toLocaleDateString()}
                      </span>
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          onClick={() => setSelectedArticle(article)}
                        >
                          Read More
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleShare(article)}
                        >
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Search and Filter */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search news articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedCategory === 'all' ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory('all')}
                  size="sm"
                >
                  All News
                </Button>
                {Object.entries(categoryLabels).map(([key, label]) => (
                  <Button
                    key={key}
                    variant={selectedCategory === key ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory(key)}
                    size="sm"
                  >
                    {label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Articles Grid */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {currentArticles.length > 0 ? (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  {currentArticles.map((article) => (
                    <Card key={article.id} className="cursor-pointer hover:shadow-lg transition-shadow bg-white">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-3">
                          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${categoryColors[article.category]}`}>
                            {categoryLabels[article.category]}
                          </span>
                          {article.featured && (
                            <Star className="h-4 w-4 text-yellow-500" />
                          )}
                        </div>
                        <CardTitle className="text-black text-lg leading-tight">{article.title}</CardTitle>
                        <CardDescription className="text-black line-clamp-3">
                          {article.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {article.tags.slice(0, 3).map((tag) => (
                            <span 
                              key={tag}
                              className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            <span>{article.author}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{article.readingTime} min read</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">
                            {article.publishDate.toLocaleDateString()}
                          </span>
                          <div className="flex gap-2">
                            <Button 
                              size="sm" 
                              onClick={() => setSelectedArticle(article)}
                            >
                              Read More
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => handleShare(article)}
                            >
                              <Share2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center space-x-2">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentPage(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      <ChevronLeft className="h-4 w-4 mr-1" />
                      Previous
                    </Button>
                    
                    <div className="flex space-x-1">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <Button
                          key={page}
                          variant={currentPage === page ? 'default' : 'outline'}
                          onClick={() => setCurrentPage(page)}
                          size="sm"
                        >
                          {page}
                        </Button>
                      ))}
                    </div>
                    
                    <Button
                      variant="outline"
                      onClick={() => setCurrentPage(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      Next
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Press Release Archive */}
      <section id="press-releases" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light text-black mb-4">Press Release Archive</h2>
              <p className="text-gray-600">
                Official statements and press releases from the Baltimore County Democratic Central Committee
              </p>
            </div>
            
            <div className="space-y-6">
              {pressReleases.slice(0, 5).map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                            Press Release
                          </span>
                          <span className="text-sm text-gray-600">
                            {article.publishDate.toLocaleDateString()}
                          </span>
                        </div>
                        <h3 className="text-xl font-medium text-black mb-2">{article.title}</h3>
                        <p className="text-black mb-3">{article.excerpt}</p>
                        <div className="flex items-center text-sm text-gray-600">
                          <User className="h-4 w-4 mr-1" />
                          <span>{article.author}</span>
                          <span className="mx-2">•</span>
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{article.readingTime} min read</span>
                        </div>
                      </div>
                      <div className="ml-6 flex flex-col gap-2">
                        <Button 
                          size="sm" 
                          onClick={() => setSelectedArticle(article)}
                        >
                          Read Full Release
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                        >
                          <Download className="h-4 w-4 mr-1" />
                          Download PDF
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {pressReleases.length > 5 && (
              <div className="text-center mt-8">
                <Button variant="outline" size="lg">
                  <Archive className="h-4 w-4 mr-2" />
                  View All Press Releases
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-light text-white mb-4">
              Stay Connected with Democratic News
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Subscribe to our newsletter for the latest updates, events, and important Democratic news in Baltimore County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-md border-0 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-white/70 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Media Contacts */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light text-black mb-4">Media Contacts</h2>
              <p className="text-gray-600">
                For press inquiries, interviews, and media requests
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {mediaContacts.map((contact, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-black">{contact.name}</CardTitle>
                    <CardDescription className="text-black">{contact.title}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-black mb-4">{contact.bio}</p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-2 text-blue-600" />
                        <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">
                          {contact.email}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-blue-600" />
                        <a href={`tel:${contact.phone}`} className="text-blue-600 hover:underline">
                          {contact.phone}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Integration */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-light text-black mb-8">
              Follow Us on Social Media
            </h2>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://facebook.com/baltimorecountydems" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://twitter.com/bcodems" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a 
                href="https://instagram.com/baltimorecountydems" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            <p className="text-gray-600 mt-4">
              Stay connected for real-time updates and behind-the-scenes content
            </p>
          </div>
        </div>
      </section>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${categoryColors[selectedArticle.category]}`}>
                      {categoryLabels[selectedArticle.category]}
                    </span>
                    {selectedArticle.featured && (
                      <Star className="h-5 w-5 text-yellow-500" />
                    )}
                    {selectedArticle.breaking && (
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">
                        Breaking
                      </span>
                    )}
                  </div>
                  <h1 className="text-3xl font-medium text-black mb-4">{selectedArticle.title}</h1>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{selectedArticle.author}</span>
                    </div>
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      <span>{selectedArticle.publishDate.toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{selectedArticle.readingTime} min read</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-2 hover:bg-gray-100 rounded"
                >
                  <ExternalLink className="h-5 w-5 transform rotate-45" />
                </button>
              </div>
              
              <div className="prose max-w-none mb-6">
                <p className="text-lg text-black leading-relaxed mb-6">{selectedArticle.excerpt}</p>
                <div className="text-black leading-relaxed whitespace-pre-line">
                  {selectedArticle.content}
                </div>
              </div>
              
              <div className="border-t pt-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedArticle.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    {selectedArticle.lastUpdated && (
                      <span>Last updated: {selectedArticle.lastUpdated.toLocaleDateString()}</span>
                    )}
                  </div>
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleShare(selectedArticle)}
                    >
                      <Share2 className="h-4 w-4 mr-1" />
                      Share
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                    >
                      <Download className="h-4 w-4 mr-1" />
                      Download PDF
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Newsletter Modal */}
      {showNewsletterModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-medium text-black">Subscribe to Newsletter</h3>
                <button
                  onClick={() => setShowNewsletterModal(false)}
                  className="p-2 hover:bg-gray-100 rounded"
                >
                  <ExternalLink className="h-5 w-5 transform rotate-45" />
                </button>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Interests (check all that apply)
                  </label>
                  <div className="space-y-2">
                    {Object.values(categoryLabels).map((category) => (
                      <label key={category} className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-black">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button type="submit" className="flex-1">
                    Subscribe
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => setShowNewsletterModal(false)}
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
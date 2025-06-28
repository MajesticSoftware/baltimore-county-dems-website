'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, User, Clock, ChevronRight } from 'lucide-react'

interface NewsArticle {
  id: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  category: string
  slug: string
  image?: string
}

// Mock data - replace with actual data from CMS/API
const mockArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'Democratic Unity Dinner Brings Together Community Leaders',
    excerpt: 'Over 500 community members gathered for the annual Unity Dinner, celebrating our shared values and commitment to progress in Baltimore County. The event featured inspiring speeches from local leaders and raised funds for upcoming campaigns.',
    author: 'Sarah Johnson',
    date: '2024-03-10',
    readTime: '5 min read',
    category: 'Events',
    slug: 'democratic-unity-dinner-2024',
    image: '/images/news/unity-dinner.jpg'
  },
  {
    id: '2',
    title: 'New Voter Registration Drive Launches in Towson',
    excerpt: 'Baltimore County Democrats announce a comprehensive voter registration initiative targeting young voters and underserved communities. The drive aims to register 10,000 new voters before the upcoming election.',
    author: 'Michael Chen',
    date: '2024-03-08',
    readTime: '3 min read',
    category: 'Voter Outreach',
    slug: 'voter-registration-drive-towson',
    image: '/images/news/voter-registration.jpg'
  },
  {
    id: '3',
    title: 'Local Democrats Champion Environmental Protection Bill',
    excerpt: 'County council members introduce groundbreaking legislation to protect local waterways and green spaces. The bill has gained widespread support from environmental groups and community organizations.',
    author: 'Emily Rodriguez',
    date: '2024-03-05',
    readTime: '4 min read',
    category: 'Policy',
    slug: 'environmental-protection-bill',
    image: '/images/news/environment.jpg'
  }
]

export function NewsSection() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    })
  }

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Events': 'bg-blue-100 text-blue-700',
      'Voter Outreach': 'bg-green-100 text-green-700',
      'Policy': 'bg-purple-100 text-purple-700',
      'Community': 'bg-orange-100 text-orange-700',
      'Elections': 'bg-red-100 text-red-700'
    }
    return colors[category] || 'bg-gray-100 text-gray-700'
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
            Latest News & Updates
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed about Democratic activities, policy initiatives, and community events in Baltimore County
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {mockArticles.map((article, index) => (
            <article 
              key={article.id}
              className={`
                bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 
                overflow-hidden group animate-fade-up border border-blue-100
              `}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Article Image */}
              {article.image && (
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback for missing images
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                    }}
                  />
                  <span className={`
                    absolute top-4 left-4 z-20 px-3 py-1 text-xs font-semibold rounded-full
                    ${getCategoryColor(article.category)}
                  `}>
                    {article.category}
                  </span>
                </div>
              )}

              <div className="p-6">
                {/* Article Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={article.date}>{formatDate(article.date)}</time>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Article Title */}
                <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  <Link href={`/news/${article.slug}`} className="hover:underline">
                    {article.title}
                  </Link>
                </h3>

                {/* Article Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Author and Read More */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <Link 
                    href={`/news/${article.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group/link"
                  >
                    Read more
                    <ChevronRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/news">
              View All News
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-blue-600 rounded-lg p-8 lg:p-12 text-white text-center">
          <h3 className="text-2xl lg:text-3xl font-light mb-4">
            Stay Connected
          </h3>
          <p className="text-lg mb-6 text-blue-100 max-w-2xl mx-auto">
            Get the latest news and updates delivered directly to your inbox. Join our newsletter to stay informed about Democratic activities in Baltimore County.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button 
              size="lg" 
              variant="secondary"
              className="whitespace-nowrap"
            >
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}
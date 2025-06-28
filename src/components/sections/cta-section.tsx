'use client'

import { motion } from 'framer-motion'
import { Heart, Mail, CheckCircle, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ctaCards = [
  {
    icon: Users,
    title: 'Volunteer',
    description: 'Join our team of dedicated volunteers making a difference in Baltimore County',
    buttonText: 'Get Involved',
    href: '/volunteer',
    iconColor: 'text-blue-600'
  },
  {
    icon: Heart,
    title: 'Donate',
    description: 'Support Democratic candidates and causes in Baltimore County',
    buttonText: 'Contribute Now',
    href: '/donate',
    iconColor: 'text-blue-600'
  },
  {
    icon: CheckCircle,
    title: 'Register to Vote',
    description: 'Make your voice heard. Check your registration status or register today',
    buttonText: 'Register Now',
    href: '/vote',
    iconColor: 'text-blue-600'
  },
  {
    icon: Mail,
    title: 'Join Newsletter',
    description: 'Stay informed about local politics, events, and opportunities',
    buttonText: 'Subscribe',
    href: '/newsletter',
    iconColor: 'text-blue-600'
  }
]

export function CTASection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Take Action Today
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every action counts. Choose how you want to make a difference in Baltimore County.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ctaCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              
              <div className="relative bg-white rounded-2xl p-6 h-full border border-gray-200 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
                
                <div className="relative z-10">
                  <div className="inline-flex p-3 rounded-xl bg-blue-50 mb-4">
                    <card.icon className={`h-8 w-8 ${card.iconColor}`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 text-black">{card.title}</h3>
                  <p className="text-black mb-6 text-sm">
                    {card.description}
                  </p>
                  
                  <Button
                    asChild
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <a href={card.href}>
                      {card.buttonText}
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center justify-center p-8 rounded-2xl bg-blue-50 border border-blue-200">
            <div>
              <p className="text-xl font-light mb-2 text-black">
                Not sure where to start?
              </p>
              <p className="text-black mb-6">
                Take our quick quiz to find the best way for you to get involved
              </p>
              <Button className="bg-blue-600 text-white hover:bg-blue-700" size="lg" asChild>
                <a href="/get-involved">
                  Find Your Path →
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
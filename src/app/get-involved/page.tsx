import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  Users, 
  Heart, 
  Vote, 
  Mail, 
  Calendar,
  Megaphone,
  UserPlus,
  Target,
  ArrowRight
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Get Involved - Baltimore County Democratic Party',
  description: 'Join the Baltimore County Democratic Party and make a difference in your community. Volunteer, donate, become a member, or run for office.',
}

const waysToBElp = [
  {
    icon: Users,
    title: "Volunteer",
    description: "Join our team of dedicated volunteers making a real difference in Baltimore County through campaigns, events, and community outreach.",
    href: "/get-involved/volunteer",
    buttonText: "Start Volunteering",
    color: "blue"
  },
  {
    icon: Heart,
    title: "Donate",
    description: "Support Democratic candidates and causes with secure contributions that help us win elections and advance our values.",
    href: "/get-involved/donate",
    buttonText: "Contribute Now",
    color: "red"
  },
  {
    icon: UserPlus,
    title: "Become a Member",
    description: "Join the Baltimore County Democratic Party and get exclusive access to events, training, and networking opportunities.",
    href: "/get-involved/membership",
    buttonText: "Join Today",
    color: "green"
  },
  {
    icon: Target,
    title: "Run for Office",
    description: "Make a direct impact by running for local office. We'll provide training, support, and resources to help you succeed.",
    href: "/get-involved/run-for-office",
    buttonText: "Learn More",
    color: "purple"
  }
]

const quickActions = [
  {
    icon: Vote,
    title: "Register to Vote",
    description: "Make sure you're ready to vote in every election",
    href: "/voter-resources/register"
  },
  {
    icon: Mail,
    title: "Join Newsletter",
    description: "Stay informed about events and opportunities",
    href: "#newsletter"
  },
  {
    icon: Calendar,
    title: "Attend Events",
    description: "Connect with fellow Democrats at our events",
    href: "/events"
  },
  {
    icon: Megaphone,
    title: "Contact Officials",
    description: "Make your voice heard on important issues",
    href: "/about/officials"
  }
]

export default function GetInvolvedPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-light text-black mb-6">
              Get Involved
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              There are many ways to make a difference in Baltimore County. Whether you have 
              5 minutes or 5 hours, whether you can contribute $5 or $500, your involvement 
              matters and helps us build a stronger Democratic community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/get-involved/volunteer">
                  Start Volunteering
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#ways-to-help">
                  Explore Options
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-black mb-4">
              Your Impact Matters
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how Democratic volunteers and supporters are making a difference in Baltimore County
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "5,000+", label: "Active Volunteers", description: "Democrats working in our community" },
              { number: "150+", label: "Events Per Year", description: "Opportunities to get involved" },
              { number: "25+", label: "Elected Officials", description: "Democrats serving our community" },
              { number: "50+", label: "Democratic Clubs", description: "Local organizations across the county" }
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-blue-100 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-lg font-medium text-black mb-1">{stat.label}</div>
                <div className="text-black text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Help */}
      <section id="ways-to-help" className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-black mb-4">
              Ways to Make a Difference
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose how you want to contribute to our Democratic movement in Baltimore County
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {waysToBElp.map((way, index) => (
              <div 
                key={index}
                className="bg-blue-50 rounded-xl p-8 border border-blue-100 hover:shadow-lg transition-all"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                      <way.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-medium text-black mb-3">
                      {way.title}
                    </h3>
                    <p className="text-black mb-6 leading-relaxed">
                      {way.description}
                    </p>
                    <Button asChild>
                      <Link href={way.href}>
                        {way.buttonText}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="bg-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-black mb-4">
              Quick Actions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Small actions that make a big difference in just a few minutes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Link 
                key={index}
                href={action.href}
                className="bg-white rounded-xl p-6 border border-blue-100 hover:shadow-md transition-all text-center group"
              >
                <action.icon className="w-8 h-8 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-medium text-black mb-2">{action.title}</h3>
                <p className="text-black text-sm">{action.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section id="newsletter" className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-600 rounded-2xl p-8 lg:p-12 text-white text-center">
              <Mail className="w-12 h-12 mx-auto mb-6" />
              <h2 className="text-3xl lg:text-4xl font-light mb-4">
                Stay Connected
              </h2>
              <p className="text-lg mb-8 text-blue-100 leading-relaxed">
                Join our newsletter to get the latest updates on events, volunteer opportunities, 
                and ways to make a difference in Baltimore County.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 whitespace-nowrap"
                >
                  Subscribe
                </Button>
              </form>
              
              <p className="text-sm text-blue-200">
                We respect your privacy. Unsubscribe at any time. No spam, just updates on how to get involved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="bg-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-light text-black mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-black mb-8 leading-relaxed">
              Not sure where to begin? That's okay! Every Democratic volunteer started somewhere. 
              We'll help you find the perfect way to contribute based on your interests, skills, 
              and available time.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 border border-blue-100">
                <h3 className="text-lg font-medium text-black mb-3">New to Politics?</h3>
                <p className="text-black text-sm mb-4">
                  Start with our volunteer orientation and learn the basics of Democratic organizing.
                </p>
                <Button size="sm" variant="outline" asChild>
                  <Link href="/get-involved/volunteer">
                    Learn More
                  </Link>
                </Button>
              </div>

              <div className="bg-white rounded-lg p-6 border border-blue-100">
                <h3 className="text-lg font-medium text-black mb-3">Experienced Activist?</h3>
                <p className="text-black text-sm mb-4">
                  Jump right in with leadership roles, campaign management, or specialized committees.
                </p>
                <Button size="sm" variant="outline" asChild>
                  <Link href="/about/leadership">
                    Get Involved
                  </Link>
                </Button>
              </div>

              <div className="bg-white rounded-lg p-6 border border-blue-100">
                <h3 className="text-lg font-medium text-black mb-3">Limited Time?</h3>
                <p className="text-black text-sm mb-4">
                  Even small contributions matter. Start with quick actions like voter registration.
                </p>
                <Button size="sm" variant="outline" asChild>
                  <Link href="/voter-resources/register">
                    Quick Actions
                  </Link>
                </Button>
              </div>
            </div>

            <Button size="lg" asChild>
              <Link href="mailto:volunteer@baltimorecountydems.com">
                Contact Us to Get Started
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
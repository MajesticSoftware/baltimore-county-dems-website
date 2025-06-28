import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ElectedOfficialsSection } from '@/components/sections/elected-officials'

export const metadata: Metadata = {
  title: 'Elected Officials - Baltimore County Democratic Party',
  description: 'Meet the Democratic leaders representing Baltimore County at every level of government, working tirelessly to serve our community and advance our shared values.',
}

export default function OfficialsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-light text-black mb-6">
              Our Democratic Elected Officials
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Meet the Democratic leaders representing Baltimore County at every level 
              of government, working tirelessly to serve our community and advance 
              our shared values of equality, opportunity, and progress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/get-involved/volunteer">
                  Support Our Officials
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/get-involved/run-for-office">
                  Run for Office
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Elected Officials Component */}
      <ElectedOfficialsSection />

      {/* How to Contact */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-light text-black mb-8 text-center">
              How to Contact Your Representatives
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-xl font-medium text-black mb-4">Writing Effective Letters</h3>
                <ul className="space-y-2 text-black">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Be specific about the issue and your position</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Include your full name and address</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Reference specific bills or legislation when applicable</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Keep your message concise and professional</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Request a response to your concerns</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-xl font-medium text-black mb-4">Town Halls & Public Meetings</h3>
                <ul className="space-y-2 text-black">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Attend county council meetings (2nd & 4th Tuesdays)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Join virtual or in-person town halls</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Participate in public comment periods</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Follow officials on social media for updates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Sign up for newsletters and alerts</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-600 mb-6">
                Your voice matters! Our elected officials want to hear from constituents 
                about the issues that matter most to you and your community.
              </p>
              <Button size="lg" asChild>
                <Link href="/voter-resources">
                  Learn About Voting
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Democrats */}
      <section className="bg-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-light text-black mb-6">
              Support Democratic Leadership
            </h2>
            <p className="text-lg text-black mb-8 leading-relaxed">
              Help elect more Democrats who will fight for our values and represent 
              the interests of all Baltimore County residents. Every vote, every 
              volunteer hour, and every dollar makes a difference.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 border border-blue-100">
                <h3 className="text-lg font-medium text-black mb-3">Vote</h3>
                <p className="text-black text-sm mb-4">
                  Make your voice heard in every election, from local school board 
                  races to federal contests.
                </p>
                <Button size="sm" variant="outline" asChild>
                  <Link href="/voter-resources/register">
                    Register to Vote
                  </Link>
                </Button>
              </div>

              <div className="bg-white rounded-lg p-6 border border-blue-100">
                <h3 className="text-lg font-medium text-black mb-3">Volunteer</h3>
                <p className="text-black text-sm mb-4">
                  Help with campaigns, voter outreach, and get-out-the-vote efforts 
                  in your community.
                </p>
                <Button size="sm" variant="outline" asChild>
                  <Link href="/get-involved/volunteer">
                    Volunteer Now
                  </Link>
                </Button>
              </div>

              <div className="bg-white rounded-lg p-6 border border-blue-100">
                <h3 className="text-lg font-medium text-black mb-3">Donate</h3>
                <p className="text-black text-sm mb-4">
                  Support Democratic candidates and causes with secure online 
                  contributions through ActBlue.
                </p>
                <Button size="sm" variant="outline" asChild>
                  <Link href="/get-involved/donate">
                    Donate Today
                  </Link>
                </Button>
              </div>
            </div>

            <Button size="lg" asChild>
              <Link href="/get-involved">
                Get Involved Today
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
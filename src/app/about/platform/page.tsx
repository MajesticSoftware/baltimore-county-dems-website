import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  GraduationCap, 
  Heart, 
  DollarSign, 
  Shield, 
  Leaf, 
  Home, 
  Users, 
  Scale,
  Briefcase,
  Globe
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Party Platform - Baltimore County Democratic Party',
  description: 'Learn about our Democratic platform and policy priorities for Baltimore County, including education, healthcare, economic opportunity, and social justice.',
}

interface PlatformIssue {
  icon: any
  title: string
  description: string
  priorities: string[]
}

const platformIssues: PlatformIssue[] = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "Ensuring every child in Baltimore County has access to high-quality, well-funded public education that prepares them for success in college, career, and life.",
    priorities: [
      "Increase per-pupil funding to meet state adequacy standards",
      "Reduce class sizes and hire more teachers and support staff",
      "Expand early childhood education and pre-K programs",
      "Modernize school facilities and technology infrastructure",
      "Support teacher recruitment, retention, and professional development"
    ]
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Making healthcare affordable and accessible for all Baltimore County residents, regardless of income or employment status.",
    priorities: [
      "Expand Medicaid and support the Affordable Care Act",
      "Lower prescription drug costs for seniors and families",
      "Increase funding for mental health and substance abuse services",
      "Support community health centers and rural healthcare access",
      "Protect reproductive rights and women's healthcare"
    ]
  },
  {
    icon: DollarSign,
    title: "Economic Opportunity",
    description: "Building an economy that works for working families, small businesses, and creates good-paying jobs with benefits.",
    priorities: [
      "Raise the minimum wage to a living wage",
      "Support small businesses and entrepreneurship",
      "Invest in job training and workforce development programs",
      "Strengthen collective bargaining rights for workers",
      "Attract green energy and technology industries"
    ]
  },
  {
    icon: Home,
    title: "Affordable Housing",
    description: "Ensuring that all Baltimore County residents have access to safe, affordable housing in communities of their choice.",
    priorities: [
      "Increase affordable housing stock through zoning reform",
      "Prevent displacement and gentrification in existing communities",
      "Support first-time homebuyer assistance programs",
      "Strengthen tenant protections and rental assistance",
      "Address homelessness with housing-first approaches"
    ]
  },
  {
    icon: Shield,
    title: "Public Safety & Justice",
    description: "Creating safe communities through evidence-based public safety strategies and comprehensive criminal justice reform.",
    priorities: [
      "Community policing and police accountability measures",
      "Invest in violence prevention and intervention programs",
      "Reform sentencing disparities and support reentry programs",
      "Expand drug treatment courts and diversion programs",
      "Gun violence prevention and common-sense gun safety laws"
    ]
  },
  {
    icon: Leaf,
    title: "Environment & Climate",
    description: "Protecting our environment and addressing climate change while creating green jobs and sustainable communities.",
    priorities: [
      "Transition to clean, renewable energy sources",
      "Protect the Chesapeake Bay and local waterways",
      "Expand public transit and reduce car dependency",
      "Increase tree canopy and green infrastructure",
      "Support environmental justice in vulnerable communities"
    ]
  },
  {
    icon: Users,
    title: "Civil Rights & Equality",
    description: "Defending civil rights and promoting equality for all people regardless of race, gender, religion, sexual orientation, or background.",
    priorities: [
      "Strengthen anti-discrimination protections",
      "Support LGBTQ+ rights and equality",
      "Promote racial and social justice initiatives",
      "Protect immigrant rights and support pathway to citizenship",
      "Ensure equal access to voting and civic participation"
    ]
  },
  {
    icon: Briefcase,
    title: "Government Reform",
    description: "Making government more transparent, accountable, and responsive to the needs of Baltimore County residents.",
    priorities: [
      "Increase transparency in government operations",
      "Reform campaign finance and ethics rules",
      "Expand citizen participation in decision-making",
      "Improve government efficiency and service delivery",
      "Protect and expand voting rights and access"
    ]
  }
]

export default function PlatformPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-light text-black mb-6">
              Our Democratic Platform
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our platform reflects the values and priorities of Baltimore County Democrats. 
              These are the issues we fight for every day to build a more just, equitable, 
              and prosperous community for all.
            </p>
            <Button size="lg" asChild>
              <Link href="/get-involved">
                Help Advance Our Platform
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-black mb-4">
              Our Core Democratic Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything we do is guided by these fundamental Democratic principles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Equality",
                description: "Equal opportunity and treatment for all people"
              },
              {
                title: "Justice",
                description: "Fair and impartial treatment under the law"
              },
              {
                title: "Opportunity",
                description: "Access to education, jobs, and the American Dream"
              },
              {
                title: "Community",
                description: "Stronger together through collective action"
              }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-blue-100 text-center">
                <h3 className="text-lg font-medium text-black mb-2">{value.title}</h3>
                <p className="text-black text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Issues */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-black mb-4">
              Our Policy Priorities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Detailed policy positions on the issues that matter most to Baltimore County families
            </p>
          </div>

          <div className="space-y-8">
            {platformIssues.map((issue, index) => (
              <div 
                key={index} 
                className={`rounded-xl p-8 border ${index % 2 === 0 ? 'bg-blue-50 border-blue-100' : 'bg-white border-gray-200'}`}
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                      <issue.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-medium text-black mb-3">
                      {issue.title}
                    </h3>
                    <p className="text-black mb-6 leading-relaxed">
                      {issue.description}
                    </p>
                    
                    <div>
                      <h4 className="text-lg font-medium text-black mb-3">Key Priorities:</h4>
                      <ul className="space-y-2">
                        {issue.priorities.map((priority, priorityIndex) => (
                          <li key={priorityIndex} className="flex items-start">
                            <span className="text-blue-600 mr-3 mt-1">•</span>
                            <span className="text-black">{priority}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Involved */}
      <section className="bg-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-light text-black mb-4">
                Help Us Advance Our Platform
              </h2>
              <p className="text-lg text-black leading-relaxed">
                Our platform is only as strong as the people who fight for it. There are many 
                ways you can help advance these Democratic values and priorities in Baltimore County.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6 border border-blue-100">
                <Scale className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-medium text-black mb-3">Advocate</h3>
                <p className="text-black text-sm mb-4">
                  Contact your representatives, attend town halls, and speak up for the issues you care about.
                </p>
                <Button size="sm" variant="outline" asChild>
                  <Link href="/about/officials">
                    Contact Officials
                  </Link>
                </Button>
              </div>

              <div className="bg-white rounded-xl p-6 border border-blue-100">
                <Users className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-medium text-black mb-3">Volunteer</h3>
                <p className="text-black text-sm mb-4">
                  Join campaigns, help with voter outreach, and organize in your community.
                </p>
                <Button size="sm" variant="outline" asChild>
                  <Link href="/get-involved/volunteer">
                    Volunteer Now
                  </Link>
                </Button>
              </div>

              <div className="bg-white rounded-xl p-6 border border-blue-100">
                <Globe className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-medium text-black mb-3">Run for Office</h3>
                <p className="text-black text-sm mb-4">
                  Consider running for local office to directly implement our Democratic values.
                </p>
                <Button size="sm" variant="outline" asChild>
                  <Link href="/get-involved/run-for-office">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" asChild>
                <Link href="/get-involved">
                  Get Involved Today
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Updates */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-light text-black mb-6">
              Platform Development
            </h2>
            <p className="text-lg text-black mb-8 leading-relaxed">
              Our platform is a living document that evolves based on the needs of our community 
              and input from party members. We regularly review and update our positions to ensure 
              they reflect current challenges and Democratic values.
            </p>
            
            <div className="bg-blue-50 rounded-xl p-8 border border-blue-100 mb-8">
              <h3 className="text-xl font-medium text-black mb-4">Have Input on Our Platform?</h3>
              <p className="text-black mb-6">
                We want to hear from party members and community stakeholders about the issues 
                that matter most to you. Your input helps shape our policy positions and priorities.
              </p>
              <Button asChild>
                <Link href="mailto:platform@baltimorecountydems.com">
                  Share Your Ideas
                </Link>
              </Button>
            </div>

            <p className="text-gray-600 text-sm">
              This platform was last updated in January 2025 and reflects the current priorities 
              of the Baltimore County Democratic Party.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
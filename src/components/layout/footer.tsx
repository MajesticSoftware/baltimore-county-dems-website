import React from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone, ExternalLink } from 'lucide-react'

const footerLinks = {
  about: [
    { label: 'Mission & Vision', href: '/about' },
    { label: 'Leadership', href: '/about/leadership' },
    { label: 'Democratic Clubs', href: '/about/clubs' },
    { label: 'Elected Officials', href: '/about/officials' },
  ],
  getInvolved: [
    { label: 'Volunteer', href: '/get-involved/volunteer' },
    { label: 'Donate', href: '/get-involved/donate' },
    { label: 'Become a Member', href: '/get-involved/membership' },
    { label: 'Events Calendar', href: '/events' },
  ],
  resources: [
    { label: 'Register to Vote', href: '/voter-resources/register' },
    { label: 'Polling Locations', href: '/voter-resources/polling' },
    { label: 'Election Dates', href: '/voter-resources/elections' },
    { label: 'News & Updates', href: '/news' },
  ],
  external: [
    { label: 'Maryland Democratic Party', href: 'https://www.mddems.org', external: true },
    { label: 'Democratic National Committee', href: 'https://democrats.org', external: true },
    { label: 'ActBlue', href: 'https://secure.actblue.com', external: true },
  ],
}

export function Footer() {
  return (
    <footer className="bg-blue-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                BC
              </div>
              <div>
                <div className="font-bold text-white">Baltimore County</div>
                <div className="text-sm text-blue-300">Democratic Central Committee</div>
              </div>
            </div>
            <p className="text-sm mb-4 max-w-md">
              The official Democratic Central Committee for Baltimore County, Maryland. Representing Democratic voters and advancing our values through local leadership.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>123 Democratic Way, Towson, MD 21204</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>(410) 555-0123</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@baltimorecountydems.com" className="hover:text-blue-300 transition-colors">
                  info@baltimorecountydems.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 mt-6">
              <a
                href="https://facebook.com/baltimorecountydems"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/bcountydems"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/baltimorecountydems"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="font-semibold text-white mb-4">About Us</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Get Involved</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.getInvolved.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-gray-800">
                <h4 className="font-medium text-white mb-2">External Links</h4>
                <ul className="space-y-2">
                  {footerLinks.external.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-300 transition-colors inline-flex items-center gap-1"
                      >
                        {link.label}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-center md:text-left">
              © {new Date().getFullYear()} Baltimore County Democratic Central Committee. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="hover:text-blue-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-blue-300 transition-colors">
                Terms of Use
              </Link>
              <Link href="/accessibility" className="hover:text-blue-300 transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
          
          <div className="mt-4 text-xs text-gray-500 text-center md:text-left">
            Paid for by the Baltimore County Democratic Central Committee. Not authorized by any candidate or candidate's committee.
          </div>
        </div>
      </div>
    </footer>
  )
}
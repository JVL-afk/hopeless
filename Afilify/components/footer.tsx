import Link from 'next/link'
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-secondary-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">AFFILIFY</h3>
            <p className="mb-4">
              AI-powered affiliate marketing platform that helps you create high-converting websites.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" className="hover:text-primary-400" aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
              <a href="https://facebook.com" className="hover:text-primary-400" aria-label="Facebook">
                <FaFacebook size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-primary-400" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="https://linkedin.com" className="hover:text-primary-400" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-primary-400 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-primary-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-primary-400 transition-colors">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="hover:text-primary-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-primary-400 transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>Email: contact@affilify.eu</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Affiliate St, Marketing City</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {currentYear} AFFILIFY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

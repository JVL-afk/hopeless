'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            AFFILIFY
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 transition-colors">
              Home
            </Link>
            <Link href="/features" className="text-gray-700 hover:text-primary-600 transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-primary-600 transition-colors">
              Pricing
            </Link>
            <Link href="/docs" className="text-gray-700 hover:text-primary-600 transition-colors">
              Documentation
            </Link>
          </nav>
          
          {/* Desktop auth buttons */}
          <div className="hidden md:flex space-x-4">
            <Link href="/login" className="btn-secondary">
              Log in
            </Link>
            <Link href="/signup" className="btn-primary">
              Sign up
            </Link>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-primary-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/features" 
                className="text-gray-700 hover:text-primary-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="/pricing" 
                className="text-gray-700 hover:text-primary-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="/docs" 
                className="text-gray-700 hover:text-primary-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Documentation
              </Link>
              <div className="flex space-x-4 pt-4">
                <Link 
                  href="/login" 
                  className="btn-secondary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link 
                  href="/signup" 
                  className="btn-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign up
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

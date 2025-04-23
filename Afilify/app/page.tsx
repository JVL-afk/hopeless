'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaRocket, FaChartLine, FaCode, FaShieldAlt } from 'react-icons/fa'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                AI-Powered Affiliate Marketing Websites
              </h1>
              <p className="text-xl mb-8">
                Generate high-converting affiliate websites in minutes with our advanced AI technology.
                Analyze any product website and create optimized affiliate content automatically.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/signup" className="btn-primary text-center py-3 px-8 text-lg">
                  Get Started Free
                </Link>
                <Link href="/demo" className="bg-white text-primary-700 hover:bg-gray-100 font-bold py-3 px-8 rounded text-lg text-center">
                  Try Demo
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-2 rounded-lg shadow-xl">
                <div className="bg-gray-100 rounded-lg p-4 h-64 flex items-center justify-center">
                  <p className="text-gray-500 text-center">AI Website Generator Illustration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How AFFILIFY Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform makes it easy to create profitable affiliate marketing websites in just three simple steps.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Analyze Website</h3>
              <p className="text-gray-600">
                Enter the URL of any product website. Our AI will analyze the content, products, pricing, and target audience.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Generate Content</h3>
              <p className="text-gray-600">
                Our AI creates optimized content including product reviews, comparisons, and buying guides with affiliate links.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Launch Website</h3>
              <p className="text-gray-600">
                Deploy your affiliate website with one click. Start earning commissions as visitors convert into customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AFFILIFY combines cutting-edge AI technology with proven marketing strategies to help you create successful affiliate websites.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="flex items-start">
              <div className="mr-4 text-primary-600">
                <FaRocket size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">AI Content Generation</h3>
                <p className="text-gray-600">
                  Our advanced AI creates engaging, SEO-optimized content that converts visitors into customers. Generate product reviews, comparisons, and buying guides automatically.
                </p>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="flex items-start">
              <div className="mr-4 text-primary-600">
                <FaChartLine size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Conversion Optimization</h3>
                <p className="text-gray-600">
                  Every website is designed to maximize conversions with strategic affiliate link placement, compelling call-to-actions, and trust-building elements.
                </p>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="flex items-start">
              <div className="mr-4 text-primary-600">
                <FaCode size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Responsive Design</h3>
                <p className="text-gray-600">
                  All generated websites are fully responsive and optimized for all devices, ensuring a seamless experience for all visitors.
                </p>
              </div>
            </div>
            
            {/* Feature 4 */}
            <div className="flex items-start">
              <div className="mr-4 text-primary-600">
                <FaShieldAlt size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Compliance Ready</h3>
                <p className="text-gray-600">
                  Our system automatically includes necessary affiliate disclosures and ensures your website meets legal requirements for affiliate marketing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Earning?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of successful affiliate marketers who are using AFFILIFY to create profitable websites with minimal effort.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/signup" className="bg-white text-primary-700 hover:bg-gray-100 font-bold py-3 px-8 rounded text-lg">
              Start Free Trial
            </Link>
            <Link href="/pricing" className="border-2 border-white text-white hover:bg-primary-700 font-bold py-3 px-8 rounded text-lg">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

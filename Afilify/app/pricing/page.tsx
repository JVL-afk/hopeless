'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaCheck } from 'react-icons/fa'

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState('monthly')
  
  const plans = [
    {
      name: 'Free',
      price: billingPeriod === 'monthly' ? 0 : 0,
      description: 'Perfect for getting started with affiliate marketing',
      features: [
        'Analyze up to 5 websites per month',
        'Generate 1 affiliate website',
        'Basic content generation',
        'Standard templates',
        'Email support'
      ],
      buttonText: 'Get Started',
      buttonLink: '/signup',
      highlighted: false
    },
    {
      name: 'Pro',
      price: billingPeriod === 'monthly' ? 10 : 96,
      description: 'For serious affiliate marketers looking to scale',
      features: [
        'Analyze up to 20 websites per month',
        'Generate 5 affiliate websites',
        'Advanced content generation',
        'Premium templates',
        'Priority email support',
        'SEO optimization tools',
        'Conversion tracking'
      ],
      buttonText: 'Subscribe Now',
      buttonLink: '/checkout?plan=pro',
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: billingPeriod === 'monthly' ? 50 : 480,
      description: 'For agencies and professional marketers',
      features: [
        'Unlimited website analysis',
        'Unlimited affiliate websites',
        'Advanced AI content generation',
        'Custom templates',
        'Priority phone & email support',
        'Advanced SEO tools',
        'Conversion optimization',
        'White-label options',
        'API access'
      ],
      buttonText: 'Contact Sales',
      buttonLink: '/checkout?plan=enterprise',
      highlighted: false
    }
  ]
  
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the plan that's right for your affiliate marketing needs. All plans include our core AI-powered website generation technology.
          </p>
          
          {/* Billing toggle */}
          <div className="flex items-center justify-center mb-8">
            <span className={`mr-4 ${billingPeriod === 'monthly' ? 'text-primary-600 font-bold' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button 
              className="relative w-16 h-8 bg-gray-200 rounded-full p-1 transition duration-300 ease-in-out"
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annual' : 'monthly')}
            >
              <div 
                className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
                  billingPeriod === 'annual' ? 'translate-x-8' : ''
                }`} 
              />
            </button>
            <span className={`ml-4 ${billingPeriod === 'annual' ? 'text-primary-600 font-bold' : 'text-gray-500'}`}>
              Annual <span className="text-green-500 text-sm font-medium">Save 20%</span>
            </span>
          </div>
        </div>
        
        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-lg overflow-hidden ${
                plan.highlighted 
                  ? 'shadow-xl border-2 border-primary-500 transform md:-translate-y-4' 
                  : 'shadow-md border border-gray-200'
              }`}
            >
              {plan.highlighted && (
                <div className="bg-primary-500 text-white text-center py-2 font-bold">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  {plan.price > 0 && (
                    <span className="text-gray-500">/{billingPeriod === 'monthly' ? 'month' : 'year'}</span>
                  )}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <Link 
                  href={plan.buttonLink}
                  className={`block text-center py-2 px-4 rounded font-bold mb-8 ${
                    plan.highlighted 
                      ? 'bg-primary-600 hover:bg-primary-700 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  {plan.buttonText}
                </Link>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">Can I upgrade my plan later?</h3>
              <p className="text-gray-600">
                Yes, you can upgrade your plan at any time. The price difference will be prorated for the remainder of your billing period.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">Is there a free trial?</h3>
              <p className="text-gray-600">
                Yes, our Free plan allows you to try the core features of AFFILIFY without any time limitations.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept all major credit cards and PayPal. Enterprise customers can also pay via invoice.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">Can I cancel my subscription?</h3>
              <p className="text-gray-600">
                Yes, you can cancel your subscription at any time from your account dashboard. You'll continue to have access until the end of your billing period.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

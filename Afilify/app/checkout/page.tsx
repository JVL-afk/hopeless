'use client'

import { Suspense } from 'react'
import CheckoutPage from './path/to/CheckoutPage';
import { useSearchParams } from 'react-router-dom';
import Link from 'next/link'
import { FaPaypal, FaCreditCard, FaArrowLeft } from 'react-icons/fa'

export default function CheckoutPage() { 
  const searchParams = useSearchParams();
  const paramValue = searchParams.get('key'); // Replace 'key' with the query parameter you need
  
  return <div>Checkout Page - Key Value: {paramValue}</div>;
}
    <Suspense fallback={<div>Loading...</div>}>
      <CheckoutPage />
    </Suspense>
     
  const searchParams = useSearchParams()
  const planParam = searchParams.get('plan')
  
  const [plan, setPlan] = useState({
    name: 'Pro',
    price: 10,
    billingPeriod: 'monthly'
  })
  
  const [paymentMethod, setPaymentMethod] = useState('paypal')
  const [isProcessing, setIsProcessing] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  
  useEffect(() => {
    // Set plan based on URL parameter
    if (planParam === 'enterprise') {
      setPlan({
        name: 'Enterprise',
        price: 50,
        billingPeriod: 'monthly'
      })
    }
  }, [planParam])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsProcessing(true)
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setIsSuccess(true)
    }, 2000)
  }
  
  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <div className="rounded-full h-24 w-24 flex items-center justify-center mx-auto bg-green-100">
            <svg className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Payment Successful!</h2>
          <p className="mt-2 text-lg text-gray-600">
            Thank you for subscribing to AFFILIFY {plan.name}.
          </p>
          <p className="mt-1 text-gray-500">
            A confirmation email has been sent to your email address.
          </p>
          <div className="mt-8">
            <Link href="/" className="text-primary-600 hover:text-primary-500 font-medium">
              Return to Dashboard
            </Link>
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <Link href="/pricing" className="flex items-center text-primary-600 hover:text-primary-500">
            <FaArrowLeft className="mr-2" />
            Back to Pricing
          </Link>
        </div>
        
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h1 className="text-2xl font-bold text-gray-900">Checkout</h1>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Complete your subscription to AFFILIFY {plan.name}
            </p>
          </div>
          
          <div className="border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Order Summary */}
              <div className="md:col-span-1 bg-gray-50 p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
                <div className="flex justify-between mb-2">
                  <span>Plan:</span>
                  <span className="font-medium">{plan.name}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Billing Period:</span>
                  <span>{plan.billingPeriod}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Price:</span>
                  <span>${plan.price}/{plan.billingPeriod}</span>
                </div>
                <div className="border-t border-gray-200 my-4 pt-4">
                  <div className="flex justify-between font-bold">
                    <span>Total:</span>
                    <span>${plan.price}</span>
                  </div>
                </div>
              </div>
              
              {/* Payment Form */}
              <div className="md:col-span-2 p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Payment Method</h2>
                
                <div className="mb-6">
                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('paypal')}
                      className={`flex items-center justify-center px-4 py-2 border rounded-md ${
                        paymentMethod === 'paypal'
                          ? 'border-primary-500 bg-primary-50 text-primary-700'
                          : 'border-gray-300 text-gray-700'
                      }`}
                    >
                      <FaPaypal className="mr-2 text-blue-600" />
                      PayPal
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`flex items-center justify-center px-4 py-2 border rounded-md ${
                        paymentMethod === 'card'
                          ? 'border-primary-500 bg-primary-50 text-primary-700'
                          : 'border-gray-300 text-gray-700'
                      }`}
                    >
                      <FaCreditCard className="mr-2" />
                      Credit Card
                    </button>
                  </div>
                </div>
                
                {paymentMethod === 'paypal' ? (
                  <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-6">
                    <div className="flex items-center justify-center mb-4">
                      <FaPaypal className="text-blue-600 text-3xl" />
                    </div>
                    <p className="text-center text-gray-700 mb-4">
                      You will be redirected to PayPal to complete your payment.
                    </p>
                    <button
                      onClick={handleSubmit}
                      disabled={isProcessing}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      {isProcessing ? 'Processing...' : 'Pay with PayPal'}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="card-name" className="block text-sm font-medium text-gray-700">
                        Name on card
                      </label>
                      <input
                        type="text"
                        id="card-name"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                        placeholder="John Smith"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
                        Card number
                      </label>
                      <input
                        type="text"
                        id="card-number"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                        placeholder="4242 4242 4242 4242"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="expiration" className="block text-sm font-medium text-gray-700">
                          Expiration date
                        </label>
                        <input
                          type="text"
                          id="expiration"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                          placeholder="MM/YY"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                          CVC
                        </label>
                        <input
                          type="text"
                          id="cvc"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                          placeholder="123"
                          required
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={isProcessing}
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      {isProcessing ? 'Processing...' : `Pay $${plan.price}`}
                    </button>
                  </form>
                )}
                
                <div className="mt-6 text-center text-sm text-gray-500">
                  <p>
                    By completing this purchase, you agree to our{' '}
                    <Link href="/terms" className="text-primary-600 hover:text-primary-500">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="text-primary-600 hover:text-primary-500">
                      Privacy Policy
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

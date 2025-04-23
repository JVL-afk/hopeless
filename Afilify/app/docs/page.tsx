export const metadata = {
  title: 'Documentation - AFFILIFY',
  description: 'Documentation and guides for using the AFFILIFY platform',
}

export default function DocsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Documentation</h1>
      
      <div className="prose prose-lg">
        <p className="lead">
          Welcome to the AFFILIFY documentation. Here you'll find comprehensive guides and documentation to help you start working with our platform as quickly as possible.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Getting Started</h2>
            <p className="mb-4">Learn the basics of AFFILIFY and create your first affiliate website.</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Platform overview</li>
              <li>Creating an account</li>
              <li>Subscription plans</li>
              <li>Your first project</li>
            </ul>
            <a href="#" className="text-primary-600 hover:text-primary-800 font-medium">Read Getting Started Guide →</a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Website Analysis</h2>
            <p className="mb-4">Learn how to analyze websites to extract valuable affiliate marketing data.</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Analyzing competitor websites</li>
              <li>Product extraction</li>
              <li>Content structure analysis</li>
              <li>Audience targeting</li>
            </ul>
            <a href="#" className="text-primary-600 hover:text-primary-800 font-medium">Read Analysis Guide →</a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Website Generation</h2>
            <p className="mb-4">Learn how to generate high-converting affiliate websites.</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Template selection</li>
              <li>Content customization</li>
              <li>Affiliate link integration</li>
              <li>SEO optimization</li>
            </ul>
            <a href="#" className="text-primary-600 hover:text-primary-800 font-medium">Read Generation Guide →</a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">API Integration</h2>
            <p className="mb-4">Learn how to integrate AFFILIFY with your existing systems.</p>
            <ul className="list-disc pl-6 mb-4">
              <li>API key management</li>
              <li>Authentication</li>
              <li>Endpoints reference</li>
              <li>Code examples</li>
            </ul>
            <a href="#" className="text-primary-600 hover:text-primary-800 font-medium">Read API Documentation →</a>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mt-12 mb-4">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium">How do I get an API key?</h3>
            <p>
              API keys can be generated from your account dashboard. Go to Settings → API Keys and click "Generate New Key".
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium">What payment methods do you accept?</h3>
            <p>
              We accept credit/debit cards and PayPal for all subscription plans.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium">Can I cancel my subscription?</h3>
            <p>
              Yes, you can cancel your subscription at any time from your account settings. Your access will continue until the end of your current billing period.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium">Is there a limit to how many websites I can analyze?</h3>
            <p>
              The number of websites you can analyze depends on your subscription plan. Free users can analyze up to 3 websites per month, Pro users get 50 per month, and Enterprise users have unlimited access.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium">How do I get support?</h3>
            <p>
              For technical support, you can contact our team at support@affilify.eu or use the live chat feature in your dashboard.
            </p>
          </div>
        </div>
        
        <div className="bg-gray-100 p-6 rounded-lg mt-12">
          <h2 className="text-xl font-semibold mb-4">Need Help?</h2>
          <p className="mb-4">
            Our support team is available to assist you with any questions or issues you may have.
          </p>
          <a href="#" className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded">
            Contact Support
          </a>
        </div>
      </div>
    </div>
  )
}

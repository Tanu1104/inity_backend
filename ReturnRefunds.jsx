import React from "react";

const ReturnsRefund = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-32 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Returns & Refunds Policy</h1>
        <p className="text-gray-400 mb-8">
          Learn about our return and refund procedures, eligibility criteria, and timelines.
        </p>

        <div className="space-y-8">
          <div className="border border-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-green-500">Return Eligibility</h2>
            <div className="space-y-4">
              <div className="bg-gray-900 p-4 rounded">
                <h3 className="text-lg font-medium mb-2">30-Day Return Window</h3>
                <p className="text-gray-400">
                  You may return any Sunbird product within 30 days of delivery for a full refund or exchange. 
                  Products must be in original condition with all accessories and packaging.
                </p>
              </div>
              <div className="bg-gray-900 p-4 rounded">
                <h3 className="text-lg font-medium mb-2">Conditions for Return</h3>
                <ul className="text-gray-400 list-disc pl-5 space-y-2">
                  <li>Product must be in original, undamaged packaging</li>
                  <li>All accessories and manuals must be included</li>
                  <li>Proof of purchase is required</li>
                  <li>Products must show no signs of misuse or damage</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border border-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-green-500">Refund Process</h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-900 p-4 rounded text-center">
                  <div className="text-3xl font-bold text-green-500 mb-2">1</div>
                  <h3 className="font-medium mb-2">Initiate Return</h3>
                  <p className="text-gray-400 text-sm">
                    Contact support or use our online portal to request a return authorization
                  </p>
                </div>
                <div className="bg-gray-900 p-4 rounded text-center">
                  <div className="text-3xl font-bold text-green-500 mb-2">2</div>
                  <h3 className="font-medium mb-2">Ship Product</h3>
                  <p className="text-gray-400 text-sm">
                    Use provided shipping label to return product to our warehouse
                  </p>
                </div>
                <div className="bg-gray-900 p-4 rounded text-center">
                  <div className="text-3xl font-bold text-green-500 mb-2">3</div>
                  <h3 className="font-medium mb-2">Receive Refund</h3>
                  <p className="text-gray-400 text-sm">
                    Refund processed within 5-7 business days after inspection
                  </p>
                </div>
              </div>
              <div className="bg-[#0a0a0a] p-4 rounded">
                <p className="text-gray-300">
                  <strong>Note:</strong> Refunds are issued to the original payment method. 
                  Processing times may vary based on your bank or payment provider.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-green-500">Warranty Claims</h2>
            <div className="space-y-4">
              <div className="bg-gray-900 p-4 rounded">
                <h3 className="text-lg font-medium mb-2">1-Year Limited Warranty</h3>
                <p className="text-gray-400">
                  All Sunbird products come with a 1-year warranty covering manufacturing defects. 
                  Warranty claims require proof of purchase and product inspection.
                </p>
              </div>
              <div className="bg-gray-900 p-4 rounded">
                <h3 className="text-lg font-medium mb-2">Warranty Exclusions</h3>
                <ul className="text-gray-400 list-disc pl-5 space-y-2">
                  <li>Damage caused by accidents, misuse, or unauthorized modifications</li>
                  <li>Normal wear and tear or cosmetic damage</li>
                  <li>Products purchased from unauthorized retailers</li>
                  <li>Batteries after 6 months of normal use</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border border-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-green-500">Start a Return</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900 p-5 rounded">
                <h3 className="text-lg font-medium mb-3">Online Portal</h3>
                <p className="text-gray-400 mb-4">
                  Initiate returns quickly through our self-service portal:
                </p>
                <button className="w-full px-4 py-3 bg-green-600 hover:bg-green-700 rounded font-medium">
                  Start Return Online
                </button>
              </div>
              <div className="bg-gray-900 p-5 rounded">
                <h3 className="text-lg font-medium mb-3">Contact Support</h3>
                <p className="text-gray-400 mb-4">
                  Need assistance? Our support team can help with your return:
                </p>
                <div className="space-y-2">
                  <p className="text-gray-400">📞 <strong>Phone:</strong> 1-800-SUNBIRD</p>
                  <p className="text-gray-400">📧 <strong>Email:</strong> returns@sunbird.com</p>
                  <p className="text-gray-400 text-sm">Available: Mon-Fri, 9 AM - 6 PM EST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnsRefund;
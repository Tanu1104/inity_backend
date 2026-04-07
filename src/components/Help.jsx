import React from "react";

const Help = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-32 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Help Center</h1>
        <p className="text-gray-400 mb-8">
          Welcome to the Sunbird Help Center. Get assistance with product setup, troubleshooting, and more.
        </p>

        <div className="space-y-8">
          <div className="border border-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-green-500">Product Setup Guides</h2>
            <div className="space-y-4">
              <div className="bg-gray-900 p-4 rounded">
                <h3 className="text-lg font-medium mb-2">Setting Up Your Sunbird Headphones</h3>
                <p className="text-gray-400">
                  Learn how to pair your Sunbird wireless headphones with Bluetooth devices, adjust settings, and use advanced features.
                </p>
              </div>
              <div className="bg-gray-900 p-4 rounded">
                <h3 className="text-lg font-medium mb-2">Sunbird App Installation</h3>
                <p className="text-gray-400">
                  Download and install the Sunbird companion app for custom EQ settings, firmware updates, and more.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-green-500">Troubleshooting</h2>
            <div className="space-y-4">
              <div className="bg-gray-900 p-4 rounded">
                <h3 className="text-lg font-medium mb-2">Connection Issues</h3>
                <ul className="text-gray-400 list-disc pl-5 space-y-2">
                  <li>Ensure Bluetooth is enabled on your device</li>
                  <li>Keep device within 10 meters range</li>
                  <li>Reset headphones by holding power button for 10 seconds</li>
                  <li>Update device Bluetooth drivers</li>
                </ul>
              </div>
              <div className="bg-gray-900 p-4 rounded">
                <h3 className="text-lg font-medium mb-2">Battery Problems</h3>
                <ul className="text-gray-400 list-disc pl-5 space-y-2">
                  <li>Charge for at least 2 hours for first-time use</li>
                  <li>Use original Sunbird charging cable</li>
                  <li>Clean charging port if connection is loose</li>
                  <li>Reset battery by fully discharging then charging</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border border-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-green-500">Contact Support</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900 p-5 rounded">
                <h3 className="text-lg font-medium mb-3">Email Support</h3>
                <p className="text-gray-400 mb-3">Get detailed assistance via email:</p>
                <a href="mailto:support@sunbird.com" className="text-green-500 hover:text-green-400">
                  support@sunbird.com
                </a>
                <p className="text-gray-400 text-sm mt-2">Response time: 24-48 hours</p>
              </div>
              <div className="bg-gray-900 p-5 rounded">
                <h3 className="text-lg font-medium mb-3">Live Chat</h3>
                <p className="text-gray-400 mb-3">Instant assistance available:</p>
                <button className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded font-medium">
                  Start Live Chat
                </button>
                <p className="text-gray-400 text-sm mt-2">Available: 9 AM - 9 PM (EST)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
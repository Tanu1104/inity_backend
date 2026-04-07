import React, { useState } from "react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const faqItems = [
    {
      id: 1,
      question: "How do I pair Sunbird headphones with my device?",
      answer: "To pair your Sunbird headphones, first turn them on by holding the power button for 3 seconds. Enable Bluetooth on your device and select 'Sunbird [Model Name]' from the available devices list. The headphones will automatically enter pairing mode when turned on for the first time."
    },
    {
      id: 2,
      question: "What is the battery life of Sunbird headphones?",
      answer: "Sunbird headphones offer up to 30 hours of playback time on a single charge. With active noise cancellation enabled, battery life reduces to approximately 25 hours. Quick charge feature provides 3 hours of playback with just 15 minutes of charging."
    },
    {
      id: 3,
      question: "Are Sunbird headphones waterproof?",
      answer: "Sunbird headphones feature IPX4 water resistance, meaning they are splash-proof and sweat-resistant. They can withstand light rain and sweat during workouts, but should not be submerged in water or used while swimming."
    },
    {
      id: 4,
      question: "How do I reset my Sunbird headphones?",
      answer: "To reset your headphones: 1) Turn them off. 2) Press and hold the volume up and volume down buttons simultaneously for 10 seconds. 3) Release when the LED indicator flashes red and blue. This will clear all paired devices and restore factory settings."
    },
    {
      id: 5,
      question: "What devices are compatible with Sunbird headphones?",
      answer: "Sunbird headphones are compatible with all Bluetooth 5.0+ enabled devices including smartphones (iOS and Android), tablets, laptops, and smart TVs. They also support voice assistants like Siri, Google Assistant, and Alexa."
    },
    {
      id: 6,
      question: "How do I update the firmware on my Sunbird headphones?",
      answer: "Firmware updates can be performed through the Sunbird companion app. Connect your headphones to the app via Bluetooth, and if an update is available, you'll see a notification. Ensure your headphones have at least 50% battery before starting the update process."
    },
    {
      id: 7,
      question: "What warranty do Sunbird products have?",
      answer: "All Sunbird products come with a 1-year limited warranty covering manufacturing defects. The warranty begins from the date of purchase and requires proof of purchase. Extended warranty options are available for purchase."
    },
    {
      id: 8,
      question: "How do I clean my Sunbird headphones?",
      answer: "Use a soft, dry cloth to clean the exterior. For ear cushions, use a slightly damp cloth with mild soap and water. Never use alcohol-based cleaners or submerge the headphones in water. Allow to dry completely before use."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-32 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
        <p className="text-gray-400 mb-8">
          Find answers to common questions about Sunbird products and services.
        </p>

        <div className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.id} className="border border-gray-800 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full text-left p-6 bg-gray-900 hover:bg-gray-800 transition-colors duration-300 flex justify-between items-center"
              >
                <span className="text-lg font-medium">{item.question}</span>
                <span className="text-green-500 text-2xl">
                  {openItems[item.id] ? "−" : "+"}
                </span>
              </button>
              {openItems[item.id] && (
                <div className="p-6 bg-[#0a0a0a] border-t border-gray-800">
                  <p className="text-gray-300">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 border border-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-green-500">Can't Find Your Question?</h2>
          <p className="text-gray-400 mb-4">
            If you didn't find the answer you were looking for, our support team is here to help.
          </p>
          <div className="flex gap-4">
            <a 
              href="mailto:support@sunbird.com" 
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded font-medium transition-colors duration-300"
            >
              Email Us
            </a>
            <button className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded font-medium transition-colors duration-300">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
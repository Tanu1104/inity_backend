import React from 'react';

const ContactUs = () => {
  return (
    <section className="py-24 px-6 lg:px-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-black italic mb-4">Contact Us</h1>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
          We'd love to hear from you. Whether you have a question about our products, need assistance with an order, or just want to share your feedback, please don't hesitate to reach out.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-400">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-cyan-500 text-white font-bold uppercase px-6 py-3 rounded"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="lg:w-1/2">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold">Email Us</h3>
              <p className="text-zinc-400">
                <a href="mailto:support@sunbird.com" className="text-cyan-400">support@sunbird.com</a>
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Call Us</h3>
              <p className="text-zinc-400">+1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Our Location</h3>
              <div className="mt-2 h-64 bg-gray-800 rounded-md flex items-center justify-center text-zinc-400">
                Map Placeholder
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

const AllSupport = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-32 flex justify-center">

      {/* CENTER CONTAINER */}
      <div className="w-full max-w-4xl px-6 text-center">

        <h1 className="text-4xl font-bold mb-6">
          All Supports
        </h1>

        <p className="text-gray-400 mb-10">
          Welcome to the Sunbird Support Center. Get help, guides, FAQs, and
          after-sales services all in one place.
        </p>

        {/* SUPPORT CARDS */}
        <div className="grid md:grid-cols-2 gap-8">

          <div className="border border-gray-800 p-6 rounded-lg hover:border-gray-600 transition">
            <h3 className="text-xl font-semibold mb-2">
              Help Center
            </h3>
            <p className="text-gray-400 mb-4">
              Find answers to common questions and product issues.
            </p>
            <button className="px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200 transition">
              Get Help
            </button>
          </div>

          <div className="border border-gray-800 p-6 rounded-lg hover:border-gray-600 transition">
            <h3 className="text-xl font-semibold mb-2">
              FAQs
            </h3>
            <p className="text-gray-400 mb-4">
              Browse frequently asked questions about Sunbird products.
            </p>
            <button className="px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200 transition">
              View FAQs
            </button>
          </div>

          <div className="border border-gray-800 p-6 rounded-lg hover:border-gray-600 transition">
            <h3 className="text-xl font-semibold mb-2">
              Returns & Refunds
            </h3>
            <p className="text-gray-400 mb-4">
              Learn about return policies and refund procedures.
            </p>
            <button className="px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200 transition">
              Returns Info
            </button>
          </div>

          <div className="border border-gray-800 p-6 rounded-lg hover:border-gray-600 transition">
            <h3 className="text-xl font-semibold mb-2">
              Shipping Guide
            </h3>
            <p className="text-gray-400 mb-4">
              Track orders and understand shipping timelines.
            </p>
            <button className="px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200 transition">
              Shipping Details
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default AllSupport;

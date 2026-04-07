const Warranty = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-32 flex justify-center">
      
      {/* CENTER CONTAINER */}
      <div className="w-full max-w-4xl px-6 text-center">

        <h1 className="text-4xl font-bold mb-6">
          Registration & Warranty
        </h1>

        <p className="text-gray-400 mb-10">
          Register your Sunbird product to activate warranty benefits and
          access exclusive services.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="border border-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              Product Registration
            </h3>
            <p className="text-gray-400 mb-4">
              Register your Sunbird device using the product serial number.
            </p>
            <button className="px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200 transition">
              Register Product
            </button>
          </div>

          <div className="border border-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              Warranty Status
            </h3>
            <p className="text-gray-400 mb-4">
              Check warranty period and service eligibility.
            </p>
            <button className="px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200 transition">
              Check Warranty
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Warranty;

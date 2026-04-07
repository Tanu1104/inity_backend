import React from "react";

const Checkout = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-[#0f1115] text-white px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Shipping Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6 italic uppercase">Shipping Address</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-zinc-700 py-3 focus:border-[#44d62c] outline-none transition-colors" />
              <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-zinc-700 py-3 focus:border-[#44d62c] outline-none transition-colors" />
              <input type="text" placeholder="Address Line 1" className="w-full bg-transparent border-b border-zinc-700 py-3 focus:border-[#44d62c] outline-none transition-colors" />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="City" className="w-full bg-transparent border-b border-zinc-700 py-3 focus:border-[#44d62c] outline-none transition-colors" />
                <input type="text" placeholder="PIN Code" className="w-full bg-transparent border-b border-zinc-700 py-3 focus:border-[#44d62c] outline-none transition-colors" />
              </div>
            </form>
          </div>

          {/* Payment Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6 italic uppercase">Payment</h2>
            <div className="space-y-4">
              <div className="p-4 border border-[#44d62c] bg-[#44d62c]/5 rounded-sm flex items-center gap-3">
                <input type="radio" checked readOnly className="accent-[#44d62c]" />
                <label className="font-bold">UPI / Cards / Net Banking</label>
              </div>
              <div className="p-4 border border-zinc-800 rounded-sm flex items-center gap-3 opacity-50">
                <input type="radio" disabled className="accent-[#44d62c]" />
                <label>Cash on Delivery (Unavailable)</label>
              </div>
              
              <div className="mt-10 pt-6 border-t border-zinc-800">
                <button className="w-full bg-white text-black font-black py-4 hover:bg-[#44d62c] hover:text-black transition-all uppercase italic">
                  Complete Purchase
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
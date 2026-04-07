import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  // Mock data - in a real app, this comes from state/context
  const cartItems = [
    { id: 1, name: "Sunbird Stealth Buds", price: 4999, image: "/path-to-image", qty: 1 },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="pt-32 pb-20 min-h-screen bg-[#0f1115] text-white px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 italic uppercase tracking-tighter">Your Bag</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: Items List */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 bg-zinc-900/50 p-4 border border-zinc-800 rounded-sm">
                <div className="w-24 h-24 bg-zinc-800 rounded-sm"></div>
                <div className="flex-1 flex justify-between">
                  <div>
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-zinc-400 text-sm">Color: Matte Black</p>
                    <p className="mt-2 font-mono text-[#44d62c]">₹{item.price}</p>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <button className="text-zinc-500 hover:text-red-500 text-xs uppercase font-bold">Remove</button>
                    <div className="flex items-center border border-zinc-700">
                      <button className="px-3 py-1 hover:bg-zinc-800">-</button>
                      <span className="px-3 py-1 border-x border-zinc-700">{item.qty}</span>
                      <button className="px-3 py-1 hover:bg-zinc-800">+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Summary */}
          <div className="bg-zinc-900 p-6 border border-zinc-800 h-fit">
            <h2 className="text-xl font-bold mb-4 uppercase">Order Summary</h2>
            <div className="space-y-3 text-sm border-b border-zinc-800 pb-4">
              <div className="flex justify-between">
                <span className="text-zinc-400">Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Shipping</span>
                <span className="text-[#44d62c]">FREE</span>
              </div>
            </div>
            <div className="flex justify-between py-4 text-xl font-bold">
              <span>Total</span>
              <span>₹{subtotal}</span>
            </div>
            <button 
              onClick={() => navigate("/checkout")}
              className="w-full bg-[#44d62c] text-black font-bold py-4 hover:bg-[#38b324] transition-colors uppercase italic"
            >
              Checkout Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
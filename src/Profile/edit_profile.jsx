import React from "react";

const EditProfile = () => {
  const user = {
    firstName: "Tanu",
    lastName: "Bidkar",
    gender: "Female",
    email: "",
    mobile: "+91-9192XXXXXX",
  };

  return (
    <div className="bg-[#0f1115] text-white min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-black tracking-tight">My Profile</h1>
          <p className="text-zinc-400">Manage your personal information and account settings.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-4">
            <div className="bg-zinc-900/40 border border-zinc-800 rounded-sm p-4">
              <p className="text-zinc-400 text-sm font-bold uppercase tracking-widest mb-2">My Orders</p>
              <div className="text-zinc-300">View your order history</div>
            </div>

            <div className="bg-zinc-900/40 border border-zinc-800 rounded-sm p-4">
              <p className="text-zinc-400 text-sm font-bold uppercase tracking-widest mb-4">Account Settings</p>
              <ul className="space-y-3">
                <li className="flex items-center justify-between">
                  <span className="text-white font-medium">Profile Information</span>
                  <span className="text-[#44d62c] text-xs font-bold uppercase">Active</span>
                </li>
                <li className="text-zinc-400">Manage Addresses</li>
                <li className="text-zinc-400">PAN Card Information</li>
              </ul>
            </div>

            <div className="bg-zinc-900/40 border border-zinc-800 rounded-sm p-4">
              <p className="text-zinc-400 text-sm font-bold uppercase tracking-widest mb-2">Payments</p>
              <ul className="space-y-3">
                <li className="text-zinc-400">Gift Cards</li>
                <li className="text-zinc-400">Saved UPI</li>
              </ul>
            </div>
          </aside>

          {/* Content */}
          <section className="lg:col-span-3 space-y-8">
            {/* Personal Information */}
            <div className="bg-zinc-900/40 border border-zinc-800 rounded-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Personal Information</h2>
                <button className="text-[#44d62c] font-bold hover:underline">Edit</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-zinc-400 text-xs uppercase tracking-widest mb-2">First Name</label>
                  <input disabled value={user.firstName} className="w-full bg-zinc-800/60 border border-zinc-700 rounded-sm p-3 text-white" />
                </div>
                <div>
                  <label className="block text-zinc-400 text-xs uppercase tracking-widest mb-2">Last Name</label>
                  <input disabled value={user.lastName} className="w-full bg-zinc-800/60 border border-zinc-700 rounded-sm p-3 text-white" />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-zinc-400 text-xs uppercase tracking-widest mb-2">Your Gender</label>
                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="gender" checked={user.gender === "Male"} readOnly />
                    <span>Male</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="gender" checked={user.gender === "Female"} readOnly />
                    <span>Female</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Email Address */}
            <div className="bg-zinc-900/40 border border-zinc-800 rounded-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Email Address</h2>
                <button className="text-[#44d62c] font-bold hover:underline">Edit</button>
              </div>
              <input disabled placeholder="Not added" value={user.email} className="w-full bg-zinc-800/60 border border-zinc-700 rounded-sm p-3 text-white" />
            </div>

            {/* Mobile Number */}
            <div className="bg-zinc-900/40 border border-zinc-800 rounded-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Mobile Number</h2>
                <button className="text-[#44d62c] font-bold hover:underline">Edit</button>
              </div>
              <input disabled value={user.mobile} className="w-full bg-zinc-800/60 border border-zinc-700 rounded-sm p-3 text-white" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
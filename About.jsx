import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const milestones = [
    { year: "2025", event: "Sunbird Founded" },
    { year: "2026", event: "Launch of the First Immersive Headset" },
    { year: "2028", event: "Global Expansion & Innovation Lab" },
  ];

  return (
    <div className="bg-[#0f1115] text-white min-h-screen pt-20">
      {/* 🔹 HERO SECTION */}
      <div className="relative h-[400px] w-full overflow-hidden flex items-center border-b border-zinc-800">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=2000&auto=format&fit=crop" 
          alt="Audio Tech" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-8 w-full">
          <h1 className="text-6xl font-black italic tracking-tighter uppercase leading-none">
            Our <span className="text-[#44d62c]">Journey</span>
          </h1>
          <p className="text-xl text-zinc-400 mt-4 max-w-lg uppercase tracking-widest font-medium">
            Crafting the future of sound since 2025.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* 🔹 LEFT CONTENT: WHO WE ARE */}
          <div className="space-y-12">
            <section>
              <h2 className="text-[#44d62c] text-xl font-bold uppercase tracking-widest mb-6">Who We Are</h2>
              <p className="text-zinc-400 leading-relaxed text-lg">
                At <span className="text-white font-bold">Sunbird</span>, we are engineers, gamers, and audiophiles 
                united by a passion for unparalleled sound experiences. Founded in 2025, our mission is to 
                blend cutting-edge technology with ergonomic design to create products that improve 
                every moment—whether you're gaming, creating, or relaxing.
              </p>
            </section>

            <section>
              <h2 className="text-[#44d62c] text-xl font-bold uppercase tracking-widest mb-6">Our Philosophy</h2>
              <p className="text-zinc-400 leading-relaxed text-lg">
                We believe audio is more than just sound; it's a tool for immersion and competitive advantage. 
                Our team meticulously tunes every driver and ensures every material meets the high standards 
                of professional esports athletes.
              </p>
            </section>

            <button 
              onClick={() => navigate('/shop')}
              className="bg-[#44d62c] text-black font-bold py-4 px-8 uppercase tracking-widest hover:bg-[#32a822] transition-all transform hover:-translate-y-1"
            >
              Explore Products
            </button>
          </div>

          {/* 🔹 RIGHT CONTENT: TEAM & MILESTONES */}
          <div className="space-y-16">
            {/* TEAM PREVIEW */}
            <section>
              <h2 className="text-zinc-500 text-xs font-bold uppercase tracking-[0.3em] mb-10 text-center">Precision. Performance. Passion.</h2>
              <div className="flex justify-center gap-8">
                {[1, 2, 3].map((member) => (
                  <div key={member} className="text-center group">
                    <div className="w-24 h-24 rounded-full border-2 border-[#44d62c] p-1 mb-4 group-hover:scale-110 transition duration-300">
                      <div className="w-full h-full rounded-full bg-zinc-800 overflow-hidden">
                        <img src={`https://i.pravatar.cc/150?img=${member + 10}`} alt="Team" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <p className="text-xs font-bold uppercase text-white">Lead Engineer</p>
                  </div>
                ))}
              </div>
            </section>

            {/* MILESTONES TIMELINE */}
            <section className="bg-zinc-900/30 p-8 border border-zinc-800 rounded-sm">
              <h2 className="text-[#44d62c] text-xl font-bold uppercase tracking-widest mb-8">Milestones</h2>
              <div className="space-y-8 relative">
                <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-zinc-800" />
                {milestones.map((item, index) => (
                  <div key={index} className="flex gap-6 relative z-10 items-start">
                    <div className="w-4 h-4 rounded-full bg-[#44d62c] mt-1 shadow-[0_0_10px_#44d62c]" />
                    <div>
                      <span className="text-zinc-500 text-sm font-bold">{item.year}</span>
                      <p className="text-zinc-200 font-medium">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
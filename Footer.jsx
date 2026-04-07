import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  // We no longer need handleFooterNavigation or useNavigate 
  // because App.jsx handles the scroll-to-top globally!

  return (
    <footer className="bg-black text-gray-400 pt-16 pb-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-8">

        {/* TOP FOOTER - Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 border-b border-gray-800 pb-12">

          {/* BRAND SECTION */}
          <div className="md:col-span-1">
            <h3 className="text-white text-xl font-bold mb-2 italic tracking-tighter">SUNBIRD</h3>
            <p className="text-xs text-zinc-500 uppercase tracking-widest">High-Fidelity Audio</p>
          </div>

          {/* SHOP COLUMN */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="hover:text-[#44d62c] transition">Sunbird Stores</Link></li>
              <li><Link to="/shop" className="hover:text-[#44d62c] transition">Bulk Order</Link></li>
            </ul>
          </div>

          {/* SUPPORT COLUMN */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/help" className="hover:text-[#44d62c] transition">Get Help</Link></li>
              <li><Link to="/warranty" className="hover:text-[#44d62c] transition">Registration & Warranty</Link></li>
              <li><Link to="/support" className="hover:text-[#44d62c] transition">Sunbird Support</Link></li>
            </ul>
          </div>

          {/* COMPANY COLUMN */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-[#44d62c] transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-[#44d62c] transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* FOLLOW US */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Follow Us</h4>
            <div className="flex flex-wrap gap-3">
              <Link 
                to="/follow" 
                className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center hover:border-[#44d62c] hover:text-[#44d62c] transition"
              >
                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm6.5-.9a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z"/></svg>
              </Link>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center hover:border-[#44d62c] hover:text-[#44d62c] transition">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12a10 10 0 10-11.6 9.9v-7h-2.4v-3h2.4V9.8c0-2.4 1.4-3.8 3.6-3.8 1 0 2 .2 2 .2v2.3h-1.1c-1.1 0-1.4.7-1.4 1.4V12h2.5l-.4 3h-2.1v7A10 10 0 0022 12z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM FOOTER */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between text-[12px] text-zinc-500 gap-4">
  
  {/* Left Side: Stacked text */}
  <div className="flex flex-col items-center md:items-start">
    <p>Powered by Word Lane Tech</p>
    <p>© SunBird 2025 All Rights Reserved.</p>
  </div>

  {/* Right Side: Links */}
  <div className="flex gap-4 uppercase">
    <Link to="/legal" className="hover:text-white transition">Legal Terms</Link>
    <span>|</span>
    <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
  </div>
  
</div>
      </div>
    </footer>
  );
};

export default Footer;
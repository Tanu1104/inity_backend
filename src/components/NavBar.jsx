import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/Yellow Logo Typo.png";

const NavBar = () => {
  const [openStore, setOpenStore] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const storeRef = useRef(null);
  const profileRef = useRef(null);
  const searchInputRef = useRef(null);
  
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
    setOpenStore(false);
    setOpenProfile(false);
    setShowSearch(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Focus search input when overlay opens
  useEffect(() => {
    if (showSearch) searchInputRef.current?.focus();
  }, [showSearch]);

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (storeRef.current && !storeRef.current.contains(event.target)) setOpenStore(false);
      if (profileRef.current && !profileRef.current.contains(event.target)) setOpenProfile(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* SEARCH OVERLAY */}
      {showSearch && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex flex-col items-center justify-start pt-32 px-6 animate-in fade-in duration-300">
          <button onClick={() => setShowSearch(false)} className="absolute top-10 right-10 text-zinc-500 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="w-full max-w-3xl">
            <input 
              ref={searchInputRef}
              type="text" 
              placeholder="SEARCH SUNBIRD PRODUCTS..." 
              className="w-full bg-transparent border-b-2 border-zinc-800 py-4 text-3xl font-bold uppercase italic outline-none focus:border-[#44d62c] transition-colors tracking-tighter text-white"
            />
            <p className="mt-4 text-zinc-500 text-sm font-bold uppercase tracking-widest">Press ESC to close</p>
          </div>
        </div>
      )}

      <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md text-white border-b border-zinc-800 z-50">
        <div className="px-8 py-2.5 flex items-center justify-between">
          
          {/* LEFT: LOGO & BACK BUTTON */}
          <div className="flex items-center gap-4">
            {location.pathname !== "/" && (
              <button 
                onClick={() => navigate(-1)} 
                className="p-1 text-zinc-400 hover:text-[#44d62c] transition-colors"
                title="Go Back"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
              </button>
            )}
            <div onClick={() => handleNavigation("/")} className="cursor-pointer group">
              <img src={logo} alt="Sunbird" className="h-9 w-auto object-contain transition-transform group-hover:scale-105" />
            </div>
          </div>

          {/* RIGHT: REQUESTED SEQUENCE (Search, Home, Store, Profile, Cart) */}
          <div className="flex items-center gap-6">
            
            {/* 1. SEARCH */}
            <button onClick={() => setShowSearch(true)} className="text-gray-300 hover:text-[#44d62c] transition-colors p-1" title="Search">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>

            {/* 2. HOME */}
            <button onClick={() => handleNavigation("/")} className="text-gray-300 hover:text-[#44d62c] transition-colors p-1" title="Home">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.432z" />
              </svg>
            </button>

            {/* 3. STORE (Icon Form) */}
            <div ref={storeRef} className="relative flex items-center">
              <button 
                onClick={() => { setOpenStore(!openStore); setOpenProfile(false); }} 
                className={`transition-colors p-1 ${openStore ? "text-[#44d62c]" : "text-gray-300 hover:text-[#44d62c]"}`}
                title="Store"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.651V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0L3.004 3.75a1.125 1.125 0 011.12-1.012H19.88a1.125 1.125 0 011.12 1.012l.826 5.6" />
                </svg>
              </button>
              {openStore && (
                <div className="fixed top-[58px] left-0 w-full bg-[#111] text-white border-b border-zinc-800 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="max-w-7xl mx-auto px-10 py-12 grid grid-cols-2 gap-20">
                    <div>
                      <p className="text-zinc-500 text-xs font-bold tracking-widest mb-6 uppercase">Collection</p>
                      <ul className="space-y-4">
                        <li onClick={() => handleNavigation("/shop")} className="text-gray-300 hover:text-[#44d62c] cursor-pointer transition-colors">Shop All</li>
                        <li onClick={() => handleNavigation("/products/new")} className="text-gray-300 hover:text-[#44d62c] cursor-pointer">New Arrivals</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-zinc-500 text-xs font-bold tracking-widest mb-6 uppercase">Help</p>
                      <ul className="space-y-4">
                        <li onClick={() => handleNavigation("/contact")} className="text-gray-300 hover:text-[#44d62c] cursor-pointer">Contact Us</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 4. PROFILE */}
            <div ref={profileRef} className="relative flex items-center" onMouseEnter={() => setOpenProfile(true)}>
              <div 
                onClick={() => setOpenProfile(!openProfile)}
                className={`cursor-pointer transition-colors p-1 ${openProfile ? "text-[#44d62c]" : "text-gray-300 hover:text-[#44d62c]"}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>
              {openProfile && (
                <div 
                  className="absolute top-[48px] -right-4 w-64 bg-white text-black shadow-2xl border border-gray-200 py-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                  onMouseLeave={() => setOpenProfile(false)}
                >
                  <div className="px-5 pb-3">
                    <p className="font-bold text-sm">Welcome</p>
                    <button onClick={() => handleNavigation("/login")} className="mt-3 w-full border border-gray-300 py-2 text-[#ff3f6c] font-bold text-sm hover:border-[#ff3f6c] transition-colors">
                      LOGIN / SIGNUP
                    </button>
                  </div>
                  <hr className="border-gray-100" />
                  <ul className="py-2 text-sm text-gray-700">
                    <li onClick={() => handleNavigation("/edit-profile")} className="px-5 py-2 hover:font-bold cursor-pointer hover:bg-gray-50">Edit Profile</li>
                    <li onClick={() => handleNavigation("/cart")} className="px-5 py-2 hover:font-bold cursor-pointer hover:bg-gray-50 flex justify-between">My Cart <span className="text-[#44d62c]">[1]</span></li>
                    <li onClick={() => handleNavigation("/orders")} className="px-5 py-2 hover:font-bold cursor-pointer hover:bg-gray-50">Orders</li>
                    <li onClick={() => handleNavigation("/wishlist")} className="px-5 py-2 hover:font-bold cursor-pointer hover:bg-gray-50">Wishlist</li>
                  </ul>
                </div>
              )}
            </div>

            {/* 5. CART */}
            <button onClick={() => handleNavigation("/cart")} className="text-gray-300 hover:text-[#44d62c] transition-colors p-1 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
              </svg>
            </button>

          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
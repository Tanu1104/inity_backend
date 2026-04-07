import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = () => {
  const navigate = useNavigate();

  // Optimized Data with unique titles and subtitles
  const videoSlides = [
    { 
      id: 1, 
      src: "https://assets2.razerzone.com/images/pnx.assets/2b2992cb1df4542d05811355b291e4f2/razer-blackshark-v3-pro-kv-1920x700.mp4", 
      title: "INITY IMMERSION", 
      sub: "Experience infinite soundscapes beyond the edge of reality." 
    },
    { 
      id: 2,
      src: "/bg_video2.mp4",
      title: "INITY EVOLUTION", 
      sub: "Hybrid audio freedom designed for gaming and mobile life." 
    }
  ];

  const productSlides = [
    { 
      id: 1, 
      src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070", 
      path: "/category/headphones", 
      title: "ELITE HEADPHONES", 
      sub: "Studio-grade precision for the competitive edge." 
    },
    { 
      id: 2, 
      src: "https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=2070", 
      path: "/category/speakers", 
      title: "SONIC SPEAKERS", 
      sub: "Fill your room with earth-shattering cinematic bass." 
    },
    { 
      id: 3, 
      src: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=2070", 
      path: "/category/earbuds", 
      title: "TWS EARBUDS", 
      sub: "Ultra-low latency for seamless wireless performance." 
    },
    { 
      id: 4, 
      src: "https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=1935", 
      path: "/category/neckbands", 
      title: "PRO NECKBANDS", 
      sub: "Featherweight design for non-stop athletic motion." 
    }
  ];

  const [vidCurr, setVidCurr] = useState(0);
  const [prodCurr, setProdCurr] = useState(0);
  const [isProdPaused, setIsProdPaused] = useState(false);

  // Auto-slide for Product Categories
  useEffect(() => {
    if (isProdPaused) return;
    const interval = setInterval(() => {
      setProdCurr((prev) => (prev === productSlides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isProdPaused, productSlides.length]);

  return (
    <section className="hero-container">

      {/* --- PRODUCT SECTION: EXPLORE CATEGORIES --- */}
      <div className="hero-block product-block">
        <div className="category-header">
          <h2 className="category-title">EXPLORE <span className="brand-name">CATEGORIES</span></h2>
          <button className="pause-btn" onClick={() => setIsProdPaused(!isProdPaused)}>
            {isProdPaused ? "RESUME AUTOPLAY" : "PAUSE SLIDE"}
          </button>
        </div>

        <div className="product-carousel">
          <div className="product-track" style={{ transform: `translateX(-${prodCurr * 100}%)` }}>
            {productSlides.map((prod, idx) => (
              <div key={idx} className="product-card" onClick={() => navigate(prod.path)}>
                <img src={prod.src} alt={prod.title} className="product-img" />
                <div className="product-info">
                  <h3 className="prod-title">{prod.title}</h3>
                  <p className="prod-sub">{prod.sub}</p>
                </div>
              </div>
            ))}
          </div>
          {/* GROUPED CONTROLS (BOTTOM RIGHT) */}
          <div className="grouped-controls-right">
            <button className="control-btn" onClick={() => setProdCurr(p => p === 0 ? productSlides.length - 1 : p - 1)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button className="control-btn" onClick={() => setProdCurr(p => p === productSlides.length - 1 ? 0 : p + 1)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>

      
      {/* --- VIDEO SECTION: CINEMATIC REELS --- */}
<div className="hero-block video-block">
  <div className="section-label">LATEST ARRIVALS</div>

  <div
    className="slides-track"
    style={{ transform: `translateX(-${vidCurr * 100}%)` }}
  >
    {videoSlides.map((slide) => (
      <div key={slide.id} className="hero-slide">
        <div className="video-wrapper">

          <video
            key={slide.src}          // 🔥 forces reload per slide
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src={slide.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="hero-overlay"></div>

          <div className="hero-text-content">
            <h1 className="brand-heading uppercase">
              <span className="brand-name">INITY</span>{" "}
              {slide.title.replace("INITY", "")}
            </h1>
            <p className="hero-subtitle">{slide.sub}</p>
          </div>

        </div>
      </div>
    ))}
  </div>

  {/* CONTROLS */}
  <div className="grouped-controls">
    <button
      className="control-btn"
      onClick={() =>
        setVidCurr(v => v === 0 ? videoSlides.length - 1 : v - 1)
      }
    >
      ‹
    </button>
    <button
      className="control-btn"
      onClick={() =>
        setVidCurr(v => v === videoSlides.length - 1 ? 0 : v + 1)
      }
    >
      ›
    </button>
  </div>
</div>


      <hr className="section-divider" />

      
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
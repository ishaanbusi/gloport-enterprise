"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade } from "react-awesome-reveal";
// Ensure this path matches your file structure, or remove if not needed
// import Wave from "../components/Wave.tsx"; 

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [copiedStatus, setCopiedStatus] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedStatus(type);
    setTimeout(() => setCopiedStatus(""), 2000);
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false, // Hidden for a cleaner minimal aesthetic
  };

  const whyUsTabs = [
    {
      title: "Precision Engineering",
      desc: "Our devices deliver industry-leading accuracy in detecting even the smallest trace of disease markers, ensuring early and reliable diagnosis with zero compromise.",
      img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "System Scalability",
      desc: "From major healthcare institutions to rural clinics, our architecture is built to adapt everywhere without compromising on performance or data integrity.",
      img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Global Infrastructure",
      desc: "Committed to making cutting-edge diagnostic technology accessible worldwide, systematically breaking down geographical barriers in global healthcare.",
      img: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <div className="bg-[#fcfcfc] overflow-hidden font-sans text-slate-900 selection:bg-slate-900 selection:text-white">
      
      {/* Hero Section */}
      <section id="home" className="relative w-full h-screen overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full flex items-center justify-center bg-slate-950 will-change-transform"
          style={{ transform: `translateY(${scrollY * 0.4}px)` }}
        >
          <video
            className="w-full h-full object-cover opacity-40 transition-opacity duration-1000 mix-blend-luminosity"
            src="/videos/hero-bg.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/60 to-slate-950"></div>
        </div>

        <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Fade direction="up" duration={1200} triggerOnce>
            <div>
              <div className="inline-block border-b border-white/20 pb-2 mb-6">
                <span className="text-xs uppercase tracking-[0.3em] text-white/70 font-semibold">
                  Gloport Photonix
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white max-w-5xl leading-[0.95]">
                Revolutionizing <br /> Healthcare through <br />
                <span className="text-slate-400">Photonics.</span>
              </h1>

              <p className="mt-8 text-lg sm:text-xl text-slate-300 max-w-xl font-light leading-relaxed">
                Engineering cutting-edge life science solutions to empower early disease detection and drive enterprise-grade diagnostic innovation.
              </p>

              <div className="mt-12 flex gap-6 items-center">
                <a
                  href="https://forms.gle/C9hvwdtz2QcqPTVL7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] text-slate-900 bg-white overflow-hidden transition-all duration-500 hover:bg-slate-100"
                >
                  <span className="relative z-10">Initiate Contact</span>
                </a>
              </div>
            </div>
          </Fade>
        </div>

        {/* Typographic Scroll Indicator */}
        <div className="absolute bottom-12 right-12 z-20 hidden md:flex items-center gap-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">Scroll</span>
          <div className="w-16 h-[1px] bg-white/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1/3 h-full bg-white animate-[slideRight_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </section>

      {/* About Section - Fixed Layout Nesting */}
      <section id="about" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Grid class on outer div */}
            <div className="lg:col-span-5">
              <Fade direction="left" duration={1000} triggerOnce>
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">
                    01 // The Architecture
                  </h2>
                  <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-8">
                    Pioneering the Future of Diagnostics
                  </h3>
                </div>
              </Fade>
            </div>

            {/* Grid class on outer div */}
            <div className="lg:col-span-7">
              <Fade direction="right" duration={1000} delay={200} triggerOnce>
                <div>
                  <p className="text-xl text-slate-600 font-light leading-relaxed mb-8">
                    Gloport Photonix is a deep-tech enterprise developing advanced life science solutions using photonics. Our mandate is to transform the global healthcare framework by enabling early-stage disease detection at a systemic level, particularly in oncology.
                  </p>
                  <p className="text-lg text-slate-500 font-light leading-relaxed mb-12">
                    Our proprietary technologies are engineered to be non-invasive, highly accurate, and scalable, ensuring alignment with the rigorous demands of modern medical professionals and institutions globally.
                  </p>
                  <div className="w-full aspect-[21/9] bg-slate-100 relative overflow-hidden">
                    <img
                      src="https://i.postimg.cc/6p34wgKq/3.jpg"
                      alt="Gloport Photonix Lab"
                      className="w-full h-full object-cover mix-blend-multiply opacity-90 filter grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                  </div>
                </div>
              </Fade>
            </div>

          </div>
        </div>
      </section>

      {/* Solutions - Fixed Bento Grid Nesting */}
      <section id="services" className="py-32 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Fade direction="up" duration={1000} triggerOnce>
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
                  02 // Systems & Solutions
                </h2>
                <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                  Diagnostic Infrastructure
                </h3>
              </div>
              <p className="text-slate-500 max-w-md font-light text-lg">
                Leveraging photoacoustic technology in exhaled breath with unparalleled enterprise-grade sensitivity.
              </p>
            </div>
          </Fade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4 auto-rows-[300px]">
            
            {/* Box 1 */}
            <div className="md:col-span-2">
              <Fade direction="up" duration={1000} delay={100} triggerOnce className="h-full">
                <div className="h-full bg-white p-10 border border-slate-200 flex flex-col justify-between group hover:bg-slate-900 transition-colors duration-500">
                  <span className="text-xs font-bold tracking-widest text-slate-400 group-hover:text-slate-500">SYS-01</span>
                  <div>
                    <h4 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-white transition-colors duration-500">
                      Non-Invasive Protocol
                    </h4>
                    <p className="text-slate-500 font-light text-lg max-w-md group-hover:text-slate-400 transition-colors duration-500">
                      High-fidelity results extracted without the requirement for invasive or surgical procedures, optimizing patient throughput.
                    </p>
                  </div>
                </div>
              </Fade>
            </div>

            {/* Box 2 */}
            <div>
              <Fade direction="up" duration={1000} delay={200} triggerOnce className="h-full">
                <div className="h-full bg-slate-900 p-10 border border-slate-900 flex flex-col justify-between group hover:bg-white transition-colors duration-500">
                  <span className="text-xs font-bold tracking-widest text-slate-500 group-hover:text-slate-400">SYS-02</span>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-slate-900 transition-colors duration-500">
                      Real-Time Analytics
                    </h4>
                    <p className="text-slate-400 font-light group-hover:text-slate-500 transition-colors duration-500">
                      Multi-wavelength laser arrays generate instantaneous, actionable intelligence for clinical decision-making.
                    </p>
                  </div>
                </div>
              </Fade>
            </div>

            {/* Box 3 */}
            <div className="md:col-span-3">
              <Fade direction="up" duration={1000} delay={300} triggerOnce className="h-full">
                <div className="h-full bg-white p-10 border border-slate-200 flex flex-col md:flex-row justify-between md:items-end gap-8 group hover:border-slate-400 transition-colors duration-500">
                  <div>
                    <span className="block text-xs font-bold tracking-widest text-slate-400 mb-8">SYS-03</span>
                    <h4 className="text-3xl font-bold text-slate-900 mb-4">
                      Scalable Deployment Matrix
                    </h4>
                    <p className="text-slate-500 font-light text-lg max-w-2xl">
                      Engineered to integrate seamlessly within sprawling hospital networks and remote facilities alike, ensuring standardized diagnostic capability regardless of location.
                    </p>
                  </div>
                  <div className="text-xs font-bold tracking-widest text-slate-300 uppercase">
                    [ Architecture Designed for Scale ]
                  </div>
                </div>
              </Fade>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Tabs: Strategy - Fixed Layout Nesting */}
      <section id="why-us" className="py-32 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5">
              <Fade direction="left" duration={1000} triggerOnce>
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-6">
                    03 // Competitive Advantage
                  </h2>
                  <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-12">
                    Strategic Capabilities
                  </h3>

                  <div className="flex flex-col border-t border-slate-800">
                    {whyUsTabs.map((tab, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveTab(idx)}
                        className="text-left py-6 border-b border-slate-800 focus:outline-none group"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className={`text-xl font-bold tracking-tight transition-colors ${activeTab === idx ? "text-white" : "text-slate-500 group-hover:text-slate-300"}`}>
                            {tab.title}
                          </h3>
                          <span className={`text-xs font-mono transition-colors ${activeTab === idx ? "text-white" : "text-slate-700"}`}>
                            {activeTab === idx ? "[-]" : "[+]"}
                          </span>
                        </div>
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeTab === idx ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
                          <p className="text-slate-400 font-light leading-relaxed pr-8">
                            {tab.desc}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </Fade>
            </div>

            <div className="lg:col-span-7">
              <Fade direction="right" duration={1000} triggerOnce>
                <div className="relative h-[600px] bg-slate-900 overflow-hidden w-full">
                  {whyUsTabs.map((tab, idx) => (
                    <img
                      key={idx}
                      src={tab.img}
                      alt={tab.title}
                      className={`absolute inset-0 w-full h-full object-cover filter grayscale transition-all duration-1000 ease-in-out ${
                        activeTab === idx ? "opacity-60 scale-100 z-10" : "opacity-0 scale-105 z-0"
                      }`}
                    />
                  ))}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50 pointer-events-none z-20"></div>
                </div>
              </Fade>
            </div>

          </div>
        </div>
      </section>

      {/* Sleek Partner Insights (Testimonials) */}
      <section className="py-32 bg-[#fcfcfc] border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Fade direction="up" duration={1000} triggerOnce>
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-16">
                04 // Market Feedback
              </h2>
              <Slider {...sliderSettings}>
                {[
                  {
                    quote: "Gloport Photonix is on the cutting edge of healthcare innovation. Their focus on early detection technologies will rewrite the diagnostic baseline.",
                    author: "Dr. A. Sharma",
                  },
                  {
                    quote: "The technology developed by Gloport has transformed our approach to diagnostics. It's a systemic leap forward in quantitative patient care.",
                    author: "Dr. D K Thakur",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="focus:outline-none">
                    <p className="text-2xl sm:text-3xl font-light text-slate-900 leading-relaxed mb-8">
                      &quot;{item.quote}&quot;
                    </p>
                    <p className="text-xs font-bold tracking-[0.1em] text-slate-500 uppercase">
                      — {item.author}
                    </p>
                  </div>
                ))}
              </Slider>
            </div>
          </Fade>
        </div>
      </section>

      {/* Leadership - Structured Grid */}
      <section id="team" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Fade direction="up" duration={1000} triggerOnce>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 border-b border-slate-200 pb-8">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
                  05 // Executive Committee
                </h2>
                <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                  Leadership
                </h3>
              </div>
            </div>
          </Fade>

          <Fade cascade direction="up" duration={800} triggerOnce>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {[
                {
                  name: "DR. KHALID KHAN",
                  role: "FOUNDER & CHAIRMAN",
                  img: "https://i.postimg.cc/W1TXPLby/Whats-App-Image-2025-01-01-at-15-02-37.jpg",
                  desc: "Entrepreneur & philanthropist with over four decades of foundational industry experience.",
                },
                {
                  name: "MR. ABHIJEET THAKUR",
                  role: "FOUNDER & CEO",
                  img: "https://i.postimg.cc/fRVGPkr7/PHOTO-2019-07-24-10-01-41-jpg.jpg",
                  desc: "28+ years of systemic excellence across IT, Cloud, AI, and enterprise electronic subsystems.",
                },
                {
                  name: "DR. VARUN JEOTI",
                  role: "CO-FOUNDER & CTO",
                  img: "https://i.postimg.cc/bw5YrmtD/DMC8618.jpg",
                  desc: "40 years of applied physics expertise specializing in biosensor innovation and photonic architecture.",
                },
                {
                  name: "MR. SANJAY SINGH",
                  role: "FOUNDER & CBO",
                  img: "https://i.postimg.cc/LXVm1G7b/Whats-App-Image-2025-03-04-at-23-07-35.jpg",
                  desc: "Seasoned executive executing strategic market positioning and operational scaling for 27+ years.",
                },
                {
                  name: "MRS. BUSHRA KHAN",
                  role: "FOUNDER & CFO",
                  img: "https://i.postimg.cc/52gp47X2/Whats-App-Image-2025-01-01-at-15-02-37-1.jpg",
                  desc: "Directing financial strategy, investment control, and rigid operational excellence protocols.",
                },
              ].map((member, idx) => (
                <div key={idx} className="group relative">
                  <div className="aspect-[3/4] bg-slate-100 mb-6 overflow-hidden">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition duration-700 ease-in-out"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold tracking-[0.1em] text-slate-500 mb-4">
                    {member.role}
                  </p>
                  <p className="text-slate-600 font-light text-sm leading-relaxed">
                    {member.desc}
                  </p>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </section>

      {/* Typographic Contact Section */}
      <section id="contact-us" className="bg-slate-950 text-white py-32 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Fade direction="up" duration={1000} triggerOnce>
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-6">
                    06 // Communications Directory
                  </h2>
                  <h3 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter mb-8 leading-[0.9]">
                    Initiate <br /> Connection.
                  </h3>
                  <p className="text-lg text-slate-400 font-light max-w-md">
                    For corporate partnerships, technological inquiries, or investment relations, route your communications below.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-max">
                  {/* Office */}
                  <div className="sm:col-span-2 border border-slate-800 p-8 hover:bg-slate-900 transition-colors">
                    <span className="block text-[10px] font-bold tracking-widest text-slate-500 mb-6">OFFICE HQ</span>
                    <h4 className="text-lg font-bold mb-2">Gloport Photonix Innovations</h4>
                    <p className="text-slate-400 font-light text-sm leading-relaxed">
                      21st Floor, 2103 - 2106, Kamdhenu 23 West,<br />
                      TTC Industrial Area, Pawne,<br />
                      Navi Mumbai, 400710
                    </p>
                  </div>

                  {/* Email */}
                  <div 
                    onClick={() => handleCopy("info@gloportphotonix.com", "email")}
                    className="border border-slate-800 p-8 hover:bg-white hover:text-slate-900 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
                  >
                    <span className="block text-[10px] font-bold tracking-widest text-slate-500 group-hover:text-slate-400 mb-6 transition-colors">DIGITAL MAIL</span>
                    <div>
                      <h4 className="text-sm font-bold mb-4 break-all">info@gloportphotonix.com</h4>
                      <span className="text-xs tracking-widest uppercase font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">
                        {copiedStatus === "email" ? "[ COPIED ]" : "[ COPY ]"}
                      </span>
                    </div>
                  </div>

                  {/* Phone */}
                  <div 
                    onClick={() => handleCopy("+91 98333 96290", "phone")}
                    className="border border-slate-800 p-8 hover:bg-white hover:text-slate-900 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
                  >
                    <span className="block text-[10px] font-bold tracking-widest text-slate-500 group-hover:text-slate-400 mb-6 transition-colors">DIRECT LINE</span>
                    <div>
                      <h4 className="text-sm font-bold mb-4">+91 98333 96290</h4>
                      <span className="text-xs tracking-widest uppercase font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">
                        {copiedStatus === "phone" ? "[ COPIED ]" : "[ COPY ]"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Frame */}
              <div className="w-full h-[300px] border border-slate-800 relative group overflow-hidden">
                <iframe
                  className="w-full h-full filter grayscale contrast-125 opacity-70 group-hover:opacity-100 transition-all duration-700"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15081.179657558912!2d73.0223884!3d19.0947139!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1533508abb7%3A0x2a007395760b59ce!2sGloport%20Photonix!5e0!3m2!1sen!2sin!4v1735132689648!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0 }}
                  title="Company Location"
                ></iframe>
                <div className="absolute top-4 left-4 bg-slate-950 px-3 py-1 text-[10px] font-bold tracking-widest border border-slate-800">
                  GEO-LOCATION
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      {/* Typographic Scroll to Top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 bg-slate-900 text-white px-4 py-3 text-xs font-bold tracking-[0.2em] hover:bg-slate-800 transition-all duration-500 border border-slate-700 ${scrollY > 500 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
        aria-label="Scroll to top"
      >
        TOP
      </button>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes slideRight {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `,
        }}
      />
    </div>
  );
}
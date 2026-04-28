"use client";

import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";

export default function TelematicsLanding() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSegment, setActiveSegment] = useState(0);
  const [copiedStatus, setCopiedStatus] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
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

  const vehicleSegments = [
    {
      id: "SEG-01",
      title: "Passenger Cars",
      target: "For OEMs, dealerships, service networks, and leasing companies.",
      benefits: ["Live location & trip intelligence", "Vehicle health monitoring", "Remote diagnostics", "Driving behavior insights", "Theft alert & immobilization"],
      img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: "SEG-02",
      title: "Electric Vehicles",
      target: "For EV OEMs, charging networks, fleet operators, and energy platforms.",
      benefits: ["Battery state-of-charge (SOC) monitoring", "Battery state-of-health (SOH) insights", "Charging session tracking", "Thermal & energy behavior", "Remote fault detection"],
      img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: "SEG-03",
      title: "Commercial Vehicles",
      target: "For logistics companies, last-mile delivery fleets, and rental operators.",
      benefits: ["Fleet tracking & route optimization", "Fuel & usage analytics", "Engine diagnostics", "Driver scoring & idle monitoring", "Geo-fencing alerts"],
      img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: "SEG-04",
      title: "Heavy Vehicles",
      target: "For transport operators, construction fleets, mining, and long-haul logistics.",
      benefits: ["CAN/J1939-ready architecture", "Uptime & maintenance intelligence", "Driver safety monitoring", "Route & load behavior analytics", "High-durability deployment"],
      img: "https://images.unsplash.com/photo-1586191552066-d52cd1d4ca81?auto=format&fit=crop&q=80&w=1000",
    },
  ];

  return (
    <div className="bg-[#fafafa] overflow-hidden font-sans text-slate-900 selection:bg-slate-900 selection:text-white relative">
      
      {/* Global Drafting Grid Background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Minimalist Fixed Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrollY > 50 ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="text-sm font-extrabold tracking-[0.2em] uppercase text-slate-900 mix-blend-difference flex items-center gap-2">
            GLOPORT <span className="font-light text-slate-400">×</span> CARTELSOL <span className="font-light text-slate-400">GERMANY</span>
          </div>
          <div className="hidden lg:flex gap-6 text-[10px] font-bold tracking-widest text-slate-500 uppercase">
            <a href="#solution" className="hover:text-slate-900 transition-colors">Solution</a>
            <a href="#segments" className="hover:text-slate-900 transition-colors">Segments</a>
            <a href="#technology" className="hover:text-slate-900 transition-colors">Technology</a>
            <a href="#make-in-india" className="hover:text-slate-900 transition-colors">Make in India</a>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative w-full min-h-screen overflow-hidden bg-slate-950 flex items-center">
        <div
          className="absolute inset-0 w-full h-full flex items-center justify-center will-change-transform scale-105"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <video
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
            src="/videos/hero-bg.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-40"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
          <Fade direction="up" duration={1200} triggerOnce>
            <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-block border border-white/20 px-4 py-2 mb-8 backdrop-blur-sm">
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/70 font-bold">
                  Gloport × CarTelSol Germany
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white max-w-5xl leading-[0.95]">
                Futuristic Telematics for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-slate-600">
                  Connected Mobility.
                </span>
              </h1>

              <p className="mt-8 text-lg sm:text-xl text-slate-400 max-w-2xl font-light leading-relaxed border-l border-slate-700 pl-6">
                Gloport, in collaboration with CarTelSol Germany, is developing an advanced automotive telematics unit for the Indian market — designed for cars, commercial fleets, electric vehicles, buses, trucks, and heavy-duty mobility platforms.
              </p>

              <div className="mt-12 flex flex-col sm:flex-row gap-6">
                <a href="#solution" className="group relative inline-flex items-center justify-center px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] text-slate-900 bg-white overflow-hidden transition-all hover:bg-slate-100">
                  <span>Explore the Solution</span>
                </a>
                <a href="#contact-us" className="group relative inline-flex items-center justify-center px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] text-white border border-white/20 backdrop-blur-sm hover:bg-white/10 transition-all">
                  <span>Join Pilot Program</span>
                </a>
              </div>
            </div>
          </Fade>
        </div>

        {/* Hero Highlight Strip */}
        <div className="absolute bottom-0 w-full border-t border-white/10 bg-slate-950/50 backdrop-blur-md py-4 z-20 overflow-hidden">
           <div className="flex whitespace-nowrap animate-[slideLeft_30s_linear_infinite] opacity-50">
             {[...Array(3)].map((_, i) => (
                <div key={i} className="flex gap-12 text-[10px] font-bold tracking-[0.3em] uppercase text-white px-6">
                  <span>Connected Vehicles</span><span>•</span>
                  <span>EV Intelligence</span><span>•</span>
                  <span>Fleet Visibility</span><span>•</span>
                  <span>Diagnostics</span><span>•</span>
                  <span>Secure Data</span><span>•</span>
                  <span>Make in India</span><span>•</span>
                </div>
             ))}
           </div>
        </div>
      </section>

      {/* 3 & 4. Partnership & Problem Section - Asymmetric Sticky */}
      <section id="solution" className="relative z-20 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 border-b border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Sticky Header */}
            <div className="lg:col-span-5 relative">
              <div className="lg:sticky lg:top-32">
                <Fade direction="up" duration={1000} triggerOnce>
                  <div>
                    <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-6 flex items-center gap-3">
                      <span className="w-4 h-[1px] bg-slate-400"></span> 01 // The Architecture
                    </h2>
                    <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-slate-900 leading-[1]">
                      German Automotive Expertise. <br />
                      <span className="text-slate-400">Indian Mobility Scale.</span>
                    </h3>
                    <p className="mt-8 text-sm font-bold tracking-[0.1em] text-slate-900 uppercase border-l-2 border-slate-900 pl-4">
                      Built for India. Engineered with German precision. Designed for the future of mobility.
                    </p>
                  </div>
                </Fade>
              </div>
            </div>

            {/* Scrolling Content */}
            <div className="lg:col-span-7">
              <Fade direction="up" duration={1000} delay={200} triggerOnce>
                <div className="space-y-16">
                  <div>
                    <p className="text-xl text-slate-600 font-light leading-relaxed mb-6">
                      Gloport has collaborated with <strong className="font-bold text-slate-900">CarTelSol Germany</strong> to develop a futuristic telematics control unit tailored for the Indian automotive ecosystem.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-y border-slate-200 py-8">
                      <div>
                        <h4 className="text-xs font-bold tracking-widest text-slate-900 uppercase mb-3">CarTelSol Germany</h4>
                        <p className="text-sm text-slate-500 font-light">Strength in automotive-grade telematics, embedded systems, vehicle connectivity, Linux-based systems, PCB integration, and EV/HV system development.</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold tracking-widest text-slate-900 uppercase mb-3">Gloport</h4>
                        <p className="text-sm text-slate-500 font-light">Indian engineering, AI, electronics, deployment, and Make in India commercialization capability for advanced technology products.</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">India Needs More Than GPS Tracking</h3>
                    <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">
                      India’s mobility market is rapidly transforming. Vehicles are becoming smarter, fleets are becoming larger, EV adoption is rising, and customers expect real-time digital control. Many existing vehicle tracking systems focus only on location. The next generation of mobility requires deeper vehicle intelligence.
                    </p>
                    <ul className="space-y-4 text-sm text-slate-600 font-light">
                      <li className="flex gap-4"><span className="text-slate-900 font-bold">—</span> <strong>Limited diagnostics:</strong> Operators discover issues only after breakdowns.</li>
                      <li className="flex gap-4"><span className="text-slate-900 font-bold">—</span> <strong>Fragmented visibility:</strong> Mixed fleets of cars, trucks, and EVs are difficult to manage.</li>
                      <li className="flex gap-4"><span className="text-slate-900 font-bold">—</span> <strong>EV data complexity:</strong> Battery, charging, and thermal data require specialized monitoring.</li>
                      <li className="flex gap-4"><span className="text-slate-900 font-bold">—</span> <strong>Connectivity gaps:</strong> Indian roads require rugged, adaptive systems.</li>
                      <li className="flex gap-4"><span className="text-slate-900 font-bold">—</span> <strong>Local cost pressure:</strong> Need for advanced tech that can be localized and scaled affordably.</li>
                    </ul>
                    <p className="mt-8 text-xl font-bold tracking-tight text-slate-900">
                      The future of telematics is not just tracking. It is vehicle intelligence.
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Solution Overview & 14. Architecture Flow */}
      <section className="py-32 bg-slate-950 text-white relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Fade direction="up" duration={1000} triggerOnce>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 mb-6">02 // The Solution</h2>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-8 max-w-4xl mx-auto">
              The Next-Generation Intelligent Telematics Unit
            </h3>
            <p className="text-xl text-slate-400 font-light max-w-3xl mx-auto mb-16">
              A future-ready vehicle connectivity platform designed to act as the intelligent gateway between the vehicle and the cloud. One intelligent unit. Multiple vehicle types. Real-time visibility.
            </p>
          </Fade>

          {/* Architecture Flow Visual (Bento Flow) */}
          <Fade direction="up" duration={1000} delay={200} triggerOnce>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-left mb-16">
              <div className="bg-slate-900 p-8 border border-slate-800">
                <span className="block text-[10px] font-bold tracking-widest text-slate-500 mb-4">01. SOURCE</span>
                <h4 className="text-lg font-bold mb-2">Vehicle Data</h4>
                <p className="text-sm text-slate-400 font-light">CAN / OBD / Sensors / Engine / Battery</p>
              </div>
              <div className="bg-slate-800 p-8 border border-slate-700 transform md:-translate-y-4 relative">
                <span className="block text-[10px] font-bold tracking-widest text-slate-400 mb-4 text-white">02. HARDWARE</span>
                <h4 className="text-lg font-bold mb-2 text-white">Telematics Unit</h4>
                <p className="text-sm text-slate-300 font-light">Edge processing & secure cellular transmission.</p>
              </div>
              <div className="bg-slate-900 p-8 border border-slate-800">
                <span className="block text-[10px] font-bold tracking-widest text-slate-500 mb-4">03. INFRASTRUCTURE</span>
                <h4 className="text-lg font-bold mb-2">Secure Cloud</h4>
                <p className="text-sm text-slate-400 font-light">Data architecture, OTA, and API gateway.</p>
              </div>
              <div className="bg-slate-900 p-8 border border-slate-800">
                <span className="block text-[10px] font-bold tracking-widest text-slate-500 mb-4">04. INTERFACE</span>
                <h4 className="text-lg font-bold mb-2">Dashboards & Apps</h4>
                <p className="text-sm text-slate-400 font-light">Fleet intelligence, diagnostics & OEM API.</p>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      {/* 6. Vehicle Segments - Interactive Tabs */}
      <section id="segments" className="py-32 bg-white relative z-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <Fade direction="up" duration={1000} triggerOnce>
                <div>
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-6 flex items-center gap-3">
                    <span className="w-4 h-[1px] bg-slate-400"></span> 03 // Deployment
                  </h2>
                  <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tighter mb-12 text-slate-900 leading-[1]">
                    Designed for India’s Complete Ecosystem.
                  </h3>

                  <div className="flex flex-col border-t border-slate-200">
                    {vehicleSegments.map((seg, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveSegment(idx)}
                        className="text-left py-6 border-b border-slate-200 focus:outline-none group relative overflow-hidden"
                      >
                        <div className="relative z-10 flex items-center justify-between pr-4">
                          <h3 className={`text-xl font-bold tracking-tight transition-colors ${activeSegment === idx ? "text-slate-900" : "text-slate-400 group-hover:text-slate-600"}`}>
                            {seg.title}
                          </h3>
                          <span className={`text-[10px] font-mono tracking-widest transition-colors ${activeSegment === idx ? "text-slate-900" : "text-slate-300"}`}>
                            [{seg.id}]
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </Fade>
            </div>

            <div className="lg:col-span-7">
              <Fade direction="up" duration={1000} triggerOnce>
                <div className="bg-slate-50 p-8 sm:p-12 border border-slate-200 min-h-[600px] flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 bg-slate-900 text-white text-[10px] font-bold tracking-widest uppercase mb-6">
                      {vehicleSegments[activeSegment].id}
                    </span>
                    <h3 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-4">
                      {vehicleSegments[activeSegment].title}
                    </h3>
                    <p className="text-lg text-slate-600 font-light mb-12">
                      {vehicleSegments[activeSegment].target}
                    </p>
                    
                    <h4 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-6 border-b border-slate-200 pb-2">Key Capabilities</h4>
                    <ul className="space-y-4">
                      {vehicleSegments[activeSegment].benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-4 text-slate-700 font-light">
                          <span className="text-slate-900 font-bold block mt-1">+</span> {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-12 h-48 w-full bg-slate-200 overflow-hidden border border-slate-300">
                     <img 
                       src={vehicleSegments[activeSegment].img} 
                       alt={vehicleSegments[activeSegment].title}
                       className="w-full h-full object-cover filter grayscale opacity-80"
                     />
                  </div>
                </div>
              </Fade>
            </div>

          </div>
        </div>
      </section>

      {/* 7 & 8. Core Technology & Features - High Density Bento Grid */}
      <section id="technology" className="py-32 bg-[#fafafa] relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Fade direction="up" duration={1000} triggerOnce>
            <div className="mb-16">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-6 flex items-center gap-3">
                <span className="w-4 h-[1px] bg-slate-400"></span> 04 // Platform Architecture
              </h2>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-slate-900 leading-[0.95] max-w-3xl">
                A Complete Connected Vehicle Intelligence Platform.
              </h3>
            </div>
          </Fade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-24 auto-rows-[300px]">
            {/* Block 1 */}
            <Fade direction="up" duration={1000} delay={100} triggerOnce className="h-full">
              <div className="h-full bg-white p-10 border border-slate-200 flex flex-col justify-between group hover:border-slate-900 transition-colors">
                <span className="text-[10px] font-bold tracking-widest text-slate-400">TECH-01</span>
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-3">In-Vehicle Hardware</h4>
                  <p className="text-slate-600 font-light text-sm mb-4">CAN/OBD/J1939 integration, GNSS positioning, cellular/Bluetooth/Wi-Fi configuration, edge processing, and secure device identity in an automotive-grade enclosure.</p>
                </div>
              </div>
            </Fade>

            {/* Block 2 */}
            <Fade direction="up" duration={1000} delay={200} triggerOnce className="h-full">
              <div className="h-full bg-slate-900 p-10 border border-slate-900 flex flex-col justify-between group">
                <span className="text-[10px] font-bold tracking-widest text-slate-500">TECH-02</span>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-3">Embedded Software & Edge</h4>
                  <p className="text-slate-400 font-light text-sm mb-4">Real-time data processing, vehicle protocol handling, fault code interpretation, event detection, edge filtering, and OTA-ready architecture.</p>
                </div>
              </div>
            </Fade>

            {/* Block 3 */}
            <Fade direction="up" duration={1000} delay={300} triggerOnce className="h-full">
              <div className="h-full bg-white p-10 border border-slate-200 flex flex-col justify-between group hover:border-slate-900 transition-colors">
                <span className="text-[10px] font-bold tracking-widest text-slate-400">TECH-03</span>
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-3">Cloud Platform</h4>
                  <p className="text-slate-600 font-light text-sm mb-4">Live vehicle dashboard, fleet map, EV battery monitoring, driver scorecards, alerts, maintenance reports, and API integration for enterprise systems.</p>
                </div>
              </div>
            </Fade>

            {/* Block 4 */}
            <Fade direction="up" duration={1000} delay={400} triggerOnce className="h-full">
              <div className="h-full bg-white p-10 border border-slate-200 flex flex-col justify-between group hover:border-slate-900 transition-colors">
                <span className="text-[10px] font-bold tracking-widest text-slate-400">TECH-04</span>
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-3">Mobile & Web Apps</h4>
                  <p className="text-slate-600 font-light text-sm mb-4">Cross-platform access for fleet managers and drivers to view vehicle status, trip logs, alerts, battery insights, and role-based multi-vehicle management.</p>
                </div>
              </div>
            </Fade>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 pt-16 border-t border-slate-200">
             {[
               { title: "Real-Time Connectivity", desc: "Monitor location, vehicle state, trip activity, and operational status." },
               { title: "Remote Diagnostics", desc: "Capture fault codes, warning signals, and maintenance indicators." },
               { title: "EV Battery Intelligence", desc: "Track performance, charging behavior, SOC, and thermal patterns." },
               { title: "Fleet Optimization", desc: "Route planning, utilization analysis, idle tracking, and driver scoring." },
               { title: "Predictive Maintenance", desc: "Use data trends to identify issues and reduce unplanned downtime." },
               { title: "Driver Safety", desc: "Analyze braking, acceleration, overspeeding, and route behavior." },
               { title: "Secure Architecture", desc: "Encrypted communication and authenticated device identities." },
               { title: "OTA-Ready Evolution", desc: "Support future software updates and feature expansion remotely." },
             ].map((feat, i) => (
                <div key={i}>
                  <div className="w-8 h-[1px] bg-slate-900 mb-4"></div>
                  <h5 className="text-sm font-bold text-slate-900 mb-2">{feat.title}</h5>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">{feat.desc}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* 9. Make In India & 13. Roadmap Section - High Contrast */}
      <section id="make-in-india" className="py-32 bg-slate-950 text-white relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            
            {/* Make In India */}
            <div>
              <Fade direction="up" duration={1000} triggerOnce>
                <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 mb-6 flex items-center gap-3">
                  <span className="w-4 h-[1px] bg-slate-500"></span> 05 // Strategic Vision
                </h2>
                <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tighter mb-8 leading-[1]">
                  Advancing Mobility Under <br /> The Make in India Vision.
                </h3>
                <p className="text-lg text-slate-400 font-light leading-relaxed mb-8">
                  The objective is not only to import technology, but to localize, adapt, manufacture, test, deploy, and support telematics solutions for Indian mobility needs at scale.
                </p>
                
                <div className="space-y-4">
                   {["Indian market-specific product adaptation", "Local assembly and manufacturing roadmap", "Domestic supply chain development", "Cost-optimized deployment for scale", "Technology transfer and engineering collaboration"].map((item, i) => (
                     <div key={i} className="flex items-center gap-4 text-sm text-slate-300 font-light">
                       <span className="w-1.5 h-1.5 bg-slate-500 rounded-full"></span> {item}
                     </div>
                   ))}
                </div>

                <div className="mt-12 p-6 border border-slate-800 bg-slate-900/50">
                  <p className="text-sm font-bold tracking-wide text-white leading-relaxed uppercase">
                    From German automotive intelligence to Indian manufacturing scale — made for India and ready for the world.
                  </p>
                </div>
              </Fade>
            </div>

            {/* Roadmap */}
            <div>
              <Fade direction="up" duration={1000} delay={200} triggerOnce>
                <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 mb-12">
                  Development Roadmap
                </h2>
                
                <div className="relative border-l border-slate-800 ml-3 space-y-12">
                  {[
                    { phase: "Phase 1", title: "Architecture & Mapping", desc: "Define segments, hardware configuration, cloud requirements, and India-specific deployment needs." },
                    { phase: "Phase 2", title: "Prototype Development", desc: "Build and test the TCU, embedded software, cloud integration, and connectivity stack." },
                    { phase: "Phase 3", title: "Vehicle Integration & Pilot", desc: "Deploy in selected conventional vehicles, EVs, and heavy-duty fleets for real-world validation." },
                    { phase: "Phase 4", title: "Make in India Localization", desc: "Optimize components, manufacturing workflow, and serviceability for Indian scale." },
                    { phase: "Phase 5", title: "Commercial Rollout", desc: "Launch for OEMs, fleets, logistics companies, and enterprise mobility partners." },
                  ].map((step, i) => (
                    <div key={i} className="relative pl-8">
                      <div className="absolute w-2 h-2 bg-white rounded-full -left-[4.5px] top-1.5"></div>
                      <span className="text-[10px] font-bold tracking-[0.2em] text-slate-500 block mb-1 uppercase">{step.phase}</span>
                      <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                      <p className="text-sm text-slate-400 font-light">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </Fade>
            </div>

          </div>
        </div>
      </section>

      {/* 11. Competitive Advantage & 16. Trust */}
      <section className="py-32 bg-white relative z-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <Fade direction="up" duration={1000} triggerOnce>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-16">
              06 // The Advantage
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-slate-900 mb-20 max-w-4xl mx-auto leading-tight">
              Automotive telematics must operate in demanding environments. We focus on <strong className="font-bold">reliability, secure connectivity, scalable deployment,</strong> and <strong className="font-bold">long-term maintainability.</strong>
            </h3>
           </Fade>

           <Fade direction="up" duration={1000} delay={200} triggerOnce>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-slate-200 pt-16">
               <div>
                 <h4 className="text-2xl font-extrabold text-slate-900 mb-2">EV + ICE</h4>
                 <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Compatibility</p>
               </div>
               <div>
                 <h4 className="text-2xl font-extrabold text-slate-900 mb-2">Automotive</h4>
                 <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Grade Design</p>
               </div>
               <div>
                 <h4 className="text-2xl font-extrabold text-slate-900 mb-2">OTA Ready</h4>
                 <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Architecture</p>
               </div>
               <div>
                 <h4 className="text-2xl font-extrabold text-slate-900 mb-2">India</h4>
                 <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Optimized</p>
               </div>
             </div>
           </Fade>
        </div>
      </section>

      {/* 12. Pilot Program & 17. Mega CTA Section */}
      <section id="contact-us" className="bg-slate-950 text-white pt-32 pb-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Fade direction="up" duration={1000} triggerOnce>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
              
              <div className="lg:col-span-5">
                <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 mb-6 flex items-center gap-3">
                  <span className="w-4 h-[1px] bg-slate-500"></span> 07 // Pilot & Partnership
                </h2>
                <h3 className="text-5xl sm:text-6xl font-extrabold tracking-tighter mb-8 leading-[0.9]">
                  Ready to Build <br /> The Future?
                </h3>
                <p className="text-lg text-slate-400 font-light max-w-md mb-8">
                  We invite Indian OEMs, EV manufacturers, fleet operators, and logistics companies to participate in our pilot deployments. Validate the technology across real-world Indian road conditions.
                </p>
                <div className="flex gap-4">
                  <button className="px-6 py-3 bg-white text-slate-900 text-[10px] font-bold tracking-widest uppercase hover:bg-slate-200 transition-colors">
                    Request Demo
                  </button>
                  <button className="px-6 py-3 border border-slate-700 text-white text-[10px] font-bold tracking-widest uppercase hover:bg-slate-800 transition-colors">
                    Join Pilot
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-800 border border-slate-800">
                  {/* Form Trigger (Simulated for UI layout) */}
                  <div className="sm:col-span-2 bg-slate-950 p-12 hover:bg-slate-900 transition-colors">
                    <span className="block text-[10px] font-bold tracking-widest text-slate-500 mb-6">PARTNERSHIP INQUIRY</span>
                    <h4 className="text-2xl font-bold mb-4 tracking-tight">Enterprise Collaboration</h4>
                    <p className="text-slate-400 font-light text-sm leading-relaxed mb-6 max-w-lg">
                      Interested In: OEM Integration / Fleet Pilot / EV Analytics / Heavy Vehicle Telematics / Partnership / Investment. Reach out directly.
                    </p>
                  </div>

                  {/* Email Copy */}
                  <div 
                    onClick={() => handleCopy("partnerships@gloport.com", "email")}
                    className="bg-slate-950 p-10 hover:bg-white hover:text-slate-900 transition-all duration-300 cursor-pointer group flex flex-col justify-between min-h-[180px]"
                  >
                    <span className="block text-[10px] font-bold tracking-[0.2em] text-slate-500 group-hover:text-slate-400 mb-6 transition-colors">DIGITAL MAIL</span>
                    <div>
                      <h4 className="text-sm font-bold mb-6 break-all">[ Email Placeholder ]</h4>
                      <span className="text-[10px] tracking-widest uppercase font-bold border border-slate-800 group-hover:border-slate-300 px-4 py-2 transition-colors">
                        {copiedStatus === "email" ? "COPIED TO CLIPBOARD" : "COPY ADDRESS"}
                      </span>
                    </div>
                  </div>

                  {/* Phone Copy */}
                  <div 
                    onClick={() => handleCopy("+91 00000 00000", "phone")}
                    className="bg-slate-950 p-10 hover:bg-white hover:text-slate-900 transition-all duration-300 cursor-pointer group flex flex-col justify-between min-h-[180px]"
                  >
                    <span className="block text-[10px] font-bold tracking-[0.2em] text-slate-500 group-hover:text-slate-400 mb-6 transition-colors">DIRECT LINE</span>
                    <div>
                      <h4 className="text-sm font-bold mb-6">[ Phone Placeholder ]</h4>
                      <span className="text-[10px] tracking-widest uppercase font-bold border border-slate-800 group-hover:border-slate-300 px-4 py-2 transition-colors">
                        {copiedStatus === "phone" ? "COPIED TO CLIPBOARD" : "COPY NUMBER"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-slate-900 text-[10px] tracking-widest text-slate-500 uppercase font-bold gap-4">
              <div>
                <p className="mb-1 text-white">Gloport × CarTelSol Germany</p>
                <p className="text-slate-600 font-normal">Futuristic Telematics for India’s Connected Mobility Era</p>
              </div>
              <div className="text-left md:text-right">
                <p className="mb-1">© {new Date().getFullYear()} Gloport. All Rights Reserved.</p>
                <p className="text-[8px] text-slate-700 font-normal max-w-md">CarTelSol Germany collaboration mentioned for the Indian market telematics initiative. Final product specifications may evolve during development.</p>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      {/* Typographic Scroll to Top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 bg-slate-900 text-white px-5 py-4 text-[10px] font-bold tracking-[0.2em] hover:bg-slate-800 transition-all duration-500 border border-slate-700 shadow-2xl ${scrollY > 800 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"}`}
        aria-label="Scroll to top"
      >
        TO TOP ↑
      </button>

      {/* CSS Keyframes for Hero Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
}
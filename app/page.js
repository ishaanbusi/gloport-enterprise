"use client";

import React, { useState, useEffect } from "react";

// ─── Inline SVG Icons ──────────────────────────────────────────────────────
const Ico = ({ d, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    {[].concat(d).map((p, i) => <path key={i} d={p} />)}
  </svg>
);
const ArrowRight  = (p) => <Ico d="M5 12h14M12 5l7 7-7 7" {...p} />;
const ArrowUp     = (p) => <Ico d="M12 19V5M5 12l7-7 7 7" {...p} />;
const MapPin      = (p) => <Ico d={["M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z","M12 10a2 2 0 100-4 2 2 0 000 4"]} {...p} />;
const Mail        = (p) => <Ico d={["M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z","M22 6l-10 7L2 6"]} {...p} />;
const Phone       = (p) => <Ico d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.94 6.94l1.41-1.42a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" {...p} />;
const Copy        = (p) => <Ico d={["M20 9H11a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-9a2 2 0 00-2-2z","M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"]} {...p} />;
const CheckCircle = (p) => <Ico d={["M22 11.08V12a10 10 0 11-5.93-9.14","M22 4L12 14.01l-3-3"]} {...p} />;
const Wifi        = (p) => <Ico d={["M5 12.55a11 11 0 0114.08 0","M1.42 9a16 16 0 0121.16 0","M8.53 16.11a6 6 0 016.95 0","M12 20h.01"]} {...p} />;
const Shield      = (p) => <Ico d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" {...p} />;
const Zap         = (p) => <Ico d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" {...p} />;
const Globe       = (p) => <Ico d={["M12 2a10 10 0 100 20 10 10 0 000-20z","M2 12h20","M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"]} {...p} />;
const Truck       = (p) => <Ico d={["M1 3h15v13H1z","M16 8h4l3 3v5h-7V8z","M5.5 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3z","M18.5 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"]} {...p} />;
const Battery     = (p) => <Ico d={["M17 7H7a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2V9a2 2 0 00-2-2z","M22 11v2"]} {...p} />;
const Cpu         = (p) => <Ico d={["M9 3H5a2 2 0 00-2 2v4","M15 3h4a2 2 0 012 2v4","M9 21H5a2 2 0 01-2-2v-4","M15 21h4a2 2 0 002-2v-4","M9 9h6v6H9z"]} {...p} />;
const Check       = (p) => <Ico d="M20 6L9 17l-5-5" {...p} />;

const BRAND = "#3bd6c6";
const DARK  = "#0c1f1d";

export default function TelematicsLanding() {
  const [scrollY,        setScrollY]        = useState(0);
  const [activeSegment,  setActiveSegment]  = useState(0);
  const [activeTab,      setActiveTab]      = useState(0);
  const [copiedStatus,   setCopiedStatus]   = useState("");
  const [isLoaded,       setIsLoaded]       = useState(false);
  const [menuOpen,       setMenuOpen]       = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const handleCopy  = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedStatus(type);
    setTimeout(() => setCopiedStatus(""), 2500);
  };

  // ── Data ──────────────────────────────────────────────────────────────────
  const segments = [
    { id:"SEG-01", title:"Passenger Cars",      icon:<Globe size={20}/>,   target:"For OEMs, dealerships, service networks, and leasing companies.",
      benefits:["Live location & trip intelligence","Vehicle health monitoring","Remote diagnostics","Driving behavior insights","Theft alert & immobilization"],
      img:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200" },
    { id:"SEG-02", title:"Electric Vehicles",   icon:<Battery size={20}/>, target:"For EV OEMs, charging networks, fleet operators, and energy platforms.",
      benefits:["Battery SOC monitoring","Battery SOH insights","Charging session tracking","Thermal & energy behavior","Remote fault detection"],
      img:"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1200" },
    { id:"SEG-03", title:"Commercial Vehicles", icon:<Truck size={20}/>,   target:"For logistics companies, last-mile delivery fleets, and rental operators.",
      benefits:["Fleet tracking & route optimization","Fuel & usage analytics","Engine diagnostics","Driver scoring & idle monitoring","Geo-fencing alerts"],
      img:"https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1200" },
    { id:"SEG-04", title:"Heavy Vehicles",      icon:<Cpu size={20}/>,     target:"For transport operators, construction fleets, mining, and long-haul logistics.",
      benefits:["CAN/J1939-ready architecture","Uptime & maintenance intelligence","Driver safety monitoring","Route & load behavior analytics","High-durability deployment"],
      img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1200" },
  ];

  const whyTabs = [
    { title:"German Engineering",  desc:"CarTelSol brings automotive-grade embedded systems, Linux-based platforms, PCB integration, and deep EV/HV system expertise.", img:"https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=900" },
    { title:"India Optimised",     desc:"Engineered for Indian road conditions, mixed fleet environments, AIS-140 compliance, and the cost-performance demands of a scaling market.", img:"https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=900" },
    { title:"Full-Stack Platform", desc:"From in-vehicle hardware to cloud dashboards and mobile apps — one cohesive platform with complete visibility across every vehicle.", img:"https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=900" },
  ];

  const features = [
    { icon:<Wifi size={26}/>,    title:"Real-Time Connectivity",   desc:"Monitor location, vehicle state, trip activity, and operational status from anywhere." },
    { icon:<Zap size={26}/>,     title:"Remote Diagnostics",       desc:"Capture fault codes, warning signals, and maintenance indicators instantly." },
    { icon:<Battery size={26}/>, title:"EV Battery Intelligence",  desc:"Track SOC, SOH, charging sessions, and thermal behaviour in real time." },
    { icon:<Shield size={26}/>,  title:"Secure Architecture",      desc:"End-to-end encrypted data with authenticated hardware device identities." },
    { icon:<Globe size={26}/>,   title:"Fleet Optimization",       desc:"Route planning, utilisation analysis, idle tracking, and driver scoring." },
    { icon:<Cpu size={26}/>,     title:"OTA-Ready Evolution",      desc:"Support future software updates and feature expansion over the air." },
  ];

  const roadmap = [
    { phase:"Phase 1", title:"Architecture & Mapping",        desc:"Define segments, hardware configuration, cloud requirements, and India-specific deployment needs." },
    { phase:"Phase 2", title:"Prototype Development",         desc:"Build and test the TCU, embedded software, cloud integration, and connectivity stack." },
    { phase:"Phase 3", title:"Vehicle Integration & Pilot",   desc:"Deploy in selected vehicles, EVs, and heavy-duty fleets for real-world validation." },
    { phase:"Phase 4", title:"Make in India Localization",    desc:"Optimize components, manufacturing workflow, and serviceability for Indian scale." },
    { phase:"Phase 5", title:"Commercial Rollout",            desc:"Launch for OEMs, fleets, logistics companies, and enterprise mobility partners." },
  ];

  // ── Styles ─────────────────────────────────────────────────────────────────
  const S = {
    wrap:  { fontFamily:"'DM Sans','Nunito',sans-serif", background:"#f8fafa", color:"#1e293b", overflowX:"hidden" },
    inner: { maxWidth:1200, margin:"0 auto", padding:"0 24px" },
    chip:  { display:"inline-flex", alignItems:"center", gap:8, fontSize:11, fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", color:BRAND, marginBottom:16 },
    chipBar: { width:28, height:2, background:BRAND, borderRadius:2, display:"block" },
    h2:    { fontSize:"clamp(1.9rem,3.8vw,2.9rem)", fontWeight:800, letterSpacing:"-0.02em", lineHeight:1.12, color:"#0f2220" },
    p:     { fontSize:15, color:"#64748b", lineHeight:1.85, fontWeight:400 },
    card:  { background:"white", border:"1.5px solid #e2e8f0", borderRadius:22, padding:28, transition:"all 0.35s ease" },
    brandBtn: { display:"inline-flex", alignItems:"center", gap:8, background:BRAND, color:"white", borderRadius:9999, fontWeight:700, fontSize:13, padding:"13px 26px", border:"none", cursor:"pointer", transition:"all 0.3s ease", textDecoration:"none" },
    ghostBtn: { display:"inline-flex", alignItems:"center", gap:8, background:"transparent", color:"rgba(255,255,255,0.75)", borderRadius:9999, fontWeight:600, fontSize:13, padding:"13px 26px", border:"1.5px solid rgba(255,255,255,0.2)", cursor:"pointer", transition:"all 0.3s ease", textDecoration:"none" },
    iconBox: { width:52, height:52, borderRadius:16, background:"rgba(59,214,198,0.09)", display:"flex", alignItems:"center", justifyContent:"center", color:BRAND, flexShrink:0 },
  };

  return (
    <div style={S.wrap} className="selection:bg-[#3bd6c6] selection:text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800&display=swap');
        *{box-sizing:border-box}html{scroll-behavior:smooth}
        @keyframes ticker{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        @keyframes scrolldown{0%{transform:translateY(-100%)}100%{transform:translateY(250%)}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        @keyframes pulseDot{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.6);opacity:.5}}
        .fu0{animation:fadeUp .8s .00s ease both}
        .fu1{animation:fadeUp .8s .15s ease both}
        .fu2{animation:fadeUp .8s .30s ease both}
        .fu3{animation:fadeUp .8s .45s ease both}
        .ticker-track{display:flex;animation:ticker 38s linear infinite;width:max-content}
        .hov-card:hover{transform:translateY(-6px);box-shadow:0 24px 60px rgba(59,214,198,.13),0 6px 20px rgba(0,0,0,.07);border-color:rgba(59,214,198,.32)!important}
        .hov-icon-wrap:hover .seg-icon{background:${BRAND}!important;color:white!important}
        .brand-btn-css:hover{transform:translateY(-2px);box-shadow:0 0 0 8px rgba(59,214,198,.15),0 8px 30px rgba(59,214,198,.4)}
        .ghost-btn-css:hover{background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.45)}
        .primary-ghost:hover{background:rgba(59,214,198,.07);border-color:${BRAND}}
        @media(max-width:768px){
          .hide-mob{display:none!important}
          .show-mob{display:flex!important}
          .mob-col{flex-direction:column!important}
          .mob-center{text-align:center!important;justify-content:center!important}
          .mob-full{width:100%!important;justify-content:center!important}
        }
        @media(min-width:769px){.show-mob{display:none!important}}
      `}</style>

      {/* ═══ NAV ════════════════════════════════════════════════════════════ */}
      <header style={{
        position:"fixed", top:0, width:"100%", zIndex:50,
        background: scrollY>60 ? "rgba(255,255,255,0.92)" : "transparent",
        backdropFilter: scrollY>60 ? "blur(20px)" : "none",
        boxShadow: scrollY>60 ? "0 1px 0 rgba(59,214,198,0.12)" : "none",
        padding: scrollY>60 ? "12px 0" : "20px 0",
        transition:"all 0.4s ease",
      }}>
        <div style={{...S.inner, display:"flex", alignItems:"center", justifyContent:"space-between"}}>
          <div style={{display:"flex", alignItems:"center", gap:8}}>
            
            <span style={{fontWeight:800,fontSize:23,letterSpacing:"0.12em",color:"#00fff7"}}>
              GLOPORT <span style={{color:BRAND}}></span>ENTERPRISE
            </span>
          </div>
          {/* Desktop links */}
          <nav className="hide-mob" style={{display:"flex",gap:32,alignItems:"center"}}>
            {[["solution","Solution"],["segments","Segments"],["technology","Technology"],["make-in-india","Make in India"]].map(([id,lbl])=>(
              <a key={id} href={`#${id}`} style={{fontSize:13,fontWeight:500,color:"#64748b",textDecoration:"none",transition:"color .2s"}}
                onMouseEnter={e=>e.target.style.color=BRAND} onMouseLeave={e=>e.target.style.color="#64748b"}>{lbl}</a>
            ))}
            <a href="#contact-us" className="brand-btn-css" style={{...S.brandBtn,fontSize:12,padding:"10px 20px"}}>Join Pilot</a>
          </nav>
          {/* Burger */}
          <button className="show-mob" onClick={()=>setMenuOpen(!menuOpen)}
            style={{background:"none",border:"none",cursor:"pointer",padding:8,flexDirection:"column",gap:5}}>
            {[0,1,2].map(i=>(
              <span key={i} style={{display:"block",width:22,height:2,background:"#0f2220",borderRadius:2,transition:"all .3s",
                transform: menuOpen?(i===0?"rotate(45deg) translate(5px,5px)":i===2?"rotate(-45deg) translate(5px,-5px)":"scaleX(0)"):"none",
                opacity: menuOpen&&i===1?0:1}}/>
            ))}
          </button>
        </div>
        {menuOpen&&(
          <div style={{background:"white",borderTop:"2px solid rgba(59,214,198,.15)",padding:"12px 24px"}}>
            {[["solution","Solution"],["segments","Segments"],["technology","Technology"],["make-in-india","Make in India"],["contact-us","Contact"]].map(([id,lbl])=>(
              <a key={id} href={`#${id}`} onClick={()=>setMenuOpen(false)}
                style={{display:"block",padding:"13px 0",fontSize:15,fontWeight:500,color:"#475569",borderBottom:"1px solid #f1f5f9",textDecoration:"none"}}>{lbl}</a>
            ))}
          </div>
        )}
      </header>

      {/* ═══ HERO ═══════════════════════════════════════════════════════════ */}
      <section id="home" style={{position:"relative",minHeight:"100vh",overflow:"hidden",background:DARK,display:"flex",alignItems:"center"}}>
        <div style={{position:"absolute",inset:0}}>
          <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2000"
            alt="" style={{width:"100%",height:"100%",objectFit:"cover",opacity:.22,transform:`translateY(${scrollY*.25}px)`,filter:"saturate(.6)"}}/>
          <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom, rgba(12,31,29,.6) 0%, rgba(12,31,29,.45) 50%, rgba(12,31,29,1) 100%)"}}/>
          <div style={{position:"absolute",top:"30%",right:"8%",width:520,height:520,borderRadius:"50%",
            background:"radial-gradient(circle, rgba(59,214,198,.18) 0%, transparent 70%)",filter:"blur(40px)",pointerEvents:"none"}}/>
        </div>

        <div style={{position:"relative",zIndex:10,maxWidth:1200,margin:"0 auto",padding:"130px 24px 110px",width:"100%",
          opacity:isLoaded?1:0,transform:isLoaded?"translateY(0)":"translateY(20px)",transition:"all .9s ease"}}>
          {/* Badge */}
          {/* <div className="fu0" style={{display:"inline-flex",alignItems:"center",gap:10,background:"rgba(59,214,198,.1)",
            border:"1px solid rgba(59,214,198,.3)",borderRadius:999,padding:"6px 16px",marginBottom:28}}>
            <div style={{width:6,height:6,borderRadius:"50%",background:BRAND}}/>
            <span style={{fontSize:11,fontWeight:700,letterSpacing:"0.2em",color:BRAND,textTransform:"uppercase"}}>
              Gloport × CarTelSol Germany
            </span>
          </div> */}

          <h1 className="fu1" style={{fontSize:"clamp(2.6rem,6.5vw,5.5rem)",fontWeight:800,color:"white",
            lineHeight:1.05,letterSpacing:"-0.02em",maxWidth:760,marginBottom:22}}>
            Futuristic Telematics for{" "}
            <span style={{color:BRAND}}>Connected Mobility.</span>
          </h1>

          <p className="fu2" style={{fontSize:"clamp(1rem,2vw,1.15rem)",color:"rgba(255,255,255,.5)",fontWeight:400,
            lineHeight:1.8,maxWidth:540,marginBottom:38,paddingLeft:16,borderLeft:"2px solid rgba(59,214,198,.35)"}}>
            Gloport, in collaboration with CarTelSol Germany, is developing an advanced automotive telematics unit for the Indian market for cars, fleets, EVs, buses, trucks, and heavy-duty mobility.
          </p>

          <div className="fu3 mob-col" style={{display:"flex",gap:14,flexWrap:"wrap",marginBottom:56}}>
            <a href="#solution" className="brand-btn-css mob-full" style={S.brandBtn}>Explore the Solution <ArrowRight size={16}/></a>
            <a href="#contact-us" className="ghost-btn-css mob-full" style={S.ghostBtn}>Join Pilot Program</a>
          </div>

          <div className="fu3" style={{display:"flex",gap:36,flexWrap:"wrap"}}>
            {[["4+","Vehicle Segments"],["EV + ICE","Dual Compatible"],["AIS-140","Ready"],["OTA","Architecture"]].map(([v,l])=>(
              <div key={l}>
                <div style={{fontSize:22,fontWeight:800,color:BRAND}}>{v}</div>
                <div style={{fontSize:10,fontWeight:600,color:"rgba(255,255,255,.3)",letterSpacing:"0.1em",textTransform:"uppercase",marginTop:3}}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{position:"absolute",bottom:100,left:"50%",transform:"translateX(-50%)",zIndex:20,textAlign:"center",cursor:"pointer"}}
          onClick={()=>document.getElementById("solution")?.scrollIntoView({behavior:"smooth"})}>
          <div style={{color:"rgba(255,255,255,.3)",fontSize:9,letterSpacing:"0.25em",textTransform:"uppercase",marginBottom:8}}>Scroll</div>
          <div style={{width:1,height:52,background:"rgba(255,255,255,.15)",margin:"0 auto",position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",top:0,left:0,width:"100%",height:"50%",background:BRAND,animation:"scrolldown 2s ease-in-out infinite"}}/>
          </div>
        </div>

        {/* Ticker */}
        <div style={{position:"absolute",bottom:0,width:"100%",overflow:"hidden",borderTop:"1px solid rgba(59,214,198,.1)",
          background:"rgba(12,31,29,.75)",backdropFilter:"blur(12px)",padding:"11px 0",zIndex:20}}>
          <div className="ticker-track">
            {[...Array(4)].map((_,i)=>(
              <div key={i} style={{display:"flex",gap:32,alignItems:"center",paddingRight:32,whiteSpace:"nowrap"}}>
                {["Connected Vehicles","EV Intelligence","Fleet Visibility","Remote Diagnostics","Secure Data","Make in India"].map(t=>(
                  <React.Fragment key={t}>
                    <span style={{fontSize:10,fontWeight:700,letterSpacing:"0.25em",textTransform:"uppercase",color:"rgba(59,214,198,.4)"}}>{t}</span>
                    <span style={{color:BRAND,fontSize:8}}>◆</span>
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ABOUT / PARTNERSHIP ════════════════════════════════════════════ */}
      <section id="solution" style={{padding:"96px 0",background:"white"}}>
        <div style={S.inner}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:64,alignItems:"center"}}>
            <div>
              <div style={S.chip}><span style={S.chipBar}/>01 // The Architecture</div>
              <h2 style={{...S.h2,marginBottom:20}}>German Expertise.<br/><span style={{color:"#94a3b8",fontWeight:400}}>Indian Scale.</span></h2>
              <p style={{...S.p,marginBottom:28}}>
                Gloport has partnered with <strong style={{color:"#0f2220"}}>CarTelSol Germany</strong> to develop a futuristic telematics control unit built for the Indian automotive ecosystem — combining decades of embedded engineering with local deployment expertise.
              </p>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:28}}>
                {[{name:"CarTelSol Germany",desc:"Automotive-grade telematics, embedded Linux, PCB integration, and deep EV/HV expertise."},
                  {name:"Gloport India",    desc:"Engineering, AI, electronics, deployment, and Make in India commercialization at scale."}].map(p=>(
                  <div key={p.name} className="hov-card" style={{...S.card,padding:18,border:"1.5px solid #e2e8f0"}}>
                    <div style={{width:24,height:3,background:BRAND,borderRadius:2,marginBottom:10}}/>
                    <div style={{fontSize:12,fontWeight:700,color:"#0f2220",marginBottom:6,letterSpacing:"0.04em"}}>{p.name}</div>
                    <p style={{fontSize:12,color:"#94a3b8",lineHeight:1.7,margin:0}}>{p.desc}</p>
                  </div>
                ))}
              </div>
              <div style={{padding:"16px 20px",background:"rgba(59,214,198,.06)",borderRadius:14,borderLeft:`3px solid ${BRAND}`}}>
                <p style={{fontSize:14,fontWeight:600,color:"#0f2220",margin:0}}>The future of telematics is not just tracking — it's vehicle intelligence.</p>
              </div>
            </div>

            <div style={{position:"relative"}}>
              <div style={{position:"absolute",inset:-16,background:"rgba(59,214,198,.06)",borderRadius:32,transform:"rotate(2deg)",zIndex:0}}/>
              <div style={{position:"relative",zIndex:1,borderRadius:24,overflow:"hidden",boxShadow:"0 32px 80px rgba(59,214,198,.15), 0 8px 24px rgba(0,0,0,.08)"}}>
                <img src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=900"
                  alt="Connected vehicle" style={{width:"100%",aspectRatio:"4/3",objectFit:"cover",display:"block"}}/>
                <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(12,31,29,.55) 0%, transparent 55%)"}}/>
                {/* Floating status chip */}
                <div style={{position:"absolute",bottom:18,left:18,right:18}}>
                  <div style={{background:"rgba(255,255,255,.95)",backdropFilter:"blur(12px)",borderRadius:14,padding:"12px 16px",
                    display:"flex",alignItems:"center",gap:14}}>
                    <div style={{width:40,height:40,borderRadius:11,background:"rgba(59,214,198,.12)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,color:BRAND}}>
                      <Wifi size={18}/>
                    </div>
                    <div>
                      <div style={{fontSize:13,fontWeight:700,color:"#0f2220"}}>Live Vehicle Data</div>
                      <div style={{fontSize:11,color:"#94a3b8"}}>Real-time CAN / OBD / GNSS stream</div>
                    </div>
                    <div style={{marginLeft:"auto",width:8,height:8,borderRadius:"50%",background:"#22c55e",flexShrink:0,boxShadow:"0 0 0 4px rgba(34,197,94,.2)"}}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROBLEM ════════════════════════════════════════════════════════ */}
      <section style={{padding:"96px 0",background:"#f8fafa"}}>
        <div style={S.inner}>
          <div style={{textAlign:"center",maxWidth:640,margin:"0 auto 56px"}}>
            <div style={{...S.chip,justifyContent:"center"}}>02 // The Problem</div>
            <h2 style={{...S.h2,marginBottom:14}}>India Needs More Than GPS Tracking</h2>
            <p style={S.p}>Existing systems focus only on location. The next generation of mobility demands deeper vehicle intelligence at every layer.</p>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(270px,1fr))",gap:20}}>
            {[
              {icon:<Zap size={22}/>,     title:"Limited Diagnostics",  desc:"Operators discover issues only after breakdowns — no predictive visibility."},
              {icon:<Globe size={22}/>,    title:"Fragmented Visibility", desc:"Mixed fleets of cars, trucks, and EVs are impossible to manage from one platform."},
              {icon:<Battery size={22}/>,  title:"EV Data Complexity",   desc:"Battery, charging, and thermal data require highly specialized monitoring."},
              {icon:<Wifi size={22}/>,     title:"Connectivity Gaps",    desc:"Indian road conditions demand rugged, adaptive communication systems."},
              {icon:<Shield size={22}/>,   title:"Local Cost Pressure",  desc:"Advanced tech must be localized and scaled affordably for Indian operators."},
              {icon:<Cpu size={22}/>,      title:"No Unified Platform",  desc:"No single Indian solution covers all vehicle types with deep diagnostics."},
            ].map((item,i)=>(
              <div key={i} className="hov-card" style={{...S.card,border:"1.5px solid #e2e8f0",cursor:"default"}}>
                <div style={{...S.iconBox,marginBottom:18}}>{item.icon}</div>
                <h4 style={{fontSize:16,fontWeight:700,color:"#0f2220",marginBottom:8}}>{item.title}</h4>
                <p style={{fontSize:13,color:"#94a3b8",lineHeight:1.75,margin:0}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ARCHITECTURE FLOW (dark) ═══════════════════════════════════════ */}
      <section style={{padding:"96px 0",background:DARK}}>
        <div style={S.inner}>
          <div style={{textAlign:"center",marginBottom:56}}>
            <div style={{...S.chip,justifyContent:"center",color:"rgba(59,214,198,.7)"}}>03 // The Solution</div>
            <h2 style={{...S.h2,color:"white",marginBottom:14}}>Next-Generation Intelligent Telematics</h2>
            <p style={{...S.p,color:"rgba(255,255,255,.4)",maxWidth:520,margin:"0 auto"}}>One intelligent unit. Multiple vehicle types. Real-time cloud visibility.</p>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(210px,1fr))",gap:12,marginBottom:24}}>
            {[
              {n:"01",l:"SOURCE",    t:"Vehicle Data",    s:"CAN / OBD-II / J1939 / Sensors / Battery", accent:false},
              {n:"02",l:"HARDWARE",  t:"Telematics Unit", s:"Edge processing & secure cellular transmission", accent:true},
              {n:"03",l:"CLOUD",     t:"Secure Platform", s:"Data engine, OTA updates, and API gateway", accent:false},
              {n:"04",l:"INTERFACE", t:"Apps & Dashboards",s:"Fleet intelligence, diagnostics & OEM APIs", accent:false},
            ].map((item,i)=>(
              <div key={i} style={{
                padding:"26px 24px",
                background: item.accent?"rgba(59,214,198,.1)":"rgba(255,255,255,.03)",
                border:`1.5px solid ${item.accent?BRAND:"rgba(255,255,255,.07)"}`,
                borderRadius:20,
                transform: item.accent?"translateY(-10px)":"none",
                boxShadow: item.accent?"0 20px 60px rgba(59,214,198,.15)":"none",
              }}>
                <div style={{fontSize:9,fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",marginBottom:14,color:item.accent?BRAND:"rgba(59,214,198,.35)"}}>{item.n}. {item.l}</div>
                <h4 style={{fontSize:17,fontWeight:700,color:"white",marginBottom:8}}>{item.t}</h4>
                <p style={{fontSize:12,color:"rgba(255,255,255,.38)",lineHeight:1.7,margin:0}}>{item.s}</p>
              </div>
            ))}
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10}}>
            {["https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=700",
              "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=700",
              "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=700"
            ].map((src,i)=>(
              <div key={i} style={{height:110,borderRadius:14,overflow:"hidden",border:"1px solid rgba(59,214,198,.08)"}}>
                <img src={src} alt="" style={{width:"100%",height:"100%",objectFit:"cover",filter:"saturate(.35) brightness(.5)"}}/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SEGMENTS (tabs like reference) ════════════════════════════════ */}
      <section id="segments" style={{padding:"96px 0",background:"white"}}>
        <div style={S.inner}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:56,alignItems:"center"}}>

            <div>
              <div style={S.chip}><span style={S.chipBar}/>04 // Deployment</div>
              <h2 style={{...S.h2,marginBottom:32}}>Designed for India&apos;s Complete Ecosystem.</h2>
              <div style={{display:"flex",flexDirection:"column",gap:10}}>
                {segments.map((seg,idx)=>(
                  <button key={idx} onClick={()=>setActiveSegment(idx)} style={{
                    textAlign:"left",padding:"16px 20px",borderRadius:16,cursor:"pointer",
                    border:`1.5px solid ${activeSegment===idx?"rgba(59,214,198,.3)":"#e2e8f0"}`,
                    background: activeSegment===idx?"rgba(59,214,198,.05)":"transparent",
                    boxShadow: activeSegment===idx?"0 4px 20px rgba(59,214,198,.1)":"none",
                    transition:"all .3s ease",
                  }}>
                    <div style={{display:"flex",alignItems:"center",gap:12}}>
                      <div className="seg-icon" style={{
                        width:38,height:38,borderRadius:11,display:"flex",alignItems:"center",justifyContent:"center",
                        background: activeSegment===idx?BRAND:"#f1f5f9",
                        color: activeSegment===idx?"white":"#94a3b8",
                        transition:"all .3s ease",flexShrink:0,
                      }}>{seg.icon}</div>
                      <div>
                        <div style={{fontSize:15,fontWeight:700,color:activeSegment===idx?"#0f2220":"#64748b",transition:"color .3s"}}>{seg.title}</div>
                        <div style={{fontSize:10,color:"#94a3b8",marginTop:2}}>{seg.id}</div>
                      </div>
                      <div style={{marginLeft:"auto",color:activeSegment===idx?BRAND:"#e2e8f0"}}><ArrowRight size={15}/></div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div style={{borderRadius:24,overflow:"hidden",boxShadow:"0 24px 60px rgba(59,214,198,.12),0 4px 16px rgba(0,0,0,.06)",border:"1.5px solid #e2e8f0"}}>
              <div style={{position:"relative",height:240,overflow:"hidden"}}>
                {segments.map((seg,idx)=>(
                  <img key={idx} src={seg.img} alt={seg.title} style={{
                    position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",
                    filter:"saturate(.65) brightness(.7)",
                    opacity:activeSegment===idx?1:0,
                    transform:activeSegment===idx?"scale(1)":"scale(1.05)",
                    transition:"opacity .6s ease,transform .6s ease",
                  }}/>
                ))}
                <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(255,255,255,1) 0%,transparent 60%)"}}/>
                <div style={{position:"absolute",top:14,left:14}}>
                  <span style={{background:BRAND,color:"white",fontSize:10,fontWeight:700,letterSpacing:"0.15em",padding:"5px 12px",borderRadius:999}}>
                    {segments[activeSegment].id}
                  </span>
                </div>
              </div>
              <div style={{padding:"24px 28px"}}>
                <h3 style={{fontSize:22,fontWeight:800,color:"#0f2220",marginBottom:6}}>{segments[activeSegment].title}</h3>
                <p style={{fontSize:13,color:"#94a3b8",marginBottom:20,lineHeight:1.6}}>{segments[activeSegment].target}</p>
                <div style={{fontSize:10,fontWeight:700,letterSpacing:"0.18em",textTransform:"uppercase",color:BRAND,marginBottom:14,paddingBottom:10,borderBottom:"1px solid #f1f5f9"}}>
                  Key Capabilities
                </div>
                <ul style={{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:9}}>
                  {segments[activeSegment].benefits.map((b,i)=>(
                    <li key={i} style={{display:"flex",alignItems:"center",gap:10,fontSize:13,color:"#475569"}}>
                      <div style={{width:20,height:20,borderRadius:999,background:"rgba(59,214,198,.12)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,color:BRAND}}>
                        <Check size={11}/>
                      </div>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Team Section - Interactive Reveal Cards */}
      <section id="team" style={{padding:"96px 0",background:"white"}}>
  <div style={S.inner}>
    <div style={{textAlign:"center",maxWidth:640,margin:"0 auto 56px"}}>
      <div style={{...S.chip,justifyContent:"center"}}>
        <span style={S.chipBar}/>Leadership
      </div>
      <h2 style={{...S.h2,marginBottom:14}}>Meet the Experts</h2>
    </div>

    <div className="team-grid" style={{gap:24}}>
      {[
        {
          name: "MR. ABHIJEET THAKUR",
          role: "FOUNDER & CEO",
          img: "https://i.postimg.cc/fRVGPkr7/PHOTO-2019-07-24-10-01-41-jpg.jpg",
          desc: "28+ years of excellence across IT, Cloud, AI, and Electronic subsystems.",
        },
        {
          name: "MR. SANJAY SINGH",
          role: "FOUNDER & CBO",
          img: "https://i.postimg.cc/LXVm1G7b/Whats-App-Image-2025-03-04-at-23-07-35.jpg",
          desc: "Seasoned leader with 27+ years in strategic marketing and operational growth.",
        },
        {
          name: "MRS. BUSHRA KHAN",
          role: "FOUNDER & CFO",
          img: "https://i.postimg.cc/52gp47X2/Whats-App-Image-2025-01-01-at-15-02-37-1.jpg",
          desc: "Powerhouse in financial strategy, investment control, and operational excellence.",
        },
        {
          name: "DR. KHALID KHAN",
          role: "FOUNDER & CHAIRMAN",
          img: "https://i.postimg.cc/W1TXPLby/Whats-App-Image-2025-01-01-at-15-02-37.jpg",
          desc: "Reputed entrepreneur & philanthropist with over four decades of experience.",
        },
      ].map((member, idx) => (
        <div
          key={idx}
          className="hov-card"
          style={{
            ...S.card,
            border:"1.5px solid #e2e8f0",
            height:380,
            position:"relative",
            overflow:"hidden",
            display:"flex",
            flexDirection:"column"
          }}
        >
          <div style={{position:"absolute",inset:0,zIndex:0}}>
            <img
              src={member.img}
              alt={member.name}
              style={{
                width:"100%",
                height:"100%",
                objectFit:"cover",
                objectPosition:"top"
              }}
            />
            <div
              style={{
                position:"absolute",
                inset:0,
                background:"linear-gradient(to bottom,transparent 40%,rgba(15,34,32,.85) 100%)"
              }}
            />
          </div>

          <div style={{position:"relative",zIndex:1,marginTop:"auto",padding:"20px"}}>
            <h3 style={{fontSize:14,fontWeight:700,color:"white",marginBottom:4}}>
              {member.name}
            </h3>
            <p style={{
              fontSize:11,
              fontWeight:600,
              color:BRAND,
              marginBottom:8,
              letterSpacing:"0.06em",
              textTransform:"uppercase"
            }}>
              {member.role}
            </p>
            <p style={{
              fontSize:12,
              color:"rgba(255,255,255,.7)",
              lineHeight:1.6,
              margin:0
            }}>
              {member.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Responsive Grid */}
  <style>{`
    .team-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px;
    }

    @media (max-width: 1024px) {
      .team-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 640px) {
      .team-grid {
        grid-template-columns: 1fr;
      }
    }
  `}</style>
</section>

      {/* ═══ WHY CHOOSE US (dark, interactive like reference) ═══════════════ */}
      <section style={{padding:"96px 0",background:DARK}}>
        <div style={S.inner}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:56,alignItems:"center"}}>
            <div>
              <div style={{...S.chip,color:"rgba(59,214,198,.7)"}}>05 // The Advantage</div>
              <h2 style={{...S.h2,color:"white",marginBottom:32}}>
                Why Choose<br/><span style={{color:BRAND}}>Gloport × CarTelSol?</span>
              </h2>
              <div style={{display:"flex",flexDirection:"column",gap:10}}>
                {whyTabs.map((tab,idx)=>(
                  <button key={idx} onClick={()=>setActiveTab(idx)} style={{
                    textAlign:"left",padding:"18px 22px",borderRadius:18,cursor:"pointer",
                    border:`1.5px solid ${activeTab===idx?"rgba(59,214,198,.35)":"rgba(255,255,255,.06)"}`,
                    background: activeTab===idx?"rgba(59,214,198,.08)":"transparent",
                    boxShadow: activeTab===idx?"0 0 20px rgba(59,214,198,.08)":"none",
                    transition:"all .3s ease",
                  }}>
                    <h3 style={{fontSize:17,fontWeight:700,marginBottom:activeTab===idx?10:0,color:activeTab===idx?BRAND:"white",transition:"all .3s"}}>{tab.title}</h3>
                    <div style={{overflow:"hidden",maxHeight:activeTab===idx?120:0,opacity:activeTab===idx?1:0,transition:"all .45s ease"}}>
                      <p style={{fontSize:13,color:"rgba(255,255,255,.45)",lineHeight:1.8,margin:0}}>{tab.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div style={{position:"relative",height:440,borderRadius:28,overflow:"hidden",boxShadow:"0 32px 80px rgba(0,0,0,.4)"}}>
              {whyTabs.map((tab,idx)=>(
                <img key={idx} src={tab.img} alt={tab.title} style={{
                  position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",
                  filter:"saturate(.5) brightness(.65)",
                  opacity:activeTab===idx?1:0,transform:activeTab===idx?"scale(1)":"scale(1.06)",
                  transition:"opacity .7s ease,transform .7s ease",
                }}/>
              ))}
              <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(12,31,29,1) 0%,transparent 55%)"}}/>
              <div style={{position:"absolute",bottom:22,left:22,right:22}}>
                <div style={{fontSize:17,fontWeight:800,color:"white",marginBottom:10}}>{whyTabs[activeTab].title}</div>
                <div style={{display:"flex",gap:8}}>
                  {whyTabs.map((_,i)=>(
                    <div key={i} onClick={()=>setActiveTab(i)} style={{height:3,borderRadius:999,cursor:"pointer",
                      background:i===activeTab?BRAND:"rgba(255,255,255,.18)",
                      flex:i===activeTab?3:1,transition:"all .4s ease"}}/>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FEATURES ═══════════════════════════════════════════════════════ */}
      <section id="technology" style={{padding:"96px 0",background:"#f8fafa"}}>
        <div style={S.inner}>
          <div style={{textAlign:"center",maxWidth:600,margin:"0 auto 56px"}}>
            <div style={{...S.chip,justifyContent:"center"}}><span style={S.chipBar}/>06 // Platform Architecture</div>
            <h2 style={{...S.h2,marginBottom:14}}>A Complete Connected Vehicle Intelligence Platform</h2>
            <p style={S.p}>From in-vehicle hardware to cloud dashboards — every layer engineered for reliability and scale.</p>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(270px,1fr))",gap:20,marginBottom:48}}>
            {features.map((feat,i)=>(
              <div key={i} className="hov-card" style={{...S.card,border:"1.5px solid #e2e8f0",cursor:"default"}}>
                <div style={{...S.iconBox,marginBottom:20}}>{feat.icon}</div>
                <h4 style={{fontSize:17,fontWeight:700,color:"#0f2220",marginBottom:10}}>{feat.title}</h4>
                <p style={{fontSize:13,color:"#94a3b8",lineHeight:1.75,margin:0}}>{feat.desc}</p>
              </div>
            ))}
          </div>

          {/* Stats strip */}
          <div style={{background:"white",border:"1.5px solid #e2e8f0",borderRadius:24,padding:"32px 40px",
            display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:20}}>
            {[["EV + ICE","Compatibility"],["Automotive","Grade Design"],["OTA Ready","Architecture"],["India","Optimised"],["AIS-140","Compliant"]].map(([v,l])=>(
              <div key={l} style={{textAlign:"center"}}>
                <div style={{fontSize:20,fontWeight:800,color:"#0f2220"}}>{v}</div>
                <div style={{fontSize:10,fontWeight:600,color:"#94a3b8",letterSpacing:"0.12em",textTransform:"uppercase",marginTop:4}}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MAKE IN INDIA + ROADMAP ════════════════════════════════════════ */}
      <section id="make-in-india" style={{padding:"96px 0",background:"white"}}>
        <div style={S.inner}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:56}}>

            <div>
              <div style={S.chip}><span style={S.chipBar}/>07 // Strategic Vision</div>
              <h2 style={{...S.h2,marginBottom:18}}>Advancing Mobility Under Make in India.</h2>
              <p style={{...S.p,marginBottom:24}}>Not just importing technology — localizing, adapting, manufacturing, testing, and deploying telematics solutions for Indian mobility at scale.</p>
              <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:28}}>
                {["Indian market-specific product adaptation","Local assembly and manufacturing roadmap","Domestic supply chain development","Cost-optimized deployment for scale","Technology transfer and engineering collaboration"].map(item=>(
                  <div key={item} style={{display:"flex",alignItems:"center",gap:10,fontSize:13,color:"#475569"}}>
                    <div style={{width:20,height:20,borderRadius:999,background:"rgba(59,214,198,.12)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,color:BRAND}}>
                      <Check size={11}/>
                    </div>
                    {item}
                  </div>
                ))}
              </div>
              <div style={{padding:"18px 22px",background:"rgba(59,214,198,.06)",borderRadius:14,border:`1.5px solid rgba(59,214,198,.2)`,marginBottom:22}}>
                <p style={{fontSize:14,fontWeight:600,color:"#0f2220",margin:0,lineHeight:1.7}}>From German automotive intelligence to Indian manufacturing scale — made for India and ready for the world.</p>
              </div>
              <div style={{borderRadius:18,overflow:"hidden",height:160,border:"1.5px solid #e2e8f0"}}>
                <img src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=900"
                  alt="Manufacturing" style={{width:"100%",height:"100%",objectFit:"cover",filter:"saturate(.5) brightness(.85)"}}/>
              </div>
            </div>

            <div>
              <div style={S.chip}><span style={S.chipBar}/>Development Roadmap</div>
              <h2 style={{...S.h2,fontSize:"1.9rem",marginBottom:40}}>Five Phases to Market.</h2>
              <div style={{position:"relative",paddingLeft:28}}>
                <div style={{position:"absolute",left:0,top:8,bottom:0,width:2,background:`linear-gradient(to bottom,${BRAND},rgba(59,214,198,.1))`}}/>
                {roadmap.map((step,i)=>(
                  <div key={i} style={{position:"relative",marginBottom:i<roadmap.length-1?32:0}}>
                    <div style={{position:"absolute",left:-33,top:6,width:12,height:12,borderRadius:"50%",background:BRAND,boxShadow:`0 0 0 4px rgba(59,214,198,.2)`}}/>
                    <div style={{fontSize:10,fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",color:BRAND,marginBottom:4}}>{step.phase}</div>
                    <h4 style={{fontSize:16,fontWeight:700,color:"#0f2220",marginBottom:6}}>{step.title}</h4>
                    <p style={{fontSize:13,color:"#94a3b8",lineHeight:1.7,margin:0}}>{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ CONTACT ════════════════════════════════════════════════════════ */}
      <section id="contact-us" style={{padding:"96px 0",background:"#f8fafa",borderTop:"1px solid #e2e8f0"}}>
        <div style={S.inner}>
          <div style={{textAlign:"center",maxWidth:580,margin:"0 auto 56px"}}>
            <div style={{...S.chip,justifyContent:"center"}}><span style={S.chipBar}/>08 // Pilot & Partnership</div>
            <h2 style={{...S.h2,marginBottom:14}}>Ready to Build the Future?</h2>
            <p style={S.p}>We invite Indian OEMs, EV manufacturers, fleet operators, and logistics companies to join our pilot deployments.</p>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(270px,1fr))",gap:20,marginBottom:48}}>
            {/* Location */}
            <div className="hov-card" style={{...S.card,border:"1.5px solid #e2e8f0",display:"flex",gap:18,alignItems:"flex-start"}}>
              <div style={S.iconBox}><MapPin size={22}/></div>
              <div>
                <h4 style={{fontSize:16,fontWeight:700,color:"#0f2220",marginBottom:6}}>Our Office</h4>
                <p style={{fontSize:13,color:"#94a3b8",lineHeight:1.7,margin:0}}><strong style={{color:"#475569"}}>Gloport Enterprise</strong><br/>21st Floor, 2103 - 2106, Kamdhenu 23 West, TTC Industrial Area, Pawne, Navi Mumbai, 400710</p>
              </div>
            </div>

            {/* Email */}
            <div className="hov-card" onClick={()=>handleCopy("partnerships@gloport.com","email")}
              style={{...S.card,border:"1.5px solid #e2e8f0",display:"flex",gap:18,alignItems:"flex-start",cursor:"pointer",position:"relative"}}>
              <div style={S.iconBox}><Mail size={22}/></div>
              <div style={{flex:1}}>
                <h4 style={{fontSize:16,fontWeight:700,color:"#0f2220",marginBottom:6}}>Email Us</h4>
                <p style={{fontSize:13,color:"#94a3b8",margin:0}}>info@gloportech.com</p>
              </div>
              <div style={{position:"absolute",right:22,top:24,color:copiedStatus==="email"?"#22c55e":"#cbd5e1"}}>
                {copiedStatus==="email"?<CheckCircle size={18}/>:<Copy size={18}/>}
              </div>
            </div>

            {/* Phone */}
            <div className="hov-card" onClick={()=>handleCopy("+91 00000 00000","phone")}
              style={{...S.card,border:"1.5px solid #e2e8f0",display:"flex",gap:18,alignItems:"flex-start",cursor:"pointer",position:"relative"}}>
              <div style={S.iconBox}><Phone size={22}/></div>
              <div style={{flex:1}}>
                <h4 style={{fontSize:16,fontWeight:700,color:"#0f2220",marginBottom:6}}>Call Us</h4>
                <p style={{fontSize:13,color:"#94a3b8",margin:0}}>+91 9833396290</p>
              </div>
              <div style={{position:"absolute",right:22,top:24,color:copiedStatus==="phone"?"#22c55e":"#cbd5e1"}}>
                {copiedStatus==="phone"?<CheckCircle size={18}/>:<Copy size={18}/>}
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div style={{background:DARK,borderRadius:28,padding:"44px 44px",display:"flex",flexWrap:"wrap",gap:28,alignItems:"center",justifyContent:"space-between",
            backgroundImage:"radial-gradient(circle at 80% 50%, rgba(59,214,198,.12) 0%, transparent 60%)"}}>
            <div>
              <h3 style={{fontSize:24,fontWeight:800,color:"white",marginBottom:8}}>Start Your Pilot Today</h3>
              <p style={{fontSize:14,color:"rgba(255,255,255,.4)",margin:0,lineHeight:1.7}}>Validate technology across real-world Indian road conditions.</p>
            </div>
            <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
              <button className="brand-btn-css" style={S.brandBtn}>Request Demo <ArrowRight size={16}/></button>
              <button className="ghost-btn-css" style={S.ghostBtn}>Join Pilot Program</button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═════════════════════════════════════════════════════════ */}
      <footer style={{background:DARK,padding:"36px 0",borderTop:"1px solid rgba(59,214,198,.08)"}}>
        <div style={{...S.inner,display:"flex",flexWrap:"wrap",gap:16,justifyContent:"space-between",alignItems:"center"}}>
          <div>
            <div style={{fontWeight:800,fontSize:23,letterSpacing:"0.1em",color:"white",marginBottom:4}}>
              Gloport Enterprise
            </div>
            <div style={{fontSize:12,color:"rgba(255,255,255,.25)"}}>Futuristic Telematics for India's Connected Mobility Era</div>
          </div>
          <div style={{textAlign:"right"}}>
            <div style={{fontSize:12,color:"rgba(255,255,255,.2)",marginBottom:4}}>© {new Date().getFullYear()} Gloport. All Rights Reserved.</div>
            <div style={{fontSize:10,color:"rgba(255,255,255,.1)",maxWidth:360}}>CarTelSol Germany collaboration mentioned for the Indian market telematics initiative. Final product specifications may evolve.</div>
          </div>
        </div>
      </footer>

      {/* Scroll to top */}
      <button onClick={scrollToTop} aria-label="Back to top"
        style={{position:"fixed",bottom:28,right:28,zIndex:50,
          width:48,height:48,borderRadius:"50%",background:DARK,border:`1.5px solid rgba(59,214,198,.3)`,
          color:BRAND,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",
          boxShadow:"0 8px 24px rgba(0,0,0,.2)",
          opacity:scrollY>500?1:0,transform:scrollY>500?"translateY(0)":"translateY(16px)",
          pointerEvents:scrollY>500?"auto":"none",transition:"all .4s ease"}}
        onMouseEnter={e=>{e.currentTarget.style.background=BRAND;e.currentTarget.style.color="white";}}
        onMouseLeave={e=>{e.currentTarget.style.background=DARK;e.currentTarget.style.color=BRAND;}}>
        <ArrowUp size={20}/>
      </button>
    </div>
  );
}
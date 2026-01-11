"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormSchema, ContactFormData } from "@/schemas/contact";
import {
  Brain,
  Globe,
  BarChart3,
  Search,
  Cpu,
  Rocket,
  ArrowRight,
  CheckCircle,
  Menu,
  X,
  Zap,
  Activity
} from "lucide-react";
import SystemArchitecture from "@/components/sections/SystemArchitecture";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setFormStatus('submitting');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Falha no envio');

      setFormStatus('success');
      reset();
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-obsidian text-slate-300 selection:bg-electric-cyan/20 selection:text-electric-cyan font-sans relative overflow-x-hidden">

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-midnight to-obsidian opacity-50" />
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-electric-cyan/5 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-[100px]" />
      </div>

      {/* Grid Overlay */}
      <div className="fixed inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Header */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 border-b ${scrolled ? 'bg-midnight/80 backdrop-blur-xl border-electric-cyan/20' : 'bg-transparent border-transparent'}`}>
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-10 h-10 flex items-center justify-center bg-transparent border border-electric-cyan/30 rounded-lg overflow-hidden group-hover:border-electric-cyan transition-all">
              <div className="absolute inset-0 bg-electric-cyan/10 group-hover:bg-electric-cyan/20 transition-all" />
              <Zap className="w-5 h-5 text-electric-cyan" />
            </div>
            <span className="text-xl font-bold tracking-widest text-white uppercase font-sans">Athlexic<span className="text-electric-cyan">Group</span></span>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wide font-mono">
            {['Services', 'Process', 'Results'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-electric-cyan transition-colors uppercase text-xs">
                // {item}
              </a>
            ))}
          </nav>

          <a href="#contact" className="hidden md:flex items-center gap-2 px-6 py-2 bg-electric-cyan/10 border border-electric-cyan/50 hover:bg-electric-cyan/20 hover:border-electric-cyan text-electric-cyan text-xs font-bold tracking-widest uppercase transition-all duration-300 group rounded-sm">
            Start Automation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 lg:pt-60 lg:pb-40 px-6 z-10 flex flex-col items-center justify-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-midnight border border-electric-cyan/20 text-electric-cyan text-xs font-mono mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-electric-cyan animate-pulse" />
          SYSTEM: OPTIMIZATION INITIALIZED...
        </div>

        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight max-w-5xl mx-auto uppercase">
          Scaling Businesses with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan via-white to-neon-purple drop-shadow-[0_0_15px_rgba(0,240,255,0.3)]">
            Artificial Intelligence
          </span>
        </h1>

        <p className="text-slate-400 font-mono text-sm lg:text-base max-w-2xl mx-auto mb-12">
          &gt; Web Design. Traffic Systems. Custom AI Automations.
          <br />
          We build digital infrastructures that scale revenue autonomously.
        </p>

        <a href="#contact" className="px-10 py-5 bg-electric-cyan text-obsidian font-bold uppercase tracking-widest hover:bg-white hover:shadow-[0_0_40px_rgba(0,240,255,0.6)] transition-all duration-300 skew-x-[-10deg] group border border-electric-cyan">
          <span className="skew-x-[10deg] inline-block">Execute Growth Protocol</span>
        </a>
      </section>

      {/* The Triad (Services) */}
      <section id="services" className="py-24 relative z-10 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "AI Automation",
              icon: Brain,
              desc: "Eliminate inefficiencies. Chatbots, CRM integration, and workflow automation.",
              color: "text-electric-cyan"
            },
            {
              title: "High-Performance Web",
              icon: Globe,
              desc: "Conversion-first architecture. Blazing fast, SEO-optimized digital headquarters.",
              color: "text-neon-purple"
            },
            {
              title: "Paid Traffic Algorithms",
              icon: BarChart3,
              desc: "Data-driven ad campaigns. We turn clicks into revenue using predictive targeting.",
              color: "text-digital-green"
            }
          ].map((service, i) => (
            <div key={i} className="group p-8 bg-midnight/40 backdrop-blur-sm border border-white/5 hover:border-electric-cyan/50 hover:bg-midnight/60 transition-all duration-500 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-electric-cyan/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <service.icon className={`w-12 h-12 ${service.color} mb-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]`} />
              <h3 className="text-2xl font-bold text-white mb-4 uppercase">{service.title}</h3>
              <p className="text-slate-400 font-mono text-sm leading-relaxed">{service.desc}</p>
              <div className="absolute bottom-4 right-4 text-[10px] text-slate-700 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                SYS_ID_0{i + 1}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* System Architecture / How It Works */}
      <SystemArchitecture />

      {/* System Protocols Section */}
      <section className="py-24 relative z-10 container mx-auto px-6 border-b border-white/5">
        <div className="grid md:grid-cols-3 gap-12 text-left">
          {/* Column 1 */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-sans text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-neon-purple">
              01. DATA INGESTION
            </h3>
            <p className="text-slate-300 font-sans text-sm leading-relaxed">
              We don't trade in clicks; we trade in Purchase Intent. Our algorithms track behavioral patterns across multiple sources (Google, Meta, LinkedIn) to inject only high-qualification raw data into the system. We eliminate noise before it even enters your pipeline.
            </p>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-sans text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-neon-purple">
              02. NEURAL TRIAGE
            </h3>
            <p className="text-slate-300 font-sans text-sm leading-relaxed">
              The "Black Box" of efficiency. Our AI Agent processes interactions in real-time, executing the Urgency vs. Curiosity protocol. The system automatically nurtures curiosity and instantly escalates urgent buyers. Human error and response latency are removed from the equation.
            </p>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-sans text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-neon-purple">
              03. DETERMINISTIC REVENUE
            </h3>
            <p className="text-slate-300 font-sans text-sm leading-relaxed">
              Results shift from gambling to mathematics. We deliver validated leads directly to your calendar. The system learns from every conversion, feeding data back into the ingestion layer to lower your CAC (Customer Acquisition Cost) with every cycle.
            </p>
          </div>
        </div>

        {/* CTA Component */}
        <div className="mt-16 text-center">
          <div className="text-[10px] font-mono text-electric-cyan/60 tracking-widest mb-4">
            DEPLOYMENT STATUS: AVAILABLE IN FULL STACK PLAN ONLY
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-electric-cyan text-electric-cyan font-bold uppercase tracking-widest hover:bg-electric-cyan hover:text-obsidian transition-all duration-300 group">
            [ INITIATE INFRASTRUCTURE AUDIT ]
          </a>
        </div>
      </section>

      {/* The Process */}
      <section id="process" className="py-32 relative z-10 bg-midnight/30 border-y border-white/5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-20 text-center uppercase tracking-widest"><span className="text-electric-cyan">/</span> Operation Sequence</h2>

          <div className="relative flex flex-col md:flex-row justify-between items-center gap-12 md:gap-4">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-[28px] left-0 w-full h-[2px] bg-white/10">
              <div className="absolute top-0 left-0 h-full w-1/3 bg-electric-cyan shadow-[0_0_10px_#00F0FF] animate-pulse" />
            </div>

            {[
              { icon: Search, title: "Analysis", sub: "System Diagnostic", desc: "We perform a deep-dive audit of your current digital infrastructure to identify revenue leaks, bottlenecks, and automation opportunities." },
              { icon: Cpu, title: "Build & Automate", sub: "Core Implementation", desc: "We deploy the custom AI agents, restructure your web architecture for speed, and integrate the CRM tracking layers." },
              { icon: Rocket, title: "Scale", sub: "Exponential Output", desc: "Once the \"Engine\" is stable, we inject high-volume paid traffic. The system handles the volume increase without breaking, maintaining consistent ROI." }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center gap-6 group">
                <div className="w-16 h-16 rounded-full bg-obsidian border border-electric-cyan/30 flex items-center justify-center group-hover:border-electric-cyan group-hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-500">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white uppercase mb-1">{step.title}</h3>
                  <p className="text-xs font-mono text-electric-cyan mb-3">{step.sub}</p>
                  <p className="text-slate-400 text-sm max-w-xs">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results / Dashboard */}
      <section id="results" className="py-32 container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-block px-3 py-1 border border-digital-green/30 rounded text-[10px] font-mono text-digital-green mb-6">
              PERFORMANCE METRICS
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 uppercase leading-tight">
              Engineering <br /> <span className="text-digital-green">Results</span>
            </h2>
            <p className="text-slate-400 mb-8 max-w-md">
              We don't just clear errors. We recompile your business logic for maximum efficiency and throughput.
            </p>
            <div className="flex gap-4">
              <div className="text-3xl font-bold text-white border-l-2 border-digital-green pl-4">
                +300% <span className="block text-xs font-mono text-slate-500 font-normal mt-1">LEADS GENERATED</span>
              </div>
              <div className="text-3xl font-bold text-white border-l-2 border-digital-green pl-4">
                20h <span className="block text-xs font-mono text-slate-500 font-normal mt-1">SAVED / WEEK</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="relative bg-obsidian border border-white/10 rounded-xl p-6 shadow-2xl overflow-hidden">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                <div className="text-xs font-mono text-slate-500">DASHBOARD_VIEW_V3.1</div>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500" />
                  <div className="w-2 h-2 rounded-full bg-digital-green" />
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-midnight/50 p-4 rounded border border-white/5">
                  <div className="text-[10px] font-mono text-slate-500 mb-2">TOTAL REVENUE</div>
                  <div className="text-2xl text-digital-green font-mono font-bold">$124,500</div>
                  <div className="w-full bg-white/5 h-1 mt-3 overflow-hidden rounded-full">
                    <div className="h-full bg-digital-green w-[75%] shadow-[0_0_10px_#00FF94]" />
                  </div>
                </div>
                <div className="bg-midnight/50 p-4 rounded border border-white/5">
                  <div className="text-[10px] font-mono text-slate-500 mb-2">CONVERSION RATE</div>
                  <div className="text-2xl text-electric-cyan font-mono font-bold">4.8%</div>
                  <div className="w-full bg-white/5 h-1 mt-3 overflow-hidden rounded-full">
                    <div className="h-full bg-electric-cyan w-[60%]" />
                  </div>
                </div>
              </div>

              {/* Graph Simulation */}
              <div className="h-32 bg-midnight/30 rounded border border-white/5 flex items-end justify-between px-2 pb-2 gap-1">
                {[40, 65, 50, 80, 75, 90, 100].map((h, i) => (
                  <div key={i} style={{ height: `${h}%` }} className="w-full bg-digital-green/20 border-t-2 border-digital-green relative group">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity bg-black px-1 rounded">
                      {h}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-20 border-t border-white/10 bg-black relative">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-bold text-white mb-6 uppercase">Upgrade Your <br /> Business</h2>
              <p className="text-slate-500 mb-8 font-mono text-sm">
                Ready to deploy? Initialize communication protocol below.
              </p>
              <div className="flex gap-4">
                {[
                  { label: "LINKEDIN", href: "#", target: "_self" },
                  {
                    label: "INSTAGRAM",
                    href: "https://www.instagram.com/athlexic.ai/?utm_source=website&utm_medium=footer_icon&utm_campaign=organic_traffic",
                    target: "_blank"
                  },
                  {
                    label: "WHATSAPP",
                    href: "https://wa.me/556294326282?text=Hello%20Athlexic,%20I%20want%20to%20upgrade%20my%20business.%20(Source:%20Website)",
                    target: "_blank"
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.target}
                    rel={social.target === "_blank" ? "noopener noreferrer" : undefined}
                    className="text-[10px] font-bold text-electric-cyan border border-electric-cyan/30 px-3 py-1 hover:bg-electric-cyan hover:text-black transition-colors"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
              <div className="mt-12 text-[10px] text-slate-700 font-mono">
                &copy; {new Date().getFullYear()} ATHEXIC GROUP.
                <br />SYSTEM STATUS: ONLINE
              </div>
            </div>

            <div className="md:w-2/3">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-electric-cyan uppercase">Identifier // Name</label>
                    <input
                      {...register("name")}
                      className="w-full bg-midnight/50 border border-white/10 p-3 text-white focus:border-electric-cyan focus:shadow-[0_0_15px_rgba(0,240,255,0.1)] outline-none transition-all placeholder:text-slate-700 font-mono text-sm"
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-[10px] font-mono mt-1">&gt; ERROR: {errors.name.message}</p>}
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-electric-cyan uppercase">Contact // Email</label>
                    <input
                      {...register("email")}
                      className="w-full bg-midnight/50 border border-white/10 p-3 text-white focus:border-electric-cyan focus:shadow-[0_0_15px_rgba(0,240,255,0.1)] outline-none transition-all placeholder:text-slate-700 font-mono text-sm"
                      placeholder="corp@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-[10px] font-mono mt-1">&gt; ERROR: {errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-electric-cyan uppercase">Comms // WhatsApp</label>
                    <input
                      {...register("whatsapp")}
                      className="w-full bg-midnight/50 border border-white/10 p-3 text-white focus:border-electric-cyan focus:shadow-[0_0_15px_rgba(0,240,255,0.1)] outline-none transition-all placeholder:text-slate-700 font-mono text-sm"
                      placeholder="+1 (555) 000-0000"
                    />
                    {errors.whatsapp && <p className="text-red-500 text-[10px] font-mono mt-1">&gt; ERROR: {errors.whatsapp.message}</p>}
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-electric-cyan uppercase">Entity // Company</label>
                    <input
                      {...register("company")}
                      className="w-full bg-midnight/50 border border-white/10 p-3 text-white focus:border-electric-cyan focus:shadow-[0_0_15px_rgba(0,240,255,0.1)] outline-none transition-all placeholder:text-slate-700 font-mono text-sm"
                      placeholder="Corp Name"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-electric-cyan uppercase">Mission // Message</label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className="w-full bg-midnight/50 border border-white/10 p-3 text-white focus:border-electric-cyan focus:shadow-[0_0_15px_rgba(0,240,255,0.1)] outline-none transition-all placeholder:text-slate-700 font-mono text-sm resize-none"
                    placeholder="Describe your objectives..."
                  />
                  {errors.message && <p className="text-red-500 text-[10px] font-mono mt-1">&gt; ERROR: {errors.message.message}</p>}
                </div>

                <button
                  disabled={formStatus === 'submitting' || formStatus === 'success'}
                  className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-electric-cyan transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  {formStatus === 'submitting' ? 'TRANSMITTING...' : formStatus === 'success' ? 'TRANSMISSION RECEIVED' : 'INITIATE CONTACT'}
                </button>

                {formStatus === 'success' && (
                  <div className="p-3 border border-digital-green/30 bg-digital-green/10 text-digital-green text-xs font-mono flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>&gt; DATA RECEIVED SUCCESSFULLY. STANDBY FOR RESPONSE.</span>
                  </div>
                )}
                {formStatus === 'error' && (
                  <div className="p-3 border border-red-500/30 bg-red-500/10 text-red-500 text-xs font-mono">
                    <span>&gt; FATAL ERROR. TRANSMISSION FAILED.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

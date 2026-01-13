"use client";

import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import { ArrowLeft, FileText, Server, Lock, Share2, Shield, Mail } from "lucide-react";
import Image from "next/image";

export default function PrivacyPolicy() {
    const [activeSection, setActiveSection] = useState('ingestion');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['ingestion', 'processing', 'tracking', 'sharing', 'rights', 'contact'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top <= 300) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const sections = [
        { id: 'ingestion', label: 'Data Ingestion', icon: Server },
        { id: 'processing', label: 'AI Processing Logic', icon: FileText },
        { id: 'tracking', label: 'Cookie & Tracking', icon: Share2 },
        { id: 'sharing', label: 'Third-Party Sharing', icon: Share2 },
        { id: 'rights', label: 'User Rights (GDPR/CCPA)', icon: Shield },
        { id: 'contact', label: 'Contact DPO', icon: Mail },
    ];

    return (
        <div className="min-h-screen bg-obsidian text-slate-300 font-sans selection:bg-electric-cyan/20 selection:text-electric-cyan">
            {/* Ambient Background */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-midnight to-obsidian opacity-80" />
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-electric-cyan/5 rounded-full blur-[120px] animate-pulse-slow" />
            </div>

            {/* Header Navigation */}
            <header className="fixed w-full top-0 z-50 bg-midnight/80 backdrop-blur-xl border-b border-electric-cyan/20 h-20 flex items-center">
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <a href="/" className="flex items-center gap-2 group text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-xs font-mono uppercase tracking-widest">Return to Base</span>
                    </a>
                    <div className="flex items-center gap-3">
                        <Image
                            src="/logo-full-removebg.png"
                            alt="Athlexic Group"
                            width={150}
                            height={40}
                            className="h-8 w-auto object-contain opacity-50"
                        />
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                {/* Hero Header */}
                <div className="mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-white/10 bg-white/5 text-[10px] font-mono text-slate-400 mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-digital-green animate-pulse" />
                        LAST UPDATE: JANUARY 2026 // STATUS: ACTIVE
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-mono tracking-tight">
                        DATA GOVERNANCE <br />
                        PROTOCOLS
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl font-light">
                        Transparency on how we collect, process, and secure client intelligence within the Neural Engine ecosystem.
                    </p>
                </div>

                <div className="grid lg:grid-cols-4 gap-12">
                    {/* Sidebar Navigation */}
                    <aside className="hidden lg:block lg:col-span-1">
                        <div className="sticky top-32 border-l border-white/10 pl-6 space-y-6">
                            {sections.map((section) => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    className={`flex items-center gap-3 group transition-all duration-300 ${activeSection === section.id ? 'text-electric-cyan' : 'text-slate-500 hover:text-slate-300'}`}
                                >
                                    <div className={`w-1 h-1 rounded-full ${activeSection === section.id ? 'bg-electric-cyan shadow-[0_0_10px_#00F0FF]' : 'bg-slate-700 group-hover:bg-slate-500'}`} />
                                    <span className="text-xs font-mono uppercase tracking-widest">{section.label}</span>
                                </a>
                            ))}
                        </div>
                    </aside>

                    {/* Content Area */}
                    <div className="lg:col-span-3 space-y-16">

                        {/* Clause 1: Data Ingestion */}
                        <section id="ingestion" className="scroll-mt-32 group">
                            <div className="p-8 rounded-xl bg-midnight/30 border border-white/5 hover:border-white/10 transition-colors backdrop-blur-sm">
                                <div className="flex items-center gap-3 mb-6">
                                    <Server className="w-5 h-5 text-electric-cyan" />
                                    <h2 className="text-xl font-bold text-white">01. DATA INGESTION</h2>
                                </div>
                                <div className="space-y-4 text-sm leading-relaxed text-[#E0E0E0] font-light">
                                    <p>
                                        We collect traffic data and interaction metrics to fuel the <strong className="text-white font-medium">Neural Engine algorithms</strong>. This includes, but is not limited to:
                                    </p>
                                    <ul className="list-disc pl-5 space-y-2 text-slate-400">
                                        <li>Device fingerprints and IP geolocation data.</li>
                                        <li>Behavioral heatmaps and session interaction logs.</li>
                                        <li>Form submission metadata (timestamp, source referrer).</li>
                                    </ul>
                                    <p>
                                        All raw data is sanitized upon entry, ensuring no unauthorized personally identifiable information (PII) enters the core processing unit without explicit consent.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Clause 2: AI Processing */}
                        <section id="processing" className="scroll-mt-32">
                            <div className="p-8 rounded-xl bg-midnight/30 border border-white/5 hover:border-white/10 transition-colors backdrop-blur-sm">
                                <div className="flex items-center gap-3 mb-6">
                                    <FileText className="w-5 h-5 text-neon-purple" />
                                    <h2 className="text-xl font-bold text-white">02. AI PROCESSING LOGIC</h2>
                                </div>
                                <div className="space-y-4 text-sm leading-relaxed text-[#E0E0E0] font-light">
                                    <p>
                                        Client data is processed through OpenAI and proprietary models solely for the purpose of <strong className="text-white font-medium">optimization</strong>.
                                    </p>
                                    <p>
                                        We utilize Large Language Models (LLMs) to analyze communication patterns and intent. Data shared with these models is anonymized where possible. We do not use client data to train public foundational models.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Clause 3: Cookies */}
                        <section id="tracking" className="scroll-mt-32">
                            <div className="p-8 rounded-xl bg-midnight/30 border border-white/5 hover:border-white/10 transition-colors backdrop-blur-sm">
                                <div className="flex items-center gap-3 mb-6">
                                    <Share2 className="w-5 h-5 text-digital-green" />
                                    <h2 className="text-xl font-bold text-white">03. COOKIE & TRACKING</h2>
                                </div>
                                <div className="space-y-4 text-sm leading-relaxed text-[#E0E0E0] font-light">
                                    <p>
                                        Our system deploys <strong className="text-white font-medium">first-party cookies</strong> to maintain session state and personalization preferences.
                                    </p>
                                    <p>
                                        We also utilize third-party pixels (Meta, Google, LinkedIn) to measure ad performance. These pixels allow us to retarget users who have shown high intent. You may opt-out of this tracking via your browser settings or the "Do Not Track" headers.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Clause 4: Sharing */}
                        <section id="sharing" className="scroll-mt-32">
                            <div className="p-8 rounded-xl bg-midnight/30 border border-white/5 hover:border-white/10 transition-colors backdrop-blur-sm">
                                <div className="flex items-center gap-3 mb-6">
                                    <Share2 className="w-5 h-5 text-slate-400" />
                                    <h2 className="text-xl font-bold text-white">04. THIRD-PARTY SHARING</h2>
                                </div>
                                <div className="space-y-4 text-sm leading-relaxed text-[#E0E0E0] font-light">
                                    <p>
                                        We do not sell data to brokers. Data is only shared with:
                                    </p>
                                    <ul className="list-disc pl-5 space-y-2 text-slate-400">
                                        <li>Cloud Infrastructure Providers (AWS/Vercel) for hosting.</li>
                                        <li>Payment Processors (Stripe) for transaction security.</li>
                                        <li>Legal authorities when compelled by a valid court order.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Clause 5: User Rights */}
                        <section id="rights" className="scroll-mt-32">
                            <div className="p-8 rounded-xl bg-midnight/30 border border-white/5 hover:border-white/10 transition-colors backdrop-blur-sm">
                                <div className="flex items-center gap-3 mb-6">
                                    <Shield className="w-5 h-5 text-electric-cyan" />
                                    <h2 className="text-xl font-bold text-white">05. USER RIGHTS (GDPR/CCPA)</h2>
                                </div>
                                <div className="space-y-4 text-sm leading-relaxed text-[#E0E0E0] font-light">
                                    <p>
                                        Regardless of your location, we afford you the following rights:
                                    </p>
                                    <ul className="list-disc pl-5 space-y-2 text-slate-400">
                                        <li><strong className="text-white">Right to Access:</strong> Request a copy of your data file.</li>
                                        <li><strong className="text-white">Right to Erasure:</strong> Request total deletion of your profile ("Right to be Forgotten").</li>
                                        <li><strong className="text-white">Right to Correction:</strong> Update inaccurate metrics.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Clause 6: Contact */}
                        <section id="contact" className="scroll-mt-32">
                            <div className="p-8 rounded-xl bg-midnight/30 border border-white/5 hover:border-white/10 transition-colors backdrop-blur-sm">
                                <div className="flex items-center gap-3 mb-6">
                                    <Mail className="w-5 h-5 text-neon-purple" />
                                    <h2 className="text-xl font-bold text-white">06. CONTACT DPO</h2>
                                </div>
                                <div className="space-y-4 text-sm leading-relaxed text-[#E0E0E0] font-light">
                                    <p>
                                        For any inquiries regarding data governance or to exercise your rights, contact our Data Protection Officer:
                                    </p>
                                    <div className="p-4 bg-black/50 border border-white/10 rounded font-mono text-xs text-electric-cyan">
                                        EMAIL: legal@athexicgroup.com <br />
                                        RES: 24H - 48H
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Target, Server, Database, Activity, Lock, Brain } from "lucide-react";

export default function SystemArchitecture() {
    const [activeParticle, setActiveParticle] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    // Simulates the continuous flow of data
    useEffect(() => {
        setIsMounted(true);
        const interval = setInterval(() => {
            setActiveParticle((prev) => (prev + 1) % 10);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    if (!isMounted) return null; // Prevent hydration mismatch by rendering only on client

    return (
        <div id="neural-engine" className="w-full bg-[#050505] relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 border-y border-white/5">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-sans text-white mb-4 tracking-tight">
                        THE <span className="text-[#00F0FF]">NEURAL</span> ENGINE
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto font-mono text-sm uppercase tracking-widest">
                        From Chaos to Qualified Revenue in 12ms
                    </p>
                </div>

                {/* Main Pipeline Container */}
                <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 lg:h-[400px]">

                    {/* STAGE 1: TRAFFIC INGESTION (LEFT) */}
                    <div className="flex-1 w-full md:w-auto relative group">
                        <div className="absolute -inset-4 bg-[#00F0FF]/5 rounded-xl blur-xl group-hover:bg-[#00F0FF]/10 transition-all duration-500" />
                        <div className="relative bg-[#020B1A]/80 border border-[#00F0FF]/20 p-6 rounded-xl backdrop-blur-md">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-[#00F0FF] font-mono text-xs font-bold tracking-widest flex items-center gap-2">
                                    <Activity size={14} /> TRAFFIC INGESTION
                                </h3>
                                <span className="text-[10px] text-[#00F0FF]/90 font-mono [text-shadow:0px_0px_5px_rgba(0,240,255,0.3)]">STATUS: ACTIVE</span>
                            </div>

                            {/* Visualization of messy data */}
                            <div className="h-32 relative overflow-hidden border-t border-[#00F0FF]/10 mt-2">
                                {[...Array(8)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute h-1.5 w-1.5 bg-[#00F0FF] rounded-full shadow-[0_0_8px_#00F0FF]"
                                        initial={{ x: -20, y: Math.random() * 100, opacity: 0 }}
                                        animate={{
                                            x: 300,
                                            y: [Math.random() * 100, Math.random() * 100, Math.random() * 100],
                                            opacity: [0, 1, 0]
                                        }}
                                        transition={{
                                            duration: 2 + Math.random(),
                                            repeat: Infinity,
                                            delay: i * 0.5,
                                            ease: "linear"
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Callout Info */}
                            <div className="mt-4 grid grid-cols-2 gap-2 text-[10px] font-mono text-gray-500">
                                <div className="flex flex-col">
                                    <span className="text-gray-600">SOURCE A</span>
                                    <span className="text-[#00F0FF]/90 [text-shadow:0px_0px_5px_rgba(0,240,255,0.3)]">CONNECTED</span>
                                </div>
                                <div className="flex flex-col text-right">
                                    <span className="text-gray-600">SOURCE B</span>
                                    <span className="text-[#00F0FF]/90 [text-shadow:0px_0px_5px_rgba(0,240,255,0.3)]">CONNECTED</span>
                                </div>
                            </div>
                        </div>

                        {/* Connector Line to Center */}
                        <div className="hidden md:block absolute top-1/2 -right-12 w-12 h-[2px] bg-[#00F0FF]/20 overflow-hidden">
                            <motion.div
                                className="h-full w-full bg-[#00F0FF] shadow-[0_0_10px_#00F0FF]"
                                animate={{ x: ["-100%", "100%"] }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                        </div>
                    </div>

                    {/* STAGE 2: THE CORE (CENTER) */}
                    <div className="relative z-20 scale-110">
                        {/* Rotating Prism Effect */}
                        <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">

                            {/* Outer Rotating Hexagon */}
                            <motion.div
                                className="absolute inset-0 border border-[#7B2CBF]/30"
                                style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            />
                            <motion.div
                                className="absolute inset-2 border border-[#7B2CBF]/50"
                                style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                                animate={{ rotate: -360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Inner Glow/Brain */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-[#7B2CBF] blur-2xl opacity-20 animate-pulse-slow" />
                                    <Brain size={48} className="text-[#7B2CBF] drop-shadow-[0_0_15px_rgba(123,44,191,0.8)]" />
                                </div>
                            </div>

                            {/* Processing Particles passing through */}
                            <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>
                                {[...Array(5)].map((_, i) => (
                                    <motion.div
                                        key={`proc-${i}`}
                                        className="absolute h-1 w-1 bg-white rounded-full"
                                        initial={{ x: 0, y: 120, opacity: 0 }}
                                        animate={{
                                            x: 250,
                                            y: 120,
                                            opacity: [0, 1, 0]
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            delay: i * 0.8,
                                            ease: "easeInOut"
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Technical HUD Labels around Core */}
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#7B2CBF]/10 border border-[#7B2CBF]/30 rounded text-[10px] text-[#7B2CBF] font-mono whitespace-nowrap">
                                AI NEURAL FILTER
                            </div>
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] text-[#7B2CBF]/60 font-mono">
                                LATENCY: 12ms
                            </div>
                        </div>
                    </div>

                    {/* STAGE 3: OUTPUT (RIGHT) */}
                    <div className="flex-1 w-full md:w-auto relative group">
                        {/* Connector Line from Center */}
                        <div className="hidden md:block absolute top-1/2 -left-12 w-12 h-[2px] bg-[#00FF94]/20 overflow-hidden">
                            <motion.div
                                className="h-full w-full bg-[#00FF94] shadow-[0_0_10px_#00FF94]"
                                animate={{ x: ["-100%", "100%"] }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear", delay: 0.5 }}
                            />
                        </div>

                        <div className="absolute -inset-4 bg-[#00FF94]/5 rounded-xl blur-xl group-hover:bg-[#00FF94]/10 transition-all duration-500" />
                        <div className="relative bg-[#020B1A]/80 border border-[#00FF94]/20 p-6 rounded-xl backdrop-blur-md">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-[#00FF94] font-mono text-xs font-bold tracking-widest flex items-center gap-2">
                                    <Target size={14} /> QUALIFIED REVENUE
                                </h3>
                                <span className="text-[10px] text-[#00FF94]/90 font-mono [text-shadow:0px_0px_5px_rgba(0,255,148,0.3)]">OPTIMIZED</span>
                            </div>

                            {/* Visualization of clean, single output stream */}
                            <div className="h-32 flex items-center justify-center border-t border-[#00FF94]/10 mt-2 relative">
                                <motion.div
                                    className="absolute left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#00FF94] to-[#00FF94]"
                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                <div className="relative z-10 bg-[#00FF94]/10 p-3 rounded-full border border-[#00FF94] shadow-[0_0_20px_rgba(0,255,148,0.3)]">
                                    <Target className="text-[#00FF94]" size={24} />
                                </div>
                            </div>

                            {/* Callout Info */}
                            <div className="mt-4 flex justify-between text-[10px] font-mono text-gray-500">
                                <span className="text-gray-600">CONVERSION</span>
                                <span className="text-[#00FF94]">+240%</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Decorative Data Stream */}
                <div className="mt-12 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent relative overflow-hidden">
                    <motion.div
                        className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
                        animate={{ left: ["-20%", "120%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                </div>
            </div>
        </div>
    );
}

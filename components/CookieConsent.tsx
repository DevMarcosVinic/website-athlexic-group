"use client";

import { useState, useEffect } from "react";
import { Shield, ChevronRight } from "lucide-react";

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem("athlexic-cookie-consent");
        if (!consent) {
            // Small delay for entrance animation
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("athlexic-cookie-consent", "accepted");
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("athlexic-cookie-consent", "declined");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 right-6 z-50 animate-fade-in-up max-w-sm w-[90%] md:w-auto">
            <div className="bg-obsidian/80 backdrop-blur-md border border-electric-cyan/50 shadow-[0_0_20px_rgba(0,240,255,0.15)] rounded-lg p-5 relative overflow-hidden group">

                {/* Glowing Border Animation */}
                <div className="absolute inset-0 border border-electric-cyan/20 rounded-lg pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-electric-cyan/50 to-transparent opacity-50" />

                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="relative">
                            <Shield className="w-5 h-5 text-electric-cyan" />
                            <div className="absolute inset-0 bg-electric-cyan/50 blur-[5px] animate-pulse rounded-full" />
                        </div>
                        <h3 className="font-sans text-xs font-bold text-white uppercase tracking-widest">
                            System Alert: Tracking Protocols
                        </h3>
                    </div>

                    <p className="text-[#8892b0] font-sans text-xs leading-relaxed mb-5 border-l-2 border-white/10 pl-3">
                        We utilize cookies and data telemetry to optimize the Neural Engine experience and analyze traffic patterns. No personal business logic is stored without consent.
                    </p>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={handleAccept}
                            className="bg-electric-cyan text-obsidian text-xs font-bold uppercase tracking-widest px-6 py-2 hover:bg-white hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all duration-300 flex-1"
                        >
                            [ Initialize Telemetry ]
                        </button>
                        <button
                            onClick={handleDecline}
                            className="bg-transparent border border-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 hover:border-white hover:text-white transition-all duration-300 hover:bg-white/5"
                        >
                            Disable
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

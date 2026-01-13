"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormSchema, ContactFormData } from "@/schemas/contact";
import { CheckCircle } from "lucide-react";

export default function Footer() {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

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
                            <br />
                            <a href="/legal/privacy-protocols" className="hover:text-electric-cyan transition-colors">PRIVACY PROTOCOLS</a>
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
    );
}

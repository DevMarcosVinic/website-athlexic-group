"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle, Shield, Zap, ArrowRight, Menu, X, ChevronRight } from "lucide-react";
import { ContactFormSchema, ContactFormData } from "@/schemas/contact";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    <div className="min-h-screen flex flex-col font-sans text-slate-200">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-neon-cyan to-electric-purple rounded-lg animate-pulse" />
            <span className="text-xl font-bold tracking-tight text-white font-display">ATHEXIC GROUP</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <Link href="#servicos" className="hover:text-neon-cyan transition-colors">Serviços</Link>
            <Link href="#diferenciais" className="hover:text-neon-cyan transition-colors">Diferenciais</Link>
            <Link href="#contato" className="hover:text-neon-cyan transition-colors">Contato</Link>
          </nav>

          <div className="hidden md:block">
            <Link
              href="#contato"
              className="px-6 py-2.5 bg-white text-slate-950 font-semibold rounded-full hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300"
            >
              Falar com Especialista
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-950 border-b border-slate-800 p-6 flex flex-col gap-4">
            <Link href="#servicos" onClick={() => setIsMenuOpen(false)}>Serviços</Link>
            <Link href="#diferenciais" onClick={() => setIsMenuOpen(false)}>Diferenciais</Link>
            <Link href="#contato" onClick={() => setIsMenuOpen(false)}>Contato</Link>
          </div>
        )}
      </header>

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-neon-cyan/20 rounded-full blur-[120px] -z-10" />

          <div className="container mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold tracking-wider text-neon-cyan mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan"></span>
              </span>
              TRANSFORMAÇÃO DIGITAL POWERED BY AI
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight font-display">
              Eleve seu Negócio com <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-electric-purple">Design & Inteligência Artificial</span>
            </h1>

            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Criamos ecossistemas digitais de alta performance. Sites que convertem e automações que escalam sua operação enquanto você dorme.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contato"
                className="px-8 py-4 bg-white text-slate-950 font-bold rounded-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all flex items-center justify-center gap-2 group"
              >
                Inicar Projeto
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#servicos"
                className="px-8 py-4 bg-slate-900 text-white font-bold rounded-lg border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-center"
              >
                Conhecer Soluções
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="py-20 lg:py-32 bg-slate-950/50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-16 text-center">O Futuro da Sua Empresa <br /> Começa Aqui</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Web Design de Alta Performance", desc: "Interfaces imersivas focadas em UX e conversão. Carregamento instantâneo e SEO técnico avançado.", icon: Zap },
                { title: "Automação com IA", desc: "Chatbots inteligentes, triagem de leads automática e fluxos de trabalho que eliminam tarefas repetitivas.", icon: ChevronRight }, // Using chevron as placeholder for automation if needed or just generic
                { title: "Segurança Ofensiva (AppSec)", desc: "Proteção de nível militar para seus dados e clientes. Testes rigorosos e monitoramento constante.", icon: Shield },
              ].map((service, i) => (
                <div key={i} className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-neon-cyan/50 hover:bg-slate-900/80 transition-all duration-500 relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan to-electric-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                  <service.icon className="w-12 h-12 text-neon-cyan mb-6 group-hover:text-white transition-colors" />
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-20 lg:py-32 relative">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-8 lg:p-12 rounded-3xl relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-electric-purple/20 rounded-full blur-[80px]" />

              <div className="relative z-10 text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Vamos Escalar seu Negócio?</h2>
                <p className="text-slate-400">Preencha o formulário abaixo e nossa equipe entrará em contato em até 24h.</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Nome Completo</label>
                    <input
                      {...register("name")}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:ring-2 focus:ring-neon-cyan/50 focus:border-neon-cyan transition-all outline-none"
                      placeholder="Seu nome"
                    />
                    {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Email Corporativo</label>
                    <input
                      {...register("email")}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:ring-2 focus:ring-neon-cyan/50 focus:border-neon-cyan transition-all outline-none"
                      placeholder="seu@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">WhatsApp</label>
                    <input
                      {...register("whatsapp")}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:ring-2 focus:ring-neon-cyan/50 focus:border-neon-cyan transition-all outline-none"
                      placeholder="(11) 99999-9999"
                    />
                    {errors.whatsapp && <p className="text-red-500 text-xs">{errors.whatsapp.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Empresa (Opcional)</label>
                    <input
                      {...register("company")}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:ring-2 focus:ring-neon-cyan/50 focus:border-neon-cyan transition-all outline-none"
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Como podemos ajudar?</label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:ring-2 focus:ring-neon-cyan/50 focus:border-neon-cyan transition-all outline-none resize-none"
                    placeholder="Descreva seu projeto ou necessidade..."
                  />
                  {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
                </div>

                <button
                  disabled={formStatus === 'submitting' || formStatus === 'success'}
                  className="w-full py-4 bg-gradient-to-r from-neon-cyan to-electric-purple text-white font-bold rounded-lg hover:shadow-[0_0_20px_rgba(191,0,255,0.4)] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formStatus === 'submitting' ? 'Enviando...' : formStatus === 'success' ? 'Enviado com Sucesso!' : 'Solicitar Consultoria'}
                </button>

                {formStatus === 'success' && (
                  <div className="p-4 bg-green-900/20 border border-green-500/30 rounded-lg flex items-center gap-2 text-green-400">
                    <CheckCircle className="w-5 h-5" />
                    <p>Recebemos sua mensagem! Entraremos em contato em breve.</p>
                  </div>
                )}
                {formStatus === 'error' && (
                  <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-red-400 text-center">
                    <p>Erro ao enviar. Por favor, tente novamente ou contate via WhatsApp.</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center text-slate-600">
        <p>&copy; {new Date().getFullYear()} Athexic Group. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

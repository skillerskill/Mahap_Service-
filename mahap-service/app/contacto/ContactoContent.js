'use client';

import { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle2 } from 'lucide-react';
import { companyInfo, services } from '@/data/services';

function ContactForm() {
  const [form, setForm] = useState({
    nome: '',
    telefone: '',
    servico: '',
    mensagem: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const texto = encodeURIComponent(
      `Olá, Mahap Service! 👋\n\n` +
      `*Nome:* ${form.nome}\n` +
      `*Telefone:* ${form.telefone}\n` +
      `*Serviço pretendido:* ${form.servico}\n\n` +
      `*Mensagem:*\n${form.mensagem}\n\n` +
      `_Mensagem enviada através do website mahapservice.com_`
    );

    const url = `https://wa.me/${companyInfo.phone1Raw}?text=${texto}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className="flex flex-col items-center justify-center text-center py-16 gap-5"
        role="status"
        aria-live="polite"
        aria-label="Mensagem enviada com sucesso"
      >
        <div className="w-16 h-16 rounded-full bg-[#B8860B]/15 border border-[#B8860B]/30 flex items-center justify-center">
          <CheckCircle2 size={30} className="text-[#B8860B]" aria-hidden="true" />
        </div>
        <div>
          <h3 style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-white text-2xl font-bold mb-2">
            Mensagem enviada!
          </h3>
          <p className="text-white/50 text-sm max-w-sm">
            O WhatsApp foi aberto com a sua mensagem. A nossa equipa responderá em breve.
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setForm({ nome: '', telefone: '', servico: '', mensagem: '' });
          }}
          className="btn-outline !text-sm !py-2.5 !px-6 mt-2"
          aria-label="Enviar outra mensagem"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-5"
      aria-label="Formulário de contacto Mahap Service"
    >
      {/* Nome */}
      <div>
        <label htmlFor="nome" className="form-label">
          Nome completo <span className="text-[#B8860B]" aria-hidden="true">*</span>
        </label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={form.nome}
          onChange={handleChange}
          required
          autoComplete="name"
          placeholder="O seu nome completo"
          className="form-input"
          aria-required="true"
          aria-describedby="nome-hint"
        />
        <span id="nome-hint" className="sr-only">Introduza o seu nome completo</span>
      </div>

      {/* Telefone */}
      <div>
        <label htmlFor="telefone" className="form-label">
          Telefone / WhatsApp <span className="text-[#B8860B]" aria-hidden="true">*</span>
        </label>
        <input
          type="tel"
          id="telefone"
          name="telefone"
          value={form.telefone}
          onChange={handleChange}
          required
          autoComplete="tel"
          placeholder="+244 9XX XXX XXX"
          className="form-input"
          aria-required="true"
          aria-describedby="telefone-hint"
        />
        <span id="telefone-hint" className="sr-only">Introduza o seu número de telefone com indicativo do país</span>
      </div>

      {/* Serviço */}
      <div>
        <label htmlFor="servico" className="form-label">
          Serviço pretendido <span className="text-[#B8860B]" aria-hidden="true">*</span>
        </label>
        <div className="relative">
          <select
            id="servico"
            name="servico"
            value={form.servico}
            onChange={handleChange}
            required
            className="form-input pr-10"
            aria-required="true"
            aria-describedby="servico-hint"
            style={{ appearance: 'none' }}
          >
            <option value="" disabled>Selecione um serviço</option>
            {services.map((s) => (
              <option key={s.id} value={s.title} style={{ background: '#1A2744' }}>
                {s.title}
              </option>
            ))}
            <option value="Outro / Mais informações" style={{ background: '#1A2744' }}>
              Outro / Mais informações
            </option>
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="2">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>
        <span id="servico-hint" className="sr-only">Selecione o tipo de serviço que necessita</span>
      </div>

      {/* Mensagem */}
      <div>
        <label htmlFor="mensagem" className="form-label">
          Mensagem <span className="text-[#B8860B]" aria-hidden="true">*</span>
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          value={form.mensagem}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Descreva as suas necessidades — dimensão do espaço, frequência desejada, datas possíveis..."
          className="form-input resize-none"
          aria-required="true"
          aria-describedby="mensagem-hint"
        />
        <span id="mensagem-hint" className="sr-only">Descreva com detalhe as suas necessidades</span>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="btn-primary !justify-center !py-4 !text-base mt-1 group"
        aria-label="Enviar mensagem via WhatsApp para a Mahap Service"
      >
        <MessageCircle size={18} aria-hidden="true" />
        Enviar via WhatsApp
        <Send
          size={16}
          className="ml-1 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </button>

      <p className="text-white/25 text-xs text-center leading-relaxed">
        Ao submeter, será redirecionado para o WhatsApp com a sua mensagem pré-preenchida.
      </p>
    </form>
  );
}

export default function ContactoContent() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section
        aria-labelledby="contacto-hero-heading"
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 bg-[#0F1923] overflow-hidden dot-pattern"
      >
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#B8860B]/5 blur-[100px] pointer-events-none"
        />
        <div className="container-xl relative z-10 text-center max-w-2xl mx-auto">
          <div className="section-label mb-6 justify-center">Fale Connosco</div>
          <h1
            id="contacto-hero-heading"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            className="text-4xl sm:text-5xl lg:text-[3rem] font-bold text-white leading-tight tracking-tight mb-5"
          >
            Solicite o seu{' '}
            <span className="gradient-text">orçamento gratuito</span>
          </h1>
          <p className="text-white/50 text-lg leading-relaxed">
            Preencha o formulário ou contacte-nos diretamente. 
            Respondemos em menos de 24 horas com uma proposta personalizada.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ───────────────────────────────── */}
      <section
        className="py-16 lg:py-24 bg-[#0F1923]"
        aria-label="Formulário e informações de contacto"
      >
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Form */}
            <div className="glass-light rounded-2xl p-8 lg:p-10">
              <h2
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                className="text-white text-2xl font-bold mb-2"
              >
                Enviar mensagem
              </h2>
              <p className="text-white/40 text-sm mb-8">
                Preencha o formulário e será redirecionado para o WhatsApp.
              </p>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-6">

              {/* Info card */}
              <div className="glass-light rounded-2xl p-7">
                <h2
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  className="text-white text-lg font-semibold mb-6"
                >
                  Informações de Contacto
                </h2>
                <address className="not-italic flex flex-col gap-5">

                  {/* Phones */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#B8860B]/10 border border-[#B8860B]/20 flex items-center justify-center shrink-0">
                      <Phone size={16} className="text-[#B8860B]" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs font-medium uppercase tracking-wider mb-1.5">
                        Telefone
                      </p>
                      <a
                        href={`tel:${companyInfo.phone1Raw}`}
                        style={{ fontFamily: 'IBM Plex Mono, monospace' }}
                        className="block text-white/80 text-sm hover:text-[#B8860B] transition-colors font-medium focus-visible:outline-2 focus-visible:outline-[#B8860B] rounded"
                        aria-label={`Ligar para ${companyInfo.phone1}`}
                      >
                        {companyInfo.phone1}
                      </a>
                      <a
                        href={`tel:${companyInfo.phone2Raw}`}
                        style={{ fontFamily: 'IBM Plex Mono, monospace' }}
                        className="block text-white/80 text-sm hover:text-[#B8860B] transition-colors font-medium mt-1 focus-visible:outline-2 focus-visible:outline-[#B8860B] rounded"
                        aria-label={`Ligar para ${companyInfo.phone2}`}
                      >
                        {companyInfo.phone2}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#B8860B]/10 border border-[#B8860B]/20 flex items-center justify-center shrink-0">
                      <Mail size={16} className="text-[#B8860B]" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs font-medium uppercase tracking-wider mb-1.5">Email</p>
                      <a
                        href={`mailto:${companyInfo.email}`}
                        className="text-white/80 text-sm hover:text-[#B8860B] transition-colors focus-visible:outline-2 focus-visible:outline-[#B8860B] rounded"
                        aria-label={`Enviar email para ${companyInfo.email}`}
                      >
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#B8860B]/10 border border-[#B8860B]/20 flex items-center justify-center shrink-0">
                      <MapPin size={16} className="text-[#B8860B]" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs font-medium uppercase tracking-wider mb-1.5">Morada</p>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {companyInfo.address.street}<br />
                        {companyInfo.address.neighborhood}<br />
                        {companyInfo.address.city}, {companyInfo.address.country}
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#B8860B]/10 border border-[#B8860B]/20 flex items-center justify-center shrink-0">
                      <Clock size={16} className="text-[#B8860B]" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs font-medium uppercase tracking-wider mb-1.5">Horário</p>
                      <div className="text-white/70 text-sm leading-relaxed flex flex-col gap-1">
                        <span>{companyInfo.workingHours.weekdays}</span>
                        <span>{companyInfo.workingHours.saturday}</span>
                        <span className="text-white/35">{companyInfo.workingHours.sunday}</span>
                      </div>
                    </div>
                  </div>
                </address>
              </div>

              {/* WhatsApp direct */}
              <a
                href={`https://wa.me/${companyInfo.phone1Raw}?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.`}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-light rounded-2xl p-6 flex items-center gap-4 hover:border-[#B8860B]/20 transition-all duration-200 group"
                aria-label="Abrir conversa directa no WhatsApp"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 border border-[#25D366]/25 flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/25 transition-colors">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-white font-semibold mb-0.5">
                    Conversar via WhatsApp
                  </div>
                  <div style={{ fontFamily: 'IBM Plex Mono, monospace' }} className="text-white/35 text-xs tracking-wider">
                    +{companyInfo.phone1Raw}
                  </div>
                </div>
                <div className="ml-auto">
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#B8860B]/30 transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/30 group-hover:text-[#B8860B] transition-colors -rotate-45" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </a>

              {/* Google Map */}
              <div
                className="glass-light rounded-2xl overflow-hidden h-56 relative"
                role="figure"
                aria-label="Mapa de localização da Mahap Service — Prenda, Luanda"
              >
                <iframe
                  title="Localização Mahap Service — Prenda, Luanda, Angola"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15771.3!2d13.23!3d-8.84!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f15cdc8d2c7d%3A0x850c1c6fb4782990!2sPrend%C3%A2%2C%20Luanda%2C%20Angola!5e0!3m2!1spt!2sao!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Mapa interactivo da localização da Mahap Service em Prenda, Luanda, Angola"
                />
                <div
                  className="absolute inset-0 pointer-events-none border border-white/5 rounded-2xl"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

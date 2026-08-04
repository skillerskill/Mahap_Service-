'use client';

import { useState } from 'react';
import { Send, MessageCircle, Phone, Mail, MapPin, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { companyInfo, services } from '@/data/services';
import PageHero from '@/components/motion/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import ContactCard from '@/components/ui/ContactCard';

function ContactForm() {
  const [form, setForm] = useState({
    nome: '',
    telefone: '',
    servico: '',
    mensagem: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.nome.trim()) e.nome = 'Obrigatório';
    if (!form.telefone.trim()) e.telefone = 'Obrigatório';
    if (!form.servico) e.servico = 'Selecione';
    if (!form.mensagem.trim()) e.mensagem = 'Obrigatório';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const texto = encodeURIComponent(
      `Olá, Mahap Service!\n\nNome: ${form.nome}\nTelefone: ${form.telefone}\nServiço: ${form.servico}\n\nMensagem:\n${form.mensagem}`
    );
    window.open(`https://wa.me/${companyInfo.phone1Raw}?text=${texto}`, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-12 text-center" role="status">
        <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-6 hero-fade-up">
          <CheckCircle2 size={32} className="text-emerald-500" />
        </div>
        <h3 className="text-2xl mb-3 hero-fade-up" style={{ animationDelay: '0.1s' }}>Mensagem preparada</h3>
        <p className="text-[var(--text-secondary)] text-sm mb-6 max-w-sm mx-auto hero-fade-up" style={{ animationDelay: '0.2s' }}>
          O WhatsApp foi aberto com o seu pedido. Respondemos em breve.
        </p>
        <button
          type="button"
          onClick={() => { setSubmitted(false); setForm({ nome: '', telefone: '', servico: '', mensagem: '' }); }}
          className="btn-outline !text-sm hero-fade-up"
          style={{ animationDelay: '0.3s' }}
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" aria-label="Formulário de contacto" noValidate>
      <div>
        <label htmlFor="nome" className="form-label">Nome completo</label>
        <input
          id="nome" name="nome" value={form.nome} onChange={handleChange}
          className={`form-input ${errors.nome ? '!border-red-400 focus:!shadow-[0_0_0_4px_rgba(248,113,113,0.15)]' : ''}`}
          autoComplete="name" placeholder="O seu nome" required aria-required="true"
        />
        {errors.nome && <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1" role="alert"><AlertCircle size={12} />{errors.nome}</p>}
      </div>
      <div>
        <label htmlFor="telefone" className="form-label">Telefone / WhatsApp</label>
        <input
          id="telefone" name="telefone" type="tel" value={form.telefone} onChange={handleChange}
          className={`form-input ${errors.telefone ? '!border-red-400 focus:!shadow-[0_0_0_4px_rgba(248,113,113,0.15)]' : ''}`}
          autoComplete="tel" placeholder="+244 900 000 000" required aria-required="true"
        />
        {errors.telefone && <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1" role="alert"><AlertCircle size={12} />{errors.telefone}</p>}
      </div>
      <div>
        <label htmlFor="servico" className="form-label">Serviço</label>
        <select
          id="servico" name="servico" value={form.servico} onChange={handleChange}
          className={`form-input ${errors.servico ? '!border-red-400 focus:!shadow-[0_0_0_4px_rgba(248,113,113,0.15)]' : ''} ${!form.servico ? 'text-[var(--text-muted)]' : ''}`}
          required aria-required="true"
        >
          <option value="" disabled>Selecione</option>
          {services.map((s) => (
            <option key={s.id} value={s.title}>{s.title}</option>
          ))}
          <option value="Outro">Outro</option>
        </select>
        {errors.servico && <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1" role="alert"><AlertCircle size={12} />{errors.servico}</p>}
      </div>
      <div>
        <label htmlFor="mensagem" className="form-label">Mensagem</label>
        <textarea
          id="mensagem" name="mensagem" value={form.mensagem} onChange={handleChange} rows={5}
          className={`form-input resize-none ${errors.mensagem ? '!border-red-400 focus:!shadow-[0_0_0_4px_rgba(248,113,113,0.15)]' : ''}`}
          placeholder="Descreva o seu projeto ou necessidade..." required aria-required="true"
        />
        {errors.mensagem && <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1" role="alert"><AlertCircle size={12} />{errors.mensagem}</p>}
      </div>
      <button type="submit" className="btn-primary justify-center group">
        <MessageCircle size={18} aria-hidden />
        Enviar via WhatsApp
        <Send size={16} className="transition-transform group-hover:translate-x-1" aria-hidden />
      </button>
    </form>
  );
}

export default function ContactoContent() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Orçamento gratuito"
        description="Descreva o espaço e o serviço. Respondemos em 24 horas."
      />

      <section className="pb-16 sm:pb-24 lg:pb-32 bg-[var(--bg-elevated)]">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-20">
          <ScrollReveal variant="fadeUp" className="lg:col-span-7 bg-white border border-[var(--border-light)] rounded-2xl p-5 sm:p-8 lg:p-10 shadow-sm">
            <h2 className="text-xl font-bold mb-8 text-[var(--text-primary)]">Enviar pedido</h2>
            <ContactForm />
          </ScrollReveal>

          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal variant="fadeUp" delay={0.1}>
              <ContactCard icon={Phone} title="Contacto directo">
                <address className="not-italic space-y-2 text-[var(--text-secondary)] text-sm leading-relaxed">
                  <a href={`tel:${companyInfo.phone1Raw}`} className="block hover:text-[var(--brand-blue)] transition-colors tabular-nums">{companyInfo.phone1}</a>
                  <a href={`tel:${companyInfo.phone2Raw}`} className="block hover:text-[var(--brand-blue)] transition-colors tabular-nums">{companyInfo.phone2}</a>
                  <a href={`mailto:${companyInfo.email}`} className="block hover:text-[var(--brand-blue)] transition-colors">{companyInfo.email}</a>
                </address>
              </ContactCard>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={0.15}>
              <ContactCard icon={MapPin} title="Morada">
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {companyInfo.address.street}<br />
                  {companyInfo.address.neighborhood}, {companyInfo.address.city}
                </p>
              </ContactCard>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={0.2}>
              <ContactCard icon={Clock} title="Horário">
                <p className="text-sm text-[var(--text-secondary)]">
                  {companyInfo.workingHours.weekdays}<br />
                  {companyInfo.workingHours.saturday}
                </p>
              </ContactCard>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={0.25}>
              <div className="rounded-2xl overflow-hidden h-52 sm:h-64 border border-[var(--border-light)]">
                <iframe
                  title="Mahap Service — Luanda"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15771.3!2d13.23!3d-8.84!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f15cdc8d2c7d%3A0x850c1c6fb4782990!2sPrend%C3%A2%2C%20Luanda%2C%20Angola!5e0!3m2!1spt!2sao!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}

'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/data/services';
import ScrollReveal from './ScrollReveal';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-24 lg:py-32 bg-[var(--bg-elevated)]">
      <div className="container-xl max-w-3xl mx-auto">
        <ScrollReveal variant="fadeUp">
          <div className="text-center mb-12">
            <p className="eyebrow mb-6 justify-center">FAQ</p>
            <h2 id="faq-heading" className="text-[clamp(2rem,3.5vw,2.75rem)] mb-4">
              Perguntas frequentes
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="divide-y divide-[var(--border-light)] border-y border-[var(--border-light)]">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between py-5 text-left group"
                  >
                    <span className="font-semibold text-[var(--text-primary)] pr-4 group-hover:text-[var(--brand-blue)] transition-colors">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-[var(--text-muted)] transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[var(--brand-blue)]' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-out ${
                      isOpen ? 'max-h-96 pb-5' : 'max-h-0'
                    }`}
                  >
                    <p className="text-[var(--text-secondary)] leading-relaxed text-[0.9375rem]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

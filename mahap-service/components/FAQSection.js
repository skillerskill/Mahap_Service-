'use client';

import { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/data/services';
import ScrollReveal from './ScrollReveal';

function FAQItem({ faq, idx, isOpen, onToggle }) {
  const contentRef = useRef(null);

  return (
    <div>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-semibold text-[var(--text-primary)] pr-4 group-hover:text-[var(--brand-blue)] transition-colors duration-300">
          {faq.question}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-[var(--text-muted)] transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isOpen ? 'rotate-180 text-[var(--brand-blue)]' : ''
          }`}
        />
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight || 200}px` : '0px',
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'translateY(0)' : 'translateY(-8px)',
        }}
      >
        <p className="text-[var(--text-secondary)] leading-relaxed text-[0.9375rem] pb-5">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-24 lg:py-32 bg-[var(--bg-elevated)]">
      <div className="container-xl max-w-3xl mx-auto">
        <ScrollReveal variant="blurIn">
          <div className="text-center mb-12">
            <p className="eyebrow mb-6 justify-center">FAQ</p>
            <h2 id="faq-heading" className="text-[clamp(2rem,3.5vw,2.75rem)] mb-4">
              Perguntas frequentes
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="slideUpBounce" delay={0.1}>
          <div className="divide-y divide-[var(--border-light)] border-y border-[var(--border-light)]">
            {faqs.map((faq, idx) => (
              <FAQItem
                key={idx}
                faq={faq}
                idx={idx}
                isOpen={openIndex === idx}
                onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

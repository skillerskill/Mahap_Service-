'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/data/services';
import ScrollReveal from './ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';

function FAQItem({ faq, idx, isOpen, onToggle }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <div>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${idx}`}
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
        id={`faq-answer-${idx}`}
        className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          maxHeight: isOpen ? `${height}px` : '0px',
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
    <section id="faq" aria-labelledby="faq-heading" className="py-16 sm:py-24 lg:py-32 bg-[var(--bg-elevated)]">
      <div className="container-xl max-w-3xl mx-auto">
        <SectionHeader
          eyebrow="FAQ"
          title="Perguntas frequentes"
          align="center"
          className="mb-12"
        />

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

'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/data/services';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="divide-y divide-[var(--border-light)] border-y border-[var(--border-light)]">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full flex items-center justify-between gap-4 py-6 text-left group"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${idx}`}
            >
              <span className="font-semibold text-[0.9375rem] leading-snug pr-4 text-[var(--text-primary)] group-hover:text-[var(--brand-blue)] transition-colors">
                {faq.question}
              </span>
              <ChevronDown
                size={18}
                className={`shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 text-[var(--brand-blue)]' : 'text-[var(--text-muted)]'
                }`}
                aria-hidden
              />
            </button>
            <div
              id={`faq-answer-${idx}`}
              className={`overflow-hidden transition-all duration-300 ease-out ${
                isOpen ? 'max-h-96 pb-6' : 'max-h-0'
              }`}
            >
              <p className="text-[var(--text-secondary)] text-[0.9375rem] leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

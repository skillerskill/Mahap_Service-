'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/data/services';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <div className="flex flex-col gap-3" role="list">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="glass-light rounded-xl overflow-hidden transition-all duration-200"
            role="listitem"
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full flex items-start justify-between gap-4 p-6 text-left focus-visible:outline-2 focus-visible:outline-[#B8860B] focus-visible:outline-offset-1"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${idx}`}
              id={`faq-question-${idx}`}
            >
              <span
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                className="text-white font-semibold text-[1rem] leading-snug"
              >
                {faq.question}
              </span>
              <ChevronDown
                size={18}
                className={`text-[#B8860B] shrink-0 mt-0.5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>
            <div
              id={`faq-answer-${idx}`}
              role="region"
              aria-labelledby={`faq-question-${idx}`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
            >
              <p className="px-6 pb-6 text-white/50 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

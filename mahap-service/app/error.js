'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, ArrowLeft, RefreshCw } from 'lucide-react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg-elevated)] px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-6">
          <AlertTriangle size={28} className="text-amber-500" />
        </div>
        <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
          Algo correu mal
        </h1>
        <p className="text-[var(--text-secondary)] text-sm mb-8 leading-relaxed">
          {error?.message || 'Ocorreu um erro inesperado. Por favor, tente novamente.'}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={reset}
            className="btn-primary group"
          >
            <RefreshCw size={16} className="transition-transform group-hover:rotate-180" aria-hidden />
            Tentar novamente
          </button>
          <Link href="/" className="btn-outline group">
            <ArrowLeft size={16} aria-hidden />
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}
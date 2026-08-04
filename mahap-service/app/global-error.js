'use client';

import { useEffect } from 'react';
import { AlertOctagon, RefreshCw } from 'lucide-react';

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error('Global error:', error);
  }, [error]);

  return (
    <html lang="pt-AO">
      <body style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        <div className="min-h-screen flex items-center justify-center bg-[var(--bg-elevated)] px-4">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-6">
              <AlertOctagon size={28} className="text-red-500" />
            </div>
            <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
              Erro crítico
            </h1>
            <p className="text-[var(--text-secondary)] text-sm mb-8 leading-relaxed">
              {error?.message || 'Ocorreu um erro crítico na aplicação.'}
            </p>
            <button onClick={reset} className="btn-primary group">
              <RefreshCw size={16} className="transition-transform group-hover:rotate-180" aria-hidden />
              Recarregar página
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
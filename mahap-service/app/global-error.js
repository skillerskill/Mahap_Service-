'use client';

import { useEffect } from 'react';

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error('Global error:', error);
  }, [error]);

  return (
    <html lang="pt-AO">
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="text-center max-w-md">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Erro crítico</h1>
            <p className="text-gray-600 mb-6">{error?.message || 'Erro desconhecido'}</p>
            <button
              onClick={reset}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Recarregar página
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
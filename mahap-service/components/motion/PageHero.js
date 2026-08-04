'use client';

import { useLayoutEffect, useState } from 'react';

export default function PageHero({ eyebrow, title, description, children, className = '' }) {
  const [ready, setReady] = useState(false);
  // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional: mount animation trigger
  useLayoutEffect(() => { setReady(true); }, []);

  return (
    <section className={`pt-28 pb-16 lg:pt-36 lg:pb-20 bg-[var(--bg-elevated)] ${className}`}>
      <div className="container-xl max-w-3xl">
        {eyebrow && (
          <p className={`eyebrow mb-6 ${ready ? 'hero-fade-up' : ''}`}>
            {eyebrow}
          </p>
        )}
        <h1
          className={`text-[clamp(2.25rem,4vw,3.25rem)] mb-6 ${ready ? 'hero-fade-up' : ''}`}
          style={ready ? { animationDelay: '0.1s' } : undefined}
        >
          {title}
        </h1>
        {description && (
          <p
            className={`lead mb-10 ${ready ? 'hero-fade-up' : ''}`}
            style={ready ? { animationDelay: '0.2s' } : undefined}
          >
            {description}
          </p>
        )}
        {children && (
          <div
            className={ready ? 'hero-fade-up' : ''}
            style={ready ? { animationDelay: '0.3s' } : undefined}
          >
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

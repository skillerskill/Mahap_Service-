'use client';

export default function PageHero({ eyebrow, title, description, children, className = '' }) {
  return (
    <section className={`pt-28 pb-16 lg:pt-36 lg:pb-20 bg-[var(--bg-elevated)] ${className}`}>
      <div className="container-xl max-w-3xl">
        {eyebrow && (
          <p className="eyebrow mb-6">
            {eyebrow}
          </p>
        )}
        <h1 className="text-[clamp(2.25rem,4vw,3.25rem)] mb-6">
          {title}
        </h1>
        {description && (
          <p className="lead mb-10">
            {description}
          </p>
        )}
        {children && (
          <div>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

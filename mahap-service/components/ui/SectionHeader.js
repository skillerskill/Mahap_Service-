import ScrollReveal from '@/components/ScrollReveal';

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
  children,
}) {
  const alignClasses = {
    left: '',
    center: 'text-center max-w-2xl mx-auto',
  };

  return (
    <ScrollReveal variant="fadeUp" className={className}>
      <div className={alignClasses[align]}>
        {eyebrow && (
          <p className={`eyebrow mb-6 ${align === 'center' ? 'justify-center' : ''}`}>
            {eyebrow}
          </p>
        )}
        {title && (
          <h2 className="text-[clamp(2rem,3.5vw,2.75rem)] mb-6">
            {title}
          </h2>
        )}
        {description && (
          <p className={`lead ${align === 'center' ? 'mx-auto' : ''}`}>
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </ScrollReveal>
  );
}

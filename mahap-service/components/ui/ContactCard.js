export default function ContactCard({ icon: Icon, title, children, className = '' }) {
  return (
    <div className={`p-6 rounded-2xl bg-white border border-[var(--border-light)] card-hover ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-[var(--brand-blue-soft)] flex items-center justify-center">
          <Icon size={16} className="text-[var(--brand-blue)]" />
        </div>
        <p className="text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--text-muted)]">
          {title}
        </p>
      </div>
      {children}
    </div>
  );
}

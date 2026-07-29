// components/Stats.js — Estatísticas institucionais com contadores animados

import AnimatedCounter from './motion/AnimatedCounter';

const stats = [
  { value: '500+', label: 'Clientes atendidos' },
  { value: '10+', label: 'Anos de experiência' },
  { value: '24', label: 'Tempo de resposta (horas)' },
  { value: '100', label: 'Produtos certificados (%)' },
];

export default function Stats() {
  return (
    <section aria-label="Resultados Mahap Service" className="py-16 lg:py-20 bg-white border-y border-[var(--border-light)]">
      <div className="container-xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, idx) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              label={stat.label}
              delay={idx * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

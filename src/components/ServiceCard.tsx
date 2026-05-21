import React from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  isHighlighted?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  features, 
  isHighlighted = false 
}) => {
  return (
    <article
      className={`relative overflow-hidden border p-7 transition ${
        isHighlighted
          ? 'border-[var(--color-accent)] bg-[var(--color-surface-elevated)]'
          : 'border-[var(--color-hairline)] bg-[var(--color-surface-card)]'
      }`}
    >
      {isHighlighted && (
        <div className="absolute right-4 top-4 border border-[var(--color-accent)] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.13em] text-[var(--color-accent)]">
          DESTACADO
        </div>
      )}

      <div className="mb-4 inline-block border border-[var(--color-accent)] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-accent)]">
        {icon}
      </div>

      <h3 className="mb-3 text-2xl font-black uppercase leading-tight text-[var(--color-on-dark)]">
        {title}
      </h3>

      <p className="mb-5 leading-relaxed text-[var(--color-body)]">
        {description}
      </p>

      <ul className="space-y-3 text-sm text-[var(--color-body-strong)]">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-[var(--color-accent)]">■</span>
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-6 h-[2px] w-12 bg-[var(--color-accent)]" />
    </article>
  );
};

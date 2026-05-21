import React from 'react';

interface GuaranteeCardProps {
  icon: string;
  title: string;
  description: string;
}

export const GuaranteeCard: React.FC<GuaranteeCardProps> = ({ icon, title, description }) => {
  return (
    <article className="border border-[var(--color-hairline)] bg-[var(--color-surface-card)] p-6 transition hover:border-[var(--color-accent)]">
      <div className="mb-4 inline-block border border-[var(--color-accent)] px-3 py-1 text-xs font-bold tracking-[0.12em] text-[var(--color-accent)]">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-black uppercase text-[var(--color-on-dark)]">{title}</h3>
      <p className="leading-relaxed text-[var(--color-body)]">{description}</p>
    </article>
  );
};

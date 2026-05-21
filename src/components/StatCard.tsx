import React from 'react';

interface StatCardProps {
  number: string;
  label: string;
  icon?: string;
  suffix?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ number, label, icon, suffix = "" }) => {
  return (
    <article className="border border-[var(--color-hairline)] bg-[var(--color-surface-card)] p-6">
      {icon && (
        <div className="mb-3 inline-block border border-[var(--color-hairline)] px-2 py-1 text-xs font-bold tracking-[0.11em] text-[var(--color-body)]">{icon}</div>
      )}
      <div className="mb-2 text-4xl font-black text-[var(--color-accent)]">
        {number}{suffix}
      </div>
      <div className="text-sm font-semibold uppercase tracking-[0.09em] text-[var(--color-body-strong)]">{label}</div>
    </article>
  );
};

import React from 'react';

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export const ProcessStep: React.FC<ProcessStepProps> = ({ step, title, description, icon }) => {
  return (
    <article className="h-full border border-[var(--color-hairline)] bg-black p-6 text-left">
      <div className="mb-6 flex items-center justify-between">
        <div className="border border-[var(--color-accent)] px-3 py-1 text-xs font-bold uppercase tracking-[0.13em] text-[var(--color-accent)]">
          Paso {step}
        </div>
        <div className="border border-[var(--color-hairline)] px-2 py-1 text-xs font-bold tracking-[0.1em] text-[var(--color-body)]">{icon}</div>
      </div>

      <h3 className="mb-3 text-xl font-black uppercase leading-tight text-[var(--color-on-dark)]">{title}</h3>
      <p className="leading-relaxed text-[var(--color-body)]">{description}</p>
    </article>
  );
};

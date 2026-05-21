import React from 'react';

interface CallToActionProps {
  title: string;
  subtitle?: string;
  primaryButtonText: string;
  primaryButtonAction: () => void;
  secondaryButtonText?: string;
  secondaryButtonAction?: () => void;
  backgroundImage?: string;
  isDark?: boolean;
}

export const CallToAction: React.FC<CallToActionProps> = ({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonAction,
  secondaryButtonText,
  secondaryButtonAction,
  backgroundImage,
  isDark = true
}) => {
  return (
    <section
      className={`relative w-full overflow-hidden px-6 py-24 ${
        isDark ? 'bg-black' : 'bg-[var(--color-surface-soft)]'
      }`}
    >
      {backgroundImage && (
        <>
          <div className="absolute inset-0 bg-black/70" />
          <img 
            src={backgroundImage} 
            alt="Background" 
            className="absolute inset-0 h-full w-full object-cover"
          />
        </>
      )}

      <div className="relative z-10 mx-auto max-w-5xl border border-[var(--color-hairline)] bg-black/75 p-10 text-center backdrop-blur-sm">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-accent)]">
          Atencion con cupos por agenda
        </p>

        <h2
          className={`mb-5 text-4xl font-black uppercase leading-tight md:text-5xl ${
            isDark ? 'text-[var(--color-on-dark)]' : 'text-[var(--color-on-dark)]'
          }`}
        >
          {title}
        </h2>

        {subtitle && (
          <p
            className={`mb-8 text-lg ${
              isDark ? 'text-[var(--color-body-strong)]' : 'text-[var(--color-body)]'
            }`}
          >
            {subtitle}
          </p>
        )}

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={primaryButtonAction}
            className="bg-[var(--color-accent)] px-8 py-4 text-sm font-black uppercase tracking-[0.12em] text-black transition hover:bg-[var(--color-accent-soft)]"
          >
            {primaryButtonText}
          </button>

          {secondaryButtonText && secondaryButtonAction && (
            <button
              onClick={secondaryButtonAction}
              className={`px-8 py-4 text-sm font-black uppercase tracking-[0.12em] transition ${
                isDark
                  ? 'border border-white text-white hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'
                  : 'border border-black text-black hover:bg-black hover:text-white'
              }`}
            >
              {secondaryButtonText}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

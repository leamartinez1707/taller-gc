import React from 'react';

interface TestimonialProps {
  name: string;
  role?: string;
  content: string;
  rating?: number;
  avatar?: string;
}

export const TestimonialCard: React.FC<TestimonialProps> = ({ 
  name, 
  role, 
  content, 
  rating = 5,
  avatar 
}) => {
  return (
    <article className="border border-[var(--color-hairline)] bg-black p-6">
      <div className="mb-5 flex items-center">
        {[...Array(5)].map((_, i) => (
          <span 
            key={i} 
            className={`text-xl ${i < rating ? 'text-[var(--color-accent)]' : 'text-[var(--color-hairline)]'}`}
          >
            ★
          </span>
        ))}
      </div>

      <blockquote className="mb-7 leading-relaxed text-[var(--color-body)]">
        "{content}"
      </blockquote>

      <div className="flex items-center">
        <div className="mr-4 flex h-12 w-12 items-center justify-center border border-[var(--color-hairline)] bg-[var(--color-surface-card)]">
          {avatar ? (
            <img src={avatar} alt={name} className="h-full w-full object-cover" />
          ) : (
            <span className="text-lg font-black text-[var(--color-on-dark)]">
              {name.charAt(0)}
            </span>
          )}
        </div>
        <div>
          <div className="font-bold uppercase tracking-[0.08em] text-[var(--color-on-dark)]">{name}</div>
          {role && <div className="text-sm text-[var(--color-body)]">{role}</div>}
        </div>
      </div>
    </article>
  );
};

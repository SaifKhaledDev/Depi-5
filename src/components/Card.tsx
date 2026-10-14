import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`p-5 rounded-xl border border-[var(--color-slate-200-border)] bg-[var(--color-bg-card)] shadow-sm ${className}`}>
      {children}
    </div>
  );
}
import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'success' | 'primary' | 'error';
}

export default function Badge({ children, variant = 'primary' }: BadgeProps) {
  const variants = {
    primary: "bg-[var(--color-violet-hover)]/10 text-[var(--color-violet-primary)]",
    success: "bg-[var(--color-emerald-bg)] text-[var(--color-emerald-success)]",
    error: "bg-[var(--color-rose-bg)] text-[var(--color-rose-error)]",
  };

  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold inline-flex items-center ${variants[variant]}`}>
      {children}
    </span>
  );
}
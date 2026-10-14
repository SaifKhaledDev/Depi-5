import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({ label, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && <label className="text-sm font-medium text-[var(--color-text-main)]">{label}</label>}
      <input 
        className="px-3 py-2 rounded-lg border border-[var(--color-slate-200-border)] bg-[var(--color-bg-card)] text-[var(--color-text-main)] focus:outline-none focus:ring-2 focus:ring-[var(--color-violet-primary)] transition-all"
        {...props}
      />
    </div>
  );
}
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark' | 'outline' | 'success';
  children: React.ReactNode;
}

export default function Button({ children, variant = 'primary', ...props }: ButtonProps) {
  const baseStyle = "px-5 py-2.5 rounded-xl font-medium transition-all duration-200 cursor-pointer active:scale-95 shadow-sm";
  
  const variants = {
    // تدرج لوني (Gradient) للزر الرئيسي مع هافر يتفاعل معاه
    primary: "bg-gradient-to-r from-[var(--color-violet-primary)] to-[#7c3aed] text-white hover:opacity-90 hover:shadow-md",
    
    // الأزرار الثانوية مع تأثير هافر أغمق سِنة
    secondary: "bg-[var(--color-blue-secondary)] text-white hover:opacity-90",
    
    // الزر الداكن مع هافر خفيف
    dark: "bg-[var(--color-slate-900-darkest)] text-white hover:bg-[var(--color-slate-800-dark)]",
    
    // زر الإطار مع هافر يغير لون الخلفية رمادي فاتح ناعم
    outline: "border border-[var(--color-slate-200-border)] text-[var(--color-slate-900-darkest)] bg-[var(--color-white-pure)] hover:bg-[var(--color-slate-50-bg)]",
    
    // الزر الأخضر (Success)
    success: "bg-[var(--color-emerald-success)] text-white hover:opacity-90"
  };

  return (
    <button className={`${baseStyle} ${variants[variant] || variants.primary}`} {...props}>
      {children}
    </button>
  );
}
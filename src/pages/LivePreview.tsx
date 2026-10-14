import React, { useState } from 'react';

// مكون الـ Navbar العلوي
interface NavbarProps {
  activeView?: 'desktop' | 'tablet' | 'mobile';
  onViewChange?: (view: 'desktop' | 'tablet' | 'mobile') => void;
  onEditContent?: () => void;
  onChangeTheme?: () => void;
  onSaveChanges?: () => void;
  onExportOrPublish?: () => void;
}

function Navbar({
  activeView = 'desktop',
  onViewChange,
  onEditContent,
  onChangeTheme,
  onSaveChanges,
  onExportOrPublish,
}: NavbarProps) {
  const [currentView, setCurrentView] = useState<'desktop' | 'tablet' | 'mobile'>(activeView);

  const handleViewChange = (view: 'desktop' | 'tablet' | 'mobile') => {
    setCurrentView(view);
    if (onViewChange) onViewChange(view);
  };

  return (
    <header className="w-full bg-white border-b border-[#E2E8F0] px-6 py-3 flex items-center justify-between shadow-2xs transition-colors duration-300">
      
<div className="flex items-center h-[32px] gap-[12px]">
  {/* Logo Icon Container */}
  <div 
    className="w-[32px] h-[32px] rounded-[8px] flex items-center justify-center text-white shrink-0"
    style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)' }}
  >
    <svg className="w-[18px] h-[18px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  </div>

  {/* Brand Name & Live Preview Group */}
  <div className="flex items-baseline gap-[8px]">
    <span
      className="text-[16px] font-extrabold text-[#0F172A] leading-[100%]"
      style={{ fontFamily: "'Manrope', sans-serif" }}
    >
      PortfolioGenie
    </span>
    <span
      className="text-[14px] font-normal text-[#64748B] leading-[100%]"
      style={{ fontFamily: "'Manrope', sans-serif" }}
    >
      Live preview
    </span>
  </div>
</div>

      {/* 2. Middle Section: View Selector (Desktop / Tablet / Mobile) - مطابقة لـ Figma */}
      <div 
  className="hidden md:inline-flex items-center h-[40px] p-[4px] gap-[2px] bg-[#F1F5F9] rounded-[12px]"
>
  <button
  onClick={() => handleViewChange('desktop')}
  className={`h-[32px] px-[14px] py-[7px] flex items-center justify-center rounded-[9px] text-[13px] font-semibold leading-[100%] transition-all duration-200 ${
    currentView === 'desktop'
      ? 'bg-white text-[#0F172A] shadow-xs'
      : 'text-[#475569] hover:text-[#0F172A]'
  }`}
  style={{ fontFamily: "'Manrope', sans-serif" }}
>
  Desktop
</button>

  <button
  onClick={() => handleViewChange('tablet')}
  className={`h-[32px] px-[14px] py-[7px] flex items-center justify-center rounded-[9px] text-[13px] font-semibold leading-[100%] transition-all duration-200 ${
    currentView === 'tablet'
      ? 'bg-white text-[#0F172A] shadow-xs'
      : 'text-[#475569] hover:text-[#0F172A]'
  }`}
  style={{ fontFamily: "'Manrope', sans-serif" }}
>
  Tablet
</button>

  <button
  onClick={() => handleViewChange('mobile')}
  className={`h-[32px] px-[14px] py-[7px] flex items-center justify-center rounded-[9px] text-[13px] font-semibold leading-[100%] transition-all duration-200 ${
    currentView === 'mobile'
      ? 'bg-white text-[#0F172A] shadow-xs'
      : 'text-[#475569] hover:text-[#0F172A]'
  }`}
  style={{ fontFamily: "'Manrope', sans-serif" }}
>
  Mobile
</button>
</div>

      {/* 3. Right Section: Action Buttons */}
      <div className="flex items-center gap-2 sm:gap-3">
        <button
  onClick={onEditContent}
  className="h-[36px] px-[12px] py-[9px] gap-[8px] flex items-center justify-center rounded-[12px] text-[13px] font-semibold text-[#475569] leading-[100%] hover:bg-[#F8FAFC] transition-all"
  style={{ fontFamily: "'Manrope', sans-serif" }}
>
  <svg 
    className="w-[16px] h-[16px] text-[#475569]" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 16 16"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="2" 
      d="M11.3333 2.00004C11.5961 1.73721 11.9525 1.5896 12.3241 1.5896C12.6957 1.5896 13.0521 1.73721 13.3149 2.00004C13.5778 2.26287 13.7254 2.61928 13.7254 2.99087C13.7254 3.36247 13.5778 3.71888 13.3149 3.98171L4.98158 12.315L1.66663 13.3334L2.68501 10.0184L11.3333 2.00004Z" 
    />
  </svg>
  <span>Edit content</span>
</button>

       <button
  onClick={onChangeTheme}
  className="h-[38px] px-[14px] py-[9px] bg-[#FFFFFF] border border-[#E2E8F0] rounded-[12px] flex items-center justify-center hover:bg-[#F8FAFC] transition-all shadow-2xs"
>
  <span 
    className="text-[13px] font-semibold text-[#0F172A] leading-[100%]"
    style={{ fontFamily: "'Manrope', sans-serif" }}
  >
    Change theme
  </span>
</button>

<button
  onClick={onSaveChanges}
  className="h-[38px] px-[14px] py-[9px] bg-[#FFFFFF] border border-[#E2E8F0] rounded-[12px] flex items-center justify-center hover:bg-[#F8FAFC] transition-all shadow-2xs"
>
  <span 
    className="text-[13px] font-semibold text-[#0F172A] leading-[100%]"
    style={{ fontFamily: "'Manrope', sans-serif" }}
  >
    Save changes
  </span>
</button>

<button
  onClick={onExportOrPublish}
  className="h-[36px] px-[14px] py-[9px] flex items-center justify-center gap-[8px] text-white rounded-[12px] shadow-xs transition-all hover:opacity-95"
  style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)' }}
>
  <span 
    className="text-[13px] font-semibold leading-[100%]"
    style={{ fontFamily: "'Manrope', sans-serif" }}
  >
    Export or publish
  </span>
  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
</button>
      </div>

    </header>
  );
}

// الصفحة الرئيسية LivePreview
export default function LivePreview() {
  const [activeView, setActiveView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  return (
    <div className="min-h-screen bg-[#E2E8F0] transition-colors duration-300 flex flex-col">
      
      {/* 1. النافبار العلوي */}
      <Navbar activeView={activeView} onViewChange={setActiveView} />

      {/* 2. منطقة المعاينة - العرض المظبوط 1118px مطابقة لفيغما */}
      <div className="flex-1 px-4 py-8 sm:px-8 md:py-12 flex justify-center items-start">
        <div className="w-full max-w-[1118px] bg-white border border-[#E2E8F0] rounded-2xl shadow-sm overflow-hidden">
          
          {/* شريط المتصفح العلوي (Browser Top Bar) */}
        <div 
             className="w-full flex items-center px-[16px] py-[10px] gap-[8px] bg-[#F8FAFC]"
            >            
            {/* النقاط الثلاث على الشمال */}
            <div className="flex gap-[8px]">
            <div className="w-[10px] h-[10px] rounded-full shrink-0" style={{ backgroundColor: '#CBD5E1' }}></div>
            <div className="w-[10px] h-[10px] rounded-full shrink-0" style={{ backgroundColor: '#CBD5E1' }}></div>
            <div className="w-[10px] h-[10px] rounded-full shrink-0" style={{ backgroundColor: '#CBD5E1' }}></div>
           </div>

            {/* نص المعاينة مباشرة بعد النقاط الثلاث */}
            <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-[6px] px-[12px] py-[4px] h-[26px] flex items-center">
            <span 
              className="text-[12px] font-normal text-[#64748B] leading-[100%]"
    style={{ fontFamily: "'Manrope', sans-serif" }}
            >
             preview · sample URL, not live
             </span>
            </div>
          </div>

          <nav className="w-full h-[53px] px-[56px] py-[16px] flex items-center justify-between border-b border-[#E2E8F0] bg-white">
  {/* اسم أو شعار الصفحة */}
  <span 
    className="text-[#0F172A] font-extrabold text-[14px] leading-[100%] tracking-normal"
    style={{ fontFamily: "'Manrope', sans-serif" }}
  >
    Maya Chen
  </span>

  {/* روابط التنقل المحدثة بالأبعاد والأوزان الدقيقة */}
  <div className="flex items-center h-[19px] gap-[24px]">
    <a 
      href="#about" 
      className="w-[41px] text-[14px] font-medium text-[#475569] hover:text-[#0F172A] transition-colors inline-block leading-[100%]"
      style={{ fontFamily: "'Manrope', sans-serif" }}
    >
      About
    </a>
    <a 
      href="#skills" 
      className="w-[34px] text-[14px] font-medium text-[#475569] hover:text-[#0F172A] transition-colors inline-block leading-[100%]"
      style={{ fontFamily: "'Manrope', sans-serif" }}
    >
      Skills
    </a>
    <a 
      href="#projects" 
      className="w-[56px] text-[14px] font-medium text-[#475569] hover:text-[#0F172A] transition-colors inline-block leading-[100%]"
      style={{ fontFamily: "'Manrope', sans-serif" }}
    >
      Projects
    </a>
    <a 
      href="#contact" 
      className="w-[55px] text-[14px] font-medium text-[#475569] hover:text-[#0F172A] transition-colors inline-block leading-[100%]"
      style={{ fontFamily: "'Manrope', sans-serif" }}
    >
      Contact
    </a>
  </div>
</nav>
        </div>
      </div>
    </div>
  );
}
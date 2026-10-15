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
    <header className="w-full bg-white border-b border-[#E2E8F0] p-[12px_16px] md:px-6 md:py-3 flex flex-col md:flex-row items-start md:items-center justify-between gap-[12px] md:gap-0 shadow-2xs transition-colors duration-300">
      
      {/* 1. Logo & Brand Group */}
      <div className="flex items-center h-[32px] gap-[12px]">
        <div 
          className="w-[32px] h-[32px] rounded-[8px] flex items-center justify-center text-white shrink-0"
          style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)' }}
        >
          <svg className="w-[18px] h-[18px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </div>

        <div className="flex items-baseline gap-[8px]">
          <span
            className="text-[16px] font-extrabold text-[#0F172A] leading-[100%]"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            PortfolioGenie
          </span>
          <span
            className="hidden md:inline text-[14px] font-normal text-[#64748B] leading-[100%]"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            Live preview
          </span>
        </div>
      </div>

      {/* 2. Middle Section: View Selector */}
      <div className="flex items-center h-[40px] p-[4px] gap-[2px] bg-[#F1F5F9] rounded-[12px]">
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
      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        <button
          onClick={onEditContent}
          className="h-[36px] px-[12px] py-[9px] gap-[8px] flex items-center justify-center rounded-[12px] text-[13px] font-semibold text-[#475569] leading-[100%] hover:bg-[#F8FAFC] transition-all"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          <svg className="w-[16px] h-[16px] text-[#475569]" fill="none" stroke="currentColor" viewBox="0 0 16 16">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.3333 2.00004C11.5961 1.73721 11.9525 1.5896 12.3241 1.5896C12.6957 1.5896 13.0521 1.73721 13.3149 2.00004C13.5778 2.26287 13.7254 2.61928 13.7254 2.99087C13.7254 3.36247 13.5778 3.71888 13.3149 3.98171L4.98158 12.315L1.66663 13.3334L2.68501 10.0184L11.3333 2.00004Z" />
          </svg>
          <span>Edit content</span>
        </button>

        <button
          onClick={onChangeTheme}
          className="h-[38px] px-[14px] py-[9px] bg-[#FFFFFF] border border-[#E2E8F0] rounded-[12px] flex items-center justify-center hover:bg-[#F8FAFC] transition-all shadow-2xs"
        >
          <span className="text-[13px] font-semibold text-[#0F172A] leading-[100%]" style={{ fontFamily: "'Manrope', sans-serif" }}>
            Change theme
          </span>
        </button>

        <button
          onClick={onSaveChanges}
          className="h-[38px] px-[14px] py-[9px] bg-[#FFFFFF] border border-[#E2E8F0] rounded-[12px] flex items-center justify-center hover:bg-[#F8FAFC] transition-all shadow-2xs"
        >
          <span className="text-[13px] font-semibold text-[#0F172A] leading-[100%]" style={{ fontFamily: "'Manrope', sans-serif" }}>
            Save changes
          </span>
        </button>

        <button
          onClick={onExportOrPublish}
          className="h-[36px] px-[14px] py-[9px] flex items-center justify-center gap-[8px] text-white rounded-[12px] shadow-xs transition-all hover:opacity-95"
          style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)' }}
        >
          <span className="text-[13px] font-semibold leading-[100%]" style={{ fontFamily: "'Manrope', sans-serif" }}>
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
      
      {/* النافبار العلوي */}
      <Navbar activeView={activeView} onViewChange={setActiveView} />

      {/* منطقة المعاينة */}
      <div className="flex-1 px-4 py-8 sm:px-8 md:py-12 flex justify-center items-start">
        <div className="w-full max-w-[430px] md:max-w-[1120px] bg-white border border-[#E2E8F0] rounded-[16px] shadow-[0px_8px_24px_rgba(15,23,41,0.08)] overflow-hidden transition-all duration-300">
          
          {/* شريط المتصفح العلوي (Browser Top Bar) */}
          <div className="w-full flex items-center px-[16px] py-[10px] gap-[8px] bg-[#F8FAFC] border-b border-[#E2E8F0]">            
            <div className="flex gap-[8px]">
              <div className="w-[10px] h-[10px] rounded-full shrink-0" style={{ backgroundColor: '#CBD5E1' }}></div>
              <div className="w-[10px] h-[10px] rounded-full shrink-0" style={{ backgroundColor: '#CBD5E1' }}></div>
              <div className="w-[10px] h-[10px] rounded-full shrink-0" style={{ backgroundColor: '#CBD5E1' }}></div>
            </div>

            <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-[6px] px-[12px] py-[4px] h-[26px] flex items-center">
              <span 
                className="text-[12px] font-normal text-[#64748B] leading-[100%]"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                preview · sample URL, not live
              </span>
            </div>
          </div>

          {/* النافبار الداخلي للمعاينة */}
          <nav className="w-full h-[53px] px-6 md:px-[56px] py-[16px] flex items-center justify-between border-b border-[#E2E8F0] bg-white">
            <span 
              className="text-[#0F172A] font-extrabold text-[14px] leading-[100%] tracking-normal"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Maya Chen
            </span>

            <div className="hidden md:flex items-center h-[19px] gap-[24px]">
              <a href="#about" className="text-[14px] font-medium text-[#475569] hover:text-[#0F172A] transition-colors leading-[100%]" style={{ fontFamily: "'Manrope', sans-serif" }}>About</a>
              <a href="#skills" className="text-[14px] font-medium text-[#475569] hover:text-[#0F172A] transition-colors leading-[100%]" style={{ fontFamily: "'Manrope', sans-serif" }}>Skills</a>
              <a href="#projects" className="text-[14px] font-medium text-[#475569] hover:text-[#0F172A] transition-colors leading-[100%]" style={{ fontFamily: "'Manrope', sans-serif" }}>Projects</a>
              <a href="#contact" className="text-[14px] font-medium text-[#475569] hover:text-[#0F172A] transition-colors leading-[100%]" style={{ fontFamily: "'Manrope', sans-serif" }}>Contact</a>
            </div>
          </nav>

          {/* Hero Section */}
          <section className="w-full max-w-[1118px] px-6 md:px-[56px] py-8 md:py-[64px] flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-[32px] bg-white">
            <div className="w-[80px] h-[80px] md:w-[128px] md:h-[128px] rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] flex items-center justify-center shrink-0">
              <span className="text-white text-[32px] md:text-[46px] font-[700] leading-[100%]" style={{ fontFamily: "'Manrope', sans-serif" }}>
                MC
              </span>
            </div>

            <div className="flex flex-col gap-[8px] w-full max-w-[846px] h-auto">
              <h1 className="text-[34px] md:text-[52px] font-[800] text-[#0F172A] leading-[100%] tracking-[-0.015em]" style={{ fontFamily: "'Manrope', sans-serif" }}>
                Maya Chen
              </h1>

              <p className="text-[18px] font-[600] text-[#6D28D9] leading-[100%] tracking-normal" style={{ fontFamily: "'Manrope', sans-serif" }}>
                Full-Stack Developer
              </p>

              <p className="text-[14px] font-[400] text-[#475569] leading-[100%] tracking-normal" style={{ fontFamily: "'Manrope', sans-serif" }}>
                Lisbon, Portugal
              </p>

              <div className="flex items-center gap-[12px] h-[43px] w-[264px] mt-[8px]">
                <a href="#projects" className="w-[131px] h-[41px] px-[20px] py-[11px] bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-[14px] font-[600] leading-[100%] rounded-[12px] flex items-center justify-center transition-colors shrink-0" style={{ fontFamily: "'Manrope', sans-serif" }}>
                  View projects
                </a>

                <a href="#contact" className="w-[121px] h-[43px] px-[20px] py-[11px] bg-white border border-[#CBD5E1] hover:bg-[#F8FAFC] text-[#0F172A] text-[14px] font-[600] leading-[100%] rounded-[12px] flex items-center justify-center transition-colors shrink-0" style={{ fontFamily: "'Manrope', sans-serif" }}>
                  Contact me
                </a>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="w-full max-w-[1118px] px-6 md:px-[56px] py-8 md:py-[40px] flex flex-col gap-[12px] bg-[#F8FAFC]">
            <h2 className="text-[24px] md:text-[28px] font-[800] text-[#0F172A] leading-none tracking-[-0.01em]" style={{ fontFamily: "'Manrope', sans-serif" }}>
              About me
            </h2>

            <p className="w-full max-w-[680px] text-[14px] font-[400] text-[#475569] leading-[26px]" style={{ fontFamily: "'Manrope', sans-serif" }}>
              I’m a full-stack developer who enjoys turning everyday workflows into clean, reliable software. I build TypeScript APIs, React interfaces, and small Python tools, and I care about readable code and thoughtful details.
            </p>
          </section>

          {/* Skills Section */}
          <section id="skills" className="w-full max-w-[1118px] px-6 md:px-[56px] py-8 md:py-[44px] flex flex-col gap-[20px] bg-white">
            <h2 className="text-[24px] md:text-[28px] font-[800] text-[#0F172A] leading-[100%] tracking-[-0.01em]" style={{ fontFamily: "'Manrope', sans-serif" }}>
              Skills
            </h2>

            <div className="flex flex-col md:flex-row items-start w-full max-w-[1006px] gap-6 md:gap-[24px]">
              <div className="flex flex-col flex-1 gap-[8px] w-full">
                <span className="text-[13px] font-[700] text-[#475569] leading-[100%]" style={{ fontFamily: "'Manrope', sans-serif" }}>
                  Languages
                </span>
                <div className="flex flex-row items-center w-full gap-[8px] flex-wrap">
                  <span className="h-[30px] px-[12px] py-[6px] bg-[#F5F3FF] rounded-[99px] flex items-center justify-center text-[13px] font-[500] text-[#6D28D9]" style={{ fontFamily: "'Manrope', sans-serif" }}>
                    TypeScript
                  </span>
                  <span className="h-[30px] px-[12px] py-[6px] bg-[#F5F3FF] rounded-[99px] flex items-center justify-center text-[13px] font-[500] text-[#6D28D9]" style={{ fontFamily: "'Manrope', sans-serif" }}>
                    Python
                  </span>
                  <span className="h-[30px] px-[12px] py-[6px] bg-[#F5F3FF] rounded-[99px] flex items-center justify-center text-[13px] font-[500] text-[#6D28D9]" style={{ fontFamily: "'Manrope', sans-serif" }}>
                    JavaScript
                  </span>
                </div>
              </div>

              <div className="flex flex-col flex-1 gap-[8px] w-full">
                <span className="text-[13px] font-[700] text-[#475569] leading-[100%]" style={{ fontFamily: "'Manrope', sans-serif" }}>
                  Frameworks and libraries
                </span>
                <div className="flex flex-row items-center w-full h-[30px] gap-[8px]">
                  <span className="h-[30px] px-[12px] py-[6px] bg-[#F5F3FF] rounded-[99px] flex items-center justify-center text-[13px] font-[500] text-[#6D28D9]" style={{ fontFamily: "'Manrope', sans-serif" }}>
                    React
                  </span>
                  <span className="h-[30px] px-[12px] py-[6px] bg-[#F5F3FF] rounded-[99px] flex items-center justify-center text-[13px] font-[500] text-[#6D28D9]" style={{ fontFamily: "'Manrope', sans-serif" }}>
                    Node.js
                  </span>
                </div>
              </div>

              <div className="flex flex-col flex-1 gap-[8px] w-full">
                <span className="text-[13px] font-[700] text-[#475569] leading-[100%]" style={{ fontFamily: "'Manrope', sans-serif" }}>
                  Tools
                </span>
                <div className="flex flex-row items-center w-full h-[30px] gap-[8px]">
                  <span className="h-[30px] px-[12px] py-[6px] bg-[#F5F3FF] rounded-[99px] flex items-center justify-center text-[13px] font-[500] text-[#6D28D9]" style={{ fontFamily: "'Manrope', sans-serif" }}>
                    Git
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="w-full max-w-[1118px] px-6 md:px-[56px] py-8 md:py-[44px] flex flex-col gap-[20px] bg-[#F8FAFC]">
            <h2 className="text-[24px] md:text-[28px] font-[800] text-[#0F172A] leading-[100%] tracking-[-0.01em]" style={{ fontFamily: "'Manrope', sans-serif" }}>
              Featured projects
            </h2>

            <div className="flex flex-col md:flex-row items-start w-full max-w-[1006px] gap-[20px]">
              {/* CARD 1 */}
              <div className="flex flex-col w-full md:w-[493px] bg-[#FFFFFF] rounded-[16px] border border-[#E2E8F0] overflow-hidden">
                <div className="w-full h-[140px] relative overflow-hidden shrink-0 rounded-t-[16px]" style={{ background: "linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)" }}>
                  <div className="absolute w-[64px] h-[8px] top-[14px] left-[16px] rounded-[4px] bg-white/60"></div>
                  <div className="absolute w-[96px] h-[8px] top-[30px] left-[16px] rounded-[4px] bg-white/30"></div>
                  <div className="absolute w-[140px] h-[56px] top-[84px] left-[16px] rounded-t-[8px] bg-white/25"></div>
                </div>

                <div className="flex flex-col w-full p-[20px] gap-[8px]">
                  <h3 className="text-[18px] font-[700] text-[#0F172A] leading-[100%]" style={{ fontFamily: "'Manrope', sans-serif" }}>
                    TaskFlow API
                  </h3>
                  <p className="w-full text-[14px] font-[400] text-[#475569] leading-[21px] text-justify" style={{ fontFamily: "'Manrope', sans-serif" }}>
                    TaskFlow API lets small teams create, assign, and track tasks on shared boards. It is built with Node.js and Express, stores data in PostgreSQL, and secures every request with JWT authentication.
                  </p>
                  <div className="flex flex-row items-center w-full gap-[6px] flex-wrap">
                    <span className="flex items-center justify-center h-[30px] px-[12px] py-[6px] bg-[#F5F3FF] text-[#6D28D9] text-[13px] font-[500] leading-[100%] rounded-[99px]" style={{ fontFamily: "'Manrope', sans-serif" }}>Node.js</span>
                    <span className="flex items-center justify-center h-[30px] px-[12px] py-[6px] bg-[#F5F3FF] text-[#6D28D9] text-[13px] font-[500] leading-[100%] rounded-[99px]" style={{ fontFamily: "'Manrope', sans-serif" }}>Express</span>
                    <span className="flex items-center justify-center h-[30px] px-[12px] py-[6px] bg-[#F5F3FF] text-[#6D28D9] text-[13px] font-[500] leading-[100%] rounded-[99px]" style={{ fontFamily: "'Manrope', sans-serif" }}>PostgreSQL</span>
                  </div>
                  <div className="flex flex-row items-center gap-[16px]">
                    <a href="#code" className="text-[14px] font-[600] text-[#6D28D9] leading-[100%]" style={{ fontFamily: "'Manrope', sans-serif" }}>Code</a>
                    <a href="#live" className="text-[14px] font-[600] text-[#6D28D9] leading-[100%]" style={{ fontFamily: "'Manrope', sans-serif" }}>Live demo</a>
                  </div>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="flex flex-col w-full md:w-[493px] bg-[#FFFFFF] rounded-[16px] border border-[#E2E8F0] overflow-hidden">
                <div className="w-full h-[140px] relative overflow-hidden shrink-0 rounded-t-[16px]" style={{ background: "linear-gradient(135deg, #D946EF 0%, #8B5CF6 100%)" }}>
                  <div className="absolute w-[64px] h-[8px] top-[14px] left-[16px] rounded-[4px] bg-white/60"></div>
                  <div className="absolute w-[96px] h-[8px] top-[30px] left-[16px] rounded-[4px] bg-white/30"></div>
                  <div className="absolute w-[140px] h-[56px] top-[84px] left-[16px] rounded-t-[8px] bg-white/25"></div>
                </div>

                <div className="flex flex-col w-full p-[20px] gap-[8px]">
                  <h3 className="text-[18px] font-[700] text-[#0F172A] leading-[100%]" style={{ fontFamily: "'Manrope', sans-serif" }}>
                    ShelfShare
                  </h3>
                  <p className="w-full text-[14px] font-[400] text-[#475569] leading-[21px] text-justify" style={{ fontFamily: "'Manrope', sans-serif" }}>
                    ShelfShare helps neighbors lend and borrow books. Members list what they own, request titles, and track returns in a Next.js app backed by Prisma and Supabase.
                  </p>
                  <div className="flex flex-row items-center w-full gap-[6px] flex-wrap">
                    <span className="flex items-center justify-center h-[30px] px-[12px] py-[6px] bg-[#F5F3FF] text-[#6D28D9] text-[13px] font-[500] leading-[100%] rounded-[99px]" style={{ fontFamily: "'Manrope', sans-serif" }}>Next.js</span>
                    <span className="flex items-center justify-center h-[30px] px-[12px] py-[6px] bg-[#F5F3FF] text-[#6D28D9] text-[13px] font-[500] leading-[100%] rounded-[99px]" style={{ fontFamily: "'Manrope', sans-serif" }}>Tailwind CSS</span>
                    <span className="flex items-center justify-center h-[30px] px-[12px] py-[6px] bg-[#F5F3FF] text-[#6D28D9] text-[13px] font-[500] leading-[100%] rounded-[99px]" style={{ fontFamily: "'Manrope', sans-serif" }}>Prisma</span>
                  </div>
                  <div className="flex flex-row items-center gap-[16px]">
                    <a href="#code" className="text-[14px] font-[600] text-[#6D28D9] leading-[100%]" style={{ fontFamily: "'Manrope', sans-serif" }}>Code</a>
                    <a href="#live" className="text-[14px] font-[600] text-[#6D28D9] leading-[100%]" style={{ fontFamily: "'Manrope', sans-serif" }}>Live demo</a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="w-full max-w-[1118px] px-6 md:px-[56px] py-8 md:py-[48px] flex flex-col gap-[12px] bg-white" style={{ fontFamily: "'Manrope', sans-serif" }}>
            <h2 className="text-[24px] md:text-[28px] font-[800] text-[#0F172A] leading-[100%] tracking-[-0.01em]" style={{ fontFamily: "'Manrope', sans-serif" }}>
              Get in touch
            </h2>
            <p className="text-[14px] font-[400] text-[#475569] leading-[100%]" style={{ fontFamily: "'Manrope', sans-serif" }}>
              I’d love to hear from you.
            </p>
            <div className="pt-[4px]">
              <a href="mailto:maya@mayachen.dev" className="inline-flex items-center justify-center bg-[#7C3AED] hover:bg-[#6D28D9] rounded-[12px] px-[20px] py-[12px] text-[14px] font-[600] text-white leading-[100%] transition-colors">
                maya@mayachen.dev
              </a>
            </div>
          </section>

          {/* Footer Section */}
          <footer className="w-full max-w-[1118px] px-6 md:px-[56px] py-[24px] flex flex-col md:flex-row items-center justify-between border-t border-[#E2E8F0] bg-white gap-3 md:gap-0" style={{ fontFamily: "'Manrope', sans-serif" }}>
            <p className="text-[13px] font-[400] text-[#64748B] leading-[100%]">
              © 2026 Maya Chen
            </p>
            <div className="flex flex-row items-center gap-[16px]">
              <a href="#github" className="text-[13px] font-[500] text-[#475569] hover:text-[#6D28D9] transition-colors">GitHub</a>
              <a href="#linkedin" className="text-[13px] font-[500] text-[#475569] hover:text-[#6D28D9] transition-colors">LinkedIn</a>
              <a href="#devto" className="text-[13px] font-[500] text-[#475569] hover:text-[#6D28D9] transition-colors">Dev.to</a>
            </div>
          </footer>

        </div>
      </div>
    </div>
  );
}
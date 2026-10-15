import React from 'react';

interface AiSuggestionModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  onRegenerate?: () => void;
  onEdit?: () => void;
  onAccept?: () => void;
}

export default function AiSuggestionModal({
  isOpen = true,
  onClose,
  onRegenerate,
  onEdit,
  onAccept,
}: AiSuggestionModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#94A3B8]/60 backdrop-blur-xs font-['Manrope'] min-h-screen">
      
       {/* Modal Container */}
      <div className="w-full max-w-[800px] bg-white rounded-[24px] shadow-[0px_8px_24px_rgba(15,23,41,0.08)] border border-[#E2E8F0] overflow-hidden flex flex-col p-6 md:p-[28px] gap-[20px]">        
        {/* Header Section */}
        <div className="flex items-start justify-between w-full">   
          <div className="flex items-center gap-[12px]">
            {/* AI Sparkle Icon Box */}
            <div className="w-[40px] h-[40px] rounded-[12px] bg-[#7C3AED] flex items-center justify-center text-white shrink-0 shadow-xs">
              <svg className="w-[20px] h-[20px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            
            <div className="flex flex-col gap-[4px]">
              <h2 className="text-[22px] font-[800] text-[#0F172A] leading-[100%] tracking-[-0.01em] font-['Manrope',sans-serif]">
                Improve description
              </h2>
              <p className="text-[14px] font-[400] text-[#475569] leading-[100%] tracking-[0%] font-['Manrope',sans-serif]">
                TaskFlow API. Nothing changes until you accept.
              </p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#64748B] hover:bg-[#F1F5F9] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

       {/* Content Comparison Boxes */}
       <div className="flex flex-col md:grid md:grid-cols-2 gap-[16px] w-full">
         
         {/* First Box - Written by you */}
         <div className="flex flex-col p-[16px] gap-[12px] bg-[#F8FAFC] border border-[#E2E8F0] rounded-[16px] w-full">
           <span className="inline-flex items-center w-fit px-[10px] py-[4px] bg-[#F1F5F9] text-[#334155] text-[11px] font-[600] leading-[100%] rounded-full font-['Manrope',sans-serif]">
             Written by you
           </span>
           <p className="text-[14px] font-[400] text-[#0F172A] leading-[22px] font-['Manrope',sans-serif]">
             REST API for task management with auth and team boards.
           </p>
         </div>

         {/* Second Box - AI draft */}
         <div className="flex flex-col p-[16px] gap-[12px] bg-[#F5F3FF] border-[2px] border-dashed border-[#C4B5FD] rounded-[16px] w-full">
           <span className="inline-flex items-center w-fit px-[10px] py-[4px] bg-[#F5F3FF] text-[#6D28D9] text-[11px] font-[600] leading-[100%] rounded-full font-['Manrope',sans-serif]">
             AI draft · not approved yet
           </span>
           <p className="text-[14px] font-[400] text-[#0F172A] leading-[22px] font-['Manrope',sans-serif]">
             TaskFlow API lets small teams create, assign, and track tasks on shared boards. It is built with Node.js and Express, stores data in PostgreSQL, and secures every request with JWT authentication.
           </p>
         </div>

       </div>

       {/* Benefits / Improvements Checks */}
       <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-[20px] w-full text-[#475569]">
         <div className="flex items-start gap-[8px] w-full">
           <svg className="w-[16px] h-[16px] text-[#047857] shrink-0 mt-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
           </svg>
           <div className="flex flex-col gap-[2px]">
             <span className="text-[14px] font-[700] text-[#0F172A] leading-[100%] font-['Manrope',sans-serif]">Clearer</span>
             <span className="text-[13px] font-[400] text-[#475569] leading-[100%] font-['Manrope',sans-serif]">Starts with what the project does.</span>
           </div>
         </div>

         <div className="flex items-start gap-[8px] w-full">
           <svg className="w-[16px] h-[16px] text-[#047857] shrink-0 mt-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
           </svg>
           <div className="flex flex-col gap-[2px]">
             <span className="text-[14px] font-[700] text-[#0F172A] leading-[100%] font-['Manrope',sans-serif]">Easier to read</span>
             <span className="text-[13px] font-[400] text-[#475569] leading-[100%] font-['Manrope',sans-serif]">Shorter sentences and active voice.</span>
           </div>
         </div>

         <div className="flex items-start gap-[8px] w-full">
           <svg className="w-[16px] h-[16px] text-[#047857] shrink-0 mt-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
           </svg>
           <div className="flex flex-col gap-[2px]">
             <span className="text-[14px] font-[700] text-[#0F172A] leading-[100%] font-['Manrope',sans-serif]">Relevant keywords</span>
             <span className="text-[13px] font-[400] text-[#475569] leading-[100%] font-['Manrope',sans-serif]">Uses your tags: Node.js, Express, PostgreSQL.</span>
           </div>
         </div>
       </div>

       {/* Footer Note & Actions */}
       <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 w-full pt-2">
         <p className="text-[12px] font-[400] text-[#64748B] leading-[100%] tracking-[0%] font-['Manrope',sans-serif]">
           Check that the draft is accurate. AI can add details that aren’t in your code.
         </p>

         <div className="flex flex-col md:flex-row items-center gap-[10px] w-full md:w-auto justify-end">
           {/* Regenerate Button */}
           <button 
             onClick={onRegenerate}
             className="w-full md:w-auto px-[20px] py-[12px] bg-white border border-[#E2E8F0] hover:bg-[#F8FAFC] text-[#0F172A] text-[14px] font-[600] rounded-[12px] flex items-center justify-center gap-[8px] transition-colors font-['Manrope',sans-serif]"
           >
             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
             </svg>
             <span>Regenerate</span>
           </button>

           {/* Edit Button */}
           <button 
             onClick={onEdit}
             className="w-full md:w-auto px-[20px] py-[12px] bg-white border border-[#E2E8F0] hover:bg-[#F8FAFC] text-[#0F172A] text-[14px] font-[600] rounded-[12px] flex items-center justify-center gap-[8px] transition-colors font-['Manrope',sans-serif]"
           >
             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
             </svg>
             <span>Edit</span>
           </button>

           {/* Accept Button */}
           <button 
             onClick={onAccept}
             className="w-full md:w-auto px-[20px] py-[12px] bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] hover:opacity-95 text-white text-[14px] font-[600] rounded-[12px] flex items-center justify-center gap-[8px] transition-all shadow-xs font-['Manrope',sans-serif]"
           >
             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
             </svg>
             <span>Accept</span>
           </button>
         </div>
       </div>

      </div>
    </div>
  );
}
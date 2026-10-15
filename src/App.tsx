import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LivePreview from './pages/LivePreview';
import AiSuggestionModal from './pages/AiSuggestionModal'; // أو مسار مكان حفظ ملف الـ Modal عندك

function TeamHome() {
  return (
    <div className="p-8">
      <h1 className='text-[30px] text-center font-bold text-[var(--color-text-main)]'>Hallo my team</h1>
      <h1 className='text-[30px] text-center font-bold text-[var(--color-text-main)] mt-4'>Hallo my team</h1>
      <h1 className='text-[30px] text-center font-bold text-[var(--color-text-main)] mt-4'>Hallo my team</h1>
      <h1 className='text-[30px] text-center font-bold text-[var(--color-text-main)] mt-4'>Hallo my team</h1>
      <h1 className='text-[30px] text-center font-bold text-[var(--color-text-main)] mt-4'>Hallo my team</h1>
      <h1 className='text-[30px] text-center font-bold text-[var(--color-text-main)] mt-4'>Hallo my team</h1>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* الصفحة الافتراضية على اللوكال هوست: http://localhost:5173/ */}
        <Route path="/" element={<TeamHome />} />
        
        {/* صفحة التصميم والـ Live Preview على الرابط: http://localhost:5173/live-preview */}
        <Route path="/live-preview" element={<LivePreview />} />

        {/* مسار الـ AI Suggestion Modal على الرابط: http://localhost:5173/ai-suggestion */}
        <Route path="/ai-suggestion" element={<AiSuggestionModal />} />
      </Routes>
    </Router>
  );
}
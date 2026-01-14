import React, { useMemo } from 'react';
import { Plane, Users, ArrowRight } from 'lucide-react';
import { PARTICIPANTS } from '../constants';

const Header: React.FC = () => {
  // D-Day 계산
  const dDayText = useMemo(() => {
    try {
      // 여행 시작일: 2026년 1월 22일
      const tripStartDate = new Date(2026, 0, 22); // 월은 0부터 시작 (0 = 1월)
      const today = new Date();
      
      // 오늘 날짜를 자정으로 설정하여 정확한 일수 계산
      const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
      const tripStart = new Date(tripStartDate.getFullYear(), tripStartDate.getMonth(), tripStartDate.getDate());
      
      // D-Day 계산 (밀리초를 일수로 변환)
      const diffTime = tripStart.getTime() - todayStart.getTime();
      const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
      
      // D-Day 텍스트 생성
      if (diffDays > 0) {
        return `D-${diffDays}`;
      } else if (diffDays === 0) {
        return 'D-DAY';
      } else {
        return `D+${Math.abs(diffDays)}`;
      }
    } catch (error) {
      // 에러 발생 시 기본값 반환
      return 'D-DAY';
    }
  }, []);

  return (
    <header className="pt-10 pb-6 px-6">
      <div className="flex justify-between items-start mb-6">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-1">
             <span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
             <span className="text-xs font-bold tracking-[0.2em] text-stone-500 uppercase">Trip Dashboard</span>
          </div>
          <h1 className="text-5xl font-bold text-black leading-[0.9] tracking-tight uppercase">
            Bangkok<br />
            <span className="text-stone-300">2026</span>
          </h1>
        </div>
        
        <div className="bg-white p-2 rounded-xl border border-stone-200 shadow-sm">
            <Plane className="w-6 h-6 text-black transform -rotate-45" />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {/* Date Strip */}
        <div className="flex items-center gap-4 bg-white border border-stone-200 p-3 rounded-lg">
            <div className="flex flex-col">
                <span className="text-[10px] uppercase text-stone-400 font-bold tracking-wider">Start</span>
                <span className="text-lg font-bold leading-none">01.22</span>
            </div>
            <ArrowRight className="w-4 h-4 text-stone-300" />
            <div className="flex flex-col">
                <span className="text-[10px] uppercase text-stone-400 font-bold tracking-wider">End</span>
                <span className="text-lg font-bold leading-none">01.27</span>
            </div>
        </div>
        
        {/* Participants */}
        <div className="flex items-center justify-between px-1">
             <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-stone-400" />
                <span className="font-kor text-sm font-medium text-stone-600">
                    {PARTICIPANTS.join(' · ')}
                </span>
             </div>
             <div className="text-[10px] font-bold bg-black text-white px-2 py-1 rounded">
                {dDayText} TRIP
             </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
import React, { useState } from 'react';
import { ITINERARY_DATA } from '../constants';
import { ActivityType } from '../types';
import { Plane, Utensils, Hotel, ShoppingBag, MapPin, Waves, Moon } from 'lucide-react';

const IconMap: Record<ActivityType, React.ReactNode> = {
  transport: <Plane className="w-4 h-4" />,
  food: <Utensils className="w-4 h-4" />,
  logistics: <Hotel className="w-4 h-4" />,
  relax: <Moon className="w-4 h-4" />,
  activity: <ShoppingBag className="w-4 h-4" />,
  leisure: <Waves className="w-4 h-4" />
};

const ScheduleView: React.FC = () => {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const currentSchedule = ITINERARY_DATA[selectedDayIndex];

  return (
    <div className="flex flex-col h-full bg-[#F2F2F2]">
      {/* Date Selector */}
      <div className="sticky top-[58px] z-20 bg-[#F2F2F2] pb-4 pt-2 px-6">
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
          {ITINERARY_DATA.map((day, idx) => {
            const isSelected = idx === selectedDayIndex;
            return (
              <button
                key={day.date}
                onClick={() => setSelectedDayIndex(idx)}
                className={`flex-shrink-0 flex flex-col justify-between w-14 h-20 p-2 rounded-xl transition-all duration-300 border ${
                  isSelected
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-stone-400 border-transparent hover:border-stone-200'
                }`}
              >
                <span className="text-[10px] font-bold uppercase tracking-wide">{day.label}</span>
                <span className="text-xl font-bold">{day.date.split('/')[1]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Timeline Content */}
      <div className="flex-1 px-6 pb-8 space-y-4">
        {currentSchedule.items.map((item, idx) => (
            <div key={idx} className="group bg-white rounded-2xl p-5 border border-stone-100 shadow-sm hover:border-stone-300 transition-all flex items-center gap-5">
              
              {/* Time Section - Large and Bold */}
              <div className="flex flex-col items-center justify-center w-16 border-r border-stone-100 pr-4">
                  <span className="text-2xl font-bold text-black tracking-tight leading-none">
                      {item.time.replace(':', '')}
                  </span>
                  <span className="text-[10px] text-stone-400 font-bold mt-1">
                      {item.time.includes(':') ? '' : 'TIME'}
                  </span>
              </div>

              {/* Detail Section */}
              <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                      <span className={`p-1 rounded bg-stone-100 text-stone-600`}>
                          {IconMap[item.type]}
                      </span>
                      <span className="text-[10px] font-bold uppercase text-stone-400 tracking-wider">
                          {item.type}
                      </span>
                  </div>
                  <h3 className="font-kor font-bold text-stone-800 text-lg truncate">
                      {item.title}
                  </h3>
                  <p className="font-kor text-sm text-stone-500 truncate">
                      {item.detail}
                  </p>
              </div>
            </div>
        ))}
        
        <div className="mt-8 flex items-center justify-center gap-2 opacity-30">
            <div className="h-px bg-black flex-1"></div>
            <span className="text-[10px] font-bold uppercase tracking-widest">End of List</span>
            <div className="h-px bg-black flex-1"></div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleView;
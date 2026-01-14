import React, { useState } from 'react';
import Layout from './components/Layout';
import Header from './components/Header';
import ScheduleView from './components/ScheduleView';
import LogisticsView from './components/LogisticsView';
import CostView from './components/CostView';
import PlacesView from './components/PlacesView';
import Footer from './components/Footer';

type Tab = 'itinerary' | 'places' | 'logistics' | 'wallet';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('itinerary');

  const tabs: { id: Tab; label: string }[] = [
    { id: 'itinerary', label: 'SCH' },
    { id: 'places', label: 'PLC' },
    { id: 'logistics', label: 'LOG' },
    { id: 'wallet', label: 'CST' },
  ];

  return (
    <Layout>
      <Header />

      {/* Main Navigation - Minimalist Tabs */}
      <nav className="sticky top-0 z-30 bg-[#F2F2F2]/90 backdrop-blur-sm border-b border-stone-200">
        <div className="flex w-full px-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-4 flex flex-col items-center justify-center relative transition-all duration-300 group`}
            >
              <span className={`text-sm font-bold tracking-widest ${
                activeTab === tab.id ? 'text-black' : 'text-stone-400 group-hover:text-stone-600'
              }`}>
                {tab.label}
              </span>
              {/* Active Indicator Dot */}
              {activeTab === tab.id && (
                <span className="absolute bottom-1.5 w-1 h-1 bg-black rounded-full"></span>
              )}
            </button>
          ))}
        </div>
      </nav>

      <main className="flex-1 min-h-[50vh]">
        {activeTab === 'itinerary' && <ScheduleView />}
        {activeTab === 'places' && <PlacesView />}
        {activeTab === 'logistics' && <LogisticsView />}
        {activeTab === 'wallet' && <CostView />}
      </main>

      <Footer />
    </Layout>
  );
};

export default App;
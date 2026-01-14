import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full flex justify-center bg-zinc-300 font-sans selection:bg-black selection:text-white">
      {/* Phone Frame wrapper for desktop view, full width on mobile */}
      <div className="w-full max-w-md bg-[#F2F2F2] min-h-screen shadow-2xl relative overflow-hidden flex flex-col">
        
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
             style={{ 
               backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }} 
        />
        
        {/* Dotted World Map Decoration (resembling the reference) */}
        <div className="absolute top-20 -right-20 opacity-[0.05] pointer-events-none">
           <svg width="300" height="300" viewBox="0 0 100 100">
             <pattern id="dots" x="0" y="0" width="2" height="2" patternUnits="userSpaceOnUse">
               <circle cx="1" cy="1" r="0.5" fill="black" />
             </pattern>
             <circle cx="50" cy="50" r="40" fill="url(#dots)" />
           </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
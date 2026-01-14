import React from 'react';
import { Phone, MapPin, ShieldAlert } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-8 bg-[#F2F2F2] border-t border-stone-300 p-8 pb-12">
      <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-black flex items-center justify-center text-white">
                <ShieldAlert size={16} />
             </div>
             <div>
                <h3 className="font-bold text-sm uppercase tracking-wide">Emergency Contact</h3>
                <p className="text-[10px] text-stone-500 font-kor">대한민국 대사관 (Embassy)</p>
             </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
              <a href="tel:+6622477537" className="block p-4 border border-stone-300 hover:bg-black hover:text-white transition-colors group">
                  <p className="text-[10px] text-stone-400 uppercase font-bold mb-1 group-hover:text-stone-300">Call Center</p>
                  <p className="text-sm font-bold font-mono">+66-2-247-7537</p>
              </a>
              <a href="tel:+66819145803" className="block p-4 border border-stone-300 hover:bg-red-600 hover:text-white transition-colors group">
                  <p className="text-[10px] text-stone-400 uppercase font-bold mb-1 group-hover:text-stone-200">Emergency</p>
                  <p className="text-sm font-bold font-mono">+66-81-914-5803</p>
              </a>
          </div>
          
          <div className="text-[10px] text-stone-400 leading-relaxed font-mono">
             ADDR: 23 Thiam-Ruammit Road, Ratchadapisek, Huay-Kwang, Bangkok 10310
          </div>
      </div>
    </footer>
  );
};

export default Footer;
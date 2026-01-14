import React, { useState } from 'react';
import { PLACES } from '../constants';
import { PlaceInfo } from '../types';
import { MapPin, Tag, Image as ImageIcon, Map as MapIcon, ExternalLink } from 'lucide-react';

const PlaceCard: React.FC<{ place: PlaceInfo }> = ({ place }) => {
  const [viewMode, setViewMode] = useState<'photo' | 'map'>('photo');
  
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(place.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-stone-200 hover:border-black transition-all duration-300">
      <div className="flex h-32">
        {/* Media Section (Left) */}
        <div className="relative w-36 h-full flex-shrink-0 bg-stone-200 cursor-pointer" onClick={() => setViewMode(prev => prev === 'photo' ? 'map' : 'photo')}>
          {viewMode === 'photo' ? (
            <img 
              src={place.imageUrl} 
              alt={place.name} 
              className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop';
              }}
            />
          ) : (
            <iframe 
              title={`Map of ${place.name}`}
              width="100%" 
              height="100%" 
              frameBorder="0" 
              scrolling="no" 
              src={mapUrl}
              className="w-full h-full grayscale"
            />
          )}
          
          {/* Toggle Button */}
          <div className="absolute top-2 left-2 bg-black text-white p-1.5">
            {viewMode === 'photo' ? <MapIcon size={12} /> : <ImageIcon size={12} />}
          </div>
        </div>

        {/* Content Section (Right) */}
        <div className="flex-1 p-4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-2">
              <span className="text-[9px] font-bold text-black border border-black px-1 py-0.5 uppercase">
                {place.category}
              </span>
            </div>
            
            <h3 className="font-kor text-sm font-bold text-black leading-tight mb-1 line-clamp-1">
              {place.name}
            </h3>
            
            <p className="font-kor text-[10px] text-stone-500 leading-snug line-clamp-2">
              {place.description}
            </p>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <div className="flex gap-1 overflow-hidden">
                {place.tags.slice(0, 2).map((tag, i) => (
                    <span key={i} className="text-[9px] text-stone-500 font-kor bg-stone-100 px-1.5 py-0.5 whitespace-nowrap">
                        #{tag}
                    </span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const PlacesView: React.FC = () => {
  return (
    <div className="p-6 space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between border-b-2 border-black pb-2">
        <h2 className="text-xl font-bold uppercase tracking-tight">Locations</h2>
        <span className="text-[10px] font-bold bg-black text-white px-2 py-1">
            {PLACES.length} SPOTS
        </span>
      </div>

      <div className="grid gap-4">
        {PLACES.map((place, idx) => (
            <PlaceCard key={idx} place={place} />
        ))}
      </div>
      
      <div className="text-center pt-2 pb-4">
          <p className="text-stone-300 text-[10px] font-mono tracking-widest">TAP IMAGE TO TOGGLE VIEW</p>
      </div>
    </div>
  );
};

export default PlacesView;
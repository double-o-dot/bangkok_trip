import React, { useState } from 'react';
import { FLIGHTS, HOTELS } from '../constants';
import { PlaneTakeoff, MapPin, Calendar, CreditCard, ArrowRight, Lock } from 'lucide-react';

const PASSWORD = '222';

const LogisticsView: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === PASSWORD) {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setPassword('');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="p-6 flex items-center justify-center min-h-[60vh]">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center space-y-2">
            <div className="flex justify-center">
              <div className="bg-stone-100 rounded-full p-4">
                <Lock size={32} className="text-stone-600" />
              </div>
            </div>
            <h2 className="text-2xl font-bold uppercase tracking-tight">Protected Content</h2>
            <p className="text-stone-500 text-sm">This section contains private information</p>
          </div>
          
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                placeholder="Enter password"
                className={`w-full px-4 py-3 border-2 rounded-lg font-mono text-center text-lg focus:outline-none focus:ring-2 focus:ring-black transition-all ${
                  error ? 'border-red-500 bg-red-50' : 'border-stone-300 focus:border-black'
                }`}
                autoFocus
              />
              {error && (
                <p className="mt-2 text-sm text-red-500 text-center">Incorrect password. Please try again.</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-bold uppercase tracking-widest hover:bg-stone-800 transition-colors"
            >
              Unlock
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-8 animate-in fade-in duration-500">
      
      {/* Flight Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b-2 border-black pb-2">
            <h2 className="text-xl font-bold uppercase tracking-tight">Flights</h2>
            <span className="text-xs font-mono bg-black text-white px-2 py-0.5 rounded">ASIANA</span>
        </div>
        
        {FLIGHTS.map((flight, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-stone-200 p-5 relative overflow-hidden group hover:border-stone-400 transition-all">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 p-4 opacity-5">
                <PlaneTakeoff size={100} />
            </div>

            <div className="relative z-10">
                <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-stone-400">
                        {flight.type === 'Departure' ? 'Outbound' : 'Inbound'}
                    </span>
                    <span className="text-lg font-black tracking-widest">{flight.code}</span>
                </div>

                <div className="flex items-end justify-between">
                    <div>
                        <div className="text-4xl font-black text-stone-900 leading-none">{flight.from.split(' ')[0]}</div>
                        <div className="text-sm font-bold text-stone-500 mt-1">{flight.fromTime}</div>
                    </div>

                    <div className="pb-3 text-stone-300">
                        <ArrowRight size={24} />
                    </div>

                    <div className="text-right">
                        <div className="text-4xl font-black text-stone-900 leading-none">{flight.to.split(' ')[0]}</div>
                        <div className="text-sm font-bold text-stone-500 mt-1">{flight.toTime}</div>
                    </div>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex justify-between items-center">
                    <div className="text-xs text-stone-400 font-bold uppercase">Seat No.</div>
                    <div className="font-mono text-lg font-bold">{flight.seats}</div>
                </div>
            </div>
          </div>
        ))}
      </div>

      {/* Hotel Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b-2 border-black pb-2">
            <h2 className="text-xl font-bold uppercase tracking-tight">Accommodation</h2>
            <MapPin size={16} />
        </div>

        {HOTELS.map((hotel, idx) => (
          <div key={idx} className="bg-stone-900 text-white rounded-xl p-6 shadow-lg relative overflow-hidden">
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-stone-800 rounded-full opacity-50"></div>
            
            <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="font-kor font-bold text-xl leading-snug w-3/4">{hotel.name}</h3>
                    <span className="bg-white text-black text-xs font-bold px-2 py-1 rounded">
                        {hotel.nights}N
                    </span>
                </div>
                
                <div className="space-y-3 mt-6">
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-stone-500">Period</span>
                        <span className="font-bold font-mono">{hotel.period}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-stone-500">Booking ID</span>
                        <span className="font-bold font-mono text-stone-300">{hotel.bookingId}</span>
                    </div>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogisticsView;
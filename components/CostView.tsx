import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { COSTS, TOTAL_COST } from '../constants';
import { Wallet } from 'lucide-react';

const CostView: React.FC = () => {
  
  const chartData = COSTS.map(item => ({
    name: item.category,
    value: item.amount,
    color: item.color
  }));

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(value);
  };

  return (
    <div className="p-6 space-y-6 animate-in fade-in duration-500">
      
      {/* Total Card */}
      <div className="bg-black text-white rounded-2xl p-8 relative overflow-hidden border border-stone-800">
        <div className="absolute -top-6 -right-6 text-stone-800 opacity-20">
          <Wallet size={120} strokeWidth={1} />
        </div>
        <div className="relative z-10">
            <p className="text-stone-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Total Budget</p>
            <h2 className="text-4xl font-mono font-bold tracking-tighter">
            {formatCurrency(TOTAL_COST)}
            </h2>
            <div className="w-12 h-1 bg-white mt-6 mb-2"></div>
            <p className="text-stone-500 text-xs font-kor">* 현지 식비 및 쇼핑 제외</p>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white border border-stone-200 rounded-2xl p-4 h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
              stroke="none"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value: number) => formatCurrency(value)}
              contentStyle={{ backgroundColor: '#000', border: 'none', borderRadius: '4px', color: '#fff' }}
              itemStyle={{ color: '#fff' }}
            />
            <Legend verticalAlign="bottom" height={36} iconType="square" formatter={(value) => <span className="text-stone-600 text-xs font-bold uppercase ml-1">{value}</span>} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Breakdown List */}
      <div className="space-y-3">
        <h3 className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-4 px-2">Breakdown</h3>
        {COSTS.map((cost, idx) => (
          <div key={idx} className="flex justify-between items-center p-4 bg-white rounded-xl border border-stone-100 hover:border-black transition-colors group">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded bg-stone-50 flex items-center justify-center font-bold text-stone-300 group-hover:bg-black group-hover:text-white transition-colors">
                  {idx + 1}
              </div>
              <div>
                <div className="font-bold text-stone-900 text-sm">{cost.category}</div>
                <div className="text-[10px] text-stone-400 font-kor">{cost.detail}</div>
              </div>
            </div>
            <div className="font-bold text-black font-mono">
              {formatCurrency(cost.amount)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CostView;
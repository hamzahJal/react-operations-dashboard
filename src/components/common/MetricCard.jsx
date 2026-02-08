import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

export default function MetricCard({ title, value, change, trend, icon: Icon }) {
  const trendColors = {
    up: 'text-green-600',
    down: 'text-red-600',
    neutral: 'text-gray-600'
  };
  
  const TrendIcon = trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : Minus;
  
  return (
    <div className="card hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold mt-2">{value}</p>
          {change && (
            <div className={`flex items-center gap-1 mt-2 text-sm font-medium ${trendColors[trend]}`}>
              <TrendIcon className="w-4 h-4" />
              <span>{change}</span>
            </div>
          )}
        </div>
        {Icon && (
          <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
            <Icon className="w-6 h-6 text-blue-600" />
          </div>
        )}
      </div>
    </div>
  );
}

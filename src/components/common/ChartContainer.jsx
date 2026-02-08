import { Download } from 'lucide-react';

export default function ChartContainer({ title, subtitle, children, action }) {
  return (
    <div className="card">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
        </div>
        {action && (
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <Download className="w-5 h-5" />
          </button>
        )}
      </div>
      <div className="w-full">
        {children}
      </div>
    </div>
  );
}

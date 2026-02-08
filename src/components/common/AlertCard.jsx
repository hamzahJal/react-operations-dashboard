import { AlertCircle, AlertTriangle, Info, X } from 'lucide-react';
import { getRelativeTime } from '@utils/formatters';

export default function AlertCard({ alert, onDismiss, onViewDetails }) {
  const severityConfig = {
    critical: {
      icon: AlertCircle,
      bg: 'bg-red-50',
      border: 'border-l-4 border-red-500',
      text: 'text-red-700',
      iconColor: 'text-red-500'
    },
    warning: {
      icon: AlertTriangle,
      bg: 'bg-yellow-50',
      border: 'border-l-4 border-yellow-500',
      text: 'text-yellow-700',
      iconColor: 'text-yellow-500'
    },
    info: {
      icon: Info,
      bg: 'bg-blue-50',
      border: 'border-l-4 border-blue-500',
      text: 'text-blue-700',
      iconColor: 'text-blue-500'
    }
  };
  
  const config = severityConfig[alert.severity];
  const Icon = config.icon;
  
  return (
    <div className={`${config.bg} ${config.border} rounded-lg p-4 ${alert.read ? 'opacity-60' : ''}`}>
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 ${config.iconColor} flex-shrink-0 mt-0.5`} />
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1">
              <p className={`font-medium ${config.text}`}>{alert.type}</p>
              <p className="text-sm text-gray-600 mt-1">{alert.message}</p>
              <p className="text-xs text-gray-500 mt-2">{getRelativeTime(alert.timestamp)}</p>
            </div>
            <button
              onClick={() => onDismiss(alert.id)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

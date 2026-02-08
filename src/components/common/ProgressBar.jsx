export default function ProgressBar({ current, target, label, unit, inverse = false }) {
  const calculateProgress = () => {
    if (inverse) {
      return Math.min(100, Math.max(0, (target / current) * 100));
    } else {
      return Math.min(100, Math.max(0, (current / target) * 100));
    }
  };
  
  const progress = calculateProgress();
  
  const getColor = () => {
    if (progress >= 95) return 'bg-green-500';
    if (progress >= 75) return 'bg-yellow-500';
    return 'bg-red-500';
  };
  
  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">{label}</span>
          <span className="text-sm text-gray-500">
            {current}{unit} / {target}{unit}
          </span>
        </div>
      )}
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className={`h-2.5 rounded-full transition-all duration-500 ${getColor()}`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-xs text-gray-500 mt-1 text-right">{progress.toFixed(1)}% complete</p>
    </div>
  );
}

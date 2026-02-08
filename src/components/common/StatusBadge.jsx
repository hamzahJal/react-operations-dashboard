export default function StatusBadge({ status, label }) {
  const statusConfig = {
    'on-track': {
      bg: 'bg-green-100',
      text: 'text-green-800',
      label: label || 'On Track'
    },
    'at-risk': {
      bg: 'bg-yellow-100',
      text: 'text-yellow-800',
      label: label || 'At Risk'
    },
    'off-track': {
      bg: 'bg-red-100',
      text: 'text-red-800',
      label: label || 'Off Track'
    }
  };
  
  const config = statusConfig[status] || statusConfig['on-track'];
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
      {config.label}
    </span>
  );
}

import { format } from 'date-fns';

// Format number as percentage
export function formatPercentage(value, decimals = 1) {
  return `${value.toFixed(decimals)}%`;
}

// Format seconds to minutes:seconds
export function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}m ${secs}s`;
}

// Format date
export function formatDate(date, formatString = 'MMM dd, yyyy') {
  return format(new Date(date), formatString);
}

// Format number with commas
export function formatNumber(num) {
  return new Intl.NumberFormat().format(num);
}

// Format change value with + or -
export function formatChange(value) {
  const sign = value >= 0 ? '+' : '';
  return `${sign}${value.toFixed(1)}%`;
}

// Get relative time (e.g., "2 hours ago")
export function getRelativeTime(timestamp) {
  const now = new Date();
  const date = new Date(timestamp);
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / 60000);
  
  if (diffMins < 1) return 'just now';
  if (diffMins < 60) return `${diffMins} min${diffMins > 1 ? 's' : ''} ago`;
  
  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
  
  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
}

// Calculate progress percentage for goals
export function calculateProgress(current, target, inverse = false) {
  if (inverse) {
    // For inverse goals (lower is better), calculate how close we are
    return Math.min(100, Math.max(0, (target / current) * 100));
  } else {
    // For normal goals (higher is better)
    return Math.min(100, Math.max(0, (current / target) * 100));
  }
}

// Determine goal status based on progress
export function getGoalStatus(progress) {
  if (progress >= 95) return 'on-track';
  if (progress >= 75) return 'at-risk';
  return 'off-track';
}

// Calculate trend (up, down, neutral)
export function calculateTrend(current, previous) {
  const diff = current - previous;
  if (Math.abs(diff) < 0.1) return 'neutral';
  return diff > 0 ? 'up' : 'down';
}

// Calculate average
export function calculateAverage(arr) {
  if (!arr || arr.length === 0) return 0;
  return arr.reduce((sum, val) => sum + val, 0) / arr.length;
}

// Calculate percentage change
export function calculatePercentageChange(current, previous) {
  if (previous === 0) return 0;
  return ((current - previous) / previous) * 100;
}

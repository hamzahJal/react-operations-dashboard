import { ALERT_TYPES, ERROR_CATEGORIES } from './constants';

// Generate efficiency history for trend charts
export function generateEfficiencyHistory(days = 30) {
  const data = [];
  const baseEfficiency = 85;
  
  for (let i = days; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    
    // Add randomness with slight upward trend
    const randomVariation = Math.random() * 10 - 3;
    const trendBoost = (days - i) * 0.15;
    
    data.push({
      date: date.toISOString().split('T')[0],
      efficiency: Math.min(100, Math.max(70, baseEfficiency + randomVariation + trendBoost)),
      target: 90
    });
  }
  
  return data;
}

// Generate error distribution data
export function generateErrorData() {
  return ERROR_CATEGORIES.map(category => ({
    category,
    count: Math.floor(Math.random() * 50) + 10,
    critical: Math.floor(Math.random() * 10),
    high: Math.floor(Math.random() * 15),
    medium: Math.floor(Math.random() * 20),
    low: Math.floor(Math.random() * 25)
  }));
}

// Generate SLA compliance data
export function generateSLAData(months = 6) {
  const data = [];
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  for (let i = months - 1; i >= 0; i--) {
    const date = new Date();
    date.setMonth(date.getMonth() - i);
    
    const totalTickets = Math.floor(Math.random() * 500) + 1000;
    const complianceRate = Math.random() * 10 + 90;
    const metSLA = Math.floor(totalTickets * (complianceRate / 100));
    
    data.push({
      month: monthNames[date.getMonth()],
      totalTickets,
      metSLA,
      breachedSLA: totalTickets - metSLA,
      compliancePercentage: parseFloat(complianceRate.toFixed(1))
    });
  }
  
  return data;
}

// Generate random alert
export function generateRandomAlert() {
  const alert = ALERT_TYPES[Math.floor(Math.random() * ALERT_TYPES.length)];
  
  return {
    id: crypto.randomUUID(),
    type: alert.type,
    severity: alert.severity,
    message: `${alert.type} detected in ${alert.dept}`,
    department: alert.dept,
    timestamp: new Date().toISOString(),
    read: false
  };
}

// Generate department metrics
export function generateDepartmentMetrics() {
  return {
    efficiency: Math.floor(Math.random() * 20) + 75,
    errorRate: parseFloat((Math.random() * 3 + 1).toFixed(1)),
    aht: Math.floor(Math.random() * 100) + 150,
    slaCompliance: Math.floor(Math.random() * 10) + 90
  };
}

// Assign random department
export function assignRandomDepartment() {
  const departments = [
    'Customer Service',
    'Technical Support',
    'IT Operations',
    'Quality Assurance',
    'Logistics'
  ];
  return departments[Math.floor(Math.random() * departments.length)];
}

// Generate random AHT
export function generateRandomAHT() {
  return Math.floor(Math.random() * 200) + 120; // 120-320 seconds
}

// Generate mock metrics for dashboard
export function generateMockMetrics() {
  return {
    efficiency: {
      current: Math.floor(Math.random() * 15) + 80,
      target: 90,
      trend: 'up',
      change: parseFloat((Math.random() * 10).toFixed(1))
    },
    errorRate: {
      current: parseFloat((Math.random() * 2 + 1).toFixed(1)),
      target: 2.0,
      trend: 'down',
      change: parseFloat((Math.random() * -1).toFixed(1))
    },
    aht: {
      current: Math.floor(Math.random() * 100) + 200,
      target: 180,
      trend: 'down',
      change: parseFloat((Math.random() * -20).toFixed(1))
    },
    slaCompliance: {
      current: parseFloat((Math.random() * 5 + 92).toFixed(1)),
      target: 95,
      trend: 'up',
      change: parseFloat((Math.random() * 2).toFixed(1))
    }
  };
}

// Generate goal progress data
export function generateGoalProgressData(months = 6) {
  const data = [];
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  
  for (let i = 0; i < months; i++) {
    data.push({
      month: monthNames[i],
      aht: 280 - (i * 10),
      efficiency: 80 + (i * 2),
      errorRate: 3.5 - (i * 0.3),
      sla: 90 + (i * 1)
    });
  }
  
  return data;
}

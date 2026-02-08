// Constants used throughout the application
export const ALERT_SEVERITIES = {
  CRITICAL: 'critical',
  WARNING: 'warning',
  INFO: 'info'
};

export const ALERT_TYPES = [
  { type: 'SLA Breach', severity: 'critical', dept: 'Customer Support' },
  { type: 'Error Spike', severity: 'warning', dept: 'IT Operations' },
  { type: 'High AHT', severity: 'warning', dept: 'Technical Support' },
  { type: 'System Degradation', severity: 'critical', dept: 'Infrastructure' },
  { type: 'Low Efficiency', severity: 'info', dept: 'Logistics' },
  { type: 'Performance Issue', severity: 'warning', dept: 'Customer Service' },
  { type: 'Data Sync Error', severity: 'critical', dept: 'IT Operations' }
];

export const DEPARTMENT_MAP = {
  'smartphones': 'Technical Support',
  'laptops': 'IT Operations',
  'fragrances': 'Customer Service',
  'skincare': 'Quality Assurance',
  'groceries': 'Logistics',
  'home-decoration': 'Operations',
  'furniture': 'Field Services',
  'tops': 'Retail Support',
  'womens-dresses': 'E-commerce',
  'womens-shoes': 'Warehouse'
};

export const GOAL_STATUS = {
  ON_TRACK: 'on-track',
  AT_RISK: 'at-risk',
  OFF_TRACK: 'off-track'
};

export const ERROR_CATEGORIES = [
  'System Error',
  'User Error',
  'Data Error',
  'Timeout Error',
  'Integration Error'
];

export const CHART_COLORS = {
  primary: '#3b82f6',
  success: '#10b981',
  warning: '#f59e0b',
  danger: '#ef4444',
  info: '#06b6d4',
  purple: '#8b5cf6',
  pink: '#ec4899'
};

import { create } from 'zustand';
import { generateMockMetrics, generateEfficiencyHistory } from '@utils/mockData';

const useMetricsStore = create((set, get) => ({
  // State
  metrics: {
    efficiency: { current: 87, target: 90, trend: 'up', change: 5.2 },
    errorRate: { current: 2.3, target: 2.0, trend: 'down', change: -0.5 },
    aht: { current: 245, target: 180, trend: 'down', change: -12 },
    slaCompliance: { current: 94.5, target: 95, trend: 'up', change: 1.2 }
  },
  
  efficiencyHistory: [],
  isLoading: false,
  
  // Actions
  fetchMetrics: async () => {
    set({ isLoading: true });
    
    // Simulate API call with mock data
    const mockMetrics = generateMockMetrics();
    
    setTimeout(() => {
      set({ 
        metrics: mockMetrics,
        isLoading: false 
      });
    }, 500);
  },
  
  fetchEfficiencyHistory: async (days = 30) => {
    const history = generateEfficiencyHistory(days);
    set({ efficiencyHistory: history });
  },
  
  updateMetric: (metricKey, newValue) => {
    set((state) => ({
      metrics: {
        ...state.metrics,
        [metricKey]: { ...state.metrics[metricKey], current: newValue }
      }
    }));
  }
}));

export default useMetricsStore;

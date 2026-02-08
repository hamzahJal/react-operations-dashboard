import { create } from 'zustand';
import { generateRandomAlert } from '@utils/mockData';

const useAlertsStore = create((set, get) => ({
  // State
  alerts: [],
  unreadCount: 0,
  filterSeverity: 'all',
  
  // Actions
  addAlert: (alert) => {
    set((state) => ({
      alerts: [alert, ...state.alerts],
      unreadCount: state.unreadCount + 1
    }));
  },
  
  dismissAlert: (alertId) => {
    set((state) => {
      const alert = state.alerts.find(a => a.id === alertId);
      return {
        alerts: state.alerts.filter(a => a.id !== alertId),
        unreadCount: alert && !alert.read ? Math.max(0, state.unreadCount - 1) : state.unreadCount
      };
    });
  },
  
  markAsRead: (alertId) => {
    set((state) => ({
      alerts: state.alerts.map(a => 
        a.id === alertId ? { ...a, read: true } : a
      ),
      unreadCount: Math.max(0, state.unreadCount - 1)
    }));
  },
  
  markAllAsRead: () => {
    set((state) => ({
      alerts: state.alerts.map(a => ({ ...a, read: true })),
      unreadCount: 0
    }));
  },
  
  setFilterSeverity: (severity) => {
    set({ filterSeverity: severity });
  },
  
  // Start simulating alerts
  startAlertSimulation: () => {
    const interval = setInterval(() => {
      const newAlert = generateRandomAlert();
      get().addAlert(newAlert);
    }, Math.random() * 20000 + 10000); // Random 10-30 seconds
    
    return () => clearInterval(interval);
  },
  
  // Computed state
  getFilteredAlerts: () => {
    const { alerts, filterSeverity } = get();
    if (filterSeverity === 'all') return alerts;
    return alerts.filter(a => a.severity === filterSeverity);
  }
}));

export default useAlertsStore;

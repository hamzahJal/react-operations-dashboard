import { create } from 'zustand';

const useUIStore = create((set) => ({
  // State
  sidebarOpen: true,
  dateRange: {
    start: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    end: new Date()
  },
  theme: 'light',
  
  // Actions
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  
  setDateRange: (start, end) => set({ dateRange: { start, end } }),
  
  setTheme: (theme) => set({ theme })
}));

export default useUIStore;

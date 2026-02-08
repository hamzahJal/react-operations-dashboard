import { create } from 'zustand';
import { fetchAgents } from '@services/api';

const useAgentsStore = create((set, get) => ({
  // State
  agents: [],
  searchQuery: '',
  departmentFilter: 'all',
  sortBy: 'aht',
  sortOrder: 'asc',
  isLoading: false,
  
  // Actions
  fetchAgents: async () => {
    set({ isLoading: true });
    
    try {
      const agents = await fetchAgents();
      set({ agents, isLoading: false });
    } catch (error) {
      console.error('Error fetching agents:', error);
      set({ isLoading: false });
    }
  },
  
  setSearchQuery: (query) => set({ searchQuery: query }),
  
  setDepartmentFilter: (dept) => set({ departmentFilter: dept }),
  
  setSorting: (sortBy, sortOrder) => set({ sortBy, sortOrder }),
  
  // Computed state
  getFilteredAgents: () => {
    const { agents, searchQuery, departmentFilter, sortBy, sortOrder } = get();
    
    let filtered = [...agents];
    
    // Filter by search
    if (searchQuery) {
      filtered = filtered.filter(a => 
        a.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Filter by department
    if (departmentFilter !== 'all') {
      filtered = filtered.filter(a => a.department === departmentFilter);
    }
    
    // Sort
    filtered.sort((a, b) => {
      const multiplier = sortOrder === 'asc' ? 1 : -1;
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name) * multiplier;
      }
      return (a[sortBy] - b[sortBy]) * multiplier;
    });
    
    return filtered;
  },
  
  getTopPerformers: (count = 5) => {
    return get().agents
      .slice()
      .sort((a, b) => a.aht - b.aht)
      .slice(0, count);
  },
  
  getDepartments: () => {
    const { agents } = get();
    const depts = new Set(agents.map(a => a.department));
    return ['all', ...Array.from(depts)];
  }
}));

export default useAgentsStore;

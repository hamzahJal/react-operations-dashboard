import { create } from 'zustand';
import { fetchDepartments } from '@services/api';

const useDepartmentsStore = create((set, get) => ({
  // State
  departments: [],
  selectedDepartment: null,
  isLoading: false,
  
  // Actions
  fetchDepartments: async () => {
    set({ isLoading: true });
    
    try {
      const departments = await fetchDepartments();
      set({ departments, isLoading: false });
    } catch (error) {
      console.error('Error fetching departments:', error);
      set({ isLoading: false });
    }
  },
  
  selectDepartment: (deptId) => {
    set({ selectedDepartment: deptId });
  },
  
  getDepartmentById: (id) => {
    return get().departments.find(d => d.id === id);
  },
  
  updateDepartmentMetric: (deptId, metricKey, value) => {
    set((state) => ({
      departments: state.departments.map(dept =>
        dept.id === deptId
          ? { ...dept, metrics: { ...dept.metrics, [metricKey]: value } }
          : dept
      )
    }));
  }
}));

export default useDepartmentsStore;

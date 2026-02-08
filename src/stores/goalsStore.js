import { create } from 'zustand';
import { calculateProgress, getGoalStatus } from '@utils/calculations';

const useGoalsStore = create((set, get) => ({
  // State
  goals: [
    {
      id: 1,
      name: 'Reduce Average Handling Time',
      target: 180,
      current: 245,
      unit: 'seconds',
      deadline: '2024-02-29',
      inverse: true
    },
    {
      id: 2,
      name: 'Increase Efficiency',
      target: 95,
      current: 87,
      unit: '%',
      deadline: '2024-02-29',
      inverse: false
    },
    {
      id: 3,
      name: 'Reduce Error Rate',
      target: 2.0,
      current: 2.3,
      unit: '%',
      deadline: '2024-02-29',
      inverse: true
    },
    {
      id: 4,
      name: 'SLA Compliance',
      target: 95,
      current: 94.5,
      unit: '%',
      deadline: '2024-02-29',
      inverse: false
    }
  ],
  
  // Actions
  updateGoalProgress: (goalId, newCurrent) => {
    set((state) => ({
      goals: state.goals.map(goal =>
        goal.id === goalId ? { ...goal, current: newCurrent } : goal
      )
    }));
  },
  
  // Helper methods
  getGoalProgress: (goal) => {
    return calculateProgress(goal.current, goal.target, goal.inverse);
  },
  
  getGoalStatus: (goal) => {
    const progress = calculateProgress(goal.current, goal.target, goal.inverse);
    return getGoalStatus(progress);
  },
  
  getGoalsByStatus: () => {
    const { goals } = get();
    const onTrack = [];
    const atRisk = [];
    const offTrack = [];
    
    goals.forEach(goal => {
      const progress = calculateProgress(goal.current, goal.target, goal.inverse);
      const status = getGoalStatus(progress);
      
      if (status === 'on-track') onTrack.push(goal);
      else if (status === 'at-risk') atRisk.push(goal);
      else offTrack.push(goal);
    });
    
    return { onTrack, atRisk, offTrack };
  }
}));

export default useGoalsStore;

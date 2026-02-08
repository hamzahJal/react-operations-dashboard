import useGoalsStore from '@stores/goalsStore';
import PageHeader from '@components/common/PageHeader';
import ProgressBar from '@components/common/ProgressBar';
import StatusBadge from '@components/common/StatusBadge';
import GoalTrendChart from '@components/charts/GoalTrendChart';
import { Target } from 'lucide-react';
import { generateGoalProgressData } from '@utils/mockData';

export default function Goals() {
  const { goals, getGoalProgress, getGoalStatus } = useGoalsStore();
  
  const progressData = generateGoalProgressData();
  
  return (
    <div className="space-y-6">
      <PageHeader
        title="Goals"
        subtitle="Track monthly operational targets and progress"
      />
      
      {/* Goal Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {goals.map(goal => {
          const progress = getGoalProgress(goal);
          const status = getGoalStatus(goal);
          
          return (
            <div key={goal.id} className="card">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <Target className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{goal.name}</h3>
                    <p className="text-sm text-gray-500">Due: {goal.deadline}</p>
                  </div>
                </div>
                <StatusBadge status={status} />
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-600">Current</p>
                    <p className="text-2xl font-bold">{goal.current}{goal.unit}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Target</p>
                    <p className="text-2xl font-bold">{goal.target}{goal.unit}</p>
                  </div>
                </div>
                
                <ProgressBar
                  current={goal.current}
                  target={goal.target}
                  unit={goal.unit}
                  inverse={goal.inverse}
                />
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Goal Trends */}
      <GoalTrendChart data={progressData} />
      
      {/* Goal Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card text-center">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
            <span className="text-2xl font-bold text-green-600">
              {goals.filter(g => getGoalStatus(g) === 'on-track').length}
            </span>
          </div>
          <p className="text-sm font-medium text-gray-600">On Track</p>
        </div>
        
        <div className="card text-center">
          <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-3">
            <span className="text-2xl font-bold text-yellow-600">
              {goals.filter(g => getGoalStatus(g) === 'at-risk').length}
            </span>
          </div>
          <p className="text-sm font-medium text-gray-600">At Risk</p>
        </div>
        
        <div className="card text-center">
          <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-3">
            <span className="text-2xl font-bold text-red-600">
              {goals.filter(g => getGoalStatus(g) === 'off-track').length}
            </span>
          </div>
          <p className="text-sm font-medium text-gray-600">Off Track</p>
        </div>
      </div>
    </div>
  );
}

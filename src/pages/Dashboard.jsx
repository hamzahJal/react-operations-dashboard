import { useEffect } from 'react';
import { Activity, AlertTriangle, Clock, CheckCircle } from 'lucide-react';
import useMetricsStore from '@stores/metricsStore';
import useDepartmentsStore from '@stores/departmentsStore';
import MetricCard from '@components/common/MetricCard';
import EfficiencyChart from '@components/charts/EfficiencyChart';
import ErrorDistributionChart from '@components/charts/ErrorDistributionChart';
import DepartmentAHTChart from '@components/charts/DepartmentAHTChart';
import SLAComplianceChart from '@components/charts/SLAComplianceChart';
import AlertsPanel from '@components/alerts/AlertsPanel';
import LoadingSpinner from '@components/common/LoadingSpinner';
import { generateErrorData, generateSLAData } from '@utils/mockData';
import { formatPercentage, formatTime } from '@utils/formatters';

export default function Dashboard() {
  const { metrics, efficiencyHistory, isLoading, fetchMetrics, fetchEfficiencyHistory } = useMetricsStore();
  const { departments, fetchDepartments, isLoading: deptLoading } = useDepartmentsStore();
  
  useEffect(() => {
    fetchMetrics();
    fetchEfficiencyHistory();
    fetchDepartments();
  }, [fetchMetrics, fetchEfficiencyHistory, fetchDepartments]);
  
  const errorData = generateErrorData();
  const slaData = generateSLAData();
  
  if (isLoading || deptLoading) {
    return <LoadingSpinner fullscreen />;
  }
  
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Efficiency"
          value={formatPercentage(metrics.efficiency.current)}
          change={`${metrics.efficiency.change > 0 ? '+' : ''}${metrics.efficiency.change.toFixed(1)}%`}
          trend={metrics.efficiency.trend}
          icon={Activity}
        />
        <MetricCard
          title="Error Rate"
          value={formatPercentage(metrics.errorRate.current)}
          change={`${metrics.errorRate.change.toFixed(1)}%`}
          trend={metrics.errorRate.trend}
          icon={AlertTriangle}
        />
        <MetricCard
          title="Avg Handling Time"
          value={formatTime(metrics.aht.current)}
          change={`${metrics.aht.change.toFixed(1)}%`}
          trend={metrics.aht.trend}
          icon={Clock}
        />
        <MetricCard
          title="SLA Compliance"
          value={formatPercentage(metrics.slaCompliance.current)}
          change={`${metrics.slaCompliance.change > 0 ? '+' : ''}${metrics.slaCompliance.change.toFixed(1)}%`}
          trend={metrics.slaCompliance.trend}
          icon={CheckCircle}
        />
      </div>
      
      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EfficiencyChart data={efficiencyHistory} />
        <ErrorDistributionChart data={errorData} />
      </div>
      
      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {departments.length > 0 && <DepartmentAHTChart data={departments} />}
        <SLAComplianceChart data={slaData} />
      </div>
      
      {/* Recent Alerts */}
      <AlertsPanel />
    </div>
  );
}

import { useEffect } from 'react';
import useDepartmentsStore from '@stores/departmentsStore';
import PageHeader from '@components/common/PageHeader';
import MetricCard from '@components/common/MetricCard';
import LoadingSpinner from '@components/common/LoadingSpinner';
import { formatPercentage } from '@utils/formatters';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import ChartContainer from '@components/common/ChartContainer';

export default function Departments() {
  const { departments, isLoading, fetchDepartments } = useDepartmentsStore();
  
  useEffect(() => {
    fetchDepartments();
  }, [fetchDepartments]);
  
  if (isLoading) {
    return <LoadingSpinner fullscreen />;
  }
  
  // Prepare radar chart data
  const radarData = [
    { metric: 'Efficiency', ...Object.fromEntries(departments.map(d => [d.id, d.metrics.efficiency])) },
    { metric: 'SLA', ...Object.fromEntries(departments.map(d => [d.id, d.metrics.slaCompliance])) },
    { metric: 'Quality', ...Object.fromEntries(departments.map(d => [d.id, 100 - d.metrics.errorRate * 10])) },
    { metric: 'Speed', ...Object.fromEntries(departments.map(d => [d.id, Math.max(0, 100 - (d.metrics.aht / 3))])) }
  ];
  
  const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6'];
  
  return (
    <div className="space-y-6">
      <PageHeader
        title="Departments"
        subtitle="Performance overview across all departments"
      />
      
      {/* Department Performance Comparison */}
      <ChartContainer title="Department Performance Comparison" subtitle="Multi-dimensional view">
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart data={radarData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="metric" />
            <PolarRadiusAxis domain={[0, 100]} />
            {departments.map((dept, idx) => (
              <Radar
                key={dept.id}
                name={dept.name}
                dataKey={dept.id}
                stroke={colors[idx % colors.length]}
                fill={colors[idx % colors.length]}
                fillOpacity={0.3}
              />
            ))}
            <Legend />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>
      </ChartContainer>
      
      {/* Department Cards */}
      <div className="grid grid-cols-1 gap-6">
        {departments.map(dept => (
          <div key={dept.id} className="card">
            <h3 className="text-lg font-semibold mb-4">{dept.name}</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <MetricCard
                title="Efficiency"
                value={formatPercentage(dept.metrics.efficiency)}
                trend={dept.metrics.efficiency >= 85 ? 'up' : 'down'}
              />
              <MetricCard
                title="Error Rate"
                value={formatPercentage(dept.metrics.errorRate)}
                trend={dept.metrics.errorRate <= 2.5 ? 'up' : 'down'}
              />
              <MetricCard
                title="Avg Handling Time"
                value={`${dept.metrics.aht}s`}
                trend={dept.metrics.aht <= 200 ? 'up' : 'down'}
              />
              <MetricCard
                title="SLA Compliance"
                value={formatPercentage(dept.metrics.slaCompliance)}
                trend={dept.metrics.slaCompliance >= 95 ? 'up' : 'down'}
              />
            </div>
          </div>
        ))}
      </div>
      
      {/* Department Table */}
      <div className="card overflow-x-auto">
        <h3 className="text-lg font-semibold mb-4">Department Summary</h3>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Department
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Efficiency
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Error Rate
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                AHT
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                SLA
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {departments.map(dept => (
              <tr key={dept.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {dept.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {formatPercentage(dept.metrics.efficiency)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {formatPercentage(dept.metrics.errorRate)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {dept.metrics.aht}s
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {formatPercentage(dept.metrics.slaCompliance)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

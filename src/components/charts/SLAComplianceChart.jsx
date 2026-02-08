import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ChartContainer from '@components/common/ChartContainer';
import { CHART_COLORS } from '@utils/constants';

export default function SLAComplianceChart({ data }) {
  // Get the latest month's data
  const latestData = data[data.length - 1] || { metSLA: 0, breachedSLA: 0 };
  
  const chartData = [
    { name: 'Met SLA', value: latestData.metSLA },
    { name: 'Breached SLA', value: latestData.breachedSLA }
  ];
  
  const COLORS = [CHART_COLORS.success, CHART_COLORS.danger];
  
  return (
    <ChartContainer 
      title="SLA Compliance" 
      subtitle={`${latestData.compliancePercentage}% compliance rate`}
    >
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}

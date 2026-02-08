import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ChartContainer from '@components/common/ChartContainer';
import { CHART_COLORS } from '@utils/constants';

export default function ErrorDistributionChart({ data }) {
  const COLORS = [CHART_COLORS.danger, CHART_COLORS.warning, CHART_COLORS.info, CHART_COLORS.purple, CHART_COLORS.pink];
  
  const chartData = data.map(item => ({
    name: item.category,
    value: item.count
  }));
  
  return (
    <ChartContainer title="Error Distribution" subtitle="By category">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
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

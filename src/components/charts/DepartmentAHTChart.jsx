import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import ChartContainer from '@components/common/ChartContainer';
import { CHART_COLORS } from '@utils/constants';

export default function DepartmentAHTChart({ data }) {
  const chartData = data
    .map(dept => ({
      name: dept.name,
      aht: dept.metrics.aht
    }))
    .sort((a, b) => a.aht - b.aht);
  
  return (
    <ChartContainer title="Average Handling Time by Department" subtitle="Lower is better">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData} layout="horizontal">
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis type="number" tick={{ fontSize: 12 }} />
          <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} width={150} />
          <Tooltip formatter={(value) => `${value}s`} />
          <Bar dataKey="aht" fill={CHART_COLORS.primary} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}

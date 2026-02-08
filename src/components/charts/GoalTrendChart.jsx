import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ChartContainer from '@components/common/ChartContainer';
import { CHART_COLORS } from '@utils/constants';

export default function GoalTrendChart({ data }) {
  return (
    <ChartContainer title="Goal Progress Over Time" subtitle="Monthly trends">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="efficiency" 
            stroke={CHART_COLORS.success} 
            strokeWidth={2}
            name="Efficiency (%)"
          />
          <Line 
            type="monotone" 
            dataKey="sla" 
            stroke={CHART_COLORS.primary} 
            strokeWidth={2}
            name="SLA (%)"
          />
          <Line 
            type="monotone" 
            dataKey="aht" 
            stroke={CHART_COLORS.warning} 
            strokeWidth={2}
            name="AHT (seconds)"
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}

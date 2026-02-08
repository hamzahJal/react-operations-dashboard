import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ChartContainer from '@components/common/ChartContainer';

export default function EfficiencyChart({ data }) {
  return (
    <ChartContainer title="Efficiency Trends" subtitle="Last 30 days">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="date" 
            tick={{ fontSize: 12 }}
            tickFormatter={(value) => {
              const date = new Date(value);
              return `${date.getMonth() + 1}/${date.getDate()}`;
            }}
          />
          <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} />
          <Tooltip />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="efficiency" 
            stroke="#10b981" 
            strokeWidth={2}
            name="Efficiency (%)"
            dot={{ fill: '#10b981', r: 3 }}
          />
          <Line 
            type="monotone" 
            dataKey="target" 
            stroke="#ef4444" 
            strokeWidth={2}
            strokeDasharray="5 5"
            name="Target (%)"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Healthy", value: 180, color: "hsl(142, 71%, 45%)" },
  { name: "Warning", value: 52, color: "hsl(38, 92%, 50%)" },
  { name: "Critical", value: 15, color: "hsl(0, 72%, 51%)" },
  { name: "Offline", value: 13, color: "hsl(215, 15%, 50%)" },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="glass-card p-2 border border-border text-xs">
      <span style={{ color: payload[0].payload.color }}>{payload[0].name}: {payload[0].value}</span>
    </div>
  );
};

export default function RiskDistribution() {
  return (
    <div className="glass-card p-4 space-y-4">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Fleet Status</h3>
      <div className="h-48 flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} cx="50%" cy="50%" innerRadius={50} outerRadius={75} paddingAngle={3} dataKey="value" stroke="none">
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-2 text-xs">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
            <span className="text-muted-foreground">{item.name}</span>
            <span className="font-mono text-foreground ml-auto">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

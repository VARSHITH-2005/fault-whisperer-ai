import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { date: "Feb 1", actual: 3, predicted: 4 },
  { date: "Feb 4", actual: 5, predicted: 5 },
  { date: "Feb 7", actual: 2, predicted: 3 },
  { date: "Feb 10", actual: 7, predicted: 6 },
  { date: "Feb 13", actual: 4, predicted: 5 },
  { date: "Feb 16", actual: 6, predicted: 7 },
  { date: "Feb 19", actual: 3, predicted: 4 },
  { date: "Feb 21", actual: null, predicted: 7 },
  { date: "Feb 24", actual: null, predicted: 5 },
  { date: "Feb 27", actual: null, predicted: 8 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload) return null;
  return (
    <div className="glass-card p-3 border border-border text-xs space-y-1">
      <p className="font-mono text-foreground">{label}</p>
      {payload.map((entry: any) => (
        <p key={entry.name} style={{ color: entry.color }}>
          {entry.name === "actual" ? "Actual Faults" : "Predicted"}: {entry.value ?? "—"}
        </p>
      ))}
    </div>
  );
};

export default function FaultTrendChart() {
  return (
    <div className="glass-card p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Fault Trend & Prediction</h3>
        <div className="flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-primary" /> Actual
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-destructive" /> Predicted
          </span>
        </div>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 5, bottom: 5, left: -20 }}>
            <defs>
              <linearGradient id="gradPrimary" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(207, 90%, 54%)" stopOpacity={0.3} />
                <stop offset="100%" stopColor="hsl(207, 90%, 54%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="gradDestructive" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(0, 72%, 51%)" stopOpacity={0.3} />
                <stop offset="100%" stopColor="hsl(0, 72%, 51%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 18%)" />
            <XAxis dataKey="date" tick={{ fontSize: 11, fill: "hsl(215, 15%, 50%)" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: "hsl(215, 15%, 50%)" }} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="actual" stroke="hsl(207, 90%, 54%)" fill="url(#gradPrimary)" strokeWidth={2} connectNulls={false} />
            <Area type="monotone" dataKey="predicted" stroke="hsl(0, 72%, 51%)" fill="url(#gradDestructive)" strokeWidth={2} strokeDasharray="5 5" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

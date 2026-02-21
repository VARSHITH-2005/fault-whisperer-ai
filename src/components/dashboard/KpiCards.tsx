import { Activity, AlertTriangle, Cpu, TrendingUp } from "lucide-react";

interface KpiCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
  trend?: string;
  variant?: "default" | "warning" | "destructive" | "success";
}

const variantStyles = {
  default: "text-primary glow-primary",
  warning: "text-warning",
  destructive: "text-destructive",
  success: "text-success",
};

function KpiCard({ title, value, subtitle, icon, trend, variant = "default" }: KpiCardProps) {
  return (
    <div className="glass-card p-5 space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{title}</span>
        <div className={variantStyles[variant]}>{icon}</div>
      </div>
      <div className="space-y-1">
        <p className={`text-3xl font-bold font-mono ${variantStyles[variant]}`}>{value}</p>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">{subtitle}</span>
          {trend && (
            <span className="text-xs font-mono text-success flex items-center gap-0.5">
              <TrendingUp className="w-3 h-3" />
              {trend}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function KpiCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <KpiCard
        title="Active Machines"
        value="247"
        subtitle="of 260 total"
        icon={<Cpu className="w-5 h-5" />}
        trend="+2.1%"
        variant="default"
      />
      <KpiCard
        title="Active Alerts"
        value="18"
        subtitle="3 critical"
        icon={<AlertTriangle className="w-5 h-5" />}
        variant="warning"
      />
      <KpiCard
        title="Predicted Failures"
        value="7"
        subtitle="next 72 hours"
        icon={<Activity className="w-5 h-5" />}
        variant="destructive"
      />
      <KpiCard
        title="Avg Uptime"
        value="94.7%"
        subtitle="last 30 days"
        icon={<TrendingUp className="w-5 h-5" />}
        trend="+1.3%"
        variant="success"
      />
    </div>
  );
}

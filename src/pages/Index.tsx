import { Activity, Settings } from "lucide-react";
import KpiCards from "@/components/dashboard/KpiCards";
import EquipmentTable from "@/components/dashboard/EquipmentTable";
import FaultTrendChart from "@/components/dashboard/FaultTrendChart";
import MaintenanceLog from "@/components/dashboard/MaintenanceLog";
import RiskDistribution from "@/components/dashboard/RiskDistribution";

const Index = () => {
  return (
    <div className="min-h-screen bg-background grid-pattern">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-primary/20 flex items-center justify-center glow-primary">
              <Activity className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h1 className="text-sm font-bold tracking-tight text-foreground">MaintainIQ</h1>
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Fault Prediction Engine</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-muted-foreground">Plant: Detroit Assembly</span>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-success status-pulse" />
              <span className="text-xs text-success font-mono">LIVE</span>
            </div>
            <button className="p-2 rounded-md hover:bg-accent transition-colors">
              <Settings className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="max-w-[1400px] mx-auto px-6 py-6 space-y-6">
        <KpiCards />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <FaultTrendChart />
          </div>
          <RiskDistribution />
        </div>

        <EquipmentTable />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <MaintenanceLog />
          <div className="glass-card p-4 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">AI Insights</h3>
            <div className="space-y-3">
              {[
                { severity: "destructive", title: "STM-009 bearing failure imminent", desc: "Pattern matches historical failure mode F-23. Recommend immediate inspection." },
                { severity: "warning", title: "ROB-014 servo degradation trend", desc: "Torque variance increasing 12% week-over-week. Schedule preventive replacement." },
                { severity: "default", title: "Line 1 efficiency improving", desc: "Post-maintenance uptime increased 3.2% this month. Predictive scheduling validated." },
              ].map((insight, i) => (
                <div key={i} className={`p-3 rounded-md border ${
                  insight.severity === "destructive" ? "border-destructive/30 bg-destructive/5" :
                  insight.severity === "warning" ? "border-warning/30 bg-warning/5" :
                  "border-border bg-accent/30"
                }`}>
                  <p className={`text-sm font-medium ${
                    insight.severity === "destructive" ? "text-destructive" :
                    insight.severity === "warning" ? "text-warning" :
                    "text-primary"
                  }`}>{insight.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{insight.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;

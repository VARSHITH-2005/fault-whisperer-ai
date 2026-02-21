import { Badge } from "@/components/ui/badge";

interface Equipment {
  id: string;
  name: string;
  line: string;
  riskScore: number;
  status: "healthy" | "warning" | "critical";
  lastMaintenance: string;
  predictedFailure: string | null;
}

const equipment: Equipment[] = [
  { id: "CNC-001", name: "CNC Milling Unit A", line: "Line 1", riskScore: 12, status: "healthy", lastMaintenance: "2026-02-18", predictedFailure: null },
  { id: "ROB-014", name: "Welding Robot #14", line: "Line 3", riskScore: 78, status: "critical", lastMaintenance: "2026-01-29", predictedFailure: "2026-02-23" },
  { id: "PRS-007", name: "Hydraulic Press B", line: "Line 2", riskScore: 45, status: "warning", lastMaintenance: "2026-02-10", predictedFailure: "2026-02-28" },
  { id: "CNV-022", name: "Conveyor Motor #22", line: "Line 1", riskScore: 8, status: "healthy", lastMaintenance: "2026-02-15", predictedFailure: null },
  { id: "SPR-003", name: "Paint Sprayer C", line: "Line 4", riskScore: 62, status: "warning", lastMaintenance: "2026-02-05", predictedFailure: "2026-03-01" },
  { id: "STM-009", name: "Stamping Machine #9", line: "Line 2", riskScore: 91, status: "critical", lastMaintenance: "2026-01-20", predictedFailure: "2026-02-22" },
  { id: "DRL-011", name: "Drill Press Unit D", line: "Line 3", riskScore: 23, status: "healthy", lastMaintenance: "2026-02-14", predictedFailure: null },
];

const statusConfig = {
  healthy: { label: "Healthy", className: "bg-success/15 text-success border-success/30" },
  warning: { label: "Warning", className: "bg-warning/15 text-warning border-warning/30" },
  critical: { label: "Critical", className: "bg-destructive/15 text-destructive border-destructive/30 status-pulse" },
};

function RiskBar({ score }: { score: number }) {
  const color = score >= 70 ? "bg-destructive" : score >= 40 ? "bg-warning" : "bg-success";
  return (
    <div className="flex items-center gap-2">
      <div className="w-16 h-1.5 rounded-full bg-muted overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${score}%` }} />
      </div>
      <span className="text-xs font-mono text-muted-foreground">{score}</span>
    </div>
  );
}

export default function EquipmentTable() {
  return (
    <div className="glass-card overflow-hidden">
      <div className="p-4 border-b border-border">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Equipment Health</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-xs text-muted-foreground uppercase tracking-wider">
              <th className="text-left p-3 font-medium">ID</th>
              <th className="text-left p-3 font-medium">Equipment</th>
              <th className="text-left p-3 font-medium">Line</th>
              <th className="text-left p-3 font-medium">Risk</th>
              <th className="text-left p-3 font-medium">Status</th>
              <th className="text-left p-3 font-medium">Last Service</th>
              <th className="text-left p-3 font-medium">Predicted Failure</th>
            </tr>
          </thead>
          <tbody>
            {equipment.map((eq) => (
              <tr key={eq.id} className="border-b border-border/50 hover:bg-accent/50 transition-colors">
                <td className="p-3 font-mono text-primary text-xs">{eq.id}</td>
                <td className="p-3 text-foreground">{eq.name}</td>
                <td className="p-3 text-muted-foreground">{eq.line}</td>
                <td className="p-3"><RiskBar score={eq.riskScore} /></td>
                <td className="p-3">
                  <Badge variant="outline" className={statusConfig[eq.status].className}>
                    {statusConfig[eq.status].label}
                  </Badge>
                </td>
                <td className="p-3 font-mono text-xs text-muted-foreground">{eq.lastMaintenance}</td>
                <td className="p-3 font-mono text-xs">
                  {eq.predictedFailure ? (
                    <span className="text-destructive">{eq.predictedFailure}</span>
                  ) : (
                    <span className="text-muted-foreground">—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

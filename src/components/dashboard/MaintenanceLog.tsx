import { Wrench, AlertTriangle, CheckCircle, Clock } from "lucide-react";

interface LogEntry {
  id: number;
  timestamp: string;
  equipmentId: string;
  type: "repair" | "inspection" | "alert" | "completed";
  message: string;
}

const logs: LogEntry[] = [
  { id: 1, timestamp: "14:32", equipmentId: "STM-009", type: "alert", message: "Vibration anomaly detected — bearing wear suspected" },
  { id: 2, timestamp: "13:15", equipmentId: "ROB-014", type: "repair", message: "Servo motor replacement scheduled" },
  { id: 3, timestamp: "11:48", equipmentId: "CNC-001", type: "completed", message: "Coolant system flush completed successfully" },
  { id: 4, timestamp: "10:22", equipmentId: "PRS-007", type: "inspection", message: "Hydraulic line pressure check — within tolerance" },
  { id: 5, timestamp: "09:05", equipmentId: "SPR-003", type: "alert", message: "Nozzle clog frequency increasing — 3 events in 24h" },
  { id: 6, timestamp: "08:30", equipmentId: "CNV-022", type: "completed", message: "Belt tension adjustment completed" },
];

const typeConfig = {
  alert: { icon: AlertTriangle, color: "text-warning" },
  repair: { icon: Wrench, color: "text-primary" },
  completed: { icon: CheckCircle, color: "text-success" },
  inspection: { icon: Clock, color: "text-muted-foreground" },
};

export default function MaintenanceLog() {
  return (
    <div className="glass-card p-4 space-y-4">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Recent Maintenance Logs</h3>
      <div className="space-y-1">
        {logs.map((log) => {
          const config = typeConfig[log.type];
          const Icon = config.icon;
          return (
            <div key={log.id} className="flex items-start gap-3 p-2.5 rounded-md hover:bg-accent/50 transition-colors">
              <Icon className={`w-4 h-4 mt-0.5 shrink-0 ${config.color}`} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-primary">{log.equipmentId}</span>
                  <span className="text-xs text-muted-foreground">{log.timestamp}</span>
                </div>
                <p className="text-sm text-foreground/80 truncate">{log.message}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

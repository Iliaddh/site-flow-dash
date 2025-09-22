import { cn } from "@/lib/utils";
import { MachineStatus } from "@/data/mockData";

interface StatusBadgeProps {
  status: MachineStatus;
  className?: string;
}

const statusConfig = {
  running: {
    label: "Running",
    className: "bg-status-running text-white",
    icon: "●"
  },
  idle: {
    label: "Idle", 
    className: "bg-status-idle text-white",
    icon: "◐"
  },
  maintenance: {
    label: "Maintenance",
    className: "bg-status-maintenance text-white", 
    icon: "⚠"
  },
  offline: {
    label: "Offline",
    className: "bg-status-offline text-white",
    icon: "○"
  },
  error: {
    label: "Error",
    className: "bg-status-error text-white",
    icon: "✕"
  }
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status];
  
  return (
    <div className={cn(
      "inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium",
      config.className,
      className
    )}>
      <span className="text-[10px]">{config.icon}</span>
      {config.label}
    </div>
  );
}
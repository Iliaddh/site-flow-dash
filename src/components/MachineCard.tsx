import { Card } from "@/components/ui/card";
import { StatusBadge } from "./StatusBadge";
import { Machine } from "@/data/mockData";
import { formatDistanceToNow } from "date-fns";

interface MachineCardProps {
  machine: Machine;
  onClick: () => void;
}

export function MachineCard({ machine, onClick }: MachineCardProps) {
  const lastUpdated = formatDistanceToNow(new Date(machine.lastUpdated), { addSuffix: true });

  return (
    <Card 
      className="p-4 hover:shadow-md transition-shadow cursor-pointer border-dashboard-border"
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="font-semibold text-card-foreground">{machine.name}</h4>
          <p className="text-sm text-muted-foreground">{machine.type}</p>
        </div>
        <StatusBadge status={machine.status} />
      </div>
      
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <span className="text-muted-foreground">Efficiency:</span>
          <div className="font-medium">{machine.performance.efficiency}%</div>
        </div>
        <div>
          <span className="text-muted-foreground">Uptime:</span>
          <div className="font-medium">{machine.performance.uptime}%</div>
        </div>
      </div>
      
      <div className="mt-3 pt-3 border-t border-dashboard-border">
        <p className="text-xs text-muted-foreground">
          Updated {lastUpdated}
        </p>
      </div>
    </Card>
  );
}
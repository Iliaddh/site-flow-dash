import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Machine } from "@/data/mockData";
import { StatusBadge } from "./StatusBadge";
import { formatDistanceToNow } from "date-fns";
import { Gauge, Thermometer, Wrench, Hash } from "lucide-react";

interface MachineDetailModalProps {
  machine: Machine | null;
  isOpen: boolean;
  onClose: () => void;
}

export function MachineDetailModal({ machine, isOpen, onClose }: MachineDetailModalProps) {
  if (!machine) return null;

  const lastUpdated = formatDistanceToNow(new Date(machine.lastUpdated), { addSuffix: true });

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>{machine.name}</span>
            <StatusBadge status={machine.status} />
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Basic Info */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">Machine Type</label>
              <p className="text-card-foreground">{machine.type}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Serial Number</label>
              <p className="text-card-foreground flex items-center gap-1">
                <Hash className="h-3 w-3" />
                {machine.serialNumber}
              </p>
            </div>
          </div>

          {/* Performance Metrics */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Gauge className="h-5 w-5" />
              Performance Metrics
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Efficiency</span>
                    <span className="text-lg font-semibold">{machine.performance.efficiency}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-metric-positive h-2 rounded-full transition-all"
                      style={{ width: `${machine.performance.efficiency}%` }}
                    />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Uptime</span>
                    <span className="text-lg font-semibold">{machine.performance.uptime}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all"
                      style={{ width: `${machine.performance.uptime}%` }}
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-dashboard-surface rounded-lg">
                  <div className="flex items-center gap-2">
                    <Thermometer className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Temperature</span>
                  </div>
                  <span className="text-lg font-semibold">{machine.performance.temperature}°C</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-dashboard-surface rounded-lg">
                  <div className="flex items-center gap-2">
                    <Wrench className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Pressure</span>
                  </div>
                  <span className="text-lg font-semibold">{machine.performance.pressure} PSI</span>
                </div>
              </div>
            </div>
          </div>

          {/* Last Updated */}
          <div className="pt-4 border-t border-dashboard-border">
            <p className="text-sm text-muted-foreground">
              Last updated {lastUpdated}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
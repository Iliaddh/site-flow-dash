import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight, Users } from "lucide-react";
import { Department, Machine } from "@/data/mockData";
import { MachineCard } from "./MachineCard";
import { StatusBadge } from "./StatusBadge";

interface DepartmentCardProps {
  department: Department;
  onMachineClick: (machine: Machine) => void;
  filteredMachines: Machine[];
}

export function DepartmentCard({ department, onMachineClick, filteredMachines }: DepartmentCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const statusCounts = filteredMachines.reduce((acc, machine) => {
    acc[machine.status] = (acc[machine.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <Card className="border-dashboard-border">
      <div className="p-4">
        <Button
          variant="ghost"
          className="w-full justify-between p-0 h-auto hover:bg-transparent"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center gap-3">
            {isExpanded ? (
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            ) : (
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            )}
            <div className="text-left">
              <h3 className="font-semibold text-card-foreground">{department.name}</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="h-3 w-3" />
                <span>{department.manager}</span>
                <span>•</span>
                <span>{filteredMachines.length} machines</span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-1">
            {Object.entries(statusCounts).map(([status, count]) => (
              <div key={status} className="flex items-center gap-1">
                <StatusBadge status={status as any} />
                <span className="text-xs text-muted-foreground">×{count}</span>
              </div>
            ))}
          </div>
        </Button>
      </div>
      
      {isExpanded && (
        <div className="px-4 pb-4">
          <div className="grid gap-3">
            {filteredMachines.map((machine) => (
              <MachineCard
                key={machine.id}
                machine={machine}
                onClick={() => onMachineClick(machine)}
              />
            ))}
          </div>
        </div>
      )}
    </Card>
  );
}
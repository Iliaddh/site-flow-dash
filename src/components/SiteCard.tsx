import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight, MapPin, Building2 } from "lucide-react";
import { Site, Machine, MachineStatus } from "@/data/mockData";
import { DepartmentCard } from "./DepartmentCard";

interface SiteCardProps {
  site: Site;
  onMachineClick: (machine: Machine) => void;
  statusFilter: MachineStatus | 'all';
}

export function SiteCard({ site, onMachineClick, statusFilter }: SiteCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const allMachines = site.departments.flatMap(dept => dept.machines);
  const filteredMachines = statusFilter === 'all' 
    ? allMachines 
    : allMachines.filter(machine => machine.status === statusFilter);
  
  const statusCounts = allMachines.reduce((acc, machine) => {
    acc[machine.status] = (acc[machine.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const runningCount = statusCounts.running || 0;
  const totalCount = allMachines.length;

  return (
    <Card className="border-dashboard-border">
      <div className="p-6">
        <Button
          variant="ghost"
          className="w-full justify-between p-0 h-auto hover:bg-transparent"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center gap-4">
            {isExpanded ? (
              <ChevronDown className="h-5 w-5 text-muted-foreground" />
            ) : (
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            )}
            <div className="text-left">
              <h2 className="text-lg font-semibold text-card-foreground flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                {site.name}
              </h2>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-3 w-3" />
                <span>{site.location}</span>
                <span>•</span>
                <span>{site.departments.length} departments</span>
              </div>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-lg font-semibold text-card-foreground">
              {runningCount}/{totalCount}
            </div>
            <div className="text-sm text-muted-foreground">machines running</div>
          </div>
        </Button>
      </div>
      
      {isExpanded && (
        <div className="px-6 pb-6">
          <div className="space-y-4">
            {site.departments.map((department) => {
              const deptFilteredMachines = statusFilter === 'all' 
                ? department.machines 
                : department.machines.filter(machine => machine.status === statusFilter);
              
              if (deptFilteredMachines.length === 0 && statusFilter !== 'all') {
                return null;
              }
              
              return (
                <DepartmentCard
                  key={department.id}
                  department={department}
                  onMachineClick={onMachineClick}
                  filteredMachines={deptFilteredMachines}
                />
              );
            })}
          </div>
        </div>
      )}
    </Card>
  );
}
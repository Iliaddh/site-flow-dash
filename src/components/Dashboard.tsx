import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Activity, AlertTriangle, CheckCircle, Clock } from "lucide-react";
import { mockData, Machine, MachineStatus, Site } from "@/data/mockData";
import { SiteCard } from "./SiteCard";
import { MachineDetailModal } from "./MachineDetailModal";

export function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<MachineStatus | 'all'>('all');
  const [selectedMachine, setSelectedMachine] = useState<Machine | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  const allMachines = useMemo(() => {
    return mockData.flatMap(site => 
      site.departments.flatMap(dept => dept.machines)
    );
  }, []);

  const filteredSites = useMemo(() => {
    return mockData.map(site => ({
      ...site,
      departments: site.departments.map(dept => ({
        ...dept,
        machines: dept.machines.filter(machine => {
          const matchesSearch = machine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              machine.type.toLowerCase().includes(searchTerm.toLowerCase());
          const matchesStatus = statusFilter === 'all' || machine.status === statusFilter;
          return matchesSearch && matchesStatus;
        })
      })).filter(dept => dept.machines.length > 0)
    })).filter(site => site.departments.length > 0);
  }, [searchTerm, statusFilter]);

  const statusCounts = useMemo(() => {
    return allMachines.reduce((acc, machine) => {
      acc[machine.status] = (acc[machine.status] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  }, [allMachines]);

  const handleMachineClick = (machine: Machine) => {
    setSelectedMachine(machine);
    setIsDetailModalOpen(true);
  };

  const totalMachines = allMachines.length;
  const runningMachines = statusCounts.running || 0;
  const offlineMachines = (statusCounts.offline || 0) + (statusCounts.error || 0);
  const maintenanceMachines = statusCounts.maintenance || 0;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-dashboard-border">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-card-foreground">Machine Monitoring Dashboard</h1>
              <p className="text-muted-foreground mt-1">Real-time overview of manufacturing operations</p>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Live Status</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 border-dashboard-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Machines</p>
                <p className="text-2xl font-bold text-card-foreground">{totalMachines}</p>
              </div>
              <Activity className="h-8 w-8 text-primary" />
            </div>
          </Card>
          
          <Card className="p-4 border-dashboard-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Running</p>
                <p className="text-2xl font-bold text-status-running">{runningMachines}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-status-running" />
            </div>
          </Card>
          
          <Card className="p-4 border-dashboard-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Maintenance</p>
                <p className="text-2xl font-bold text-status-maintenance">{maintenanceMachines}</p>
              </div>
              <Clock className="h-8 w-8 text-status-maintenance" />
            </div>
          </Card>
          
          <Card className="p-4 border-dashboard-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Offline/Error</p>
                <p className="text-2xl font-bold text-status-error">{offlineMachines}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-status-error" />
            </div>
          </Card>
        </div>

        {/* Filters */}
        <div className="flex gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search machines..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={statusFilter} onValueChange={(value) => setStatusFilter(value as MachineStatus | 'all')}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="running">Running</SelectItem>
              <SelectItem value="idle">Idle</SelectItem>
              <SelectItem value="maintenance">Maintenance</SelectItem>
              <SelectItem value="offline">Offline</SelectItem>
              <SelectItem value="error">Error</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Sites */}
        <div className="space-y-6">
          {filteredSites.length === 0 ? (
            <Card className="p-8 text-center border-dashboard-border">
              <p className="text-muted-foreground">No machines found matching your search criteria.</p>
            </Card>
          ) : (
            filteredSites.map((site) => (
              <SiteCard
                key={site.id}
                site={site}
                onMachineClick={handleMachineClick}
                statusFilter={statusFilter}
              />
            ))
          )}
        </div>
      </div>

      {/* Machine Detail Modal */}
      <MachineDetailModal
        machine={selectedMachine}
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
      />
    </div>
  );
}
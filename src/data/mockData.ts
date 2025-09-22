export type MachineStatus = 'running' | 'idle' | 'maintenance' | 'offline' | 'error';

export interface Machine {
  id: string;
  name: string;
  status: MachineStatus;
  lastUpdated: string;
  performance: {
    efficiency: number;
    uptime: number;
    temperature: number;
    pressure: number;
  };
  type: string;
  serialNumber: string;
}

export interface Department {
  id: string;
  name: string;
  machines: Machine[];
  manager: string;
}

export interface Site {
  id: string;
  name: string;
  location: string;
  departments: Department[];
  totalMachines: number;
}

export const mockData: Site[] = [
  {
    id: 'site-1',
    name: 'North Manufacturing Plant',
    location: 'Detroit, MI',
    totalMachines: 15,
    departments: [
      {
        id: 'dept-1',
        name: 'Production Line A',
        manager: 'Sarah Johnson',
        machines: [
          {
            id: 'machine-1',
            name: 'CNC Lathe 001',
            status: 'running',
            lastUpdated: '2024-01-15T14:30:00Z',
            performance: {
              efficiency: 87,
              uptime: 94,
              temperature: 68,
              pressure: 150
            },
            type: 'CNC Lathe',
            serialNumber: 'CNC001-2023'
          },
          {
            id: 'machine-2',
            name: 'Milling Machine 001',
            status: 'maintenance',
            lastUpdated: '2024-01-15T13:45:00Z',
            performance: {
              efficiency: 0,
              uptime: 0,
              temperature: 22,
              pressure: 0
            },
            type: 'Milling Machine',
            serialNumber: 'MILL001-2023'
          },
          {
            id: 'machine-3',
            name: 'Assembly Robot 001',
            status: 'running',
            lastUpdated: '2024-01-15T14:35:00Z',
            performance: {
              efficiency: 92,
              uptime: 98,
              temperature: 45,
              pressure: 120
            },
            type: 'Industrial Robot',
            serialNumber: 'ROB001-2024'
          }
        ]
      },
      {
        id: 'dept-2',
        name: 'Quality Control',
        manager: 'Michael Chen',
        machines: [
          {
            id: 'machine-4',
            name: 'Inspection Scanner 001',
            status: 'idle',
            lastUpdated: '2024-01-15T14:20:00Z',
            performance: {
              efficiency: 75,
              uptime: 88,
              temperature: 35,
              pressure: 90
            },
            type: 'Quality Scanner',
            serialNumber: 'QS001-2023'
          },
          {
            id: 'machine-5',
            name: 'Test Bench 001',
            status: 'running',
            lastUpdated: '2024-01-15T14:32:00Z',
            performance: {
              efficiency: 89,
              uptime: 95,
              temperature: 42,
              pressure: 110
            },
            type: 'Test Equipment',
            serialNumber: 'TB001-2023'
          }
        ]
      }
    ]
  },
  {
    id: 'site-2',
    name: 'South Assembly Facility',
    location: 'Austin, TX',
    totalMachines: 12,
    departments: [
      {
        id: 'dept-3',
        name: 'Final Assembly',
        manager: 'Emily Rodriguez',
        machines: [
          {
            id: 'machine-6',
            name: 'Conveyor System 001',
            status: 'running',
            lastUpdated: '2024-01-15T14:28:00Z',
            performance: {
              efficiency: 91,
              uptime: 97,
              temperature: 28,
              pressure: 80
            },
            type: 'Conveyor System',
            serialNumber: 'CONV001-2024'
          },
          {
            id: 'machine-7',
            name: 'Packaging Unit 001',
            status: 'error',
            lastUpdated: '2024-01-15T14:15:00Z',
            performance: {
              efficiency: 0,
              uptime: 15,
              temperature: 55,
              pressure: 0
            },
            type: 'Packaging Machine',
            serialNumber: 'PKG001-2023'
          }
        ]
      },
      {
        id: 'dept-4',
        name: 'Shipping & Logistics',
        manager: 'David Kim',
        machines: [
          {
            id: 'machine-8',
            name: 'Automated Forklift 001',
            status: 'running',
            lastUpdated: '2024-01-15T14:33:00Z',
            performance: {
              efficiency: 85,
              uptime: 92,
              temperature: 32,
              pressure: 100
            },
            type: 'AGV Forklift',
            serialNumber: 'AGV001-2024'
          },
          {
            id: 'machine-9',
            name: 'Loading Dock Scanner',
            status: 'offline',
            lastUpdated: '2024-01-15T12:00:00Z',
            performance: {
              efficiency: 0,
              uptime: 0,
              temperature: 20,
              pressure: 0
            },
            type: 'Barcode Scanner',
            serialNumber: 'SCAN001-2023'
          }
        ]
      }
    ]
  },
  {
    id: 'site-3',
    name: 'West Research Lab',
    location: 'Seattle, WA',
    totalMachines: 8,
    departments: [
      {
        id: 'dept-5',
        name: 'R&D Prototyping',
        manager: 'Dr. Lisa Park',
        machines: [
          {
            id: 'machine-10',
            name: '3D Printer Alpha',
            status: 'running',
            lastUpdated: '2024-01-15T14:25:00Z',
            performance: {
              efficiency: 78,
              uptime: 85,
              temperature: 210,
              pressure: 5
            },
            type: '3D Printer',
            serialNumber: '3DP001-2024'
          },
          {
            id: 'machine-11',
            name: 'Laser Cutter 001',
            status: 'idle',
            lastUpdated: '2024-01-15T14:10:00Z',
            performance: {
              efficiency: 82,
              uptime: 90,
              temperature: 38,
              pressure: 15
            },
            type: 'Laser Cutter',
            serialNumber: 'LC001-2024'
          }
        ]
      }
    ]
  }
];
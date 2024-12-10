import { create } from 'zustand';

interface SensorManagementState {
  exportSensorDialogOpen: boolean;
  setExportSensorDialogOpen: (open: boolean) => void;
  sensorCode: string;
  setSensorCode: (code: string) => void;  
}

const useSensorManagementStore = create<SensorManagementState>((set) => ({
  exportSensorDialogOpen: false,
  setExportSensorDialogOpen: (open) => set({ exportSensorDialogOpen: open }),
  sensorCode: '',
  setSensorCode: (code) => set({ sensorCode: code }),
}));

export default useSensorManagementStore;

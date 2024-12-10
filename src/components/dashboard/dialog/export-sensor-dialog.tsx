import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import ExportSensorForm from "../form/export-sensor-form";
import useSensorManagementStore from "@/stores/sensor-management-store";

export default function ExportSensorDialog({ name, sensorTypeCode, sensorType, pjuId }: { name: string, sensorTypeCode: string, sensorType: string, pjuId?: string }) {
  const open = useSensorManagementStore((state) => state.exportSensorDialogOpen);
  const setOpen = useSensorManagementStore((state) => state.setExportSensorDialogOpen);
  const sensorCode = useSensorManagementStore((state) => state.sensorCode);
  const setSensorCode = useSensorManagementStore((state) => state.setSensorCode);
  console.log('sensorTypeCode', sensorTypeCode);
  console.log('name', name);

  return (
    <Dialog
      open={
        open && sensorCode === sensorTypeCode
      }
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>
        <Button
          variant="outline"
          onClick={() => {
            setSensorCode(sensorTypeCode);
            setOpen(true);
          }}
          className="text-xs border-green-600 hover:border-green-500 text-green-600 hover:text-green-500 h-9 px-2"
        >
          <PiMicrosoftExcelLogoFill className="w-6 h-6 mr-1" />
          Export
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[500px] max-h-[90vh] overflow-y-auto'>
        <DialogHeader>
          <DialogTitle>Export data sensor {name}</DialogTitle>
        </DialogHeader>
        <ExportSensorForm sensorType={sensorType} sensorTypeCode={sensorTypeCode} pjuId={pjuId} />
      </DialogContent>
    </Dialog>
  );
}
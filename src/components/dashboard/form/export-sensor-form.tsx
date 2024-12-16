import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';

const formSchema = z.object({
  start_date: z.date({ required_error: 'Start Date harus dipilih.' }),
  end_date: z.date({ required_error: 'End Date harus dipilih.' }),
});

export default function ExportSensorForm({
  sensorTypeCode,
  sensorType,
  pjuId,
}: {
  sensorType: string;
  sensorTypeCode: string;
  pjuId?: string;
}) {
  const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      start_date: new Date(),
      end_date: new Date(),
    },
    mode: 'onChange',
    shouldUnregister: false,
  });

  const generateDownloadLink = () => {
    const { start_date, end_date } = form.getValues();

    const startDate = format(start_date, 'yyyy-MM-dd');
    const endDate = format(end_date, 'yyyy-MM-dd');

    if (!sensorTypeCode) {
      throw new Error('Sensor type code tidak boleh kosong.');
    }

    const params = new URLSearchParams({
      startDate,
      endDate,
      code: sensorTypeCode,
    });

    if (sensorType === 'weather') {
      return `${baseURL}/weather/export?${params.toString()}`;
    } else if (sensorType === 'air-quality') {
      return `${baseURL}/air-quality/export?${params.toString()}`;
    } else if (sensorType === 'monitor' && pjuId) {
      return `${baseURL}/monitor/${pjuId}/export?${params.toString()}`;
    }

    throw new Error('Tipe sensor atau ID PJU tidak valid.');
  };

  const renderDatePicker = (name: 'start_date' | 'end_date', label: string) => (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>{label}</FormLabel>
          <Popover modal={true}>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  className={`w-full pl-3 text-left font-normal ${
                    !field.value && 'text-muted-foreground'
                  }`}
                >
                  {field.value ? (
                    format(field.value, 'PPP')
                  ) : (
                    <span>Pilih tanggal</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 z-50" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={(date) => {
                  // Cek apakah `date` valid sebelum memperbarui nilai
                  if (date) {
                    field.onChange(date);
                  }
                }}
                disabled={(date) =>
                  date > new Date() ||
                  (name === 'end_date' && date < form.getValues('start_date'))
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(() => {
          const link = generateDownloadLink();
          window.location.href = link;
        })}
        className="space-y-4"
      >
        <div className="flex flex-col gap-4">
          {renderDatePicker('start_date', 'Pilih Tanggal Awal')}
          {renderDatePicker('end_date', 'Pilih Tanggal Akhir')}
        </div>

        <a
          href={generateDownloadLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-block"
        >
          <Button className="w-full">Export</Button>
        </a>
      </form>
    </Form>
  );
}

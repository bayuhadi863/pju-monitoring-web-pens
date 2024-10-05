import { useEffect, useState } from 'react';
import { Lightbulb, Moon, Sun } from 'lucide-react';
import PjuControlCard from './pju-control-card';
import axios from 'axios';
import { socket } from '@/lib/configs/socket';
import { apiBaseUrl } from '@/lib/configs/api';

export default function PjuControlGrid() {
  const [pjuOn, setPjuOn] = useState<boolean>(false);
  const [webOn, setWebOn] = useState<boolean>(false);

  const [pjuAutoMode, setPjuAutoMode] = useState<boolean>(false);
  const [webAutoMode, setWebAutoMode] = useState<boolean>(false);

  const [, setFetchLoading] = useState<boolean>(false);
  const [, setIsUpdating] = useState<boolean>(false);

  const [insertManualLoading, setInsertManualLoading] = useState<boolean>(false);
  const [insertAutoLoading, setInsertAutoLoading] = useState<boolean>(false);

  const generateManualWaitingMessage = (webOn: boolean) => {
    const conditionSentence = webOn ? 'Menyalakan lampu.' : 'Mematikan lampu.';
    return `${conditionSentence} Tunggu hingga PJU merespon perintah.`;
  };

  const generateAutoWaitingMessage = (webAutoMode: boolean) => {
    const conditionSentence = webAutoMode ? 'Mengaktifkan mode otomatis.' : 'Menonaktifkan mode otomatis.';
    return `${conditionSentence} Tunggu hingga PJU merespon perintah.`;
  };

  const fetchData = async () => {
    try {
      setFetchLoading(true);
      const response = await axios.get(`${apiBaseUrl}/lamp/${true}`);

      setPjuOn(response.data.data.on);
      setPjuAutoMode(response.data.data.automated);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setFetchLoading(false);
    }
  };

  const handleLampUpdate = async () => {
    setIsUpdating(true);
    await fetchData();
    setIsUpdating(false);
  };

  useEffect(() => {
    fetchData();
    socket.on('lampUpdate', handleLampUpdate);
    return () => {
      socket.off('lampUpdate');
    };
  }, []);

  const insertLampLog = async (on: boolean, automated: boolean, controlType: string) => {
    try {
      if (controlType === 'manual') {
        setInsertManualLoading(true);
        setWebOn(on);
      } else {
        setInsertAutoLoading(true);
        setWebAutoMode(automated);

        console.log('auto');
      }

      const body = {
        on: on,
        automated: automated,
        isPJU: false,
      };

      const headers = {
        'x-api-key': import.meta.env.VITE_API_KEY,
        'Content-Type': 'application/json',
      };

      await axios.post(`${apiBaseUrl}/lamp`, body, { headers });

      console.log('Lamp log inserted successfully');
    } catch (error) {
      console.error('Error updating lamp status:', error);
    }
  };

  const generateManualInformation = (pjuOn: boolean) => {
    return pjuOn ? (
      <p className='text-sm text-zinc-400'>
        Lampu PJU dalam keadaan <span className='font-semibold text-primary text-base'>ON</span>
      </p>
    ) : (
      <p className='text-sm text-zinc-400'>
        Lampu PJU dalam keadaan <span className='font-semibold text-red-600 text-base'>OFF</span>
      </p>
    );
  };

  const generateAutoInfomation = (pjuAutoMode: boolean) => {
    return pjuAutoMode ? (
      <p className='text-sm text-zinc-400'>
        Mode otomatis dalam keadaan <span className='font-semibold text-primary text-base'>AKTIF</span>
      </p>
    ) : (
      <p className='text-sm text-zinc-400'>
        Mode otomatis dalam keadaan <span className='font-semibold text-red-600 text-base'>TIDAK AKTIF</span>
      </p>
    );
  };

  console.log('weAutoMode:', webAutoMode);
  console.log('pjuAutoMode:', pjuAutoMode);

  console.log('webOn:', webOn);
  console.log('pjuOn:', pjuOn);

  return (
    <div className='grid gap-4 md:grid-cols-2 lg:gap-8'>
      <PjuControlCard
        title='Kontrol Manual'
        description='Nyalakan dan matikan lampu PJU secara manual'
        information={generateManualInformation(pjuOn)}
        icon={<Lightbulb className='h-6 w-6' />}
        insertLoading={insertManualLoading && webOn !== pjuOn}
        waitingMessage={generateManualWaitingMessage(webOn)}
        onClick={() => insertLampLog(!pjuOn, false, 'manual')}
        type='manual'
        isOn={pjuOn}
        label='Lampu PJU'
      />

      <PjuControlCard
        title='Mode Otomatis'
        description='Aktifkan dan nonaktifkan mode otomatis lampu PJU'
        information={generateAutoInfomation(pjuAutoMode)}
        icon={
          <div className='flex items-center gap-2'>
            <Sun className='h-6 w-6' />
            <Moon className='h-6 w-6' />
          </div>
        }
        insertLoading={insertAutoLoading && webAutoMode !== pjuAutoMode}
        waitingMessage={generateAutoWaitingMessage(webAutoMode)}
        onClick={() => insertLampLog(pjuOn, !pjuAutoMode, 'auto')}
        type='auto'
        isOn={pjuAutoMode}
        label='Mode Otomatis'
      />
    </div>
  );
}

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import React, { useState } from 'react';
import { thingspeakApiBaseUrl } from '@/lib/configs/api';
import axios from 'axios';
import { Power, PowerOff, Zap } from 'lucide-react';

type PjuControlCardNewProps = {
  pjuId: number;
};

const PjuControlCardNew: React.FC<PjuControlCardNewProps> = ({ pjuId }) => {
  const writeApiKey = import.meta.env.VITE_THINGSPEAK_WRITE_API_KEY;

  const [lampValueState, setLampValueState] = useState<number>(0);
  const [sendLoading, setSendLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [entryId, setEntryId] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);

  const sendLampValueToApi = async (lampValue: number) => {
    const response = await axios.post(`${thingspeakApiBaseUrl}/update`, {
      api_key: writeApiKey,
      field1: lampValue,
    });

    return response;
  };

  const handleClick = async (lampValue: number) => {
    try {
      setSendLoading(true);
      setLampValueState(lampValue);

      const response = await sendLampValueToApi(lampValue);

      setEntryId(response.data);

      setIsSuccess(true);

      setTimer(20);
      const countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      setTimeout(() => {
        setSendLoading(false);
        clearInterval(countdown);
      }, 20000);
    } catch (error) {
      console.error('Error sending lamp value:', error);
      setError('Error sending lamp value');
      setSendLoading(false);
    }
  };

  return (
    <Card className='overflow-hidden shadow-md w-full lg:w-1/2'>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>Kontrol Lampu PJU {pjuId}</CardTitle>
        <CardDescription className='text-zinc-400'>Nyalakan, matikan, atau aktifkan mode otomatis pada lampu PJU.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex gap-2 flex-wrap mt-4'>
          <Button
            onClick={() => handleClick(1)}
            disabled={sendLoading}
            className='flex items-center gap-2'
          >
            <Power className='w-4 h-4' />
            <span>Nyalakan</span>
          </Button>
          <Button
            variant='destructive'
            onClick={() => handleClick(0)}
            disabled={sendLoading}
            className='flex items-center gap-2'
          >
            <PowerOff className='w-4 h-4' />
            <span>Matikan</span>
          </Button>
          <Button
            variant='secondary'
            onClick={() => handleClick(2)}
            disabled={sendLoading}
            className='flex items-center gap-2'
          >
            <Zap className='w-4 h-4' />
            <span>Auto</span>
          </Button>
        </div>

        {sendLoading && timer > 0 && <p className='mt-4 text-sm text-zinc-600'>Menunggu {timer} detik untuk bisa mengirim data lagi...</p>}
      </CardContent>
      <CardFooter>
        {isSuccess && (
          <p className='text-green-500'>
            Berhasil mengirimkan data dengan entryId: {entryId} dan lamp value: {lampValueState}
          </p>
        )}

        {error && <p className='text-red-500'>{error}</p>}
      </CardFooter>
    </Card>
  );
};

export default PjuControlCardNew;

import { BsFillCloudRainFill, BsFillCloudRainHeavyFill, BsFillCloudLightningRainFill } from 'react-icons/bs';

export const rainfallSensorTypeCode = 'RAIN';
export const rainfallTitle = 'Curah Hujan';
export const rainfallSubtitle = 'Tingkat Curah Hujan Area';

export const rainfallGenerateColor = (value?: number) => {
  if (!value) return 'blue';
  if (value >= 0 && value <= 24.9) return 'green';
  if (value >= 25 && value <= 99.9) return 'yellow';
  if (value >= 100 && value <= 249.0) return 'red';
  return 'red';
};

export const rainfallGenerateIcon = (value?: number) => {
  if (!value) return <div></div>;
  if (value >= 0 && value <= 24.9) return <BsFillCloudRainHeavyFill className='text-green-600' />;
  if (value >= 25.0 && value <= 49.9) return <BsFillCloudRainFill className='text-yellow-400' />;
  if (value >= 50.0 && value <= 99.9) return <BsFillCloudLightningRainFill className='text-yellow-400' />;
  if (value >= 100 && value <= 249.0) return <BsFillCloudLightningRainFill className='text-red-600' />;
  return <BsFillCloudLightningRainFill className='text-red-600' />;
};

export const rainfallInfo = (
  <div className='text-xs flex flex-col gap-1'>
    <p>Curah hujan adalah jumlah hujan yang jatuh dalam satu periode waktu tertentu.</p>
    <p>
      Curah hujan <span className='text-green-600 font-semibold'>0 hingga 10,0 mm</span> adalah Hujan Ringan.
    </p>
    <p>
      Curah hujan <span className='text-green-600 font-semibold'>10,1 hingga 24,9 mm</span> adalah Hujan Sedang.
    </p>
    <p>
      Curah hujan <span className='text-yellow-400 font-semibold'>25,0 hingga 49,9 mm</span> adalah Hujan Lebat.
    </p>
    <p>
      Curah hujan <span className='text-yellow-400 font-semibold'>50,0 hingga 99,9 mm</span> adalah Hujan Badai.
    </p>
    <p>
      Curah hujan <span className='text-red-600 font-semibold'>100,0 hingga 249,9 mm</span> adalah Hujan Badai Lebat.
    </p>
  </div>
);

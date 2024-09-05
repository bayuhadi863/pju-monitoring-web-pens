import { GoCheckCircleFill } from 'react-icons/go';
import { FaHouseFloodWater } from 'react-icons/fa6';
import { MdFlood } from 'react-icons/md';

export const waterLevelSensorTypeCode = 'WATER';
export const waterLevelTitle = 'Tinggi Air';
export const waterLevelSubtitle = 'Tinggi Air Area';

export const waterLevelGenerateColor = (value?: number) => {
  if (!value) return 'blue';
  if (value >= 0 && value <= 250) return 'blue';
  if (value >= 251 && value <= 300) return 'green';
  if (value >= 301 && value <= 350) return 'yellow';
  if (value >= 251 && value <= 400) return 'red';
  return 'red';
};

export const waterLevelGenerateIcon = (value?: number) => {
  if (!value) return <div></div>;
  if (value >= 0 && value <= 49) return <GoCheckCircleFill className='text-blue-600' />;
  if (value >= 50 && value <= 250) return <FaHouseFloodWater className='text-blue-600' />;
  if (value >= 251 && value <= 300) return <FaHouseFloodWater className='text-green-600' />;
  if (value >= 301 && value <= 350) return <FaHouseFloodWater className='text-yellow-400' />;
  if (value >= 251 && value <= 400) return <MdFlood className='text-red-600' />;
  return <MdFlood className='text-red-600' />;
};

export const waterLevelInfo = (
  <div className='text-xs flex flex-col gap-1'>
    <p>Tinggi air adalah jarak vertikal antara permukaan air dengan titik nol tertentu.</p>
    <p>
      Tinggi air <span className='text-blue-600'>0 hingga 250 cm</span> berstatus Siaga IV / Aman.
    </p>
    <p>
      Tinggi air <span className='text-green-600'>251 hingga 300 cm</span> berstatus Siaga III / Waspada.
    </p>
    <p>
      Tinggi air <span className='text-yellow-400'>301 hingga 350 cm</span> berstatus Siaga II / Kritis.
    </p>
    <p>
      Tinggi air <span className='text-red-600'>351 hingga 400 cm</span> berstatus Siaga I / Bencana.
    </p>
  </div>
);

// icons import
import { IoIosWarning } from 'react-icons/io';
import { RiErrorWarningFill } from 'react-icons/ri';
import { GoCheckCircleFill } from 'react-icons/go';

export const solarSensorTypeCode = 'SOLAR';
export const solarTitle = 'Radiasi Matahari';
export const solarSubtitle = 'Tingkat Radiasi Matahari Area';

export const solarGenerateColor = (value?: number) => {
  if (!value) return 'blue';
  if (value >= 851.725 && value <= 1117.826) return 'green';
  if ((value < 851.725 && value >= 518.107) || (value > 60 && value <= 80)) return 'yellow';
  if ((value < 518.107 && value >= 101.084) || (value > 60 && value <= 80)) return 'red';
  return 'blue';
};

export const solarGenerateIcon = (value?: number) => {
  if (!value) return <div></div>;
  if (value >= 851.725 && value <= 1117.826) return <GoCheckCircleFill className='text-green-600' />;
  if ((value < 851.725 && value >= 518.107) || (value > 60 && value <= 80)) return <IoIosWarning className='text-yellow-400' />;
  if ((value < 518.107 && value >= 101.084) || (value > 60 && value <= 80)) return <RiErrorWarningFill className='text-red-600' />;
  return <div></div>;
};

export const solarInfo = (
  <div className='text-xs flex flex-col gap-1'>
    <p>Radiasi matahari adalah energi yang dipancarkan oleh matahari dalam bentuk gelombang elektromagnetik.</p>
    <p>
      Radiasi matahari <span className='text-red-600 font-semibold'>101,084 hingga 518,107 kWh/m²</span> adalah Sangat Buruk.
    </p>
    <p>
      Radiasi matahari <span className='text-red-600 font-semibold'>518,108 hingga 712,718 kWh/m²</span> adalah Buruk.
    </p>
    <p>
      Radiasi matahari <span className='text-yellow-400 font-semibold'>712,719 hingga 851,725 kWh/m²</span> adalah Cukup.
    </p>
    <p>
      Radiasi matahari <span className='text-green-600 font-semibold'>851,726 hingga 978,818 kWh/m²</span> adalah Baik.
    </p>
    <p>
      Radiasi matahari <span className='text-green-600 font-semibold'>978,818 hingga 1.117,826 kWh/m²</span> adalah Sangat Baik.
    </p>
  </div>
);

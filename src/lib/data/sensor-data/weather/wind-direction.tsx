export const windDirectionSensorTypeCode = 'WINDDIR';
export const windDirectionTitle = 'Arah Angin';
export const windDirectionSubtitle = 'Arah Angin Area';

export const windDirectionGenerateColor = () => {
  return 'green';
};

export const windDirectionGenerateIcon = (value?: number) => {
  return (
    <div className='w-4 h-4 flex items-center justify-center'>
      <p className='text-green-600 font-semibold text-sm'>{generateDirection(value)}</p>
    </div>
  );
};

const generateDirection = (value?: number) => {
  if (!value) return 'Tidak Ada Data';
  if (value >= 0 && value < 45) return 'U';
  if (value >= 45 && value < 90) return 'TL';
  if (value >= 90 && value < 135) return 'T';
  if (value >= 135 && value < 180) return 'TG';
  if (value >= 180 && value < 225) return 'S';
  if (value >= 225 && value < 270) return 'BD';
  if (value >= 270 && value < 315) return 'B';
  if (value >= 315) return 'Barat Laut';
};

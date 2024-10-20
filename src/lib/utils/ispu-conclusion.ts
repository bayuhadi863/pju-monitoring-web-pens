export type ispuConclusion = {
  title: string;
  description: string;
  variant: 'success' | 'warning' | 'destructive' | 'info';
};

export const getISPUConclusion = (ispuCategory: string): ispuConclusion => {
  switch (ispuCategory) {
    case 'good':
      return {
        title: 'Kualitas Udara Baik',
        description: 'Kualitas udara saat ini dalam kondisi baik dan aman bagi kesehatan.',
        variant: 'success',
      };
    case 'moderate':
      return {
        title: 'Kualitas Udara Sedang',
        description: 'Kualitas udara saat ini dalam kondisi sedang dan masih aman bagi kesehatan.',
        variant: 'success',
      };
    case 'unhealthy':
      return {
        title: 'Kualitas Udara Tidak Sehat',
        description: 'Kualitas udara saat ini dalam kondisi yang tidak sehat dan berpengaruh buruk bagi kesehatan.',
        variant: 'warning',
      };
    case 'very_unhealthy':
      return {
        title: 'Kualitas Udara Sangat Tidak Sehat',
        description: 'Kualitas udara saat ini dalam kondisi sangat tidak sehat dan sangat berpengaruh buruk bagi kesehatan.',
        variant: 'destructive',
      };
    case 'hazardous':
      return {
        title: 'Kualitas Udara Berbahaya',
        description: 'Kualitas udara saat ini dalam kondisi berbahaya dan sangat berpengaruh buruk bagi kesehatan.',
        variant: 'destructive',
      };
    default:
      return {
        title: 'Kualitas Udara Tidak Diketahui',
        description: 'Kualitas udara saat ini tidak diketahui.',
        variant: 'info',
      };
  }
};

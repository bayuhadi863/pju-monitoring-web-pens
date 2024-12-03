import { Summary } from '@/stores/weather-summary-store';
import { getRainfallCategory, RainfallCategory } from '../data/sensor-data/weather/rainfall-level';
import { getSolarCategory, SolarCategory } from '../data/sensor-data/weather/solar-radiation';
import { getTemperatureCategory, TemperatureCategory } from '../data/sensor-data/weather/temperature';

export type WeatherConclusion = {
    title: string;
    description: string;
    variant: 'success' | 'warning' | 'destructive' | 'info';
};

enum WeatherCategory {
    GOOD = 'good',
    MODERATE = 'moderate',
    BAD = 'bad',
    UNKNOWN = 'unknown',
}

export const getWeatherCategory = (weatherSummary: Summary): WeatherCategory => {
    const rainfallCategory = getRainfallCategory(weatherSummary.rainfallLevel);
    const solarCategory = getSolarCategory(weatherSummary.solarRadiation);
    const temperatureCategory = getTemperatureCategory(weatherSummary.temperature);

    if (rainfallCategory === RainfallCategory.BAD) {
        return WeatherCategory.BAD;
    }

    if (rainfallCategory === RainfallCategory.MODERATE) {
        return WeatherCategory.MODERATE;
    }

    if (rainfallCategory === RainfallCategory.GOOD && solarCategory === SolarCategory.GOOD && temperatureCategory === TemperatureCategory.GOOD) {
        return WeatherCategory.GOOD;
    }

    if (rainfallCategory === RainfallCategory.GOOD && solarCategory === SolarCategory.MODERATE && temperatureCategory === TemperatureCategory.GOOD) {
        return WeatherCategory.GOOD;
    }

    if (rainfallCategory === RainfallCategory.GOOD && solarCategory === SolarCategory.BAD && temperatureCategory === TemperatureCategory.GOOD) {
        return WeatherCategory.MODERATE;
    }

    if (rainfallCategory === RainfallCategory.GOOD && solarCategory === SolarCategory.GOOD && temperatureCategory === TemperatureCategory.MODERATE) {
        return WeatherCategory.GOOD;
    }

    if (rainfallCategory === RainfallCategory.GOOD && solarCategory === SolarCategory.GOOD && temperatureCategory === TemperatureCategory.BAD) {
        return WeatherCategory.MODERATE;
    }

    if (rainfallCategory === RainfallCategory.GOOD && solarCategory === SolarCategory.MODERATE && temperatureCategory === TemperatureCategory.MODERATE) {
        return WeatherCategory.MODERATE;
    }

    if (rainfallCategory === RainfallCategory.GOOD && solarCategory === SolarCategory.BAD && temperatureCategory === TemperatureCategory.MODERATE) {
        return WeatherCategory.MODERATE;
    }

    if (rainfallCategory === RainfallCategory.GOOD && solarCategory === SolarCategory.BAD && temperatureCategory === TemperatureCategory.BAD) {
        return WeatherCategory.BAD;
    }

    if (rainfallCategory === RainfallCategory.GOOD && solarCategory === SolarCategory.MODERATE && temperatureCategory === TemperatureCategory.BAD) {
        return WeatherCategory.MODERATE;
    }

    return WeatherCategory.UNKNOWN;
};

export const getWeatherConclusion = (weatherSummary?: Summary): WeatherConclusion => {
    if (!weatherSummary) {
        return {
            title: 'Kondisi Cuaca Tidak Diketahui',
            description: 'Kondisi cuaca hari ini tidak diketahui.',
            variant: 'info',
        };
    }

    const weatherCategory = getWeatherCategory(weatherSummary);

    if (weatherCategory === WeatherCategory.GOOD) {
        return {
            title: 'Kondisi Cuaca Bagus',
            description: 'Cuaca hari ini bagus untuk aktivitas luar ruangan.',
            variant: 'success',
        };
    }

    if (weatherCategory === WeatherCategory.MODERATE) {
        return {
            title: 'Kondisi Cuaca Kurang Baik',
            description: 'Cuaca hari ini kurang baik, sebaiknya tetap waspada.',
            variant: 'warning',
        };
    }

    if (weatherCategory === WeatherCategory.BAD) {
        return {
            title: 'Kondisi Cuaca Buruk',
            description: 'Cuaca hari ini buruk, sebaiknya hindari aktivitas luar ruangan.',
            variant: 'destructive',
        };
    }

    return {
        title: 'Kondisi Cuaca Tidak Diketahui',
        description: 'Kondisi cuaca hari ini tidak diketahui.',
        variant: 'info',
    };
};

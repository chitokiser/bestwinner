import { INITIAL_WEATHER, INITIAL_EXCHANGE_RATES } from '../data/megazineInitialData';

/**
 * Weather & Exchange Rate Data Service for Hanoi & Vietnam
 */

export async function fetchHanoiWeather() {
  try {
    // Attempting Open-Meteo or free public weather API for Hanoi (21.0285° N, 105.8542° E)
    const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=21.0285&longitude=105.8542&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,rain,weather_code,wind_speed_10m&timezone=Asia%2FBangkok');
    if (res.ok) {
      const data = await res.json();
      const current = data.current || {};
      const temp = Math.round(current.temperature_2m || 29);
      const feelsLike = Math.round(current.apparent_temperature || temp + 3);
      const humidity = Math.round(current.relative_humidity_2m || 75);
      const windSpeed = Math.round(current.wind_speed_10m || 10);
      const rainProb = Math.round(current.precipitation ? 80 : 20);

      let condition = '구름 조금 (Partly Cloudy)';
      let conditionVi = 'Nắng nhẹ, ít mây';
      let icon = 'CloudSun';

      if (current.weather_code >= 61) {
        condition = '비 (Rainy)';
        conditionVi = 'Có mưa nhỏ';
        icon = 'CloudRain';
      } else if (current.weather_code === 0) {
        condition = '맑음 (Sunny)';
        conditionVi = 'Trời nắng';
        icon = 'Sun';
      }

      return {
        city: 'Hanoi',
        temp,
        feelsLike,
        humidity,
        rainProb,
        windSpeed,
        condition,
        conditionVi,
        icon,
        updatedAt: new Date().toISOString()
      };
    }
  } catch (err) {
    console.warn('[Weather API] Falling back to default Hanoi weather:', err);
  }

  return INITIAL_WEATHER;
}

export async function fetchExchangeRates() {
  try {
    // Fetch real-time exchange rates from public API
    const res = await fetch('https://open.er-api.com/v6/latest/USD');
    if (res.ok) {
      const data = await res.json();
      const rates = data.rates || {};
      const usdVnd = rates.VND ? Math.round(rates.VND) : 25420;
      const usdKrw = rates.KRW ? Math.round(rates.KRW) : 1372;
      const krwVnd = Number((usdVnd / usdKrw).toFixed(2));

      return {
        krwVnd, // e.g. 18.52
        usdVnd, // e.g. 25420
        usdKrw, // e.g. 1372
        updatedAt: new Date().toISOString()
      };
    }
  } catch (err) {
    console.warn('[Exchange Rate API] Falling back to default rates:', err);
  }

  return INITIAL_EXCHANGE_RATES;
}

/**
 * Hanoi Air Quality Index (AQI) Service
 */

export async function fetchHanoiAQI() {
  try {
    // Fetching Open-Meteo Air Quality for Hanoi (21.0285° N, 105.8542° E)
    const res = await fetch('https://air-quality-api.open-meteo.com/v1/air-quality?latitude=21.0285&longitude=105.8542&current=us_aqi,pm10,pm2_5,carbon_monoxide,nitrogen_dioxide&timezone=Asia%2FBangkok');
    if (res.ok) {
      const data = await res.json();
      const current = data.current || {};
      const aqi = Math.round(current.us_aqi || 68);
      const pm25 = Math.round(current.pm2_5 || 28);
      const pm10 = Math.round(current.pm10 || 45);

      let status = '보통 (Moderate)';
      let color = 'yellow';
      let advice = '민감군 외출 시 마스크 착용 권장';
      let icon = 'Wind';

      if (aqi <= 50) {
        status = '좋음 (Good)';
        color = 'green';
        advice = '야외 활동하기 아주 좋은 공기입니다.';
      } else if (aqi <= 100) {
        status = '보통 (Moderate)';
        color = 'yellow';
        advice = '환기 가능, 장시간 야외 운동 시 마스크 착용';
      } else if (aqi <= 150) {
        status = '민감군 나쁨 (Unhealthy for Sensitive)';
        color = 'orange';
        advice = '호흡기 질환자 및 노약자 외출 자제';
      } else {
        status = '나쁨 (Unhealthy)';
        color = 'red';
        advice = '외출 시 KF94/N95 마스크 착용 필수 & 창문 닫기';
      }

      return {
        city: 'Hanoi',
        aqi,
        pm25,
        pm10,
        status,
        color,
        advice,
        updatedAt: new Date().toISOString()
      };
    }
  } catch (err) {
    console.warn('[AQI Service] Error fetching live AQI, using default Hanoi AQI:', err);
  }

  return {
    city: 'Hanoi',
    aqi: 72,
    pm25: 32,
    pm10: 48,
    status: '보통 (Moderate)',
    color: 'yellow',
    advice: '일반적인 야외 활동 가능, 공기청정기 가동 권장',
    updatedAt: new Date().toISOString()
  };
}

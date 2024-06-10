const dailyData = weatherData["berlin_daily"].daily;

const weatherCodeToday = dailyData.weather_code[0];
const weatherCodeTomorrow = dailyData.weather_code[1];
const weatherCodeDayAfterTomorrow = dailyData.weather_code[2];

const maxTempToday = dailyData.temperature_2m_max[0]
const maxTempTomorrow = dailyData.temperature_2m_max[1]


const hourlyData = weatherData["berlin_hourly"].hourly;
const weatherCodeMidnight = hourlyData.weather_code[0];
const weatherCode1am = hourlyData.weather_code[1];
const tempAt1am= hourlyData.temperature_2m[1]



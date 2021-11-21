import { Forecast } from "../objects/Forecast";

export default function ForecastRow(forecast: Forecast) {
  return <tr>
    <td>{forecast.date}</td>
    <td>{forecast.temperature + '°C'}</td>
    <td>{forecast.feelsLike + '°C'}</td>
    <td>{forecast.windSpeed + 'м'}</td>
    <td>{forecast.weatherInfo}</td>
  </tr>;
}
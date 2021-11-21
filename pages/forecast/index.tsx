import React, { useState } from "react";
import styles from './../../styles/darkinputs.module.css';
import { ForecastResponse } from "../../objects/ForecastResponse";
import WeatherApiResponse from '../../objects/WeatherApiResponse';
import { Forecast } from "../../objects/Forecast";
import ForecastTable from "../../components/ForecastTable"
import getForecasts from "../../tools/ForecastsGetter";
import Header from "../../components/Header";
import MenuItemInfo from "../../objects/MenuItemInfo";
import type { NextPage } from 'next'
import PrivateRoute from "../../objects/PrivateRoute";

const Weather: NextPage = () => {

  const [location, setLocation] = useState<string>('');
  const [forecasts, setForecasts] = useState<Forecast[]>([]);

  let handleChange = (event: React.ChangeEvent) => {
    const input: any = event.target;
    setLocation(input.value);
  }

  let handleForecasts = () => {
    getForecasts(onResponse, location);
  };

  let onResponse = (response: WeatherApiResponse) => {
    let list: ForecastResponse[] = response.list;
    let newForecasts: Forecast[] = [];
    list.forEach((item) => {
      newForecasts.push(new Forecast(item));
    });
    setForecasts(newForecasts);
  };

  return <div>
    <Header menuItems={[new MenuItemInfo('/', 
    'Головна'), new MenuItemInfo('/forecast', 'Погода')]} activeIndex={1}/>
    <h1 className='weather-headline py-5'>Прогноз погоди</h1>
    <input id="city" name="city" placeholder="Місто" onChange={handleChange} className={styles.field + ' block m-5'} />
    <input type="button" onClick={handleForecasts} value="Шукати" className="button block m-5" />
    {ForecastTable(forecasts)}
  </div>

}

export default PrivateRoute(Weather);
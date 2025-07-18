import type { FiveDaysForecast } from "../types/forecastData" 
import { getWeekday } from "../utils/getWeekday"
import { selectWeatherIcon, selectHumidityIcon, selectWindIcon } from "../utils/selectIcon"
import feelsLikeIcon from '../assets/icons/web/feels.svg'
import { useState } from 'react'
import { LineGraph } from "./Line"
import { motion } from 'framer-motion'

export const ForecastWeather = ({ fiveDaysForecast, unit } : { fiveDaysForecast: FiveDaysForecast, unit:string }) => {
    const [dayForecast, setDayForecast] = useState<1|2|3|4>(1)

    const units = unit == 'metric' ? {temp:'°C',speed:'m/s'} : {temp:'°F',speed:'mph'}

    return (
        <motion.section key={unit + fiveDaysForecast} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}  transition={{ duration: 0.3, ease: 'easeOut' }} className="flex mt-5 w-full flex-wrap justify-between gap-2">
            <h2 className="text-2xl font-bold w-full mb-1">Forecast</h2>
            <div className={`flex-1 border-2 px-2 py-3 rounded-lg flex items-center transition duration-300 ${ dayForecast == 1 ? 'border-border-selected bg-bg-selected scale-102' : 'border-nav bg-weather' }`} onClick={() => setDayForecast(1)}>
                <div>
                    <h4 className="text-xl font-bold ml-2">{getWeekday(fiveDaysForecast.summary[1].date)}</h4>
                    <p className="ml-3 font-bold text-xl text-red-400">{fiveDaysForecast.summary[1].maxTemp.toFixed(0)}{units.temp}</p>
                    <p className="ml-3 font-bold text-xl text-blue-400">{fiveDaysForecast.summary[1].minTemp.toFixed(0)}{units.temp}</p>
                </div>
                <img className="w-17 ml-auto mr-1" src={selectWeatherIcon(fiveDaysForecast.summary[1].weather,true, fiveDaysForecast.summary[1].maxTemp >= 35 ? fiveDaysForecast.summary[1].maxTemp : fiveDaysForecast.summary[1].minTemp, unit )} alt=""/>
            </div>
            <div className={`flex-1 border-2 px-2 py-3 rounded-lg flex items-center transition duration-300 ${ dayForecast == 2 ? 'border-border-selected bg-bg-selected scale-102' : 'border-nav bg-weather' }`} onClick={() => setDayForecast(2)}>
                <div>
                    <h4 className="text-xl font-bold ml-2">{getWeekday(fiveDaysForecast.summary[2].date)}</h4>
                    <p className="ml-3 font-bold text-xl text-red-400">{fiveDaysForecast.summary[2].maxTemp.toFixed(0)}{units.temp}</p>
                    <p className="ml-3 font-bold text-xl text-blue-400">{fiveDaysForecast.summary[2].minTemp.toFixed(0)}{units.temp}</p>
                </div>
                <img className="w-17 ml-auto mr-1" src={selectWeatherIcon(fiveDaysForecast.summary[2].weather,true, fiveDaysForecast.summary[2].maxTemp >= 35 ? fiveDaysForecast.summary[2].maxTemp : fiveDaysForecast.summary[2].minTemp, unit )} alt=""/>
            </div>
            <div className={`flex-1 border-2 px-2 py-3 rounded-lg flex items-center transition duration-300 ${ dayForecast == 3 ? 'border-border-selected bg-bg-selected scale-102' : 'border-nav bg-weather' }`} onClick={() => setDayForecast(3)}>
                <div>
                    <h4 className="text-xl font-bold ml-2">{getWeekday(fiveDaysForecast.summary[3].date)}</h4>
                    <p className="ml-3 font-bold text-xl text-red-400">{fiveDaysForecast.summary[3].maxTemp.toFixed(0)}{units.temp}</p>
                    <p className="ml-3 font-bold text-xl text-blue-400">{fiveDaysForecast.summary[3].minTemp.toFixed(0)}{units.temp}</p>
                </div>
                <img className="w-17 ml-auto mr-1" src={selectWeatherIcon(fiveDaysForecast.summary[3].weather,true, fiveDaysForecast.summary[3].maxTemp >= 35 ? fiveDaysForecast.summary[3].maxTemp : fiveDaysForecast.summary[3].minTemp, unit )} alt=""/>
            </div>
            <div className={`flex-1 border-2 px-2 py-3 rounded-lg flex items-center transition duration-300 ${ dayForecast == 4 ? 'border-border-selected bg-bg-selected scale-102' : 'border-nav bg-weather' }`} onClick={() => setDayForecast(4)}>
                <div>
                    <h4 className="text-xl font-bold ml-2">{getWeekday(fiveDaysForecast.summary[4].date)}</h4>
                    <p className="ml-3 font-bold text-xl text-red-400">{fiveDaysForecast.summary[4].maxTemp.toFixed(0)}{units.temp}</p>
                    <p className="ml-3 font-bold text-xl text-blue-400">{fiveDaysForecast.summary[4].minTemp.toFixed(0)}{units.temp}</p>
                </div>
                <img className="w-17 ml-auto mr-1" src={selectWeatherIcon(fiveDaysForecast.summary[4].weather,true, fiveDaysForecast.summary[4].maxTemp >= 35 ? fiveDaysForecast.summary[4].maxTemp : fiveDaysForecast.summary[4].minTemp, unit )} alt=""/>
            </div>
            <motion.div key={dayForecast} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}  transition={{ duration: 0.3, ease: 'easeOut' }} className="flex w-full bg-weather p-6 rounded-lg shadow-md border-2 border-nav">
                <div className="w-[50%] flex flex-wrap ml-2">
                    <h2 className="text-2xl font-bold mb-0 w-full">{getWeekday(fiveDaysForecast.summary[dayForecast].date)}</h2>
                    <p className='w-full text-xl opacity-70'>{fiveDaysForecast.summary[dayForecast].weatherName}</p>
                    <div className='flex items-center mb-5 mt-3'>
                        <img className="w-25 ml-4" src={selectWeatherIcon(fiveDaysForecast.summary[dayForecast].weather,true,fiveDaysForecast.summary[1].maxTemp >= 35 ? fiveDaysForecast.summary[1].maxTemp : fiveDaysForecast.summary[1].minTemp, unit)} alt=""/>
                        <p className='text-5xl ml-3 font-bold'>{fiveDaysForecast.summary[dayForecast].maxTemp.toFixed(0)}{units.temp}</p>
                    </div>
                    <p className='flex w-full items-center mb-0.5 ml-2'><img src={selectHumidityIcon(fiveDaysForecast.summary[dayForecast].maxHumidity)} alt="" className='w-8 mr-2'/>Humidity: {fiveDaysForecast.summary[dayForecast].maxHumidity}%</p>
                    <p className='flex w-full items-center mb-0.5 ml-2'><img src={selectWindIcon(fiveDaysForecast.summary[dayForecast].maxWind, unit)} alt="" className='w-8 mr-2'/>Wind Speed: {fiveDaysForecast.summary[dayForecast].maxWind} {units.speed}</p>
                    <p className='flex w-full items-center mb-0.5 ml-2'><img src={feelsLikeIcon} alt="" className='h-8 w-8 mr-2'/>Feels like: {fiveDaysForecast.summary[dayForecast].maxFeelsLike.toFixed(0)}{units.temp} </p>
                </div>
                <div className="w-[75%] h-65 mr-5 mt-5">
                    <LineGraph forecast={fiveDaysForecast.hourlyTemps} day={dayForecast} unit={unit}/>
                </div>
            </motion.div>
        </motion.section>

    )
}
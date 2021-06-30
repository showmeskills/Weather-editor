

import React, { useState, PropsWithChildren } from "react";
import { WeatherInfo } from "@/models/WeatherInfo";
import WeatherUi from "../ui/WeatherUi";


interface WeatherProps {
    weatherInfo: WeatherInfo
}

const Weather = (props: PropsWithChildren<WeatherProps>) => {

    const { weatherInfo } = props;
    const [showWind, setShowWind] = useState(true);
    const [title, setTitle] = useState("Title of widget");
    const [deg] = useState<any>(weatherInfo.main.temp.toFixed(0));
    const [showDegOrFahrenheit, setShowDegOrF] = useState(true);
    const [weather] = useState(weatherInfo.weather[0].main);
    const handleChangeTitle = (e:React.ChangeEvent<HTMLInputElement>)=>setTitle(e.target.value)
    const handleChangeShowWind = ()=>setShowWind(!showWind);
    const handleChangeDegToFah = ()=>setShowDegOrF(!showDegOrFahrenheit)
    return <WeatherUi
        showWind={showWind}
        title={title}
        deg={deg}
        showDegOrFahrenheit={showDegOrFahrenheit}
        weatherInfo={weatherInfo}
        handleChangeTitle={handleChangeTitle}
        handleChangeShowWind={handleChangeShowWind}
        handleChangeDegToFah={handleChangeDegToFah}
        weather={weather}
    />
}

export default Weather;
import { useEffect, useState } from "react";
import axios from "axios";
import {WeatherInfo} from "@/models/WeatherInfo"

export const useGeolocation = () => {
    const [position, setPosition] = useState({
        latitude: 0,
        longitude: 0,
    })
    const [geoLocationError, setError] = useState("");


    const getLocation = async () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((res: any) => {
                if (res.coords.latitude && res.coords.longitude) {
                    return setPosition({
                        ...position,
                        latitude: res.coords.latitude,
                        longitude: res.coords.longitude
                    })
                }
            }, () => {
                return setError("please don't block your location")
            })
        } else {
            setError("your browser does not support geolocation, please change your browser e.g chrome")
        }
    }

    useEffect(() => {
        getLocation();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return {
        position,
        geoLocationError,
    }
}

export const useCityInfo = () => {
    const { position } = useGeolocation();
    const [error, setError] = useState("");
    const [weather, setWeather] = useState<WeatherInfo>();
    const getCityWeatherInfo = async (city: string) => {
        try {
            const result: any = await axios(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9de243494c0b295cca9337e1e96b00e2`
            )
            setWeather(result.data)
        } catch (e) {
            setError("city name is not found please refresh your page");
        }
    }
    const latIng = async (latitude: number, longitude: number) => {
        try {
            return await axios(`
            https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyCmvY9C3H3BYyZCbApN1S0VIGHLah_V2SE
            `);
        } catch (e) {
            setError("latIng has a big issue");
        }
    }

    useEffect(() => {
        if (position.latitude !== 0 && position.longitude !== 0) {
            const result = latIng(position.latitude, position.longitude);
            result.then(res => {
                const result = res?.data.results.filter((item: any, idx: number) => idx === 7)[0].address_components.filter((item: any, idx: number) =>idx === 0)[0].short_name;
                if(result){
                    getCityWeatherInfo(result);
                }
            })
        }
    }, [position])

    return {
        error,
        weather
    }
}
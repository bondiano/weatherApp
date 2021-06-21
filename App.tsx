import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Alert } from 'react-native';
import * as Location from 'expo-location';

import { Loading } from './Loading';
import { Weather } from './Weather';
import { Error } from './Error'

import { WeatherTypes, API_KEY } from './constants'


const getWeather = async (latitude: number, longitude: number): Promise<{ temp: number, condition: WeatherTypes }> => {
  const { data: { main: { temp }, weather } } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);

  return { temp, condition: weather[0].main }
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [temp, setTemp] = useState<number>()
  const [condition, setCondition] = useState<WeatherTypes>()

  useEffect(() => {
    const getLocation = async () => {
      try {
        setIsLoading(true)
        await Location.requestForegroundPermissionsAsync();
        const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
        const { condition, temp } = await getWeather(latitude, longitude);

        setTemp(temp)
        setCondition(condition)
      } catch (error) {
        Alert.alert('Не могу определить местоположение', 'Очень грустно :(');
      } finally {
        setIsLoading(false)
      }
    }

    getLocation()
  }, [])

    if (isLoading) {
      return <Loading />
    }

    if (temp === undefined || condition === undefined) {
      return <Error />
    }

    return (
      <Weather temp={Math.round(temp)} condition={condition} />
    );
}

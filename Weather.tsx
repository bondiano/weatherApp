import React from 'react';
import {
  StyleSheet, Text, View, StatusBar,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import { WeatherTypes, weatherOptions } from './constants'

export interface IWeatherProps {
  temp: number
  condition: WeatherTypes
}

export const Weather: React.FC<IWeatherProps> = (props) => {
  const { temp, condition } = props;
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient as unknown as string[]}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white" />
        <Text style={styles.temp}>
          {temp}
          °
        </Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  temp: {
    fontSize: 42,
    color: 'white',
  },
  title: {
    color: 'white',
    fontSize: 44,
    fontWeight: '300',
    marginBottom: 10,
    textAlign: 'left',
  },
  subtitle: {
    color: 'white',
    fontWeight: '600',
    fontSize: 24,
    textAlign: 'left',
  },
  textContainer: {
    paddingHorizontal: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

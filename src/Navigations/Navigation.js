import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WeatherForecast from "../Screens/Home/WeatherForecast";
import WeatherForecastList from "../Screens/Home/WeatherForecastList/WeatherForecastList";
import Alarm from "../Screens/Alarm/Alarm";
import StopClock from "../Screens/StopClock/StopClock";

const WeatherForecastStack = createNativeStackNavigator();


export function WeatherForecastStackScreen(props) {

  return (
    <WeatherForecastStack.Navigator screenOptions={{ headerShown: false }}>
      <WeatherForecastStack.Screen name="WeatherForecast" component={WeatherForecast}
                                   options={{ headerShown: false }} />
      <WeatherForecastStack.Screen name="WeatherForecastList" component={WeatherForecastList}
                                   options={{ headerShown: false }} />
    </WeatherForecastStack.Navigator>
  );

}

const AlarmStack = createNativeStackNavigator();


export function AlarmStackScreen(props) {

  return (
    <AlarmStack.Navigator screenOptions={{ headerShown: false }}>
      <AlarmStack.Screen name="Alarm" component={Alarm} options={{ headerShown: false }} />
    </AlarmStack.Navigator>
  );

}

const StopClockStack = createNativeStackNavigator();


export function StopClockStackScreen(props) {

  return (
    <StopClockStack.Navigator screenOptions={{ headerShown: false }}>
      <StopClockStack.Screen name="StopClock" component={StopClock} options={{ headerShown: false }} />

    </StopClockStack.Navigator>
  );

}

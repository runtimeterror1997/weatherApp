import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { WeatherForecastStackScreen, AlarmStackScreen, StopClockStackScreen } from "./Navigation";


export const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();


  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        title: "",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Weather") {
            iconName = focused ? "cloudy-night-sharp" : "cloudy-night-sharp";
          } else if (route.name === "AlarmSetting") {
            iconName = focused
              ? "alarm-sharp"
              : "alarm-sharp";
          } else if (route.name === "StopClockSetting") {
            iconName = focused ? "time-sharp" : "time-sharp";
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={22} color={color}
                           style={{ alignItems: "center", marginRight: -14 }} />;
        },
        tabBarStyle: { backgroundColor: "#b6b4b4" },
        tabBarActiveTintColor: "#3d3de1",
        tabBarInactiveTintColor: "#414040",
        tabBarHideOnKeyboard: true,
        tabBarIconStyle: { marginTop: 5 },
        tabBarLabelStyle: { marginBottom: 5 },
      })}>
      <Tab.Group>
        <Tab.Screen name="Weather" component={WeatherForecastStackScreen} />
        <Tab.Screen name="AlarmSetting" component={AlarmStackScreen} />
        <Tab.Screen name="StopClockSetting" component={StopClockStackScreen} />
      </Tab.Group>
    </Tab.Navigator>
  );
};

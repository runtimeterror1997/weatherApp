import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WeatherForecast from "./src/Screens/Home/WeatherForecast";
import WeatherForecastList from "./src/Screens/WeatherForecastList/WeatherForecastList";


const App = () => {
  const Home = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Home.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="WeatherForecast">
        <Home.Group screenOptions={{ headerShown: false }}>
          <Home.Screen
            name="WeatherForecast"
            component={WeatherForecast}
            options={{
              headerShown: false,
            }}
          />
          <Home.Screen
            name="WeatherForecastList"
            component={WeatherForecastList}
            options={{
              headerShown: false,
            }}
          />
        </Home.Group>
      </Home.Navigator>
    </NavigationContainer>

  );
};

export default App;

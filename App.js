import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WeatherForecast from "./src/Screens/Home/WeatherForecast";
import WeatherForecastList from "./src/Screens/Home/WeatherForecastList/WeatherForecastList";
import { NativeBaseProvider } from "native-base";
import { BottomNavigation } from "./src/Navigations/BottomNavigation";


const App = () => {
  const Home = createNativeStackNavigator();

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Home.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Home">
          <Home.Group screenOptions={{ headerShown: false }}>
            <Home.Screen
              name="Home"
              component={BottomNavigation}
              options={{
                title: "Home",
                headerShown: false,
              }}
            />
          </Home.Group>
        </Home.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;

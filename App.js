/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
  }
});

const App = () => {

  return (
      <ImageBackground source={require("./src/assets/background.png")}>
        <View style={styles.root}>

        </View>
      </ImageBackground>
  );
};

export default App;

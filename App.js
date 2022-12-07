/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useCallback, useState } from "react";
import { ActivityIndicator, Image, ImageBackground, StyleSheet, Text, TextInput, View } from "react-native";
import axios from "axios";
import moment from "moment";


const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    flexDirection: "column",
  },
  textInput: {
    height: 50,
    borderBottomWidth: 3,
    padding: 5,
    paddingVertical: 10,
    marginVertical: 100,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 16,
    fontSize: 19,
    borderBottomColor: "#6495ED",
  },
  infoView: {
    alignItems: "center",
  },
});

const App = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  //alert(JSON.stringify(data));

  const api = {
    key: "49c3e623784be539863459124f3b963d",
  };

  const weatherIcon = data?.weather?.[0]?.icon;

  const fetchData = useCallback(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${api?.key}`,
    }).then(res => {
      //alert(JSON.stringify(res?.data));
      setData(res?.data);
    }).catch(error => console.log(error)).finally(() => setLoading(false));
  }, [input, api?.key]);


  return (
    <View style={styles.root}>
      <ImageBackground style={styles.backgroundImage} source={require("./src/assets/backgroundimg.jpeg")}
                       resizeMode={"cover"}>
        <View>
          <TextInput
            placeholder={"Enter the city name and press Enter"}
            onChangeText={text => setInput(text)}
            value={input}
            placeholderTextColor={"#000"}
            onSubmitEditing={fetchData}
            style={styles.textInput}
          />
        </View>
        {loading && (
          <View>
            <ActivityIndicator size={"large"} color={"#6495ED"} />
          </View>)}
        {data && (
          <View style={styles.infoView}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 28, color: "#fff", fontWeight: "bold" }}>
                {`${data?.name}, ${data?.sys?.country}`}
              </Text>
              <Text style={{ fontSize: 18, color: "#fff", marginTop: 8 }}>
                {`(${data?.coord?.lat}, ${data?.coord?.lon})`}
              </Text>
            </View>
            <Text style={{ fontSize: 14, color: "#fff", marginVertical: 10 }}>
              {moment(new Date()).format(
                "MMM Do YYYY",
              )}
            </Text>
            <View>
              <Image source={{ uri: `https://openweathermap.org/img/w/${weatherIcon}.png` }}
                     style={{ width: 70, height: 70 }} alt={"hello"} />
            </View>
            <Text style={{
              fontSize: 20,
              color: "#fff",
              marginBottom: 5,
              fontWeight: "600",
              textTransform: "capitalize",
            }}>
              {`${data?.weather?.[0]?.main}, ${data?.weather?.[0]?.description}`}
            </Text>
            <Text style={{ fontSize: 22, color: "#fff", marginVertical: 5, fontWeight: "600" }}>
              {Math.round(data?.main?.temp)} ℃
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 18, color: "#fff", marginVertical: 5 }}>
                Humidity:
              </Text>
              <Text style={{ fontSize: 16, color: "#fff", marginVertical: 5, fontWeight: "600" }}>
                {` ${Math.round(data?.main?.humidity)}`} ℃
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 18, color: "#fff", marginVertical: 5 }}>
                Pressure:
              </Text>
              <Text style={{ fontSize: 16, color: "#fff", marginVertical: 5, fontWeight: "600" }}>
                {` ${Math.round(data?.main?.pressure)}`}
              </Text>
            </View>
            <Text style={{ fontSize: 16, color: "#fff", marginVertical: 10 }}>
              {`Min ${Math.round(data?.main?.temp_min)} ℃ / Max ${Math.round(data?.main?.temp_max)} ℃`}
            </Text>
          </View>
        )}
      </ImageBackground>
    </View>
  );
};

export default App;

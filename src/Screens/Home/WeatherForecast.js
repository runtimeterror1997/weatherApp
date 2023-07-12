import React, { useCallback, useState } from "react";
import axios from "axios";
import {
  ActivityIndicator,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import moment from "moment";
import { Center, Image, ScrollView } from "native-base";

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    flexDirection: "column",
  },
  iosTextInput: {
    height: 50,
    borderBottomWidth: 3,
    padding: 5,
    paddingVertical: 10,
    marginTop: 120,
    marginBottom: 30,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    fontSize: 16,
    borderBottomColor: "#6495ED",
  },
  androidTextInput: {
    height: 50,
    borderBottomWidth: 3,
    padding: 5,
    paddingVertical: 10,
    marginBottom: 20,
    marginTop: 70,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    fontSize: 16,
    borderBottomColor: "#6495ED",
  },
  infoView: {
    alignItems: "center",
  },
});

function WeatherForecast({ navigation }) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [open, setOpen] = useState(false);

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
      setData(res?.data);
      setOpen(true);
    }).catch(error => console.log(error)).finally(() => setLoading(false));
  }, [input, api?.key]);


  return (
    <View style={styles.root}>
      <ImageBackground style={styles.backgroundImage} source={require("../../assets/backgroundimg.jpeg")}
                       resizeMode={"cover"}>
        <View>
          <TextInput
            placeholder={"Enter the city name and press Enter"}
            onChangeText={text => setInput(text)}
            value={input}
            placeholderTextColor={"#000"}
            onSubmitEditing={fetchData}
            style={Platform.OS === "ios" ? styles.iosTextInput : styles.androidTextInput}
          />
        </View>
        {loading && (
          <View>
            <ActivityIndicator size={"large"} color={"#6495ED"} />
          </View>)}
        {open && (
          <ScrollView>
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
                  "LLLL",
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
                <Text style={{ fontSize: 16, color: "#fff", marginVertical: 7, fontWeight: "600" }}>
                  {` ${Math.round(data?.main?.humidity)}`} ℃
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 18, color: "#fff", marginVertical: 5 }}>
                  Pressure:
                </Text>
                <Text style={{ fontSize: 16, color: "#fff", marginVertical: 7, fontWeight: "600" }}>
                  {` ${Math.round(data?.main?.pressure)}`}
                </Text>
              </View>
              <Text style={{ fontSize: 16, color: "#fff", marginVertical: 10 }}>
                {`${Math.round(data?.main?.temp_min)} ℃ / ${Math.round(data?.main?.temp_max)} ℃`}
              </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("WeatherForecastList", {
              city: input,
            })} style={{ alignItems: "center" }}>
              <View style={{
                width: 290,
                alignItems: "center",
                borderWidth: 1,
                borderColor: "#fff",
                borderRadius: 25,
                backgroundColor: "#363642",
                paddingVertical: 8,
                paddingHorizontal: 10,
                marginHorizontal: 10,
                marginBottom: 20,
                marginTop: 25,
              }}>
                <Text style={{ color: "#fff", fontSize: 14, fontWeight: "bold" }}>View 5 Days Forecast for Every 3
                  Hour</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>)}
      </ImageBackground>
    </View>
  );
}

export default WeatherForecast;

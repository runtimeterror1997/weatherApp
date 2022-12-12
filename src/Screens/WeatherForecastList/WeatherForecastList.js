import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import axios from "axios";
import moment from "moment";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  weatherCard: {
    marginTop: 20,
    marginHorizontal: 5,
    shadowColor: "#000",
    borderColor: "#797676",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 3,
  },
});

function WeatherForecastList({ route, navigation }) {
  const params = route?.params;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [dataList, setDataList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const api = {
    key: "49c3e623784be539863459124f3b963d",
  };

  useEffect(() => {
    if (params) {
      fetchDataList();
    }
  }, [params, api?.key]);

  const fetchDataList = () => {
    setLoading(true);
    axios({
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/forecast?q=${params?.city}&units=metric&appid=${api?.key}`,
    }).then(res => {
      setData(res?.data);
      setDataList(res?.data?.list);
    }).catch(error => console.log(error)).finally(() => setLoading(false));
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchDataList();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 10,
          marginBottom: 25,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon
            size={30}
            name="chevron-back"
            type="ionicon"
            color="#000"
          />
          <Text
            style={{
              color: "#000",
              fontSize: 14,
              fontWeight: "600",
              marginRight: "10%",
              //marginLeft: "2%",
            }}>
            Back
          </Text>
        </TouchableOpacity>
      </View>
      {loading && (
        <View>
          <ActivityIndicator size={"large"} color={"#6495ED"} />
        </View>)}
      {data?.city &&
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#000" }}>
          {`${data?.city?.name}, ${data?.city?.country} (${data?.city?.coord?.lat}, ${data?.city?.coord?.lon})`}
        </Text>
      </View>}
      {dataList.length > 0 && (
        <FlatList
          data={dataList}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          // onEndReached={(e) => {
          //   if (meta?.last_page > page) {
          //     setPage(page + 1);
          //   }
          // }}
          contentContainerStyle={{ paddingBottom: 350 }}
          renderItem={({ item, index }) => (
            <View style={styles.weatherCard} key={item?.key}>
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "bold",
                    marginTop: 5,
                    color: "#000",
                  }}>{moment(item?.dt_txt).format(
                  "LLLL",
                )}</Text>
              </View>
              <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 3,
              }}>
                <Text style={{
                  fontSize: 14,
                  color: "#000",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}>{`${item?.weather?.[0]?.main}, ${item?.weather?.[0]?.description}`}</Text>
                <View style={{ paddingRight: 30 }}>
                  <Image source={{ uri: `https://openweathermap.org/img/w/${item?.weather?.[0]?.icon}.png` }}
                         style={{ width: 40, height: 40 }} />
                </View>
              </View>
              <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 5,
              }}>
                <Text style={{ fontSize: 12, color: "#000" }}>Temperature: {Math.round(item?.main?.temp)} ℃</Text>
                <Text style={{ fontSize: 12, color: "#000" }}>Humidity: {Math.round(item?.main?.humidity)} ℃</Text>
                <Text style={{ fontSize: 12, color: "#000" }}>Pressure: {Math.round(item?.main?.pressure)}</Text>
              </View>
              <View style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                marginTop: 10,
              }}>
                <Text style={{
                  fontSize: 14,
                  color: "#000",
                }}>{`Min ${Math.round(item?.main?.temp_min)} ℃ / Max ${Math.round(item?.main?.temp_max)} ℃`}</Text>
              </View>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
}

export default WeatherForecastList;

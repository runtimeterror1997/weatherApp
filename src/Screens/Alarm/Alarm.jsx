import React from "react";
import SafeAreaView from "react-native/Libraries/Components/SafeAreaView/SafeAreaView";
import { Avatar, Box, Center, Flex, Switch, Text } from "native-base";
import { TouchableOpacity, View } from "react-native";
import { BoxStyles } from "./Stylesheet";

function Alarm({ navigation }) {
  return (
    <SafeAreaView>
      <Center marginTop={10}>
        <Text fontSize={18} fontWeight={700} color={"#030365"} marginBottom={3}>Your Alarm</Text>
        <Box width="93%" marginY={1} padding={2}
             style={BoxStyles.box}>
          <Text fontSize={14} color={"#7a7373"}>Weekend</Text>
          <Flex direction={"row"} justifyContent={"space-between"} paddingY={2} paddingX={3}>
            <Flex direction={"row"} alignContent={"center"}>
              <Text fontSize={28} fontWeight={600} color={"#030344"}>
                9: 30
              </Text>
              <Text fontSize={20} fontWeight={500} color={"#030344"} marginTop={2} marginLeft={1}>
                AM
              </Text>
            </Flex>
            <View>
              <Switch size="sm" trackColor={"#3d3de1"} />
            </View>
          </Flex>
          <Text fontSize={14} color={"#030344"} paddingX={3}>Wake up</Text>
        </Box>
        <Box width="93%" marginY={1} padding={2}
             style={BoxStyles.box}>
          <Text fontSize={14} color={"#7a7373"}>Weekdays</Text>
          <Flex direction={"row"} justifyContent={"space-between"} paddingY={2} paddingX={3}>
            <Flex direction={"row"} alignContent={"center"}>
              <Text fontSize={28} fontWeight={600} color={"#030344"}>
                7: 30
              </Text>
              <Text fontSize={20} fontWeight={500} color={"#030344"} marginTop={2} marginLeft={1}>
                AM
              </Text>
            </Flex>
            <View>
              <Switch size="sm" trackColor={"#3d3de1"} />
            </View>
          </Flex>
          <Text fontSize={14} color={"#030344"} paddingX={3}>Wake up</Text>
        </Box>
        <Box width="93%" marginY={1} padding={2}
             style={BoxStyles.box}>
          <Text fontSize={14} color={"#7a7373"}>Today</Text>
          <Flex direction={"row"} justifyContent={"space-between"} paddingY={2} paddingX={3}>
            <Flex direction={"row"} alignContent={"center"}>
              <Text fontSize={28} fontWeight={600} color={"#030344"}>
                12: 30
              </Text>
              <Text fontSize={20} fontWeight={500} color={"#030344"} marginTop={2} marginLeft={1}>
                PM
              </Text>
            </Flex>
            <View>
              <Switch size="sm" trackColor={"#030365"} />
            </View>
          </Flex>
          <Text fontSize={14} color={"#030344"} paddingX={3}>Team Meeting</Text>
        </Box>
      </Center>
      <Center marginTop={"30%"}>
        <TouchableOpacity onPress={() => navigation.navigate("CreateAlarm")}>
          <Avatar bg={"#030365"} size={"md"} shadow={3}><Text
            style={{ fontSize: 24, color: "#fff", fontWeight: 'bold' }}>+</Text></Avatar>
        </TouchableOpacity>
      </Center>
    </SafeAreaView>
  );
}

export default Alarm;

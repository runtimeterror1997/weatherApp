import React, { useState } from "react";
import { SafeAreaView, TouchableOpacity, View } from "react-native";
import { Box, Button, Center, Checkbox, Flex, Input, Stack, Text } from "native-base";
import { Icon } from "react-native-elements";
import DatePicker from "react-native-date-picker";
import { BoxStyles } from "./Stylesheet";


const days = [{ name: "Mon", val: "monday" },
  { name: "Tue", val: "tuesday" }, { name: "Wed", val: "wednesday" },
  { name: "Thu", val: "thursday" }, { name: "Fri", val: "friday" },
  { name: "Sat", val: "saturday" }, { name: "Sun", val: "sunday" }];

function CreateAlarm({ navigation }) {
  const [date, setDate] = useState(new Date());

  return (
    <SafeAreaView>
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
      <Center marginTop={5}>
        <Text marginBottom={5} fontSize={18} fontWeight={700} color={"#030365"}>Set Your Alarm</Text>
        <Box style={BoxStyles.box} width="93%">
          <Center>
            <DatePicker
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
              open={true}
              date={date}
              mode={"time"}
              androidVariant={"nativeAndroid"}
              //maximumDate={new Date()}
              onDateChange={(date) => {
                setDate(date);
              }}
              // onConfirm={(date) => {
              //   setDate(date);
              // }}
            />
          </Center>
        </Box>
      </Center>
      <Flex direction={"row"} justifyContent={"space-between"} marginX={3} marginTop={3}>
        <View>
          <Checkbox isChecked colorScheme="green">
            Everyday
          </Checkbox>
        </View>
        <View>
          <Checkbox isChecked colorScheme="green">
            Weekdays
          </Checkbox>
        </View>
        <View>
          <Checkbox isChecked colorScheme="green">
            Weekend
          </Checkbox>
        </View>
      </Flex>
      <Flex direction={"row"} marginX={3} marginTop={5}>
        {days?.map((day) => (
          <Box width="12%" height={16} style={BoxStyles.box} marginX={1} padding={1}>
            <Text textAlign={"center"} paddingTop={4} color={"#030344"} fontWeight={700}>{day?.name}</Text>
          </Box>
        ))}
      </Flex>
      <Center marginX={3} marginTop={5}>
        <Input size={"xl"} placeholder="Alarm Name" w="100%"/>
      </Center>
      <Stack direction={"row"} align={"right"} justifyContent={"flex-end"} marginX={3} marginTop={5}>
        <Button backgroundColor={'#030365'} width={"20%"}>Save</Button>
      </Stack>
    </SafeAreaView>
  );
}

export default CreateAlarm;

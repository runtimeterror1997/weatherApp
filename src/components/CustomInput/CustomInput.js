import React from "react";
import { Platform, StyleSheet, Text, TextInput, View } from "react-native";

const CustomInput = (props) => {
  const {
    field: { name, onBlur, onChange, value, multiline, numberOfLines },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];

  return (
    <>
      <TextInput
        style={[styles.textInput, hasError && styles.errorInput]}
        value={value}
        multiline={multiline}
        numberOfLines={numberOfLines}
        selectionColor={"#EA4160"}
        onChangeText={(text) => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        {...inputProps}
      />
      {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    ...Platform.select({
      ios: {
        height: 300,
      },
      android: {
        height: 80,
      },
    }),
    width: "100%",
    margin: 10,
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
  errorText: {
    fontSize: 10,
    color: "red",
  },
  errorInput: {
    borderColor: "red",
  },
});

export default CustomInput;

export const PickerInput = (props) => {
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];

  return (
    <>
      <View style={{ flexDirection: "column", width: "30.33%" }}>
        <TextInput
          style={[pickerStyles.textInput, hasError && pickerStyles.errorInput]}
          value={value}
          selectionColor={"#EA4160"}
          onChangeText={(text) => onChange(name)(text)}
          onBlur={() => {
            setFieldTouched(name);
            onBlur(name);
          }}
          {...inputProps}
        />
        {hasError && <Text style={pickerStyles.errorText}>{errors[name]}</Text>}
      </View>
    </>
  );
};

const pickerStyles = StyleSheet.create({
  textInput: {
    ...Platform.select({
      ios: {
        height: 300,
      },
      android: {
        height: 80,
      },
    }),
    width: "100%",
    margin: 10,
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
  errorText: {
    fontSize: 10,
    color: "red",
  },
  errorInput: {
    borderColor: "red",
  },
});

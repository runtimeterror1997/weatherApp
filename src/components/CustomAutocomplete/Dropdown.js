import React from "react";
import { StyleSheet } from "react-native";
import { SelectCountry } from "react-native-element-dropdown";

const DropdownScreen = (props) => {
  const {
    listData,
    value,
    valueField,
    style,
    labelField,
    searchPlaceholder,
    placeholder,
    imageField,
    onChange,
  } = props;

  return (
    <SelectCountry
      style={style}
      selectedTextStyle={styles.selectedTextStyle}
      selectedStyle={styles.selectedStyle}
      placeholderStyle={styles.placeholderStyle}
      imageStyle={styles.imageStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      containerStyle={styles.containerStyle}
      maxHeight={200}
      value={value}
      data={listData}
      valueField={valueField}
      labelField={labelField}
      imageField={imageField}
      placeholder={placeholder}
      //searchPlaceholder={searchPlaceholder}
      onChange={onChange}
    />
  );
};

export default DropdownScreen;

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
  },
  imageStyle: {
    width: 24,
    height: 24,
  },
  placeholderStyle: {
    fontSize: 16,
    color: "#000",
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 8,
    color: "#000",
  },
  containerStyle: {
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  iconStyle: {
    width: 20,
    height: 20,
    color: "#fff",
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: "#fff",
  },
  selectedStyle: {
    color: "#0c0909",
  },
});

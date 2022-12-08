import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const BackButtonIcon = ({navigation}) => {
  return (
    <Ionicons
      name="chevron-back"
      onPress={() => navigation.goBack()}
      size={30}
      color="white"
    />
  );
};

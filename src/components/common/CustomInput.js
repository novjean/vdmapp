import React from 'react';
import { TextInput, View, Text } from 'react-native';

const CustomInput = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 25,
    paddingLeft: 20,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 12,
    paddingLeft: 20,
    paddingBottom: 10,
    flex: 1
  },
  containerStyle: {
    paddingTop: 10,
    height: 50,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start'
  }
};

export { CustomInput };

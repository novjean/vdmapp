import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

//TouchableOpacity is just a button which gives some feedback to the user
const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

//alignSelf is to position itself using some flex box rules
//borderRadius will give a nice rounded borders
const styles = {
  textStyle: {
    alignSelf: 'center',
    // color: '#007aff',
    color: '#a40234',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#a40234',
    marginLeft: 5,
    marginRight: 5
  }
};

export { Button };

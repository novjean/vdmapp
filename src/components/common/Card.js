import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
      borderWidth: 1, //Give a border around the component
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth: 0, //Hide the bottom entirely
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,  //Rounding up the corners
      elevation: 1,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 5,
      marginBottom: 5
  }
};

export { Card };

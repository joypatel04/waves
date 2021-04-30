import React from 'react';
import {View, StyleSheet} from 'react-native';

export default function Spacer(props) {
  const spacingMultiplier = 8;

  const spacer = {
    marginLeft: props.x ? spacingMultiplier * props.x : null,
    marginTop: props.y ? spacingMultiplier * props.y : null,
  };

  const combineStyles = StyleSheet.flatten([spacer, styles]);

  return <View style={combineStyles} />;
}

const styles = StyleSheet.create({
  spacer: {
    height: 1,
    width: 1,
  },
});

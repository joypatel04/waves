import React from 'react';
import {View, StyleSheet} from 'react-native';

export default function Spacer(props) {
  const spacingMultiplier = 8;

  const style = StyleSheet.create({
    spacer: {
      height: 1,
      width: 1,
      marginLeft: props.x ? spacingMultiplier * props.x : null,
      marginTop: props.y ? spacingMultiplier * props.y : null,
    },
  });

  return <View style={style.spacer}></View>;
}

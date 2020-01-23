import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class PropsExamplePresentational extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.myValue}</Text>
      </View>
    );
  }
}

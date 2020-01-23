import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class HelloWorld extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <Text>Hello World</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

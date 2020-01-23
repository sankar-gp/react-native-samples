import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Alert
} from "react-native";

export default class TextInputExample extends Component {
  state = {
    username: "user name",
    password: "password"
  };

  _onPressOpacity = () => {
    Alert.alert("This is touchable Opacity");
  };

  _onPressHighlight = () => {
    Alert.alert("This is touchable highlight");
  };
  render() {
    return (
      <View style={styles.mainView}>
        <TextInput
          placeholder="Enter username"
          underlineColorAndroid="transparent"
          placeholderTextColor="#9a73ef"
          onChangeText={text => this.setState({ username: text })}
        />

        <TextInput
          placeholder="Enter password"
          underlineColorAndroid="transparent"
          placeholderTextColor="#9a73ef"
          onChangeText={passwordVal => {
            this.setState({ password: passwordVal });
          }}
        />

        <Text>username ::: {this.state.username}</Text>
        <Text>password ::: {this.state.password}</Text>

        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.buttonView1}
            onPress={this._onPressOpacity}
          >
            <Text style={styles.fontColor1}>Click - Touchable Opacity</Text>
          </TouchableOpacity>

          <TouchableHighlight
            style={styles.buttonView1}
            onPress={this._onPressHighlight}
          >
            <Text style={styles.fontColor1}>Click - Touchable Highlight</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1
  },
  buttonView: {
    marginTop: 20
  },
  buttonView1: {
    backgroundColor: "red",
    margin: 10
  },
  fontColor1: {
    marginTop: 20,
    fontSize: 20,
    color: "white",
    padding: 10,
    textAlign: "center"
  }
});

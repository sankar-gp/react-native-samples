import React, { Component } from "react";
import { Text, View } from "react-native";
import PropsExamplePresentational from "./StatePropsExamplePresentational";

// The state is mutable while props are immutable. This means that state can be updated in the future while props cannot be updated.

export default class PropsExample extends Component {
  state = {
    myState: "Click here to change the state"
  };

  updateState = () => {
    this.setState({ myState: "Hello Sankar" });
  };

  render() {
    return (
      <View>
        <Text style={{ fontSize: 30 }} onPress={this.updateState}>
          {this.state.myState}
        </Text>
        <PropsExamplePresentational myValue={this.state.myState} />
        <PropsExamplePresentational myValue="this is using props - Value will not get updated" />
      </View>
    );
  }
}

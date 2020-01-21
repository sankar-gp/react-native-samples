import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import { create } from "react-test-renderer";
import { connect } from "react-redux";

class ReduxExample extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <TouchableHighlight onPress={() => this.props.increaseMethod()}>
          <Text style={{ fontSize: 20 }}>Increase</Text>
        </TouchableHighlight>
        <Text style={{ fontSize: 20 }}>{this.props.counter}</Text>
        <TouchableHighlight onPress={() => this.props.decreaseMethod()}>
          <Text style={{ fontSize: 20 }}>Decrease</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

function mapStateToProps(state){
    return{
        counter : state.counter
    };
}

function mapDispatchToProps(dispatch) {
    return {
      increaseMethod: () => dispatch({type: 'INCREASE'}),
      decreaseMethod: () => dispatch({type: 'DECREASE'}),
    };
  }

  export default connect(mapStateToProps,mapDispatchToProps)(ReduxExample);


const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-around"
  }
});



import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class FlexExamples extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.viewA}>
          <View style={styles.viewAa}>
            <Text style={styles.fontSize}>H</Text>
          </View>

          <View>
            <Text style={styles.fontSize}>E</Text>
          </View>

          <View>
            <Text style={styles.fontSize}>L</Text>
          </View>

          <View>
            <Text style={styles.fontSize}>L</Text>
          </View>

          <View>
            <Text style={styles.fontSize}>O</Text>
          </View>
        </View>
        <View style={styles.viewB}>
          <View style={styles.viewAa}>
            <Text style={styles.fontSize}>H</Text>
          </View>

          <View>
            <Text style={styles.fontSize}>E</Text>
          </View>

          <View>
            <Text style={styles.fontSize}>L</Text>
          </View>

          <View>
            <Text style={styles.fontSize}>L</Text>
          </View>

          <View>
            <Text style={styles.fontSize}>O</Text>
          </View>
        </View>
        <View style={styles.viewC}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#f6bcd8",
    flexDirection: "column" //row,column, row-reverse,column-reverse
  },
  viewA: {
    flex: 1,
    backgroundColor: "#2b1345",
    justifyContent: "space-evenly", //flex-start, center, flex-end, space-between,space-around, space-evenly
    flexDirection: "row"
  },
  viewB: {
    flex: 2,
    backgroundColor: "#442599",
    alignItems: "baseline", //flex-start, stretch, flex-end, center, baseline
    flexDirection: "row"
  },
  viewC: {
    flex: 3,
    backgroundColor: "#800000"
  },
  fontSize: {
    fontSize: 20,
    color: "white"
  },
  viewAa: {},
  viewAb: {},
  viewAc: {},
  viewAd: {}
});

import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

export default class ScrollViewExample extends Component {
  render() {
    return (
      <View>
        <Text>This is an Example of Scroll View</Text>

        <ScrollView style={{ marginTop: 20, backgroundColor: "#75cb84" }}>
          <Text style={styles.textView}>S</Text>
          <Text style={styles.textView}>C</Text>
           <Text style={styles.textView}>R</Text>
           <Text style={styles.textView}>O</Text>
           <Text style={styles.textView}>L</Text>
           <Text style={styles.textView}>L</Text>
           <Text style={styles.textView}> </Text>
           <Text style={styles.textView}>V</Text>
           <Text style={styles.textView}>I</Text>
           <Text style={styles.textView}>E</Text>
           <Text style={styles.textView}>W</Text>
           <Text style={styles.textView}> </Text>
           <Text style={styles.textView}>E</Text>
           <Text style={styles.textView}>X</Text>
           <Text style={styles.textView}>A</Text>
           <Text style={styles.textView}>M</Text>
           <Text style={styles.textView}>P</Text>
           <Text style={styles.textView}>L</Text>
           <Text style={styles.textView}>E</Text>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textView: { marginTop: 20, fontSize: 20, textAlign: 'center' }
});

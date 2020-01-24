import React, { Component } from "react";
import { Text, View, StyleSheet, FlatList, Alert } from "react-native";

const movieListJson = require("./assets/movieList.json");

export default class FlatListExample extends Component {
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          marginTop: 10,
          marginBottom: 10,
          width: "100%",
          backgroundColor: "#000"
        }}
      />
    );
  };

  //handling onPress action
  getListViewItem = item => {
    Alert.alert(item.name);
  };

  render() {
    const data = movieListJson.movies;
    return (
      <View style={styles.mainView}>
        <Text>FlatList</Text>

        <FlatList
          data={data}
          showsVerticalScrollIndicator={true}
          renderItem={({ item }) => (
            <View>
              <Text onPress={this.getListViewItem.bind(this, item)}>
                {item.name}
              </Text>
              <Text>{item.title}</Text>
            </View>
          )}
          keyExtractor={item => item.name}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1
  }
});

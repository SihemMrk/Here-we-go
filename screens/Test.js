import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryName: "",
      regionName: ""
    };
  }

  componentDidMount() {
    var url =
      "http://api.ipstack.com/98.14.234.113?access_key=bf58590dcdf38ab01585f179e5d85bf2&format=1";
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        //console.log(responseJson);
        this.setState({
          countryName: responseJson.country_name,
          regionName: responseJson.region_name
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Country: {this.state.countryName}</Text>
        <Text>Region: {this.state.regionName}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

AppRegistry.registerComponent("Test", () => Test);

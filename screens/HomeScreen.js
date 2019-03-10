import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity
} from "react-native";

import { Menu } from "../components/Menu";

import { AsyncStorage } from "react-native";

import { NetworkInfo } from "react-native-network-info";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      currentValue: 0,
      rate: {},
      date: "",
      countryName: "",
      regionName: ""
    };
  }

  componentDidMount() {
    var that = this;
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var hours = new Date().getHours();
    var min = new Date().getMinutes();
    var sec = new Date().getSeconds();
    that.setState({
      date:
        date + "/" + month + "/" + year + " " + hours + ":" + min + ":" + sec
    });

    fetch("https://api.exchangeratesapi.io/latest")
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson.rates.USD);
        this.setState(
          {
            rate: responseJson.rates
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
    fetch("https://api.ipify.org?format=json")
      .then(response => response.json())
      .then(responseJSON => {
        console.log(responseJSON.ip);
        let url =
          "http://api.ipstack.com/" +
          responseJSON.ip +
          "?access_key=bf58590dcdf38ab01585f179e5d85bf2&format=1";
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
      });
  }

  getUserCountry = async () => {
    let country = "";
    try {
      userId = (await AsyncStorage.getItem("country")) || "none";
    } catch (error) {
      console.log(error.message);
    }
    return country;
  };

  getUserCurrency = async () => {
    let currency = "";
    try {
      userId = (await AsyncStorage.getItem("currency")) || "none";
    } catch (error) {
      console.log(error.message);
    }
    return currency;
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.page}>
        <View style={styles.homeTitle}>
          <Text style={styles.location}>
            {this.state.regionName}, {this.state.countryName}
          </Text>
        </View>
        <ScrollView style={styles.contentContainer}>
          <Text style={styles.currentEx}> Exchange rate :</Text>
          <View style={styles.convertLine}>
            <TextInput
              style={{ ...styles.input, backgroundColor: "#ffffff" }}
              keyboard-type="default"
              onChangeText={currentValue => this.setState({ currentValue })}
              placeholder="1"
            />
            <Text style={styles.currency}>€</Text>
          </View>
          <Text style={styles.equalSign}>=</Text>
          <View style={styles.convertLine}>
            <Text style={styles.input}>{this.state.rate.USD}</Text>
            <Text style={styles.currency}>$</Text>
          </View>
          <Text style={styles.deviseToBase}>(1 USD = 0,8842 EUR)</Text>
        </ScrollView>
        <View style={styles.footer}>
          <Text style={styles.update}>Last update: {this.state.date}</Text>
        </View>
        <Menu navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  showMore: {
    backgroundColor: "blue",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 12,
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    overflow: "hidden",
    padding: 12
  },
  page: {
    flexDirection: "column",
    backgroundColor: "#ebf0f6",
    flex: 1
  },
  homeTitle: {
    flex: 0.2,
    justifyContent: "center",
    color: "#364e68"
  },
  contentContainer: {
    paddingTop: 30,
    flex: 0.7
  },
  update: {
    marginBottom: 20,
    fontSize: 20,
    marginLeft: 10,
    textAlign: "left",
    color: "#343434"
  },
  footer: {
    flex: 0.1,
    justifyContent: "flex-end"
  },
  location: {
    marginTop: 10,
    fontSize: 30,
    textAlign: "center",
    fontFamily: "noto-serif"
  },
  deviseToBase: {
    fontSize: 12,
    marginTop: 15,
    marginLeft: 200,
    color: "#343434"
    // textAlign: "center"
  },
  currentEx: {
    textAlign: "center",
    fontSize: 24,
    color: "#343434"
  },
  convertLine: {
    marginTop: 10,
    marginBottom: 10,
    flex: 0.7,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    fontSize: 60,
    width: 270,
    textAlign: "center",
    borderStyle: "solid",
    borderColor: "#364e68",
    borderWidth: 2,
    borderRadius: 23,
    flex: 0.8
  },
  currency: {
    fontSize: 25,
    paddingLeft: 5,
    color: "#666666"
  },
  equalSign: {
    textAlign: "center",
    fontSize: 25,
    color: "#777777"
  }
});

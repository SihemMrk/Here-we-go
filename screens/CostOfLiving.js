import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";

export default class CostOfLiving extends React.Component {
  static navigationOptions = {
    title: ""
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Text style={styles.title}>How much is it ?</Text>
        <View style={styles.bigDiv} />
        <View style={styles.itemList}>
          <Button title="+" />
          <Text style={styles.category1}>Food</Text>
        </View>
        <View style={styles.lineStyle} />
        <View style={styles.itemList}>
          <Button title="+" />
          <Text style={styles.category}>Housing</Text>
        </View>
        <View style={styles.lineStyle} />
        <View style={styles.itemList}>
          <Button title="+" />
          <Text style={styles.category}>Clothes</Text>
        </View>
        <View style={styles.lineStyle} />
        <View style={styles.itemList}>
          <Button title="+" />
          <Text style={styles.category}>Transportation</Text>
        </View>
        <View style={styles.lineStyle} />
        <View style={styles.itemList}>
          <Button title="+" />
          <Text style={styles.category}>Personal Care</Text>
        </View>
        <View style={styles.lineStyle} />
        <View style={styles.itemList}>
          <Button title="+" />
          <Text style={styles.category}>Entertainment</Text>
        </View>
        <View style={styles.lineStyle2} />
        <View>
          <Text style={styles.total}>TOTAL</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigDiv: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    marginTop: 20,
    fontSize: 40,
    color: "#364e68",
    fontFamily: "TimesNewRomanPSMT"
  },
  lineStyle: {
    marginTop: 15,
    borderWidth: 0.2,
    borderColor: "#3c415e",
    backgroundColor: "#ebf0f6"
  },
  lineStyle2: {
    marginTop: 15,
    borderWidth: 0.5,
    borderColor: "#3c415e",
    backgroundColor: "#ebf0f6"
  },
  category1: {
    flex: 0.8,
    fontFamily: "Palatino",
    fontSize: 20,
    textAlign: "center",
    marginTop: 30
  },
  category: {
    flex: 0.8,
    fontFamily: "Palatino",
    fontSize: 20,
    textAlign: "center",
    marginTop: 20
  },
  total: {
    fontFamily: "Palatino",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    marginTop: 30
  },
  itemList: {
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center"
  },
  button: {
    flex: 0.2
  }
});

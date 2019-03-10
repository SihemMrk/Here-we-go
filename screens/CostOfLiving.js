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
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text style={styles.title}>How much is it ?</Text>
        <View style={styles.bigDiv} />
        <View style={styles.itemList}>
          <Button title="+" onPress={() => navigate("Food")} />
          <Text style={styles.category1}>Food</Text>
          <Text style={styles.percentage}> + 2% </Text>
        </View>
        <View style={styles.lineStyle} />
        <View style={styles.itemList}>
          <Button title="+" onPress={() => navigate("Housing")} />
          <Text style={styles.category}>Housing</Text>
          <Text style={styles.percentage}> + 2% </Text>
        </View>
        <View style={styles.lineStyle} />
        <View style={styles.itemList}>
          <Button title="+" onPress={() => navigate("Clothes")} />
          <Text style={styles.category}>Clothes</Text>
          <Text style={styles.percentage}> + 2% </Text>
        </View>
        <View style={styles.lineStyle} />
        <View style={styles.itemList}>
          <Button title="+" onPress={() => navigate("Transportation")} />
          <Text style={styles.category}>Transportation</Text>
          <Text style={styles.percentage}> + 2% </Text>
        </View>
        <View style={styles.lineStyle} />
        <View style={styles.itemList}>
          <Button title="+" onPress={() => navigate("PersonalCare")} />
          <Text style={styles.category}>Personal Care</Text>
          <Text style={styles.percentage}> + 2% </Text>
        </View>
        <View style={styles.lineStyle} />
        <View style={styles.itemList}>
          <Button title="+" onPress={() => navigate("Entertainment")} />
          <Text style={styles.category}>Entertainment</Text>
          <Text style={styles.percentage}> + 2% </Text>
        </View>
        <View style={styles.lineStyle2} />
        <View style={styles.totalDiv}>
          <Text style={styles.total}>TOTAL</Text>
          <Text style={styles.percentage}> + 2% </Text>
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
    color: "#364e68"
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
    flex: 0.6,
    fontSize: 20,
    textAlign: "center",
    marginTop: 30
  },
  category: {
    flex: 0.6,
    fontSize: 20,
    textAlign: "center",
    marginTop: 20
  },
  totalDiv: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  total: {
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 20,
    marginLeft: 15
  },
  itemList: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  button: {
    marginTop: 10,
    flex: 0.2
  },
  percentage: {
    marginTop: 10,
    flex: 0.2
  },
  percentage2: {
    marginTop: 25,
    marginRight: 30,
    fontWeight: "bold",
    fontSize: 30
  }
});

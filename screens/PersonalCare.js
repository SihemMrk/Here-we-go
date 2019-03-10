import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
  TouchableHighlight
} from "react-native";

export default class Housing extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text style={styles.title}>Personal Care</Text>
        <View style={styles.bigDiv} />
        <View style={styles.itemList}>
          <Text style={styles.category1}>1 box of antibiotics (12 doses)</Text>
          <Text style={styles.priceOwn}>164€</Text>
          <Text style={styles.priceOther}>132€</Text>
          <Text style={styles.percentage}> + 25% </Text>
        </View>
        <View style={styles.lineStyle} />
        <View style={styles.itemList}>
          <Text style={styles.category}>
            Short visit to private Doctor (15 minutes)
          </Text>
          <Text style={styles.priceOwn}>22€</Text>
          <Text style={styles.priceOther}>27€</Text>
          <Text style={styles.percentage}> - 21% </Text>
        </View>
        <View style={styles.lineStyle} />
        <View style={styles.itemList}>
          <Text style={styles.category}>4 rolls of toilet paper</Text>
          <Text style={styles.priceOwn}>5€</Text>
          <Text style={styles.priceOther}>7€</Text>
          <Text style={styles.percentage}> + 2% </Text>
        </View>
        <View style={styles.lineStyle} />
        <View style={styles.itemList}>
          <Text style={styles.category}>
            Hair shampoo 2-in-1 (400 ml ~ 12 oz.)
          </Text>
          <Text style={styles.priceOwn}>5€</Text>
          <Text style={styles.priceOther}>7€</Text>
          <Text style={styles.percentage}> + 2% </Text>
        </View>
        <View>
          <Text style={styles.conclusion}>
            Personal Care in Paris (France) is 42% more expensive than in NY
            (USA)
          </Text>
        </View>
        <View>
          <TouchableHighlight title="" onPress={() => navigate("CostOfLiving")}>
            <Image
              source={require("../assets/images/back.png")}
              style={{ width: 20, height: 20, marginLeft: 20, marginTop: 200 }}
            />
          </TouchableHighlight>
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
    marginTop: 50,
    fontSize: 40,
    color: "#364e68"
  },
  lineStyle: {
    marginTop: 15,
    borderWidth: 0.2,
    borderColor: "#3c415e",
    backgroundColor: "#ebf0f6"
  },
  category1: {
    flex: 0.4,
    fontSize: 15,
    textAlign: "center",
    marginTop: 30
  },
  category: {
    flex: 0.4,
    fontSize: 15,
    textAlign: "center",
    marginTop: 20
  },
  itemList: {
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center"
  },
  priceOwn: {
    marginLeft: 10,
    flex: 0.2
  },
  priceOther: {
    flex: 0.2
  },
  percentage: {
    flex: 0.2
  },
  conclusion: {
    fontSize: 20,
    marginTop: 40,
    marginLeft: 15,
    marginRight: 15,
    textAlign: "center"
  }
});

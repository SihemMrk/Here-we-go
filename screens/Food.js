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

export default class Food extends React.Component {
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
        <Text style={styles.title}>Food</Text>
        <View style={styles.bigDiv} />
        <View style={styles.itemList}>
          <Text style={styles.category1}>Big Mac</Text>
          <Text style={styles.priceOwn}>5€</Text>
          <Text style={styles.priceOther}>7€</Text>
          <Text style={styles.percentage}> + 2% </Text>
        </View>
        <View style={styles.lineStyle} />
        <View style={styles.itemList}>
          <Text style={styles.category}>1 liter of whole fat milk</Text>
          <Text style={styles.priceOwn}>5€</Text>
          <Text style={styles.priceOther}>7€</Text>
          <Text style={styles.percentage}> + 2% </Text>
        </View>
        <View style={styles.lineStyle} />
        <View style={styles.itemList}>
          <Text style={styles.category}>12 large eggs</Text>
          <Text style={styles.priceOwn}>5€</Text>
          <Text style={styles.priceOther}>7€</Text>
          <Text style={styles.percentage}> + 2% </Text>
        </View>
        <View style={styles.lineStyle} />
        <View style={styles.itemList}>
          <Text style={styles.category}>1 kg of apples</Text>
          <Text style={styles.priceOwn}>5€</Text>
          <Text style={styles.priceOther}>7€</Text>
          <Text style={styles.percentage}> + 2% </Text>
        </View>
        <View style={styles.lineStyle} />
        <View style={styles.itemList}>
          <Text style={styles.category}>1 kg of potatoes</Text>
          <Text style={styles.priceOwn}>5€</Text>
          <Text style={styles.priceOther}>7€</Text>
          <Text style={styles.percentage}> + 2% </Text>
        </View>
        <View style={styles.lineStyle} />
        <View style={styles.itemList}>
          <Text style={styles.category}>2 liters of Coca-Cola</Text>
          <Text style={styles.priceOwn}>5€</Text>
          <Text style={styles.priceOther}>7€</Text>
          <Text style={styles.percentage}> + 2% </Text>
        </View>
        <View>
          <Text style={styles.conclusion}>
            Food in Paris (France) is 42% more expensive than in NY (USA)
          </Text>
        </View>
        <TouchableHighlight title="" onPress={() => navigate("CostOfLiving")}>
          <Image
            source={require("/Users/Sihem/projects/Here-we-go/assets/images/back.png")}
            style={{
              width: 20,
              height: 20,
              marginLeft: 20,
              marginTop: 120
            }}
          />
        </TouchableHighlight>
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
    color: "#364e68",
    fontFamily: "TimesNewRomanPSMT"
  },
  lineStyle: {
    marginTop: 15,
    borderWidth: 0.2,
    borderColor: "#3c415e",
    backgroundColor: "#ebf0f6"
  },
  category1: {
    flex: 0.4,
    fontFamily: "Palatino",
    fontSize: 15,
    textAlign: "center",
    marginTop: 30
  },
  category: {
    flex: 0.4,
    fontFamily: "Palatino",
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
    fontFamily: "Palatino",
    fontSize: 20,
    marginTop: 40,
    marginLeft: 15,
    marginRight: 15,
    textAlign: "center"
  }
});

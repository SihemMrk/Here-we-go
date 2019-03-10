import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

export default class MenuScreen extends React.Component {
  static navigationOptions = {
    title: "Menu"
  };
  constructor(props) {
    super(props);
    this.state = { showPage1: false, showPage2: false };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.divMenu}>
        <TouchableOpacity onPress={() => navigate("CostOfLiving")}>
          <Image
            source={require("../assets/images/2cost.png")}
            style={{ width: 100, height: 100, marginLeft: 15 }}
          />
          <Text style={styles.TextStyle1}> Cost of Living </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate("Translateur")}>
          <Image
            source={require("../assets/images/traducteur.png")}
            style={{ width: 90, height: 90, marginLeft: 40 }}
          />

          <Text style={styles.TextStyle2}> Frases you need </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  divMenu: {
    marginTop: 110,
    marginBottom: 110,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
    // backgroundColor: "#ebf0f6"
  },
  TextStyle1: {
    marginTop: 5,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#364e68"
  },
  TextStyle2: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#364e68"
  }
});

import React from "react";
import {
  Animated,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

const MENU_WIDTH = 200;

export class Menu extends React.Component {
  state = {
    right: new Animated.Value(-MENU_WIDTH),
    opened: false,
    icon: "bars"
  };

  toggleMenu() {
    let value = this.state.opened ? -MENU_WIDTH : 0;
    Animated.timing(this.state.right, {
      toValue: value,
      duration: 500
    }).start();
    this.setState({
      icon: this.state.opened ? "bars" : "times",
      opened: !this.state.opened
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.menuContainer}>
        <Animated.View
          style={{
            ...styles.menu,
            right: this.state.right
          }}
        >
          <View style={styles.logo}>
            <Image
              source={require("../assets/images/logo.png")}
              style={{ width: 80, height: 80 }}
            />
            <Text style={styles.title}>Here We Go</Text>
          </View>
          <TouchableOpacity
            style={styles.menuEntry}
            onPress={() => navigate("Preferences")}
          >
            <Icon name="cogs" size={40} />
            <Text>Preferences</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuEntry}
            onPress={() => navigate("CostOfLiving")}
          >
            <Image
              source={require("../assets/images/2cost.png")}
              style={{ width: 50, height: 50 }}
            />
            <Text style={styles.TextStyle1}> Cost of Living </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuEntry}
            onPress={() => navigate("Translateur")}
          >
            <Image
              source={require("../assets/images/traducteur.png")}
              style={{ width: 50, height: 50 }}
            />

            <Text style={styles.TextStyle2}> Frases you need </Text>
          </TouchableOpacity>
        </Animated.View>
        <TouchableOpacity
          style={styles.floatButton}
          activeOpacity={0.7}
          onPress={() => this.toggleMenu()}
        >
          <Icon style={styles.floatButtonIcon} name={this.state.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    marginLeft: 10,
    marginRight: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  title: { fontSize: 15, fontWeight: "bold" },
  menuContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  menu: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    width: MENU_WIDTH,
    paddingTop: 30,
    flex: 1,
    borderLeftColor: "#aaa",
    borderLeftWidth: 1,
    backgroundColor: "#ffffff"
  },
  floatButton: {
    position: "absolute",
    right: 20,
    bottom: 50,
    width: 50,
    height: 50,
    backgroundColor: "#074684",
    borderRadius: 50,
    textAlign: "center",
    justifyContent: "center"
  },
  floatButtonIcon: {
    color: "#ffffff",
    fontSize: 24,
    textAlign: "center"
  },
  menuEntry: {
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#efefef",
    alignItems: "center",
    marginTop: 40
  }
});

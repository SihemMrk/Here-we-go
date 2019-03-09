import React from "react";
import {
  ScrollView,
  View,
  Text,
  SectionList,
  StyleSheet,
  Image
} from "react-native";

export default class Preferences extends React.Component {
  static navigationOptions = {
    title: "Preferences"
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <View style={styles.itemList}>
              <Text style={styles.country}>Select your language</Text>
              <Image
                style={{ height: 32, width: 32 }}
                source={{
                  uri:
                    "http://www.myiconfinder.com/uploads/iconsets/256-256-7e81c2f3697b91ee17fe6ed6348c232a-Arrow.png"
                }}
              />
            </View>
            <View style={styles.lineStyle} />
            <View style={styles.itemList}>
              <Text style={styles.country}>Select your original country</Text>
              <Image
                style={{ height: 32, width: 32 }}
                source={{
                  uri:
                    "http://www.myiconfinder.com/uploads/iconsets/256-256-7e81c2f3697b91ee17fe6ed6348c232a-Arrow.png"
                }}
              />
            </View>
            <View style={styles.lineStyle} />
          </View>

          <View style={styles.itemList}>
            <Text style={styles.country}>Select your original currency</Text>
            <Image
              style={{ height: 32, width: 32 }}
              source={{
                uri:
                  "http://www.myiconfinder.com/uploads/iconsets/256-256-7e81c2f3697b91ee17fe6ed6348c232a-Arrow.png"
              }}
            />
          </View>
          <View style={styles.lineStyle} />
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ebf0f6",
    flex: 1
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: "Cochin",
    marginTop: 70
  },
  country: {
    fontFamily: "Palatino",
    fontSize: 20
  },

  itemList: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 80,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  lineStyle: {
    marginTop: 10,
    borderWidth: 0.5,
    borderColor: "#3c415e",
    backgroundColor: "#ebf0f6"
  }
});

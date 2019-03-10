import React from "react";
import { View, Button } from "react-native";

export default class ShowMore extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button title="Preferences" onPress={() => navigate("Preferences")} />
        <Button title="Menu" onPress={() => navigate("MenuScreen")} />
      </View>
    );
  }
}

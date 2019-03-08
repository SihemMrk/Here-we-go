import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import MenuScreen from "../screens/MenuScreen";
import Preferences from "../screens/Preferences";
import Translateur from "../screens/Translateur";

import CostOfLiving from "../screens/CostOfLiving";

const HomeStack = createStackNavigator({
  Home: {
    screen: CostOfLiving
  }
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

const PreferenceStack = createStackNavigator({
  Preferences: {
    screen: Preferences
  }
});

PreferenceStack.navigationOptions = {
  tabBarLabel: "Preferences",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  )
};

const MenuStack = createStackNavigator({
  Menu: MenuScreen
});

MenuStack.navigationOptions = {
  tabBarLabel: "Menu",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

export default createBottomTabNavigator({
  HomeStack,
  PreferenceStack,
  MenuStack
});

import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import CostOfLiving from "../screens/CostOfLiving";
import MenuScreen from "../screens/MenuScreen";
import Preferences from "../screens/Preferences";
import ShowMore from "../screens/ShowMore";
import Translateur from "../screens/Translateur";

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  CostOfLiving: { screen: CostOfLiving },
  Translateur: { screen: Translateur },
  MenuScreen: { screen: MenuScreen },
  Preferences: { screen: Preferences },
  ShowMore: { screen: ShowMore }
});

const AppContainer = createAppContainer(MainNavigator);

export default AppContainer;

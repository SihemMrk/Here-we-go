import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import CostOfLiving from "../screens/CostOfLiving";
import MenuScreen from "../screens/MenuScreen";
import Preferences from "../screens/Preferences";
import ShowMore from "../screens/ShowMore";
import Translateur from "../screens/Translateur";
import Food from "../screens/Food";
import Housing from "../screens/Housing";
import Clothes from "../screens/Clothes";
import Transportation from "../screens/Transportation";
import PersonalCare from "../screens/PersonalCare";
import Entertainment from "../screens/Entertainment";

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  CostOfLiving: { screen: CostOfLiving },
  Translateur: { screen: Translateur },
  MenuScreen: { screen: MenuScreen },
  Preferences: { screen: Preferences },
  ShowMore: { screen: ShowMore },
  Food: { screen: Food },
  Housing: { screen: Housing },
  Clothes: { screen: Clothes },
  Transportation: { screen: Transportation },
  PersonalCare: { screen: PersonalCare },
  Entertainment: { screen: Entertainment }
});

const AppContainer = createAppContainer(MainNavigator);

export default AppContainer;

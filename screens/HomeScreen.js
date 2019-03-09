import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import { WebBrowser } from "expo";

import { MonoText } from "../components/StyledText";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      date: ""
    };
  }
  componentDidMount() {
    var that = this;
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var hours = new Date().getHours();
    var min = new Date().getMinutes();
    var sec = new Date().getSeconds();
    that.setState({
      date:
        date + "/" + month + "/" + year + " " + hours + ":" + min + ":" + sec
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <Button title="Show More" onPress={() => navigate("ShowMore")} />
          <View style={styles.border}>
            <Text style={styles.location}>City, Country</Text>
            {/* <Text style={styles.baseCurrency}>Base currency: EUR</Text> */}
            <View style={styles.divConverter}>
              <View style={styles.divConverter1}>
                <Text style={styles.currentEx}> Exchange :</Text>
              </View>
              <View style={styles.divConverter2}>
                <TextInput style={styles.converter} placeholder="Converter" />
              </View>
            </View>
            <View style={styles.divExchange}>
              <Text style={styles.rate}>1.13086 </Text>
              <Text style={styles.deviseToBase}>(1 USD = 0,8842 EUR)</Text>
            </View>
            <Text style={styles.update}>Last update: {this.state.date}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use
          useful development tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync(
      "https://docs.expo.io/versions/latest/guides/development-mode"
    );
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      "https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes"
    );
  };
}

const styles = StyleSheet.create({
  showMore: {
    backgroundColor: "blue",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 12,
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    overflow: "hidden",
    padding: 12,
    textAlign: "center"
  },
  location: {
    textAlign: "center",
    marginTop: 40,
    // fontWeight: "bold",
    fontSize: 50,
    color: "#364e68",
    fontFamily: "TimesNewRomanPSMT"
  },
  baseCurrency: {
    textAlign: "center",
    marginTop: 37,
    fontSize: 20,
    color: "#343434",
    fontFamily: "Kohinoor Telugu"
  },
  divExchange: {
    // marginTop: 30
  },
  deviseToBase: {
    fontSize: 12,
    marginTop: 15,
    marginLeft: 200,
    color: "#343434",
    fontFamily: "Kohinoor Telugu"
    // textAlign: "center"
  },
  currentEx: {
    // marginLeft: 60,
    fontSize: 15,
    color: "#343434",
    fontFamily: "Kohinoor Telugu"
  },
  rate: {
    fontSize: 60,
    // fontWeight: "bold",
    color: "#364e68",
    width: 270,
    marginLeft: 60,
    marginTop: 20,
    textAlign: "center",
    borderStyle: "solid",
    borderColor: "#364e68",
    borderWidth: 2,
    borderRadius: 23,
    flex: 0.8,
    fontFamily: "Verdana"
  },
  divConverter: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 60,
    marginRight: 20,
    marginTop: 110
  },
  update: {
    fontSize: 15,
    marginTop: 200,
    marginRight: 10,
    textAlign: "right",
    fontFamily: "Cochin",
    color: "#343434"
  },
  converter: {
    fontSize: 10,
    fontWeight: "bold",
    height: 30,
    width: 150,
    paddingLeft: 7,
    backgroundColor: "white",
    borderColor: "#738598",
    borderWidth: 0
  },
  container: {
    // marginTop: 30,
    // marginLeft: 10,
    // marginRight: 10,
    backgroundColor: "#ebf0f6",
    flex: 1
  },
  // border: {
  //   marginTop: 10,
  //   borderWidth: 4,
  //   borderColor: "#e6b31e"
  // },

  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});

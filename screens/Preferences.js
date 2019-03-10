import React from "react";
import {
  Animated,
  ScrollView,
  View,
  Text,
  SectionList,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";

import ListViewSelect from "react-native-list-view-select";

import { AsyncStorage } from "react-native";

const languages = [
  {
    code: "fr",
    status: "production",
    name: "French"
  },
  {
    code: "en",
    status: "production",
    name: "English"
  },
  {
    code: "ar",
    status: "production",
    name: "Arabic"
  },
  {
    code: "ja",
    status: "production",
    name: "Japanese"
  },
  {
    code: "es",
    status: "production",
    name: "Spanish"
  },
  {
    code: "de",
    status: "production",
    name: "German"
  },
  {
    code: "it",
    status: "production",
    name: "Italian"
  },
  {
    code: "id",
    status: "production",
    name: "Indonesian"
  },
  {
    code: "pt",
    status: "production",
    name: "Portuguese"
  },
  {
    code: "ko",
    status: "production",
    name: "Korean"
  },
  {
    code: "tr",
    status: "production",
    name: "Turkish"
  },
  {
    code: "ru",
    status: "production",
    name: "Russian"
  },
  {
    code: "nl",
    status: "production",
    name: "Dutch"
  },
  {
    code: "fil",
    status: "production",
    name: "Filipino"
  },
  {
    code: "msa",
    status: "production",
    name: "Malay"
  },
  {
    code: "zh-tw",
    status: "production",
    name: "Traditional Chinese"
  },
  {
    code: "zh-cn",
    status: "production",
    name: "Simplified Chinese"
  },
  {
    code: "hi",
    status: "production",
    name: "Hindi"
  },
  {
    code: "no",
    status: "production",
    name: "Norwegian"
  },
  {
    code: "sv",
    status: "production",
    name: "Swedish"
  },
  {
    code: "fi",
    status: "production",
    name: "Finnish"
  },
  {
    code: "da",
    status: "production",
    name: "Danish"
  },
  {
    code: "pl",
    status: "production",
    name: "Polish"
  },
  {
    code: "hu",
    status: "production",
    name: "Hungarian"
  },
  {
    code: "fa",
    status: "production",
    name: "Farsi"
  },
  {
    code: "he",
    status: "production",
    name: "Hebrew"
  },
  {
    code: "ur",
    status: "production",
    name: "Urdu"
  },
  {
    code: "th",
    status: "production",
    name: "Thai"
  },
  {
    code: "en-gb",
    status: "production",
    name: "English UK"
  }
];
export default class Preferences extends React.Component {
  static navigationOptions = {
    title: "Preferences"
  };
  constructor() {
    super();
    this.state = {
      countries: [],
      currencies: {},
      languages: languages,
      displayListCountries: "none",
      displayListCurrencies: "none",
      displayListLanguages: "none",
      currentCountry: "France",
      currentCurrency: "Euro",
      currentLanguage: "English"
    };
    this.onPressCountries = this.onPressCountries.bind(this);
    this.onPressCurrencies = this.onPressCurrencies.bind(this);
    this.onPressLanguages = this.onPressLanguages.bind(this);
  }

  componentDidMount() {
    fetch("https://api.printful.com/countries")
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            countries: responseJson.result
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
    fetch(
      "https://pkgstore.datahub.io/core/currency-codes/codes-all/archive/75f677233d68c15e9b74ffbf38334885/codes-all.csv"
    )
      .then(response => {
        let lines = response._bodyInit.split("\n");
        let names = lines.shift().split(",");
        let data = lines.map(line => {
          let valeurs = line.split(",");
          let obj = {};
          for (let i = 0, max = valeurs.length; i < max; i++) {
            obj[names[i]] = valeurs[i];
          }
          return obj;
        });
        // console.log(lines);
        // // console.log(data);
        // // console.log(data.length);
        console.log(data[0]);
      })
      .catch(error => {
        console.error(error);
      });
  }

  userLanguage = async () => {
    try {
      await AsyncStorage.setItem("language", this.state.currentLanguage);
    } catch (error) {
      console.log(error.message);
    }
  };

  userCountry = async () => {
    try {
      await AsyncStorage.setItem("country", this.state.currentCountry);
    } catch (error) {
      console.log(error.message);
    }
  };
  userCurrency = async () => {
    try {
      await AsyncStorage.setItem("currency", this.state.currentCurrency);
    } catch (error) {
      console.log(error.message);
    }
  };

  onPressCountries() {
    this.setState({
      displayListCountries: "flex"
    });
  }

  onPressCurrencies() {
    this.setState({
      displayListCurrencies: "flex"
    });
  }

  onPressLanguages() {
    this.setState({
      displayListLanguages: "flex"
    });
  }
  selectCountry(country) {
    this.setState({
      currentCountry: country,
      displayListCountry: "none"
    });
  }

  selectCurrency(currency) {
    this.setState({
      currentCurrency: currency,
      displayListCurrency: "none"
    });
  }

  selectLanguage(language) {
    this.setState({
      currentLanguage: language,
      displayListLanguages: "none"
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <TouchableOpacity
              style={styles.itemList}
              onPress={() => this.onPressLanguages()}
            >
              <Text style={styles.country}>
                Select your original language ({this.state.currentLanguage})
              </Text>
              <Image
                style={{ height: 32, width: 32 }}
                source={{
                  uri:
                    "http://www.myiconfinder.com/uploads/iconsets/256-256-7e81c2f3697b91ee17fe6ed6348c232a-Arrow.png"
                }}
              />
            </TouchableOpacity>
            <View style={styles.lineStyle} />
            <TouchableOpacity
              style={styles.itemList}
              onPress={() => this.onPressCountries()}
            >
              <Text style={styles.country}>
                Select your original country ({this.state.currentCountry})
              </Text>
              <Image
                style={{ height: 32, width: 32 }}
                source={{
                  uri:
                    "http://www.myiconfinder.com/uploads/iconsets/256-256-7e81c2f3697b91ee17fe6ed6348c232a-Arrow.png"
                }}
              />
            </TouchableOpacity>
            <View style={styles.lineStyle} />
          </View>

          <TouchableOpacity
            style={styles.itemList}
            onPress={() => this.onPressCurrencies()}
          >
            <Text style={styles.country}>
              Select your original currency ({this.state.currentCurrency})
            </Text>
            <Image
              style={{ height: 32, width: 32 }}
              source={{
                uri:
                  "http://www.myiconfinder.com/uploads/iconsets/256-256-7e81c2f3697b91ee17fe6ed6348c232a-Arrow.png"
              }}
            />
          </TouchableOpacity>
          <View style={styles.lineStyle} />
        </ScrollView>
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#ffffff",
            display: this.state.displayListCountries
          }}
        >
          <ScrollView>
            {this.state.countries.map(country => {
              return (
                <TouchableOpacity
                  key={country.name}
                  onPress={() => this.selectCountry(country.name)}
                >
                  <Text style={styles.countryItem}>{country.name}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </Animated.View>
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#ffffff",
            display: this.state.displayListLanguages
          }}
        >
          <ScrollView>
            {this.state.languages.map(language => {
              return (
                <TouchableOpacity
                  key={language.name}
                  onPress={() => this.selectLanguage(language.name)}
                >
                  <Text style={styles.languageItem}>{language.name}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  languageItem: {
    flex: 1,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    // borderBottomSize: 1,
    borderBottomColor: "#efefef",
    fontSize: 14
  },
  countryItem: {
    flex: 1,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    // borderBottomSize: 1,
    borderBottomColor: "#efefef",
    fontSize: 14
  },
  container: {
    backgroundColor: "#ebf0f6",
    flex: 1
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 70
  },
  country: {
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

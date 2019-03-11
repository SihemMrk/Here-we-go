import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import { AsyncStorage } from "react-native";
import { NavigationEvents } from "react-navigation";

const emptyDic = {
  yes: "",
  no: "",
  howAreYou: "",
  sorry: "E",
  please: "",
  howDoIgoTo: ")",
  howMuchIsIt: "",
  IdontUnderstand: ""
};
const french = {
  yes: "Oui",
  no: "Non",
  howAreYou: "Comment allez-vous?",
  sorry: "Excusez-moi",
  please: "S il vous plait",
  howDoIgoTo: "Comment je vais à (un endroit)?",
  howMuchIsIt: "Combien ça coute?",
  IdontUnderstand: "Je ne comprend pas"
};
const allemand = {
  yes: "Ja",
  no: "Nein",
  howAreYou: "Wie geht es dir?",
  sorry: "Entschuldigung",
  please: "Bitte",
  howDoIgoTo: "Wie gehe ich hin (an einen Ort)?",
  howMuchIsIt: "Wie viel kostet es?",
  IdontUnderstand: "Ich verstehe nicht"
};
const spanish = {
  yes: "Si",
  no: "No",
  howAreYou: "Como estas?",
  sorry: "Perdón",
  please: "Por favor",
  howDoIgoTo: "Como voy a (un lugar)",
  howMuchIsIt: "Cuanto estas ?",
  IdontUnderstand: "No entiendo"
};

const availableLanguages = {
  French: french,
  Spanish: spanish,
  German: allemand
};

export default class Translateur extends React.Component {
  static navigationOptions = {
    frases: {},
    title: ""
  };
  constructor(props) {
    super(props);
    this.state = {
      dictionary: emptyDic
    };
  }

  willFocusCallback() {
    var ref = this;
    AsyncStorage.getItem("language", function(err, language) {
      if (err) {
        console.log("no language selected yet");
        return;
      }
      console.log("My language : " + language);
      console.log(availableLanguages[language].yes);
      ref.setState({
        dictionary: availableLanguages[language]
      });
    });
  }

  render() {
    return (
      <View>
        <NavigationEvents onWillFocus={this.willFocusCallback()} />
        <Text style={styles.title}>How do I say ... ?</Text>
        <View style={styles.itemList}>
          <Text style={styles.word}>{this.state.dictionary.yes}</Text>
          <Image
            style={{ height: 40, width: 40 }}
            source={require("../assets/images/flecheJaune.png")}
            source={require("../assets/images/flecheJaune.png")}
          />
          <Text style={styles.word}>Yes</Text>
        </View>
        <View style={styles.itemList}>
          <Text style={styles.word}>{this.state.dictionary.no}</Text>
          <Image
            style={{ height: 40, width: 40 }}
            source={require("../assets/images/flecheJaune.png")}
            source={require("../assets/images/flecheJaune.png")}
          />
          <Text style={styles.word}>No</Text>
        </View>
        <View style={styles.itemList}>
          <Text style={styles.word}>{this.state.dictionary.sorry}</Text>
          <Image
            style={{ height: 40, width: 40 }}
            source={require("../assets/images/flecheJaune.png")}
            source={require("../assets/images/flecheJaune.png")}
          />
          <Text style={styles.word}>Sorry</Text>
        </View>
        <View style={styles.itemList}>
          <Text style={styles.word}>{this.state.dictionary.please}</Text>
          <Image
            style={{ height: 40, width: 40 }}
            source={require("../assets/images/flecheJaune.png")}
            source={require("../assets/images/flecheJaune.png")}
          />
          <Text style={styles.word}>Please</Text>
        </View>
        <View style={styles.itemList}>
          <Text style={styles.word}>{this.state.dictionary.howAreYou}</Text>
          <Image
            style={{ height: 40, width: 40 }}
            source={require("../assets/images/flecheJaune.png")}
          />
          <Text style={styles.word}>How are you ?</Text>
        </View>
        <View style={styles.itemList}>
          <Text style={styles.word}>{this.state.dictionary.howDoIgoTo}</Text>
          <Image
            style={{ height: 40, width: 40 }}
            source={require("../assets/images/flecheJaune.png")}
          />
          <Text style={styles.word}>How do I go to (a place)?</Text>
        </View>
        <View style={styles.itemList}>
          <Text style={styles.word}>{this.state.dictionary.howMuchIsIt}</Text>
          <Image
            style={{ height: 40, width: 40 }}
            source={require("../assets/images/flecheJaune.png")}
          />
          <Text style={styles.word}>How much is it?</Text>
        </View>
        <View style={styles.itemList}>
          <Text style={styles.word}>
            {this.state.dictionary.IdontUnderstand}
          </Text>
          <Image
            style={{ height: 40, width: 40 }}
            source={require("../assets/images/flecheJaune.png")}
          />
          <Text style={styles.word}>I don't understand ?</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemList: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 15,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 10,
    marginRight: 10
  },
  title: {
    marginLeft: 10,
    marginTop: 15,
    fontSize: 40,
    color: "#364e68"
  },
  word: {
    fontSize: 15,
    flex: 0.4
  },
  image: {
    flex: 0.2
  }
});

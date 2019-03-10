// import React from "react";
// import {
//   Text,
//   View,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   ScrollView
// } from "react-native";

// export default class Translateur extends React.Component {
//   static navigationOptions = {
//     title: ""
//   };
//   constructor(props) {
//     super(props);
//   }

//   getUserLanguage = async () => {
//     let language = "";
//     try {
//       userId = (await AsyncStorage.getItem("language")) || "none";
//     } catch (error) {
//       console.log(error.message);
//     }
//     return language;
//   };
//   render() {
//     return (
//       <View>
//         <Text style={styles.title}>How do I say ... ?</Text>
//         <View style={styles.itemList}>
//           <Text style={styles.word}>Yes</Text>
//           <Image
//             style={{ height: 40, width: 40 }}
//             source={require("../assets/images/flecheJaune.png")}
//             source={require("../assets/images/flecheJaune.png")}
//           />
//           <Text style={styles.word}>Oui</Text>
//         </View>
//         <View style={styles.itemList}>
//           <Text style={styles.word}>How are you ?</Text>
//           <Image
//             style={{ height: 40, width: 40 }}
//             source={require("../assets/images/flecheJaune.png")}
//           />
//           <Text style={styles.word}>Comment allez-vous ?</Text>
//         </View>
//         <View style={styles.itemList}>
//           <Text style={styles.word}>How do I go to (a place)?</Text>
//           <Image
//             style={{ height: 40, width: 40 }}
//             source={require("../assets/images/flecheJaune.png")}
//           />
//           <Text style={styles.word}>Comment je vais à (un endroit) ?</Text>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   itemList: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingTop: 20,
//     paddingBottom: 10,
//     paddingLeft: 10,
//     paddingRight: 10,
//     marginLeft: 10,
//     marginRight: 10
//   },
//   title: {
//     marginTop: 20,
//     fontSize: 40,
//     color: "#364e68"
//   },
//   word: {
//     fontSize: 15,
//     flex: 0.4
//   },
//   image: {
//     flex: 0.2
//   }
// });

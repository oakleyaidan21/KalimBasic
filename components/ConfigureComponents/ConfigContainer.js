import React, { Component } from "reactn";
import { Text, View, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { scaleKeys } from "../../constants/keySigs.js";
import { tsConstructSignatureDeclaration } from "@babel/types";

class ConfigContainer extends Component {
  state = {
    keySigText: this.global.keySig,
    tineColors: this.global.colors,
    themeColors: [
      "green",
      "darkgreen",
      "red",
      "darkred",
      "rgb(0,123,255)",
      "darkblue",
      "violet",
      "darkviolet",
      "yellow",
      "darkyellow",
      "purple",
      "darkpurple",
      "brown"
    ]
  };

  changeKeySig = () => {
    var temp = [];
    for (var i = 0; i < scaleKeys.keySignatures.length; i++) {
      if (scaleKeys.keySignatures[i][0] === this.state.keySigText) {
        var counter = 1;
        for (var j = 1; j < scaleKeys.keySignatures[i].length; j++) {
          var color = "white";
          if (j % 3 === 0) {
            color = this.global.themeColor;
          }
          if (j > 9) {
            counter--;
          } else {
            counter++;
          }
          temp.push({
            note: scaleKeys.keySignatures[i][j],
            color: color,
            len: counter,
            id: j
          });
        }
        this.setGlobal({ tines: temp, themeColor: this.state.themeColors[i] });
        alert("Changed to " + this.state.keySigText);
        return;
      }
    }
    alert(
      "Key Signature `" +
        this.state.keySigText +
        "` not found. Remember to follow the form of (uppercase/lowercase letter depending on major or minor) followed by sharp (#) flat (b) or natural (nothing)"
    );
  };

  render() {
    return (
      <View
        style={{
          width: "100%",
          height: "100%",
          padding: 20
        }}
      >
        <Text style={{ fontSize: 20 }}>Change Key Signature: </Text>
        <TextInput
          style={{
            height: 40,
            width: "80%",
            borderRadius: 5,
            backgroundColor: "lightgrey",
            top: 10,
            position: "relative"
          }}
          placeholder="Input Key Signature Ex: C, Bb, etc."
          onChangeText={text => {
            this.setState({ keySigText: text });
          }}
          value={this.state.keySig}
        />
        <TouchableOpacity
          title={"Change"}
          style={{
            width: 70,
            height: "25%",
            top: 20,
            backgroundColor: this.global.themeColor,
            borderRadius: 5,
            alignItems: "center"
          }}
          onPress={() => {
            this.changeKeySig();
          }}
        >
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              color: "white",
              top: "20%"
            }}
          >
            Change
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ConfigContainer;

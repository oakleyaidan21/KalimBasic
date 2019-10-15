import React, { Component } from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  View
} from "react-native";

class SelectorContainer extends Component {
  state = {};
  render() {
    return (
      <View
        style={{
          width: "70%",
          height: "20%",
          borderRadius: 25,
          backgroundColor: "lightgrey",
          top: 10
        }}
      >
        <Button title={"hi"}></Button>
      </View>
    );
  }
}

export default SelectorContainer;

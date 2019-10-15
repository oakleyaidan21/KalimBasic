import React, { Component } from "react";
import {
  Platform,
  Text,
  TouchableOpacity,
  SafeAreaView,
  View
} from "react-native";
import KalimbaContainer from "../components/KalimbaComponents/KalimbaContainer";

class KalimbaScreen extends Component {
  state = {};
  render() {
    return (
      <View>
        <KalimbaContainer />
      </View>
    );
  }
}

export default KalimbaScreen;

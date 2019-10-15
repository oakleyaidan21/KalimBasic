import * as WebBrowser from "expo-web-browser";
import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import { MonoText } from "../components/StyledText";
import KalimbaContainer from "../components/KalimbaComponents/KalimbaContainer.js";
import SelectorContainer from "../components/KalimbaComponents/SelectorContainer";
// import KalimbaContainer from "../components/KalimbaComponents/KalimbaContainer.jsx";

export default function HomeScreen() {
  return (
    <View style={{ alignItems: "center" }}>
      <KalimbaContainer />
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

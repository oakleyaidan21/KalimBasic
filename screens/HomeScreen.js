import * as WebBrowser from "expo-web-browser";
import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import KalimbaContainer from "../components/KalimbaComponents/KalimbaContainer.js";

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

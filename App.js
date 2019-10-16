import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import React, { useState, setGlobal } from "reactn";

import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import AppNavigator from "./navigation/AppNavigator";

setGlobal({
  themeColor: "rgb(0,123,255)",
  tines: [
    { note: "D6", color: "white", len: 1, id: 1 },
    { note: "B5", color: "white", len: 2, id: 2 },
    { note: "G5", color: "rgb(0,123,255)", len: 3, id: 3 },
    { note: "E5", color: "white", len: 4, id: 4 },
    { note: "C5", color: "white", len: 5 },
    { note: "A4", color: "rgb(0,123,255)", len: 6, id: 6 },
    { note: "F4", color: "white", len: 7, id: 7 },
    { note: "D4", color: "white", len: 8, id: 8 },
    { note: "C4", color: "rgb(0,123,255)", len: 9, id: 9 },
    { note: "E4", color: "white", len: 8, id: 10 },
    { note: "G4", color: "white", len: 7, id: 11 },
    { note: "B4", color: "rgb(0,123,255)", len: 6, id: 12 },
    { note: "D5", color: "white", len: 5, id: 13 },
    { note: "F5", color: "white", len: 4, id: 14 },
    { note: "A5", color: "rgb(0,123,255)", len: 3, id: 15 },
    { note: "C6", color: "white", len: 2, id: 16 },
    { note: "E6", color: "white", len: 1, id: 17 }
  ],
  keySig: "C"
});

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require("./assets/images/robot-dev.png"),
      require("./assets/images/robot-prod.png")
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf")
    })
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

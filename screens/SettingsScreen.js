import React from "react";
import { ExpoConfigView } from "@expo/samples";
import ConfigContainer from "../components/ConfigureComponents/ConfigContainer";

export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */

  return <ConfigContainer />;
}

SettingsScreen.navigationOptions = {
  title: "Settings"
};

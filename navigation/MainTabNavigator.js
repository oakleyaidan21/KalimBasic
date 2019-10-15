import React, { setGlobal } from "reactn";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";
import scaleKeys from "../constants/keySigs";

setGlobal({
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

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {},
  test: "hi"
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "Kalimba",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  ),
  yeeee: "none"
};

HomeStack.path = "";

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: "Links",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  )
};

LinksStack.path = "";

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: "Configure",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

SettingsStack.path = "";

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  SettingsStack,
  LinksStack
});

tabNavigator.path = "";

export default tabNavigator;

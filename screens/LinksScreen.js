import React from "react";
import { View, Text } from "react-native";
import HyperLink from "react-native-hyperlink";

export default function LinksScreen() {
  return (
    <View style={{ padding: 10, alignItems: "center" }}>
      <Text style={{ fontSize: 30 }}>Github Repos</Text>

      <Text style={{ fontSize: 20 }}>Kalimba Libre Repo</Text>
      <HyperLink linkStyle={{ color: "#2980b9", fontSize: 15, top: 20 }}>
        <Text>https://github.com/oakleyaidan21/KalimbaLibre</Text>
      </HyperLink>
      <Text style={{ fontSize: 20 }}>KalimBasic Repo</Text>
      <HyperLink linkStyle={{ color: "#2980b9", fontSize: 15, top: 20 }}>
        <Text>https://github.com/oakleyaidan21/KalimBasic</Text>
      </HyperLink>
    </View>
  );
}

LinksScreen.navigationOptions = {
  title: "About KalimBasic"
};

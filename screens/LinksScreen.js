import React from "react";
import { View, Text } from "react-native";
import { ExpoLinksView } from "@expo/samples";
import HyperLink from "react-native-hyperlink";

export default function LinksScreen() {
  return (
    <View style={{ padding: 10, alignItems: "center" }}>
      <Text style={{ fontSize: 30 }}>Link to Kalimba Libre:</Text>
      <Text style={{ fontSize: 30 }}>Github Repos: </Text>
      <HyperLink
        linkStyle={{ color: "#2980b9", fontSize: 20 }}
        linkText={url =>
          url === "https://github.com/oakleyaidan21/KalimbaLibre" ? "Here" : url
        }
      >
        <Text style={{ fontSize: 15 }}>Kalimba Libre Repo Here</Text>
      </HyperLink>
      <HyperLink
        linkStyle={{ color: "#2980b9", fontSize: 20 }}
        linkText={url =>
          url === "https://github.com/oakleyaidan21/KalimBasic" ? "Here" : url
        }
      >
        <Text style={{ fontSize: 15 }}>KalimBasic Repo Here</Text>
      </HyperLink>
    </View>
  );
}

LinksScreen.navigationOptions = {
  title: "About KalimBasic"
};

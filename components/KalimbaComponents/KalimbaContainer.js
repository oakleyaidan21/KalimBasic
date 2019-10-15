import React, { Component } from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from "react-native";

class KalimbaContainer extends Component {
  state = {
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
    insKalimba: null
  };

  componentDidMount = async () => {};

  handleTineLick = tine => {
    alert("pressed " + tine.note);
  };
  render() {
    return (
      <View
        style={{
          backgroundColor: "lightgrey",
          width: "100%",
          height: "100%",
          top: 0
        }}
      >
        {this.state.tines.map((tine, index) => (
          <TouchableOpacity
            key={"tine # " + index}
            style={{
              backgroundColor: tine.color,
              width: 20,
              height: 500 + tine.len * 6,
              position: "absolute",
              left: 24 * index,
              float: "left",
              borderRadius: 10,
              alignItems: "center"
            }}
            onPress={() => {
              this.handleTineLick(tine);
            }}
          >
            <Text style={{ top: 470 + tine.len * 6 }}>{tine.note}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

export default KalimbaContainer;

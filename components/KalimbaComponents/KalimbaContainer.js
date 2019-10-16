import React, { Component } from "reactn";
import { Platform, Text, TouchableOpacity, SafeAreaView } from "react-native";

class KalimbaContainer extends Component {
  state = {
    insKalimba: null
  };

  handleTineTap = tine => {
    alert("pressed " + tine.note);
  };
  render() {
    var topMarg = 0;
    if (Platform.OS === "android") {
      topMarg = 30;
    }
    if (Platform.OS === "ios") {
      topMarg = 40;
    }
    return (
      <SafeAreaView
        style={{
          backgroundColor: "lightgrey",
          width: "100%",
          height: "100%",
          top: 0
        }}
      >
        {this.global.tines.map((tine, index) => (
          <TouchableOpacity
            key={"tine # " + index}
            style={{
              backgroundColor: tine.color,
              width: 22,
              height: 500 + tine.len * 6,
              position: "absolute",
              left: 24.5 * index,
              float: "left",
              borderRadius: 10,
              top: topMarg,
              alignItems: "center",
              fontSize: 20
            }}
            onPress={() => {
              this.handleTineTap(tine);
            }}
          >
            <Text style={{ top: 470 + tine.len * 6, fontSize: 10 }}>
              {tine.note}
            </Text>
          </TouchableOpacity>
        ))}
      </SafeAreaView>
    );
  }
}

export default KalimbaContainer;

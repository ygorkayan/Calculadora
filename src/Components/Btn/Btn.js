import React from "react";
import { TouchableHighlight, Text, Vibration } from "react-native";

import BtnStyle from "./BtnStyle";

export default (props) => {
  const stylesButton = [BtnStyle.button];
  if (props.double) stylesButton.push(BtnStyle.buttonDouble);
  if (props.operation) stylesButton.push(BtnStyle.buttonOperation);

  return (
    <TouchableHighlight onPress={props.onClick}>
      <Text onPress={Vibration.vibrate(10)} style={stylesButton}>
        {props.label}
      </Text>
    </TouchableHighlight>
  );
};

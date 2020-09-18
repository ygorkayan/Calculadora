import React from "react";
import { View, Text } from "react-native";

import DisplayStyle from "./DisplayStyle";

export default (props) => {
  return (
    <View style={DisplayStyle.display}>
      <Text style={DisplayStyle.displayValue} numberOfLines={1}>
        {props.valor}
      </Text>
    </View>
  );
};

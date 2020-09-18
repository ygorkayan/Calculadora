import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  button: {
    fontSize: 40,
    width: Dimensions.get("window").width / 4,
    height: Dimensions.get("window").width / 4,
    padding: 20,
    backgroundColor: "#f0f0f0",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#888",
  },
  buttonDouble: {
    width: (Dimensions.get("window").width / 4) * 2,
  },
  buttonOperation: {
    color: "#fff",
    backgroundColor: "#fa8231",
  },
});

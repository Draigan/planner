import { StyleSheet } from "react-native";

const demarrStyles = StyleSheet.create({
  colorPrimary: {
    backgroundColor: "#4fb0ff",
  },
  colorSecondary: {
    backgroundColor: "#b0dcff",
  },
});

const draiganStyles = StyleSheet.create({
  colorPrimary: {
    backgroundColor: "#02a5ab",
  },
  colorSecondary: {
    backgroundColor: "#52a8ab",
  },
});

const boxStyles = StyleSheet.create({
  standardBox: {
    backgroundColor: "#f1f1f1",
    width: "90%",
    borderWidth: 1,
    borderColor: "black",
  },
  colorSecondary: {
    backgroundColor: "#52a8ab",
  },
});

const uiStyles = {
  colorPrimary: "#f1f1f1",
};
export { uiStyles, boxStyles, demarrStyles, draiganStyles };

import { StyleSheet } from "react-native";
import { colors, fonts, metrics } from "../../styles";
import { color } from "react-native-reanimated";

const HEIGHT_PERCENTE = 0.88;

const styles = StyleSheet.create({
  container: {
    height: metrics.screenHeight * HEIGHT_PERCENTE,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: metrics.basePadding,
  },
  subContainer: {
    height: metrics.screenHeight * 0.25,
    marginLeft: metrics.basePadding,
    marginRight: metrics.smallMargin,
  },
  containerTextEmpty: {
    justifyContent: "center",
    alignItems: "center",
    height: metrics.screenHeight * 0.5,
  },
  textEmpty: {
    color: "#0066FF",
  },
});

export default styles;

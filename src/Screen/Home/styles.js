import { StyleSheet } from "react-native";
import { colors, metrics } from "../../styles";

const HEIGHT_PORCENTAGE = 0.5;
const WIDTH_PORCENTAGE = 0.95;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: metrics.basePadding,
  },
  subContainer: {
    height: metrics.screenHeight * 0.25,
    marginLeft: metrics.basePadding,
    marginRight: metrics.smallMargin,
    marginBottom: metrics.doubleBaseMargin,
  },
  containerTextEmpty: {
    justifyContent: "center",
    alignItems: "center",
    height: metrics.screenHeight * HEIGHT_PORCENTAGE,
  },
  textEmpty: {
    color: "#0066FF",
  },
  containerItem: {
    height: metrics.screenHeight,
    width: metrics.screenWidth * WIDTH_PORCENTAGE,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: metrics.basePadding,
    borderTopLeftRadius: metrics.baseBorder,
    borderTopRightRadius: metrics.baseBorder,
    backgroundColor: colors.colorSecondary,
  },
});

export default styles;

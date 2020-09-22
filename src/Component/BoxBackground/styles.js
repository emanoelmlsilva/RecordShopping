import { StyleSheet } from "react-native";

import { colors, metrics, fonts } from "../../styles/index";

const HEIGHT_PORCENTAGE = 0.6;
const WIDTH_PORCENTAGE = 0.96;

const styles = StyleSheet.create({
  container: {
    width: metrics.screenWidth * WIDTH_PORCENTAGE,
    height: metrics.screenHeight * HEIGHT_PORCENTAGE,
    alignItems: "center",
    borderTopLeftRadius: metrics.baseBorder,
    borderTopRightRadius: metrics.baseBorder,
    backgroundColor: colors.colorSecondary,
  },
  containerItem: {
    padding: metrics.baseBorder,
    margin: metrics.smallMargin,
    width: metrics.screenWidth * 0.9,
  },
});

export default styles;

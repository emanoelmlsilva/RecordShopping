import { StyleSheet } from "react-native";

import colors from "../../styles/colors";
import metrics from "../../styles/metrics";
import fonts from "../../styles/fonts";

const HEIGHT_PORCENTAGE = 0.25;
const WIDTH_PORCENTAGE = 0.7;

const styles = StyleSheet.create({
  containerAvatar: {
    justifyContent: "center",
    alignItems: "center",
    height: metrics.screenHeight * HEIGHT_PORCENTAGE,
    backgroundColor: colors.colorTextSecondary,
  },
  subContainer: {
    justifyContent: "space-around",
    height: metrics.screenHeight * 0.2,
    width: metrics.screenWidth * WIDTH_PORCENTAGE,
  },
  containerText: {
    justifyContent: "center",
    width: metrics.screenWidth * 0.5,
  },
  subContainerText: {
    flexDirection: "row",
  },
  textDefault: {
    fontSize: fonts.title,
  },
  textName: {
    fontWeight: "bold",
    paddingLeft: metrics.smallPadding,
  },
  textSubName: {
    color: colors.colorSecondaryLight,
  },
});

export default styles;

import { StyleSheet } from "react-native";
import { colors, metrics, fonts } from "../../styles";

const HEIGHT_PERCENTE = 0.25;
const WIDTH_PERCENTER = 0.9;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: metrics.screenHeight * HEIGHT_PERCENTE,
    width: metrics.screenWidth * WIDTH_PERCENTER,
    borderRadius: metrics.doubleBaseBorder,
    backgroundColor: colors.colorSecondary,
  },
  text: {
    color: "#0066FF",
  },
  containerCredit: {
    flex: 1,
    width: metrics.screenWidth * 0.85,
    margin: metrics.baseMargin,
    padding: metrics.basePadding,
  },
  containerTitle: {
    marginTop: metrics.baseMargin,
    marginBottom: metrics.doubleBaseMargin,
  },
  title: {
    color: colors.colorTextSecondary,
    fontWeight: "bold",
    fontSize: fonts.title,
  },
  subTitle: {
    color: colors.colorSecondary,
    fontSize: fonts.regular,
  },
  containerFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: metrics.smallMargin,
  },
  textDefault: {
    color: colors.colorTextSecondary,
    fontSize: fonts.input,
  },
});

export default styles;

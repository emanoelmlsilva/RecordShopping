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
    elevation: metrics.baseElevetaion,
  },
  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    color: colors.colorTextPrimary,
    fontSize: fonts.regular,
    paddingLeft: metrics.smallPadding,
    opacity: 0.6,
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

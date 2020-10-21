import { StyleSheet } from "react-native";
import { colors, fonts, metrics } from "../../styles";

const HEIGHT_PERCENTAGE = 0.6;
const WIDTH_PERCENTAGE = 0.9;
const styles = StyleSheet.create({
  frame: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  container: {
    height: metrics.screenHeight * HEIGHT_PERCENTAGE,
    width: metrics.screenWidth * WIDTH_PERCENTAGE,
  },
  containerHead: {
    flex: 1,
    borderTopLeftRadius: metrics.baseBorder,
    borderTopRightRadius: metrics.baseBorder,
    backgroundColor: colors.colorPrimary,
    elevation: 2,
  },
  containerTitle: {
    flexDirection: "row",
    margin: metrics.baseMargin,
    marginBottom: 0,
    alignItems: "center",
    justifyContent: "space-between",
  },
  containerInfo: {
    flex: 4,
    alignItems: "center",
    backgroundColor: colors.colorSecondaryLight,
  },
  contianerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: metrics.screenWidth * 0.8,
    padding: metrics.baseMargin,
  },
  containerDetail: {
    justifyContent: "space-between",
    width: metrics.screenWidth,
    flexDirection: "row",
    paddingLeft: metrics.smallPadding,
  },
  contianerFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: metrics.screenHeight * 0.04,
    width: metrics.screenWidth * 0.8,
  },
  divider: {
    margin: metrics.smallMargin,
    backgroundColor: "#000",
    height: 1,
    width: metrics.screenWidth * 0.9,
  },
  titleHeader: {
    fontSize: fonts.regular,
    fontWeight: "bold",
  },
  title: {
    marginLeft: metrics.baseMargin,
    fontSize: fonts.title,
    fontWeight: "bold",
    flex: 1,
  },
  date: {
    paddingLeft: 40,
    fontSize: fonts.small,
  },
  columnProducts: {
    textAlign: "left",
    width: metrics.screenWidth * 0.3,
  },
});

export default styles;

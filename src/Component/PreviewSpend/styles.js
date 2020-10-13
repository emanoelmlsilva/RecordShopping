import { StyleSheet } from "react-native";
import { metrics, colors } from "../../styles";

const HEIGHT_PERCENTAGE = 0.07;
const WIDTH_PERCENTAGE = 0.8;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: metrics.screenWidth * 0.9,
  },
  containerTitle: {
    width: metrics.screenWidth * WIDTH_PERCENTAGE,
    justifyContent: "space-between",
    paddingLeft: metrics.baseMargin,
    paddingRight: metrics.baseMargin,
    flexDirection: "row",
  },
  containerTitleInit: {
    width: metrics.screenWidth * WIDTH_PERCENTAGE,
    paddingLeft: metrics.baseMargin,
    paddingRight: metrics.baseMargin,
  },
  title: {
    fontWeight: "bold",
    marginBottom: metrics.baseMargin,
  },
  containerIcon: {
    alignItems: "center",
    width: metrics.screenWidth * 0.08,
    height: metrics.screenHeight * 0.125,
  },
  divider: {
    margin: metrics.smallMargin,
    backgroundColor: "#000",
    height: metrics.screenHeight * HEIGHT_PERCENTAGE,
    width: 1,
  },
  containerInfor: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: metrics.smallMargin,
    paddingLeft: metrics.baseMargin,
    paddingRight: metrics.baseMargin,
  },
});

export default styles;

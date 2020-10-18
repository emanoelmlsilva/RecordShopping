import { StyleSheet } from "react-native";
import { colors, metrics } from "../../styles";

const WIDTH_PORCENTAGE = 0.9;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: metrics.screenWidth * WIDTH_PORCENTAGE,
    borderTopLeftRadius: metrics.baseBorder,
    borderTopRightRadius: metrics.baseBorder,
  },
  containerItem: {
    width: metrics.screenWidth * 0.9,
  },
  divider: {
    marginBottom: metrics.baseMargin,
    height: metrics.screenHeight * 0.001,
    backgroundColor: colors.colorTextPrimary,
  },
  title: {
    paddingLeft: metrics.basePadding,
    paddingBottom: metrics.basePadding,
  },
  subContainer: {
    width: metrics.screenWidth * 0.8,
    alignSelf: "flex-end",
    marginBottom: metrics.doubleBaseMargin,
  },
  textStore: {
    fontWeight: "bold",
    marginBottom: metrics.smallMargin,
  },
  containerShop: {
    padding: metrics.smallPadding,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerInfo: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: metrics.screenWidth * 0.55,
  },
  textCategory: {
    textAlign: "left",
    width: metrics.screenWidth * 0.2,
    height: metrics.screenHeight * 0.03,
  },
  textAmount: {
    width: metrics.screenWidth * 0.12,
    textAlign: "left",
  },
  textPrice: {
    width: metrics.screenWidth * 0.2,
    textAlign: "left",
  },
  textParcel: {
    width: metrics.screenWidth * 0.12,
    textAlign: "left",
  },
});

export default styles;

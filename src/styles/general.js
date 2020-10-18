import colors from "./colors";
import metrics from "./metrics";

const WIDTH_PORCENTAGE = 0.95;

const general = {
  iconSize: {
    bigger: metrics.screenWidth * 0.07,
    regular: metrics.screenWidth * 0.05,
    small: metrics.screenWidth * 0.03,
  },
  defaultShadow: {
    shadowColor: colors.colorTextPrimary,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  defaultContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.colorPrimary,
  },
  defaultContainerBox: {
    flex: 1,
    width: metrics.screenWidth * WIDTH_PORCENTAGE,
    alignItems: "center",
    borderTopLeftRadius: metrics.baseBorder,
    borderTopRightRadius: metrics.baseBorder,
    backgroundColor: colors.colorSecondary,
  },
};

export default general;

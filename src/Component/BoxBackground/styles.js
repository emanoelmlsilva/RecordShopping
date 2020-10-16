import { StyleSheet } from "react-native";

import { metrics, general } from "../../styles/index";

const WIDTH_PORCENTAGE = 0.95;

const styles = StyleSheet.create({
  container: {
    ...general.defaultContainerBox,
  },
  containerItem: {
    padding: metrics.smallPadding,
    justifyContent: "center",
    alignItems: "center",
    width: metrics.screenWidth * WIDTH_PORCENTAGE,
  },
});

export default styles;

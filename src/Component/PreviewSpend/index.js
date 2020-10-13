import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import PropTypes from "prop-types";
import { Divider } from "react-native-paper";
import styles from "./styles";

const PreviewSpend = (props) => {
  const { type, nickName, date, store, parcel, price } = props;
  const types = [
    { type: "init", name: "star" },
    { type: "credit", name: "credit-card" },
    { type: "money", name: "dollar" },
  ];

  const isParcel = () => {
    return parcel !== "" ? `${parcel} x` : "AV";
  };

  function getIconByType() {
    const index = types.findIndex((item) => item.type === type);

    if (index !== -1) {
      return types[index].name;
    }
    return "star";
  }

  const paint = () => {
    const index = types.findIndex((item) => item.type === type);
    if (index !== -1 && type === "init") {
      return "#ffff00";
    }
    return "#212121";
  };

  const initPreview = () => {
    return (
      <View style={styles.containerTitleInit}>
        <Text style={styles.title}>
          Bem Vindo
          {` ${nickName}`}
        </Text>
        <Text>Aqui você pode acompanhar todas as suas compras</Text>
      </View>
    );
  };

  const credtiOrMoneyPreview = () => {
    return (
      <View>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>
            {`${type === "credit" ? "Cartão" : "Dinheiro"} (${nickName})`}
          </Text>
          <Text>{date}</Text>
        </View>
        <View style={styles.containerInfor}>
          <Text>{store}</Text>
          <Text>{`${isParcel()} R$ ${price}`}</Text>
        </View>
      </View>
    );
  };

  return (
    <TouchableOpacity onPress={() => {}} style={styles.container}>
      <View style={styles.containerIcon}>
        <FontAwesome name={getIconByType()} color={paint()} size={25} />
        {type !== "init" ? <Divider style={styles.divider} /> : null}
      </View>
      {type === "init" ? initPreview() : credtiOrMoneyPreview()}
    </TouchableOpacity>
  );
};

PreviewSpend.propTypes = {
  type: PropTypes.string.isRequired,
  nickName: PropTypes.string.isRequired,
  date: PropTypes.string,
  store: PropTypes.string,
  parcel: PropTypes.string,
  price: PropTypes.string,
};

PreviewSpend.defaultProps = {
  parcel: "",
  price: "",
  store: "",
  date: "",
};
export default PreviewSpend;

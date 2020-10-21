import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import PropTypes from "prop-types";
import { Divider } from "react-native-paper";
import Date from "../../util/Date";
import styles from "./styles";
import ShoppingDetail from "../ShoppingDetail";

const PreviewSpend = (props) => {
  const { type, nickName, date, store, parcel, priceTotal, products } = props;

  const [showDetail, setShowDetail] = useState(false);

  const handleDeatil = () => {
    if (type !== "init") setShowDetail(!showDetail);
  };

  const [day, month, year] = date.split(" ");
  const dateFormated =
    type === "init" ? "" : Date.relativeDate(Date.mountDate(day, month, year));

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
          <Text>{dateFormated}</Text>
        </View>
        <View style={styles.containerInfor}>
          <Text>{store}</Text>
          <Text>{`${isParcel()} R$ ${priceTotal}`}</Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      <ShoppingDetail
        icon={getIconByType()}
        name={nickName}
        date={dateFormated}
        products={products}
        isVisible={showDetail}
        onCancel={handleDeatil}
        priceTotal={priceTotal}
      />
      <TouchableOpacity onPress={() => handleDeatil()} style={styles.container}>
        <View style={styles.containerIcon}>
          <FontAwesome name={getIconByType()} color={paint()} size={25} />
          {type !== "init" ? <Divider style={styles.divider} /> : null}
        </View>
        {type === "init" ? initPreview() : credtiOrMoneyPreview()}
      </TouchableOpacity>
    </View>
  );
};

PreviewSpend.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  type: PropTypes.string.isRequired,
  nickName: PropTypes.string.isRequired,
  date: PropTypes.string,
  store: PropTypes.string,
  parcel: PropTypes.string,
  priceTotal: PropTypes.string,
};

PreviewSpend.defaultProps = {
  parcel: "",
  priceTotal: "",
  store: "",
  date: "",
  products: [],
};
export default PreviewSpend;

import React from "react";
import { View, Text } from "react-native";
import { Divider } from "react-native-paper";
import PropTypes from "prop-types";
import styles from "./styles";
import Date from "../../util/Date";

const PurchaseDetails = (props) => {
  const { day, month, year, store, shoppingStores } = props;
  const dateFormated = Date.relativeDate(Date.mountDate(day, month, year));
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`${dateFormated}`}</Text>
      <Divider style={styles.divider} />
      <View style={styles.subContainer}>
        <Text style={styles.textStore}>{store}</Text>
        {shoppingStores.map((item, index) => (
          <View key={index.toString()} style={styles.containerShop}>
            <Text>{item.product}</Text>
            <View style={styles.containerInfo}>
              <Text style={styles.textCategory}>{item.category}</Text>
              <Text style={styles.textAmount}>{`qt ${item.amount}`}</Text>
              <Text style={styles.textParcel}>{`${item.parcel} x `}</Text>
              <Text style={styles.textPrice}>{`R$ ${item.price}`}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

PurchaseDetails.propTypes = {
  day: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  store: PropTypes.string.isRequired,
  year: PropTypes.string,
  shoppingStores: PropTypes.arrayOf(PropTypes.object).isRequired,
};

PurchaseDetails.defaultProps = {
  year: "",
};

export default PurchaseDetails;

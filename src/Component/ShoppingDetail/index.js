import React from "react";
import { View, Text, Modal } from "react-native";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../../styles";
import { Divider } from "react-native-paper";

const ShoppingDetail = (props) => {
  const {
    name,
    nickName,
    date,
    icon,
    isVisible,
    onCancel,
    products,
    priceTotal,
    typeShopping,
  } = props;

  return (
    <Modal
      visible={isVisible}
      onRequestClose={onCancel}
      animationType="fade"
      transparent
    >
      <View style={styles.frame}>
        <View style={styles.container}>
          <View style={styles.containerHead}>
            <View style={styles.containerTitle}>
              <FontAwesome name={icon} size={15} />
              <Text style={styles.title}>{name}</Text>
              <FontAwesome
                name="remove"
                size={20}
                color={colors.colorSecondary}
                onPress={() => onCancel()}
              />
            </View>
            <Text style={styles.date}>{date}</Text>
          </View>
          <View style={styles.containerInfo}>
            <View style={styles.contianerHeader}>
              <Text style={styles.titleHeader}>Produtos</Text>
              <Text style={styles.titleHeader}>Detalhes</Text>
              <Text style={styles.titleHeader}>Preço</Text>
            </View>
            <Divider style={styles.divider} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ShoppingDetail;

import React from "react";
import { View, Text, Modal, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Divider } from "react-native-paper";
import PropType from "prop-types";
import styles from "./styles";
import { colors } from "../../styles";

const ShoppingDetail = (props) => {
  const { name, date, icon, isVisible, onCancel, products, priceTotal } = props;

  const renderItem = ({ item }) => {
    return (
      <View style={styles.containerDetail}>
        <Text style={styles.columnProducts}>{item.name}</Text>
        <Text style={styles.columnProducts}>
          {`${item.category} - qt${item.amount}`}
        </Text>
        <Text style={styles.columnProducts}>{`R$ ${item.price}`}</Text>
      </View>
    );
  };

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
            <FlatList
              data={products}
              showsVerticalScrollIndicator={false}
              renderItem={renderItem}
              keyExtractor={(item, index) => String(index)}
            />
            <Divider style={styles.divider} />
            <View style={styles.contianerFooter}>
              <Text style={styles.titleHeader}>Total</Text>
              <Text>
                R$
                {priceTotal}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

ShoppingDetail.propTypes = {
  name: PropType.string.isRequired,
  date: PropType.string.isRequired,
  icon: PropType.string.isRequired,
  isVisible: PropType.bool.isRequired,
  onCancel: PropType.func.isRequired,
  products: PropType.arrayOf(PropType.object).isRequired,
  priceTotal: PropType.string.isRequired,
};

export default ShoppingDetail;

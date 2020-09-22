import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../../styles";
import PropTypes from "prop-types";

const CardCredit = (props) => {
  const { userCard, colorCard, isAdd } = props;

  const changedItem = () => {
    if (isAdd) {
      return (
        <TouchableOpacity onPress={() => console.log("clicou")}>
          <Text style={[styles.text, { textDecorationLine: "underline" }]}>
            Adicionar Cartão
          </Text>
        </TouchableOpacity>
      );
    }
    if (userCard === null) {
      return <Text style={styles.text}>Nenhum Cartão adicionado</Text>;
    }
    return (
      <View style={styles.containerCredit}>
        <MaterialCommunityIcons
          name="account-circle"
          size={25}
          color={colors.colorTextPrimary}
        />
        <View style={styles.containerTitle}>
          <Text style={styles.title}>{userCard.name}</Text>
          <Text style={styles.subTitle}>{userCard.nickNameCard}</Text>
        </View>
        <View style={styles.containerFooter}>
          <Text style={styles.textDefault}>Gasto Do Mês:</Text>
          <Text style={styles.textDefault}>R$ {userCard.moneyCurrent}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: colorCard }]}>
      {changedItem()}
    </View>
  );
};

CardCredit.prototype = {
  userCard: PropTypes.object.isRequired,
  colorCard: PropTypes.string.isRequired,
  isAdd: PropTypes.bool,
};

CardCredit.defaultProps = {
  userCard: null,
  colorCard: colors.colorSecondary,
  isAdd: false,
};

export default CardCredit;

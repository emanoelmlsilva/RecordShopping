import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import styles from "./styles";
import { colors } from "../../styles";

const CardCredit = (props) => {
  const {
    name,
    nickNameCard,
    moneyCurrent,
    isCardholder,
    colorCard,
    isAdd,
  } = props;

  const changedItem = () => {
    if (isAdd) {
      return (
        <TouchableOpacity onPress={() => {}}>
          <Text style={[styles.text, { textDecorationLine: "underline" }]}>
            Adicionar Cartão
          </Text>
        </TouchableOpacity>
      );
    }
    if (!name && !nickNameCard && !moneyCurrent) {
      return <Text style={styles.text}>Nenhum Cartão adicionado</Text>;
    }
    return (
      <View style={styles.containerCredit}>
        <MaterialCommunityIcons
          name={isCardholder ? "account-circle" : "account-supervisor-circle"}
          size={25}
          color={colors.colorTextPrimary}
        />
        <View style={styles.containerTitle}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subTitle}>{nickNameCard}</Text>
        </View>
        <View style={styles.containerFooter}>
          <Text style={styles.textDefault}>Gasto Do Mês:</Text>
          <Text style={styles.textDefault}>
            R$
            {moneyCurrent}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: !name || isAdd ? colors.colorSecondary : colorCard,
        },
      ]}
    >
      {changedItem()}
    </View>
  );
};

CardCredit.propTypes = {
  name: PropTypes.string.isRequired,
  nickNameCard: PropTypes.string,
  moneyCurrent: PropTypes.number,
  isCardholder: PropTypes.bool,
  isAdd: PropTypes.bool,
  colorCard: PropTypes.string,
};

CardCredit.defaultProps = {
  nickNameCard: "",
  moneyCurrent: 0,
  colorCard: colors.colorSecondary,
  isCardholder: "",
  isAdd: false,
};

export default CardCredit;

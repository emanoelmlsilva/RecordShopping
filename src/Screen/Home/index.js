import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  FlatList,
} from "react-native";
import CardCredit from "../../Component/CardCredit";
import BoxBackground from "../../Component/BoxBackground";
import { colors } from "../../styles";
import styles from "./styles";

const Home = ({ navigation }) => {
  const userCard = [
    {
      userCard: {
        name: "Emanoel",
        nickNameCard: "El Barto",
        moneyCurrent: "1.345,00",
        isCardholder: true,
      },
      color: "#ce03ff",
    },
    {
      userCard: {
        name: "Silva",
        nickNameCard: "El Silva",
        moneyCurrent: "345,00",
        isCardholder: false,
      },
      color: "#ffbb00",
    },
    {
      userCard: {
        name: "Emanoel",
        nickNameCard: "El Barto",
        moneyCurrent: "1.345,00",
        isCardholder: true,
      },
      color: "#ff00f7",
    },
    {
      userCard: {
        name: "Silva",
        nickNameCard: "El Silva",
        moneyCurrent: "345,00",
        isCardholder: false,
      },
      color: "#0066ff",
    },
    {
      userCard: {
        name: "Emanoel",
        nickNameCard: "El Barto",
        moneyCurrent: "1.345,00",
        isCardholder: true,
      },
      color: "#ff0000",
    },
    {
      userCard: {
        name: "Silva",
        nickNameCard: "El Silva",
        moneyCurrent: "345,00",
        isCardholder: false,
      },
      color: "#e60064",
    },
  ];

  const content = [
    <View>
      <Text>testando 01</Text>
    </View>,
    <View>
      <Text>testando 02</Text>
    </View>,
    <View>
      <Text>testando 03</Text>
    </View>,
    <View>
      <Text>testando 04</Text>
    </View>,
    <View>
      <Text>testando 05</Text>
    </View>,
    <View>
      <Text>testando 011</Text>
    </View>,
    <View>
      <Text>testando 022</Text>
    </View>,
    <View>
      <Text>testando 033</Text>
    </View>,
    <View>
      <Text>testando 044</Text>
    </View>,
    <View>
      <Text>testando 055</Text>
    </View>,
    <View>
      <Text>testando 014</Text>
    </View>,
    <View>
      <Text>testando 024</Text>
    </View>,
    <View>
      <Text>testando 034</Text>
    </View>,
    <View>
      <Text>testando 044</Text>
    </View>,
    <View>
      <Text>testando 054</Text>
    </View>,
    <View>
      <Text>testando 0114</Text>
    </View>,
    <View>
      <Text>testando 0224</Text>
    </View>,
    <View>
      <Text>testando 0334</Text>
    </View>,
    <View>
      <Text>testando 0444</Text>
    </View>,
    <View>
      <Text>testando 0554</Text>
    </View>,
    <View>
      <Text>testando 0144</Text>
    </View>,
    <View>
      <Text>testando 023</Text>
    </View>,
    <View>
      <Text>testando 033</Text>
    </View>,
    <View>
      <Text>testando 043</Text>
    </View>,
    <View>
      <Text>testando 053</Text>
    </View>,
    <View>
      <Text>testando 0113</Text>
    </View>,
    <View>
      <Text>testando 0322</Text>
    </View>,
    <View>
      <Text>testando 0333</Text>
    </View>,
    <View>
      <Text>testando 0434</Text>
    </View>,
    <View>
      <Text>testando 0535</Text>
    </View>,
    <View>
      <Text>testando 021</Text>
    </View>,
    <View>
      <Text>testando 012</Text>
    </View>,
    <View>
      <Text>testando 013</Text>
    </View>,
    <View>
      <Text>testando 014</Text>
    </View>,
    <View>
      <Text>testando 015</Text>
    </View>,
    <View>
      <Text>testando 1011</Text>
    </View>,
    <View>
      <Text>testando 1022</Text>
    </View>,
    <View>
      <Text>testando 1033</Text>
    </View>,
    <View>
      <Text>testando 0144</Text>
    </View>,
    <View>
      <Text>testando 0155</Text>
    </View>,
  ];

  const mountListCard = (listUserCard) => {
    return listUserCard.map((userCard) => {
      return (
        <CardCredit userCard={userCard.userCard} colorCard={userCard.color} />
      );
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.colorPrimary}
      />
      <FlatList
        data={mountListCard(userCard)}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => String(index)}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.subContainer}>{item}</View>
        )}
      />
      <BoxBackground content={content} />
    </SafeAreaView>
  );
};

export default Home;

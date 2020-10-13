import React from "react";
import { View, SafeAreaView, StatusBar, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CardCredit from "../../Component/CardCredit";
import { colors } from "../../styles";
import styles from "./styles";
import PreviewSpend from "../../Component/PreviewSpend";
import data from "../../assets/data.json";

const Home = ({ navigation }) => {
  const mountCards = () => {
    const listCards = data.cards.map((item) => {
      const userCard = {
        name: "",
        nickNameCard: "",
        moneyCurrent: "",
        isCardholder: false,
        color: "",
      };

      userCard.name = item.name;
      userCard.nickNameCard = item.nickName;
      userCard.moneyCurrent = item.moneyCurrent;
      userCard.isCardholder = item.isCardholder;
      userCard.color = item.color;

      return userCard;
    });

    return listCards;
  };

  const mountPreviewPay = () => {
    return data.shopping.map((item, index) => (
      <PreviewSpend
        key={String(index)}
        type={item.payment.type}
        nickName={
          item.payment.type === "credit"
            ? item.payment.cardNickName
            : item.payment.name
        }
        date={item.date}
        store={item.store}
        parcel={item.payment.parcel}
        price={item.payment.price}
      />
    ));
  };

  const mountListCard = (listUserCard) => {
    if (listUserCard.length === 0) {
      return [<CardCredit />];
    }

    return listUserCard.map((item) => {
      return <CardCredit key={item} userCard={item} colorCard={item.color} />;
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.colorPrimary}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          paddingBottom: 10,
        }}
      >
        <FlatList
          data={mountListCard(mountCards())}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => String(index)}
          horizontal
          renderItem={({ item }) => (
            <View style={styles.subContainer}>{item}</View>
          )}
        />

        <View style={styles.containerItem}>
          {mountPreviewPay().map((item) => item)}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

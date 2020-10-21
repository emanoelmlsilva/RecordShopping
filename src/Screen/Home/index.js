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
        codCard: 0,
        nameCard: "",
        nickNameCard: "",
        moneyCurrent: 0,
        invoiceDay: "",
        isCardholder: false,
        color: [""],
        products: [],
      };

      userCard.codCard = item.codCard;
      userCard.nameCard = item.nameCard;
      userCard.nickNameCard = item.nickNameCard;
      userCard.moneyCurrent = parseFloat(item.moneyCurrent);
      userCard.invoiceDay = item.invoiceDay;
      userCard.isCardholder = item.isCardholder;
      userCard.color = item.color;
      userCard.products = item.products;
      return userCard;
    });

    return listCards;
  };

  const mountPreviewPay = () => {
    return data.shopping.map((item) => {
      return item.purchase.map((objectItem, index) => (
        <PreviewSpend
          key={String(index)}
          type={objectItem.payment.type}
          nickName={
            objectItem.payment.type === "credit"
              ? objectItem.payment.cardNickName
              : objectItem.payment.name
          }
          date={item.date}
          store={objectItem.store}
          parcel={objectItem.payment.parcel}
          priceTotal={objectItem.payment.priceTotal}
          products={objectItem.products}
        />
      ));
    });
  };

  const mountListCard = (listUserCard) => {
    if (listUserCard.length === 1) {
      return [
        <CardCredit codCard="000" name="" colorCard={listUserCard[0].color} />,
      ];
    }

    return listUserCard.map((item) => {
      if (item.nameCard !== "") {
        return (
          <CardCredit
            key={item}
            codCard={item.codCard}
            name={item.nameCard}
            nickNameCard={item.nickNameCard}
            moneyCurrent={item.moneyCurrent}
            invoiceDay={item.invoiceDay}
            isCardholder={item.isCardholder}
            colorCard={item.color}
          />
        );
      }

      return null;
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

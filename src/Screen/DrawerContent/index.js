import React from "react";
import { SafeAreaView, ScrollView, View, Image, Text } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Drawer, Divider } from "react-native-paper";
import Persona from "../../../assets/avatar2.png";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";

const DrawerContent = (props) => {
  let { name, nickName } = props;

  name = "Emanoel";
  nickName = "El Barto";

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DrawerContentScrollView>
        <View style={styles.containerAvatar}>
          <View style={styles.subContainer}>
            <Avatar.Image source={Persona} size={70} />
            <View style={styles.containerText}>
              <View style={styles.subContainerText}>
                <Text style={styles.textDefault}>Hello</Text>
                <Text style={[styles.textName, styles.textDefault]}>
                  {name}
                </Text>
              </View>
              <Text style={styles.textSubName}>{nickName}</Text>
            </View>
            <Divider />
          </View>
        </View>
        <Drawer.Section>
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            )}
            label="Início"
            onPress={() => {
              props.navigation.navigate("Home");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="credit-card-outline"
                color={color}
                size={size}
              />
            )}
            label="Cartões"
            onPress={() => {
              props.navigation.navigate("Home");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="basket" color={color} size={size} />
            )}
            label="Compras"
            onPress={() => {
              props.navigation.navigate("Home");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="cart" color={color} size={size} />
            )}
            label="Produtos"
            onPress={() => {
              props.navigation.navigate("Home");
            }}
          />
        </Drawer.Section>
        <Drawer.Section title="Comunicação">
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="alert-circle"
                color={color}
                size={size}
              />
            )}
            label="Sobre"
            onPress={() => {
              props.navigation.navigate("Home");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="send" color={color} size={size} />
            )}
            label="FeedBack"
            onPress={() => {
              props.navigation.navigate("Home");
            }}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

export default DrawerContent;

import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screen/Home";
import { colors, fonts, metrics } from "../styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();

const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "left",
        headerTintColor: colors.colorTextSecondary,
        headerStyle: {
          backgroundColor: colors.colorPrimary,
        },
        headerTitleStyle: {
          color: colors.colorTextSecondary,
          fontSize: fonts.title,
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "ShoppingList",
          headerLeft: () => (
            <View style={{ margin: metrics.baseMargin }}>
              <MaterialCommunityIcons
                name="menu"
                size={25}
                color={colors.colorTextSecondary}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;

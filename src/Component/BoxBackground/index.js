import React from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import PropTypes from "prop-types";
import styles from "./styles";

const BoxBackground = (props) => {
  const { content } = props;
  return (
    <View style={styles.container}>
      <FlatList
        data={content}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item }) => (
          <View key={item.id} style={styles.containerItem}>
            {item}
          </View>
        )}
      />
    </View>
  );
};

BoxBackground.propTypes = {
  content: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default BoxBackground;

import React from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "./styles";
import { FlatList } from "react-native-gesture-handler";
import PropTypes from "prop-types";

const BoxBackground = (props) => {
  const { content, onPressItem } = props;
  return (
    <View style={styles.container}>
      <FlatList
        data={content}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => onPressItem()}
            key={item.id}
            style={styles.containerItem}
          >
            {item}
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

BoxBackground.prototype = {
  contente: PropTypes.arrayOf(PropTypes.element).isRequired,
  onPressItem: PropTypes.func,
};

BoxBackground.defaultProps = {
  onPressItem: () => {},
};

export default BoxBackground;

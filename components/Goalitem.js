import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

//The Goalitem component is likely rendered for each item in the course array.
const Goalitem = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => props.onDelete(props.id)}
    >
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    marginVertical: 10,
    borderBlockColor: "black",
    borderWidth: 1,
  },
});

export default Goalitem;

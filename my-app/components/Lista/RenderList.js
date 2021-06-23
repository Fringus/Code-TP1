import { Button, StyleSheet, Text, View } from "react-native";

import React from "react";

export default function ListItem({ data, handleDeleteModal }) {
  return (
    <View style={styles.itemList}>
      <Text style={styles.item}> {data.item.value} </Text>
      <Button
        title="X"
        style={styles.button}
        onPress={() => handleDeleteModal(data.item.id)}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    justifyContent: "flex-start",
    width: 270,
    marginTop: 10,
    marginLeft: 8,
    marginRight: 8,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  itemList: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  button: {
    width: 20,
    margin: 5,
  },
});

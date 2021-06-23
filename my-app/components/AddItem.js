import { Button, StyleSheet, TextInput, View } from "react-native";

import React from "react";

const handleEnter = (e) => {
  if (e.keyCode === 13) {
    Button.click();
  }
};

export default function AddItem({
  handleChangeText,
  handleAddItem,
  inputText,
}) {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputSpace}>
        <TextInput
          placeholder="Add item"
          style={styles.input}
          onChangeText={handleChangeText}
          value={inputText}
          onSubmitEditing={handleAddItem}
        ></TextInput>
        <Button title="ADD" onPress={handleAddItem}></Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  inputSpace: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    width: 200,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  inputContainer: {
    padding: 5,
    borderWidth: 3,
    borderColor: '#6494AA',
    borderRadius: 5,
    backgroundColor: 'white',
  }
});

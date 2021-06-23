import {
  Button,
  Modal,
  StyleSheet,
  Text,
  View
} from "react-native";

import React from "react";

export default function ModalWindow({
    modalVisible,
    itemSelected,
    handleConfirmeDelete,
    handleDontDelete,
}) {
    return(
  <Modal transparent={true} animationType="slide" visible={modalVisible}>
    <View style={styles.modal}>
      <Text flexDirection="">Eliminar:</Text>
      <Text textAlign='center'> {itemSelected.value} </Text>
      <View style={styles.buttons}>
        <Button title="Si" onPress={handleConfirmeDelete}></Button>
        <Button title="No" onPress={handleDontDelete}></Button>
      </View>
    </View>
  </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    marginTop: 200,
    margin: 100,
    height: 150,
    padding: 0,
    borderWidth: 3,
    borderRadius: 20,
    borderColor: 'black',
    backgroundColor: '#ECECEC',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-evenly',
  },
  buttons: {
    width: '100%',
    flexDirection:'row',
    justifyContent:'space-evenly',
  },
})
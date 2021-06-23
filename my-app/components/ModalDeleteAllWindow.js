import { Button, Modal, StyleSheet, Text, View } from "react-native";

import React from "react";

export default function ModalDeleteAllWindow({
  handleDAllModal,
  modalDAllVisible,
  handleDeleteAll,
  handleDontDeleteAll,
}) {
  return (
    <View>
      <View style={styles.eraseAllButton}>
        <Button title="Erase all" onPress={handleDAllModal}></Button>
      </View>
      <Modal transparent={true} animationType="fade" visible={modalDAllVisible}>
        <View style={styles.modal}>
          <Text>Desea eliminar todo?</Text>
          <View style={styles.modalButtons}>
            <Button title="Si" onPress={handleDeleteAll}></Button>
            <Button title="No" onPress={handleDontDeleteAll}></Button>
          </View>
        </View>
      </Modal>
    </View>
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
    borderColor: "black",
    backgroundColor: "#ECECEC",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-evenly",
  },
  modalButtons: {
    width: '100%',
    flexDirection:'row',
    justifyContent:'space-evenly',
  },
  eraseAllButton: {
    width:'100%',
    justifyContent: "center",
    alignItems: "center",
  },
});

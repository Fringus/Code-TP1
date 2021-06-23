import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import AddItem from "./components/AddItem";
import List from "./components/Lista";
import ModalDeleteAllWindow from "./components/ModalDeleteAllWindow";
import ModalWindow from "./components/ModalWindow";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [itemList, setItemList] = useState([]);

  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [modalDAllVisible, setModalDAllVisible] = useState(false);

  const handleChangeText = (text) => setInputText(text);
  const handleAddItem = () => {
    if (inputText != "" && inputText != " ")
      setItemList([
        ...itemList,
        {
          id: Math.random().toString(),
          value: inputText,
        },
      ]);
    setInputText("");
  };

  const handleConfirmeDelete = () => {
    const id = itemSelected.id;
    setItemList(itemList.filter((item) => item.id !== id));
    setModalVisible(false);
    setItemSelected({});
  };
  const handleDontDelete = () => {
    setModalVisible(false);
    setItemSelected({});
  };
  const handleDeleteModal = (id) => {
    setItemSelected(itemList.find((item) => item.id === id));
    setModalVisible(true);
  };
  const handleDAllModal = () =>{
    if(itemList.length !== 0){
      setModalDAllVisible(true);
    }
  };  
  const handleDeleteAll = () => {
    while (itemList.length > 0) {
      itemList.pop();
    }
    setModalDAllVisible(false);
    setItemSelected({});
  };
  const handleDontDeleteAll = () => {
    setModalDAllVisible(!modalDAllVisible);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Lista de compra</Text>        
      </View>
      <AddItem
        handleChangeText={handleChangeText}
        handleAddItem={handleAddItem}
        inputText={inputText}
      ></AddItem>
      <ScrollView style={styles.itemBox} horizontal>
        <List itemList={itemList} handleDeleteModal={handleDeleteModal}/>
        <ModalWindow
          modalVisible={modalVisible}
          itemSelected={itemSelected}
          handleConfirmeDelete={handleConfirmeDelete}
          handleDontDelete={handleDontDelete}
        ></ModalWindow>
      </ScrollView>
      <ModalDeleteAllWindow
        handleDAllModal={handleDAllModal}
        modalDAllVisible={modalDAllVisible}
        handleDeleteAll={handleDeleteAll}
        handleDontDeleteAll={handleDontDeleteAll}
      ></ModalDeleteAllWindow>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    padding: 30,
    paddingTop: 50,
    backgroundColor: '#D9D9D9'
  },
  titleContainer: {
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
  },
  itemBox: {
    marginTop: 20,
    marginBottom: 10,
    height: '80%',
    borderWidth: 4,
    borderRadius: 20,
    borderColor: "black",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});

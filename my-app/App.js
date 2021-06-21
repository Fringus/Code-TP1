import 
{
  Button,
  FlatList,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';

import AddItem from './components/AddItem'
import List from './components/Lista';
import ModalWindow from './components/ModalWindow';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [itemList, setItemList] = useState([]);

  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handleChangeText= (text) => setInputText(text);
  const handleAddItem= () => {
    if (inputText != '' && inputText != ' ')
    setItemList([
      ...itemList,
      {
        id:Math.random().toString(),
        value: inputText
      }
    ]);
    setInputText('');
  }

  const handleConfirmeDelete = () =>{
    const id = itemSelected.id;
    setItemList(itemList.filter(item => item.id !== id ));
    setModalVisible(false);
    setItemSelected({});
  }
  const handleDeleteAll = () =>{
    while(itemList.length > 0) {
      itemList.pop();
    }
    setItemSelected({});
  }
  const handleDontDelete = () =>{
    setModalVisible(false);
    setItemSelected({});
  }
  
  const handleModal = id => {
    setItemSelected(itemList.find(item=>item.id === id));
    setModalVisible(true);
  }

  return (
    <View style ={styles.screen}>
      {/*Head*/}
      <AddItem
        handleChangeText = {handleChangeText}
        handleAddItem = {handleAddItem}
        inputText = {inputText}
      ></AddItem>
      {/*Body*/}
      <ScrollView style={styles.itemBox} horizontal>
      <List
      itemList={itemList}
      handleModal={handleModal}
      />
      <ModalWindow
        modalVisible={modalVisible}
        itemSelected={itemSelected}
        handleConfirmeDelete={handleConfirmeDelete}
        handleDontDelete={handleDontDelete}
      ></ModalWindow>
      </ScrollView>
      <Button title='Erase all' onPress={handleDeleteAll}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
    paddingTop: 50,
  },
  itemBox: {
    marginTop: 20,
    padding: 0,
    height: 650,
    borderWidth: 3,
    borderRadius: 20,
    borderColor: 'black',
    backgroundColor: '#ECECEC',
  },
});
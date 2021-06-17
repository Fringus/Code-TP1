import 
{
  Button,
  FlatList,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import React, {useState} from 'react';

import { StatusBar } from 'expo-status-bar';
import {VirtualizedList} from 'react-native-web';

export default function App() {

  
  const [inputText, setInputText] = useState('');
  const [itemList, setItemList] = useState([]);

  const [itemSelected,setItemSelected] = useState({});
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
      <View style={styles.inputContainer}>
        <TextInput placeholder="Add item" 
        style={styles.input}
        onChangeText={handleChangeText}
        value={inputText}
        ></TextInput>
        <Button title= "ADD" onPress={handleAddItem}></Button>
      </View>
      {/*Body*/}
      <ScrollView style={styles.itemBox}>
      <FlatList
        data = {itemList}
        renderItem = { data => {
          return (
          <View style={styles.itemList}>
            <Text style={styles.item}> {data.item.value} </Text>
            <Button title= 'X' style={styles.button} onPress={() => handleModal(data.item.id)}></Button>
          </View>
          );
        }}
        keyExtractor={item => item.id}
        ></FlatList>
        <Modal transparent={true} animationType="slide" visible={modalVisible} >
            <View style={styles.modal}>
              <Text flexDirection=''>Eliminar:</Text>
              <Text> {itemSelected.value} </Text> 
              <View flexDirection={'row'}>
              <Button title= 'Si' onPress={handleConfirmeDelete}></Button>
              <Text>         </Text>
              <Button title= 'No' onPress={handleDontDelete}></Button>
              </View>
            </View>
        </Modal>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
    paddingTop: 50,
  },
  inputContainer: {
      flexDirection: 'row',
      alignItems:'center',
      justifyContent: 'space-between',
  },
  input: {
    width: 200,
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  itemList: {
    flexDirection: 'row',
    alignItems:'flex-end',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  itemBox: {
    marginTop: 20,
    padding: 0,
    height: 600,
    borderWidth: 3,
    borderColor: 'black',
    backgroundColor: '#ECECEC',
  },
  item: {
    justifyContent: 'flex-start',
    width: 260,
    marginTop: 10,
    marginLeft: 8,
    marginRight: 8,
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  button: {
    width:20,
    margin: 5,
  },
  modal: {
    marginTop: 200,
    margin: 100,
    height: 150,
    padding: 0,
    borderWidth: 3,
    borderColor: 'black',
    backgroundColor: '#ECECEC',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-evenly',
  }
});
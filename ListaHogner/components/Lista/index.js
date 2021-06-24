import { FlatList } from "react-native";
import ListItem from "./RenderList";
import React from "react";

export default function List({ 
    itemList, 
    handleDeleteModal,
}) {
  return (
    <FlatList
      data={itemList}
      renderItem={(data) => (
        <ListItem data={data} handleDeleteModal={handleDeleteModal}></ListItem>
      )}
      keyExtractor={(item) => item.id}
    ></FlatList>
  );
}

import {
  FlatList,
} from "react-native";
import ListItem from "./RenderList";
import React from "react";

export default function List({
    itemList,
    handleModal,
}) {
    return(
    <FlatList
        data={itemList}
        renderItem={(data) => <ListItem data={data} handleModal={handleModal}></ListItem>}
        keyExtractor={(item) => item.id}
    ></FlatList>
    )
}
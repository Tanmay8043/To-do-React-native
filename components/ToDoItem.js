import React from "react";
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ToDoItem({item, pressHandler}){
    return(
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
        <View style= {styles.todo}>
            <MaterialIcons name="delete" size={20} color="#333" />
            <Text style={styles.text}>{item.text}</Text>
        </View>
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
 todo:{
    padding: 15,
    marginTop: 15,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: 'dotted',
    borderRadius: 10,
    flexDirection:"row"
 },
 text:{
     marginLeft:10
 }
});
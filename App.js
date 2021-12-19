import React, {useState} from "react";
import { StyleSheet, Text,Alert, TouchableWithoutFeedback, View, FlatList, Keyboard } from 'react-native';
import Header from "./components/header";
import ToDoInput from "./components/ToDoInput";
import ToDoItem from "./components/ToDoItem";

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);

  const pressHandler=(key)=>{
    setTodos((prev) => {
      return prev.filter(todo => todo.key != key)
    });
  };

  const submitHandler=(text)=>{
    if(text.length>3){
      setTodos((prev) =>{
      return [
        {text: text, key: Math.random().toString()},
        ...prev

        ];
      });
    }else{
      Alert.alert("Oops!","todos must be over 3 characters long",[
        {text:"Understood"}
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
        <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <ToDoInput submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList 
            data = {todos}
            renderItem={({item}) => (
              <ToDoItem item ={item} pressHandler={pressHandler}/>
            )}
          />
        </View>
      </View>
    </View>
  </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    flex: 1,
    padding: 40
  },
  list:{
    flex: 1,
    marginTop: 20
  }
});

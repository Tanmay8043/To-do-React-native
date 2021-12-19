import React, {useState} from "react";
import { StyleSheet, Text,View, TextInput, Button } from 'react-native';


export default function ToDoInput({submitHandler}){
    const [input, setInput] = useState('');

    const changeHandler = (val) => {
        setInput(val)
    };

    return (
        <View>
            <TextInput 
                style ={styles.input}
                placeholder="Enter Your to-do"
                onChangeText={changeHandler}
            />
            <Button onPress={()=> submitHandler(input)} title="Add to-do" color="coral" />
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor:"#ddd"
    }
});
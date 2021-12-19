import React from "react";
import { StyleSheet, Text, View } from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style ={styles.title}>My ToDos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height: 80,
        paddingTop: 40,
        backgroundColor: "coral"
    },
    title:{
        paddingLeft: 40,
        fontWeight: "bold",
        color: "#fff",
        fontSize: 25
    }
});
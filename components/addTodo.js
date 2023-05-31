import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";



export default function AddTodo({ submitHandler } ){

    const [text , setText ] = useState("");


    const changeHandler = (val) => {
        setText(val)
    }



    return(
        <View>
            <TextInput 
            style={styles.input}
            placeholder="Add todo ...."
            onChangeText={changeHandler} />

            <Button
            color="coral"
            title="Add todo"
                onPress={() => submitHandler(text) } />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd"
    }
})
# Todo


### To create a header component , create a header.js file under the component folder.

````
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}> My better ToDos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: "coral"
    },
    title: {
        textAlign: "center",
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    }
})

````

#### then import it on App.js file and use it. like below.

````
import Header from './components/header';

   <Header />
````


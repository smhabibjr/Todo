# Todo


### To change the state create a function , when ever press the element trigger that function

````
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem';

export default function App() {
  const [todos, setTodos] = useState([
    { text: "bud coffe", key: 0},
    { text: "create a react native app", key: 1 },
    { text: "create web using ruby on rails ", key: 3 }
  ])

  const pressHandler = (key) => {
    setTodos((prevItem) => {
      return prevItem.filter(todo => todo.key != key);
    })
  }

  return (
    <View style={styles.container}>
     {/* header  */}
     <Header />

      <View style={styles.content}> 
        {/* to do form  */}
        <View style={styles.list}> 
          <FlatList 
            data={todos}
            renderItem={({item}) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
            />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding:40
  },
  list: {
    marginTop: 20
  }
});


````

#### call that function in todoItem component

````
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TodoItem({ item , pressHandler }){
    return(
        <TouchableOpacity onPress={() => pressHandler(item.key) }>
            <Text style={styles.item}>{item.text} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding:16,
        marginTop: 16,
        borderColor: "#bbb",
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 10
    }
})
````


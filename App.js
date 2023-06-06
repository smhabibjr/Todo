import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem';
import AddTodo from './components/addTodo';

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

  const submitHandler = (text) => {
    if(text.length > 3){
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos
        ]
      })
    }else{
      Alert.alert("OOOPS!", "Todos must be over 3 chars long", [
        {text: 'Understood', onPress: () => console.log("alert closed!")}
      ])
    }
  }

  const keyboard_dismiss = () => {
    Keyboard.dismiss();
  }

  return (
    <TouchableWithoutFeedback onPress={() => keyboard_dismiss() }>
      <View style={styles.container}>
        {/* header  */}
        <Header />

        <View style={styles.content}>
          {/* to do form  */}
          <AddTodo submitHandler={submitHandler} />

          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
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
    backgroundColor: '#fff'
  },
  content: {
    padding:40
  },
  list: {
    marginTop: 20
  }
});

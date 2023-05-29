import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/header';

export default function App() {
  const [todos, setTodos] = useState([
    { text: "bud coffe", key: 0},
    { text: "bud coffe", key: 1 },
    { text: "bud coffe", key: 3 }
  ])
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
              <Text> {item.text} </Text>
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

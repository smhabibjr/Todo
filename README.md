# Todo


### keyboard Dismiss function 

````
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

````


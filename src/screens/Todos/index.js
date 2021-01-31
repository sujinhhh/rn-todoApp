import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  Button,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import produce from 'immer';
import _ from 'lodash';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';

const index = () => {
  const [todos, setTodos] = useState([]);
  const [inputTodo, setInputTodo] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('todos')
      .then((data) => {
        if (data !== null) {
          setTodos(JSON.parse(data));
        }
      })
      .catch((error) => console.log(error.message));
  }, []);

  const store = (newList) => {
    setTodos(newList);
    AsyncStorage.setItem('todos', JSON.stringify(newList));
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>오늘의 할일</Text>
      </View>
      <View style={styles.contents}>
        <FlatList
          data={todos}
          renderItem={({item}) => (
            <View style={styles.todoItem}>
              <TouchableOpacity
                onPress={() => {
                  store(
                    produce(todos, (draft) => {
                      const index = todos.indexOf(item);
                      draft[index].done = !draft[index].done;
                    }),
                  );
                }}>
                {item.done ? (
                  <Image
                    style={styles.doneIcon}
                    source={require('../../assets/images/jin.png')}
                  />
                ) : (
                  <Image
                    style={styles.doneIcon}
                    source={require('../../assets/images/chan.png')}
                  />
                )}
              </TouchableOpacity>
              <Text style={styles.todoItemText}>{item.todo}</Text>
              <AntDesign
                style={{paddingRight: 15}}
                name={'delete'}
                size={24}
                color={'pink'}
                onPress={() => {
                  store(_.reject(todos, (element) => element.id === item.id));
                }}
              />
            </View>
          )}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="오늘의 할일을 적어봐~"
          value={inputTodo}
          onChangeText={(value) => {
            setInputTodo(value);
          }}
        />
        <TouchableOpacity
          style={styles.inputButton}
          onPress={() => {
            if (inputTodo === '') {
              return;
            }
            const newItem = {
              id: new Date().getTime().toString(),
              todo: inputTodo,
              done: false,
            };
            store([...todos, newItem]);
            setInputTodo('');
          }}>
          <Text style={styles.buttonText}>추가</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    alignItems: 'center',
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    color: '#62727b',
  },
  contents: {
    flex: 1,
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    elevation: 6,
    backgroundColor: '#000',
    borderRadius: 40,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  doneIcon: {
    width: 50,
    height: 50,
  },
  todoItemText: {
    flex: 1,
    paddingLeft: 20,
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
    height: 40,
  },
  input: {
    borderColor: '#ec407a',
    borderWidth: 1,
    flex: 1,
    borderRadius: 20,
    paddingLeft: 20,
  },

  inputButton: {
    backgroundColor: '#ff77a9',
    paddingHorizontal: 10,
    borderRadius: 15,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    textAlignVertical: 'center',
  },
});

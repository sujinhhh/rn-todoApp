import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import _ from 'lodash';
import index from './index';

const CreateWords = () => {
  const [words, setWords] = useState([]);
  const [addWords, setAddWords] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('words')
      .then((data) => {
        if (data !== null) {
          setWords(JSON.parse(data));
        }
      })
      .catch((error) => console.log(error.massage));
  }, []);

  const store = (newWords) => {
    setWords(newWords);
    AsyncStorage.setItem('words', JSON.stringify(newWords));
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.input}>
        <TextInput
          value={addWords}
          onChangeText={(value) => setAddWords(value)}
        />
        <Button
          title="추가"
          onPress={() => {
            if (addWords === '') {
              return;
            }
            const newItem = {
              word: addWords,
              id: Math.random(),
            };
            store([...words, newItem]);
            setAddWords('');
          }}
        />
        <View style={styles.list}>
          <FlatList
            data={words}
            keyExtractor={words.id}
            renderItem={({item}) => (
              <View>
                <Text>{item.word}</Text>
                <Button
                  color="#b388ff"
                  title=" 삭제 "
                  onPress={() => {
                    store(_.reject(words, (element) => element.id === item.id));
                  }}
                />
              </View>
            )}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default CreateWords;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

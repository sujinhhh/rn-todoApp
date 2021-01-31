import React, {useState, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import _ from 'lodash';
import words from './words.json';

const getInitials = (string) => {
  return string
    .split('')
    .map((char) => {
      const index = (char.charCodeAt(0) - 44032) / 28 / 21;
      if (index >= 0) return String.fromCharCode(index + 4352);
      return char;
    })
    .join('');
};

const index = ({navigation}) => {
  const [quizList, setQuizList] = useState(_.shuffle(words));
  const [mode, setMode] = useState('quiz');

  const onPress = useCallback(() => {
    if (mode === 'answer') {
      setQuizList(quizList.slice(1));
    }
    setMode(mode === 'quiz' ? 'answer' : 'quiz');
  }, [mode]);

  const retry = useCallback(() => {
    setQuizList(_.shuffle(words));
    setMode('quiz');
  }, [quizList]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.backButton}>
            <Text>돌아가기</Text>
          </View>
          <Text>Words Game</Text>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => navigation.navigate('CreateWords')}>
            <Text>단어 리스트</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contents}>
          <View style={styles.card}>
            <Text style={styles.contentsText}>
              {quizList.length ? (
                mode === 'quiz' ? (
                  getInitials(quizList[0])
                ) : (
                  quizList[0]
                )
              ) : (
                <Text>끝 </Text>
              )}
            </Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>
              {quizList.length ? (
                mode === 'quiz' ? (
                  '정답확인'
                ) : (
                  '다음문제'
                )
              ) : (
                <Text onPress={retry}>다시풀기 </Text>
              )}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backButton: {
    // marginRight: 50,
  },
  contents: {
    flex: 1,
    borderWidth: 4,
    borderColor: '#009688',
    justifyContent: 'center',
    alignItems: 'center',
  },

  contentsText: {
    fontSize: 40,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    width: 100,
    height: 50,
    elevation: 10,
    backgroundColor: '#009688',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

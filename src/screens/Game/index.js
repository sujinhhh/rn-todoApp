import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const index = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header}>
        <Text>Game List</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('WordsGame')}
        style={styles.wordsGame}>
        <Text>Words Game</Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginVertical: 20,
    alignItems: 'center',
  },
});

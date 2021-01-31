import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigation from './BottomNavigaion';
import Game from '../screens/Game';
import WordsGame from '../screens/WordsGame';
import Todos from '../screens/Todos';
import OnboardingScreen from '../screens/OnboardingScreen';
import CreateWords from '../screens/WordsGame/CreateWords';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import LoginScreen from '../screens/LogInScreen';

const Stack = createStackNavigator();

const RootNavigation = () => {
  // ******* Launching Once Method start ==>

  // const [isFirstLaunch, setIsFirstLaunch] = useState(false);

  // useEffect(() => {
  //   AsyncStorage.getItem('alreadyLaunched').then((value) => {
  //     if (value === null) {
  //       AsyncStorage.setItem('alreadyLaunched', 'true');
  //       setIsFirstLaunch(true);
  //     } else {
  //       setIsFirstLaunch(false);
  //     }
  //   });
  // }, []);

  // if (isFirstLaunch === null) {
  //   return null;
  // } else if (isFirstLaunch === true) {
  //   return (
  //     <NavigationContainer>
  //       <Stack.Navigator screenOptions={{headerShown: false}}>
  //         <Stack.Screen name="OnboardScreeen" component={OnboardingScreen} />
  //         <Stack.Screen name="Home" component={BottomNavigation} />
  //         <Stack.Screen name="Game" component={Game} />
  //         <Stack.Screen name="WordsGame" component={WordsGame} />
  //         <Stack.Screen name="CreateWords" component={CreateWords} />
  //       </Stack.Navigator>
  //     </NavigationContainer>
  //   );
  // } else {
  //   return <LoginScreen />;
  // }
  // <===  Launching Once Method End  *******

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="OnboardScreeen" component={OnboardingScreen} />
        <Stack.Screen name="Home" component={BottomNavigation} />
        <Stack.Screen name="Todos" component={Todos} />
        <Stack.Screen name="Game" component={Game} />
        <Stack.Screen name="WordsGame" component={WordsGame} />
        <Stack.Screen name="CreateWords" component={CreateWords} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigation;

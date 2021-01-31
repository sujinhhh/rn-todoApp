import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      onSkip={() => navigation.navigate('Home')}
      onDone={() => navigation.navigate('Home')}
      pages={[
        {
          backgroundColor: '#ffffce',
          image: <Image source={require('../../assets/images/jin.png')} />,
          title: 'Seram App',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#ffcccb',
          image: <Image source={require('../../assets/images/chan.png')} />,
          title: '나만의 앱',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#baffff',
          image: <Image source={require('../../assets/images/1.jpg')} />,
          title: '오늘의 할일',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({});

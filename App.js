import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import React from 'react';
import RootStack from './src/navigation/RootStack';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import NewPasswordScreen from './src/screens/NewPasswordScreen';

const App=()=> {
  return (
    <SafeAreaView style={styles.root}>
      <SignInScreen/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBFC',
    
  },
});

export default App;
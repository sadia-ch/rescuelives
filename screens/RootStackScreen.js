import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import PhoneAuthScreen from './PhoneAuthScreen';
import OTPScreen from './OTPScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import MainScreen from './MainScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="PhoneAuthScreen" component={PhoneAuthScreen}/>
        <RootStack.Screen name="OTPScreen" component={OTPScreen}/>
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
        <RootStack.Screen name="MainScreen" component={MainScreen}/>

    </RootStack.Navigator>
);

export default RootStackScreen;
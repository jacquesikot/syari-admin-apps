import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthNavParamList } from '../types';
import LoginEmail from '../screens/LoginEmail';
import LoginPassword from '../screens/LoginPassword';
import ForgotPassword from '../screens/ForgotPassword';

const AuthStack = createStackNavigator<AuthNavParamList>();

function AuthNavigator(): JSX.Element {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="LoginEmail" component={LoginEmail} />
      <AuthStack.Screen name="LoginPassword" component={LoginPassword} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
    </AuthStack.Navigator>
  );
}

export default AuthNavigator;

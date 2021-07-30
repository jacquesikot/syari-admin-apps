import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthNavParamList } from '../types';
import Login from '../screens/Login';
import ForgotPassword from '../screens/ForgotPassword';

const AuthStack = createStackNavigator<AuthNavParamList>();

function AuthNavigator(): JSX.Element {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
    </AuthStack.Navigator>
  );
}

export default AuthNavigator;

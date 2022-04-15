/* React Imports */
import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

/* Screens */

import SignUp from '../../screens/SignUp';
import Login from '../../screens/Login';
import Home from '../../screens/Home';

const Stack = createStackNavigator();

function MainStack() {
  const [token, setToken] = useState(null);

  useEffect(async () => {
    const userToken = await AsyncStorage.getItem('token');
    if (userToken) { setToken(userToken); }
  });

  return (
    <NavigationContainer>
      {/* initialRouteName="SignUp" */}
      <Stack.Navigator>
        {token == null ? (
          <>
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Login" component={Login} />
          </>

        ) : (
          <Stack.Screen name="Home" component={Home} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainStack;

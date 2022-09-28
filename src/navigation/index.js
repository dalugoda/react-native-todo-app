import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import CreateTodo from '../screens/CreateTodo';

const Stack = createNativeStackNavigator();

export const NavigationStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: 'To-Do App'}}
      />
      <Stack.Screen name="Create" component={CreateTodo} />
    </Stack.Navigator>
  );
};

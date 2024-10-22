// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CreateRuleScreen from './screens/CreateRuleScreen';
import CombineRulesScreen from './screens/CombineRulesScreen';
import CombineAllRulesScreen from './screens/CombineAllRulesScreen';
import EvaluateRuleScreen from './screens/EvaluateRuleScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CreateRule" component={CreateRuleScreen} />
        <Stack.Screen name="CombineRules" component={CombineRulesScreen} />
        <Stack.Screen name="CombineAllRules" component={CombineAllRulesScreen} />
        <Stack.Screen name="EvaluateRule" component={EvaluateRuleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

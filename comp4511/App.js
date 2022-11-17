import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './Components/Homepage';
import AllEarnings from './Components/AllEarnings';
import ProgramEarnings from './Components/ProgramEarnings';
import AllPrograms from './Components/AllPrograms';
import ProgramDetails2 from './Components/ProgramDetails2';
import Register from './Components/Register';
import Login from './Components/Login';
import Compare from './Components/compareProgram/Compare';
import LogItem from './Components/ItemResults/LogItem';
import ItemResults from './Components/ItemResults/ItemResults';
import ProgramPage from './Components/ItemResults/ProgramPage';

import Search from './Components/Search';
import Placeholder from './Components/Placeholder';
import SelectCompare from './Components/ItemResults/SelectCompare';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Homepage}/>
        <Stack.Screen name="AllEarnings" component={AllEarnings}/>
        <Stack.Screen name="ProgramEarnings" component={ProgramEarnings}/>
        <Stack.Screen name="AllPrograms" component={AllPrograms}/>
        <Stack.Screen name="ProgramDetails2" component={ProgramDetails2}/>
        <Stack.Screen name="Search" component={Search}/>
        <Stack.Screen name="Placeholder" component={Placeholder}/>
        <Stack.Screen name="ItemResults" component={ItemResults}/>
        <Stack.Screen name="ProgramPage" component={ProgramPage}/>
        <Stack.Screen name="LogItem" component={LogItem}/>
        <Stack.Screen name="Compare" component={Compare}/>
        <Stack.Screen name="SelectCompare" component={SelectCompare}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}



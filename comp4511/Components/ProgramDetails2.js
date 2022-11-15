import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';

export default function ProgramDetails2() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text>map goes here</Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.title}>Program X</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  container1: {
    width:'100%',
    height: '20%',
    backgroundColor: '#fff',
    alignItems: 'center',
  },  
  container2: {
    width:'100%',
    height: '80%',
    backgroundColor: '#587C4B',
    alignItems: 'center',
    justifyContent: 'centre',
  },
  title: {
    fontSize: 40,
    fontWeight: '700',
    color: '#fff',
  },
});

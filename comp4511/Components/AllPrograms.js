import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';

export default function AllPrograms() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.title}>Cash Back Programs</Text>
        <Text style={styles.title}>Dropdown goes here</Text>
      </View>
      <View style={styles.container2}>
        <TouchableOpacity disabled={true} style={styles.program}>
          <TouchableOpacity style={{flex: 1}} onPress={() => navigation.navigate('ProgramDetails2')}>
            <Text style={styles.programText}>Program X</Text>
          </TouchableOpacity>
          <View style={{flex: 1}}>
            <Text style={styles.itemEarning}>toggle button</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.log}>
          <Text style={styles.logText}>Log an item</Text>
        </TouchableOpacity>
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
    color: '#587C4B',
  },
  program: {
    borderBottomWidth:1,
    borderColor:'#fff',
    // alignItems:'center',
    // justifyContent:'center',
    width:'90%',
    height:60,
    backgroundColor:'#587C4B',
    flexDirection:"row"
  },
  programText: {
    fontSize: 30,
    fontWeight: '700',
    color: '#fff',
    alignItems: 'left',
  },
  log: {
    borderWidth:2,
    borderColor:'#587C4B',
    alignItems:'center',
    justifyContent:'center',
    width:'30%',
    height:50,
    backgroundColor:'#fff',
    borderRadius:20,
  },
  logText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#587C4B'
  },
});

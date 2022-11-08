import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';


export default function Homepage() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <StatusBar style="auto" />
        <Text style={styles.earnings}>$37.50</Text>
        <Text style={styles.subtext}>Your Earnings</Text>
        <TouchableOpacity style={styles.search} onPress={() => navigation.navigate('AllEarnings')}>
          <Text style={styles.earningsText}>View All Earnings</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container2}>
        <TouchableOpacity style={styles.search}>
          <Text style={styles.searchText}>Search items for their disposal options</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.allPrograms}>
          <Text style={styles.allProgramsText}>View All Cash Back Programs</Text>
        </TouchableOpacity>
        <Text style={styles.otherFeatures}>Other Features</Text>
        <TouchableOpacity style={styles.other1}>
          <Text style={styles.otherText}>Share Earnings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.other}>
          <Text style={styles.otherText}>Frequently Asked Questions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.other}>
          <Text style={styles.otherText}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.other}>
          <Text style={styles.otherText}>Settings</Text>
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
    height:'30%',
    backgroundColor: '#587C4B',
    alignItems: 'center',
    justifyContent: 'centre',
  },
  container2: {
    width:'100%',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  earnings: {
    fontSize: 60,
    fontWeight: '600',
    color: '#fff'
  },
  subtext: {
    fontSize: 32,
    fontWeight: '500',
    color: '#fff'
  },
  search: {
    borderWidth:2,
    borderColor:'#587C4B',
    alignItems:'center',
    justifyContent:'center',
    width:'80%',
    height:50,
    backgroundColor:'#fff',
    borderRadius:20,
  },
  earningsText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#587C4B'
  },
  searchText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#587C4B'
  },
  allPrograms: {
    borderWidth:2,
    borderColor:'#587C4B',
    alignItems:'center',
    justifyContent:'center',
    width:'80%',
    height:50,
    backgroundColor:'#587C4B',
    borderRadius:20,
  },
  allProgramsText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fff'
  },
  otherFeatures: {
    fontSize: 20,
    fontWeight: '700',
    color: '#587C4B'
  },
  other1: {
    borderBottomWidth:1,
    borderTopWidth:1,
    borderColor:'#587C4B',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    height:50,
    backgroundColor:'#fff',
  },
  other: {
    borderBottomWidth:1,
    borderColor:'#587C4B',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    height:50,
    backgroundColor:'#fff',
  },
  otherText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#587C4B'
  },
});

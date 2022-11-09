import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
// import { Dropdown } from 'react-native-material-dropdown-v2-fixed';

export default function AllEarnings() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.title}>All Earnings</Text>
        <Text style={styles.title}>Dropdown goes here</Text>
        <View style={{flexDirection:"row"}}>
          <Text style={styles.totalEarnings}>Total Earnings</Text>
          <Text style={styles.totalEarningsAmount}>$37.50</Text>
        </View>
      </View>
      <View style={styles.container2}>
        <TouchableOpacity disabled={true} style={styles.item}>
          <View style={{flex: 1}}>
            <Text style={styles.itemText}>Glass Bottle</Text>
            <Text style={styles.itemSubtext}>Program X</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.itemEarning}>+$0.1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.programs} onPress={() => navigation.navigate('ProgramEarnings')}>
          <Text style={styles.programsText}>View Earnings by Program</Text>
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
    height: '25%',
    backgroundColor: '#fff',
    alignItems: 'center',
  },  
  container2: {
    width:'100%',
    height: '75%',
    backgroundColor: '#587C4B',
    alignItems: 'center',
    justifyContent: 'centre',
  },
  title: {
    fontSize: 40,
    fontWeight: '700',
    color: '#587C4B',
  },
  totalEarnings: {
    fontSize: 28,
    fontWeight: '700',
    color: '#587C4B',
    // textAlign: 'left',
    flex: 1,
    paddingLeft: '5%',
  },
  totalEarningsAmount: {
    fontSize: 28,
    fontWeight: '700',
    color: '#587C4B',
    // textAlign: 'right'
    paddingRight: '5%',
  },
  item: {
    borderBottomWidth:1,
    borderColor:'#fff',
    // alignItems:'center',
    // justifyContent:'center',
    width:'90%',
    height:60,
    backgroundColor:'#587C4B',
    flexDirection:"row"
  },
  itemText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    alignItems: 'left',
  },
  itemSubtext: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff'
  },
  itemEarning: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'right'
  },
  programs: {
    borderWidth:2,
    borderColor:'#587C4B',
    alignItems:'center',
    justifyContent:'center',
    width:'80%',
    height:50,
    backgroundColor:'#fff',
    borderRadius:20,
  },
  programsText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#587C4B'
  },
});

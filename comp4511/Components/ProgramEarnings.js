import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown';


export default function ProgramEarnings() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.title}>Program Earnings</Text>
        <SelectDropdown
          data={['Program X', 'Program Y', 'Program Z']}
          defaultValue='Program X'
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            return item
          }}
          buttonStyle={styles.dropdown}
          buttonTextStyle={styles.rowText}
          rowTextStyle={styles.rowText}
          // renderDropdownIcon={} put a react icon
          // dropdownIconPosition={'right'}
        />
        <View style={{flexDirection:"row"}}>
          <Text style={styles.totalEarnings}>Total Earnings</Text>
          <Text style={styles.totalEarningsAmount}>$37.50</Text>
        </View>
      </View>
      <View style={styles.container2}>
        <TouchableOpacity disabled={true} style={styles.item}>
          <View style={{flex: 1}}>
            <Text style={styles.itemText}>Glass Bottle</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.itemEarning}>+$0.1</Text>
          </View>
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
  dropdown: {
    borderColor:'#587C4B',
    borderWidth: 2,
    borderRadius: 15,
    width: '80%',
    height: 40,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#f2f2f2',
  },
  row: {
    backgroundColor:'#f2f2f2',
  },
  rowText: {
    color: '#587C4B'
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

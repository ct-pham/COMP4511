import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import LeftIcon from 'react-native-vector-icons/AntDesign';

export default function ProgramEarnings() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View>
          <LeftIcon 
            style = {styles.back}
            name = "left"
            size = {32}
            color = "#587C4B"
            onPress={() => navigation.pop()}
          />          
        </View>
        <View style={styles.heading}>
          <Text style={styles.title}>Program Earnings</Text>
          <View style={{alignSelf: 'flex-end', paddingHorizontal:10}}>
            <SimpleLineIcons name='pencil' size={25} color='#587C4B' />
            <Text style={styles.edit}>Edit</Text>
          </View>
        </View>
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
          renderDropdownIcon={isOpened => {
            return <Ionicons name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#587C4B'} size={25} />;
          }}
          dropdownIconPosition={'right'}
        />
        <View style={{flexDirection:"row"}}>
          <Text style={styles.totalEarnings}>Total Earnings</Text>
          <Text style={styles.totalEarningsAmount}>$37.50</Text>
        </View>
      </View>
      <View style={styles.container2}>
        <ScrollView style={styles.scroll}>
          <TouchableOpacity disabled={true} style={styles.item}>
            <View style={{flex: 1}}>
              <Text style={styles.itemText}>Glass Bottle</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.itemEarning}>+$0.1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity disabled={true} style={styles.item}>
            <View style={{flex: 1}}>
              <Text style={styles.itemText}>Glass Bottle</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.itemEarning}>+$0.1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity disabled={true} style={styles.item}>
            <View style={{flex: 1}}>
              <Text style={styles.itemText}>Glass Bottle</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.itemEarning}>+$0.1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity disabled={true} style={styles.item}>
            <View style={{flex: 1}}>
              <Text style={styles.itemText}>Glass Bottle</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.itemEarning}>+$0.1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity disabled={true} style={styles.item}>
            <View style={{flex: 1}}>
              <Text style={styles.itemText}>Glass Bottle</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.itemEarning}>+$0.1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity disabled={true} style={styles.item}>
            <View style={{flex: 1}}>
              <Text style={styles.itemText}>Glass Bottle</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.itemEarning}>+$0.1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity disabled={true} style={styles.item}>
            <View style={{flex: 1}}>
              <Text style={styles.itemText}>Glass Bottle</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.itemEarning}>+$0.1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity disabled={true} style={styles.item}>
            <View style={{flex: 1}}>
              <Text style={styles.itemText}>Glass Bottle</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.itemEarning}>+$0.1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity disabled={true} style={styles.item}>
            <View style={{flex: 1}}>
              <Text style={styles.itemText}>Glass Bottle</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.itemEarning}>+$0.1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity disabled={true} style={styles.item}>
            <View style={{flex: 1}}>
              <Text style={styles.itemText}>Glass Bottle</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.itemEarning}>+$0.1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity disabled={true} style={styles.item}>
            <View style={{flex: 1}}>
              <Text style={styles.itemText}>Glass Bottle</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.itemEarning}>+$0.1</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
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
    height: '28%',
    backgroundColor: '#fff',
    alignItems: 'center',
  },  
  container2: {
    width:'100%',
    height: '75%',
    backgroundColor: '#587C4B',
    alignItems: 'center',
    // justifyContent: 'centre',
  },
  scroll: {
    width: '100%',
    paddingLeft: 30,
  },
  heading: {
    flexDirection:'row', 
    paddingLeft:50, 
    paddingBottom:15,
  },
  back: {
    paddingTop:30,
    paddingRight:350,
  },
  title: {
    fontSize: 40,
    fontWeight: '700',
    color: '#587C4B',
  },
  edit: {
    fontSize: 15,
    color: '#587C4B',
  },
  dropdown: {
    borderColor:'#587C4B',
    borderWidth: 2,
    borderRadius: 15,
    width: '80%',
    height: 40,
    alignItems:'center',
    // justifyContent:'center',
    backgroundColor:'#f2f2f2',
    marginBottom:25,
  },
  row: {
    backgroundColor:'#f2f2f2',
  },
  rowText: {
    color: '#587C4B',
    textAlign: 'left',
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
    width:'90%',
    height:70,
    backgroundColor:'#587C4B',
    flexDirection:"row",
    paddingVertical:15
  },
  itemText: {
    fontSize: 26,
    fontWeight: '700',
    color: '#fff',
    // alignItems: 'left',
  },
  itemEarning: {
    fontSize: 26,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'right'
  },
});

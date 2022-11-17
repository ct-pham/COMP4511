import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import LeftIcon from 'react-native-vector-icons/AntDesign';


export default function AllEarnings() {
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
          <Text style={styles.title}>All Earnings</Text>
          <View style={{alignSelf: 'flex-end', paddingLeft:40}}>
            <SimpleLineIcons name='pencil' size={25} color='#587C4B' />
            <Text style={styles.edit}>Edit</Text>
          </View>
        </View>
        <SelectDropdown
          data={['View all earnings', 'View earnings from past week', 'View earnings from past month']}
          defaultValue='View all earnings'
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
              <Text style={styles.itemSubtext}>Program X</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.itemEarning}>+$0.1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity disabled={true} style={styles.item}>
            <View style={{flex: 1}}>
              <Text style={styles.itemText}>Glass Bottle</Text>
              <Text style={styles.itemSubtext}>Program X</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.itemEarning}>+$0.1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity disabled={true} style={styles.item}>
            <View style={{flex: 1}}>
              <Text style={styles.itemText}>Glass Bottle</Text>
              <Text style={styles.itemSubtext}>Program X</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.itemEarning}>+$0.1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity disabled={true} style={styles.item}>
            <View style={{flex: 1}}>
              <Text style={styles.itemText}>Glass Bottle</Text>
              <Text style={styles.itemSubtext}>Program X</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.itemEarning}>+$0.1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity disabled={true} style={styles.item}>
            <View style={{flex: 1}}>
              <Text style={styles.itemText}>Glass Bottle</Text>
              <Text style={styles.itemSubtext}>Program X</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.itemEarning}>+$0.1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity disabled={true} style={styles.item}>
            <View style={{flex: 1}}>
              <Text style={styles.itemText}>Glass Bottle</Text>
              <Text style={styles.itemSubtext}>Program X</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.itemEarning}>+$0.1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity disabled={true} style={styles.item}>
            <View style={{flex: 1}}>
              <Text style={styles.itemText}>Glass Bottle</Text>
              <Text style={styles.itemSubtext}>Program X</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.itemEarning}>+$0.1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity disabled={true} style={styles.item}>
            <View style={{flex: 1}}>
              <Text style={styles.itemText}>Glass Bottle</Text>
              <Text style={styles.itemSubtext}>Program X</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.itemEarning}>+$0.1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity disabled={true} style={styles.item}>
            <View style={{flex: 1}}>
              <Text style={styles.itemText}>Glass Bottle</Text>
              <Text style={styles.itemSubtext}>Program X</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.itemEarning}>+$0.1</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
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
    height: '28%',
    backgroundColor: '#fff',
    alignItems: 'center',
  },  
  container2: {
    width:'100%',
    height: '75%',
    backgroundColor: '#587C4B',
    alignItems: 'center',
  },
  scroll: {
    width: '100%',
    paddingLeft: 30,
  },
  heading: {
    flexDirection:'row', 
    paddingLeft:70, 
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
    marginBottom: 25,
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
    height:80,
    backgroundColor:'#587C4B',
    flexDirection:"row",
    paddingVertical:10
  },
  itemText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    // alignItems: 'left',
  },
  itemSubtext: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff'
  },
  itemEarning: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'right',
    paddingVertical: 5
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
    position:'absolute',
    bottom:70,
  },
  programsText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#587C4B'
  },
});

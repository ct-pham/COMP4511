import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown';
import { Ionicons } from '@expo/vector-icons';
import ProgramDetails from './ProgramDetails';

export default function AllPrograms() {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const [programs, setPrograms] = React.useState(ProgramDetails);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const setProgramDetails = (item, index) => {
    const array = [...programs];
    array[index].toggled = !array[index].toggled;
    setPrograms(array);
  };

  const ItemView = ({item}) => {
    return (
      <View style={{ flexDirection: 'row', width: '100%'}}>
        <TouchableOpacity 
          style={{flex: 1, height: 60, justifyContent: 'center'}} 
          onPress={() => navigation.navigate('ProgramDetails2')}
        >
          <Text style={styles.programText}>{item.title}</Text>
        </TouchableOpacity>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
          <Switch
            trackColor={{ false: "ddd", true: "#31be55" }}
            thumbColor={item.toggled ? "#fff" : "#fff"}
            ios_backgroundColor="#ddd"
            onValueChange={event => setProgramDetails(item, Number(item.id)-1)}
            value={item.toggled}
          />
        </View>
      </View>
    );
  };
 
  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 1.5,
          width: '100%',
          backgroundColor: '#fff',
          flex:1,
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.title}>Cash Back Programs</Text>
        <SelectDropdown
          data={['closest to current location', 'highest earnings', 'most frequent participation', 'alphabetical']}
          defaultButtonText='Sort by...'
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
      </View>
      <View style={styles.container2}>
        <View style={{justifyContent: 'space-between', width: '88%'}}>
          <Text style={styles.optIn}>OPT IN</Text>
        </View>
          
        <FlatList
          // style={styles.list}
          style={{width: '88%'}}
          data={ProgramDetails}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />

        <TouchableOpacity style={styles.log} onPress={() => navigation.navigate('Search')}>
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
    paddingTop: 30,
  },
  title: {
    fontSize: 40,
    fontWeight: '700',
    color: '#587C4B',
    paddingTop:30,
    paddingBottom:20,
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
  },
  row: {
    backgroundColor:'#f2f2f2',
  },
  rowText: {
    color: '#587C4B',
    textAlign:'left',
  },
  optIn: {
    alignSelf: 'flex-end',
    color: '#fff',
    fontWeight: '700',
    paddingBottom:15,
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
    // alignItems: 'left',
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
    position: 'absolute',
    bottom: 45,
  },
  logText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#587C4B'
  },
  itemStyle: {
    paddingVertical: 10,
    height: 60,
    fontSize: 25,
    color: '#fff',
    // flex:1,
  },
  results: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

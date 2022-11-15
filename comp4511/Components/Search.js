import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
// import { Searchbar } from 'react-native-paper';
// import { SearchBar } from 'react-native-elements';
import SearchBar from "react-native-dynamic-search-bar";
import SearchItems from './SearchItems';

export default function Search() {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = SearchItems.filter(
        function (item) {
          const itemData = item.name
              ? item.name.toUpperCase()
              : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        }
      );
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(SearchItems);
      setSearch(text);
    }
  };

  const ItemView = ({item}) => {
    return (
      // Flat List Item
      <Text
        style={styles.itemStyle}
        onPress={() => navigation.navigate('Placeholder')}>
        {item.name}
      </Text>
    );
  };
 
  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 1.5,
          width: '100%',
          backgroundColor: '#587C4B',
        }}
      />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.name);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search here"
        // onPress={() => alert("onPress")}
        onChangeText={(text) => searchFilterFunction(text)}
        value={search}      
      />
      <FlatList
        style={styles.list}
        data={filteredDataSource}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '40%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemStyle: {
    padding: 10,
    height: 50,
    fontSize: 20,
    color: '#587C4B'
  },
  list: {
    width: '90%',
    // alignItems: 'center'
  },
  // textInputStyle: {
  //   height: 40,
  //   borderWidth: 1,
  //   paddingLeft: 20,
  //   margin: 5,
  //   borderColor: '#009688',
  //   backgroundColor: '#FFFFFF',
  // },
});

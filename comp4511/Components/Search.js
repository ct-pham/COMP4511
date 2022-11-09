import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
// import { Searchbar } from 'react-native-paper';

export default function Search() {
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <Text>blah</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

});

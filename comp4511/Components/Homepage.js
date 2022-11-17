import { StatusBar } from 'expo-status-bar';
import { Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function Homepage() {
  const navigation = useNavigation();
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Share your earnings with your friends!',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

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
        <TouchableOpacity style={styles.search} onPress={() => navigation.navigate('Search')}>
          <Ionicons name="search" size={25} color='#587C4B' />
          <Text style={styles.searchText}>Search items for their disposal options</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.allPrograms} onPress={() => navigation.navigate('AllPrograms')}>
          <Text style={styles.allProgramsText}>View All Cash Back Programs</Text>
        </TouchableOpacity>
        <Text style={styles.otherFeatures}>Other Features</Text>
        <TouchableOpacity style={styles.other1} onPress={onShare}>
          <Ionicons name="share-outline" size={25} color='#587C4B' />
          <Text style={styles.otherText}>Share Earnings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.other}>
          <Ionicons name="help" size={25} color='#587C4B' />
          <Text style={styles.otherText}>Frequently Asked Questions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.other}>
          <Ionicons name="mail-outline" size={25} color='#587C4B' />
          <Text style={styles.otherText}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.other}>
          <Ionicons name="settings-outline" size={25} color='#587C4B' />
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
    height:'31%',
    backgroundColor: '#587C4B',
    alignItems: 'center',
    paddingTop: 70,
  },
  container2: {
    width:'100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
  },
  earnings: {
    fontSize: 60,
    fontWeight: '600',
    color: '#fff'
  },
  subtext: {
    fontSize: 32,
    fontWeight: '500',
    color: '#fff',
    paddingBottom: 15,
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
    flexDirection: 'row',
    marginBottom: 20,
  },
  earningsText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#587C4B',
  },
  searchText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#587C4B',
    marginLeft: 10,
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
    marginBottom:40,
  },
  allProgramsText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fff'
  },
  otherFeatures: {
    fontSize: 20,
    fontWeight: '700',
    color: '#587C4B',
    paddingBottom: 25,
  },
  other1: {
    borderBottomWidth:1,
    borderTopWidth:1,
    borderColor:'#587C4B',
    alignItems:'center',
    // justifyContent:'center',
    width:'100%',
    height:50,
    backgroundColor:'#fff',
    flexDirection: 'row',
    paddingLeft:40,
  },
  other: {
    borderBottomWidth:1,
    borderColor:'#587C4B',
    alignItems:'center',
    // justifyContent:'center',
    width:'100%',
    height:50,
    backgroundColor:'#fff',
    flexDirection: 'row',
    paddingLeft:40,
  },
  otherText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#587C4B',
    textAlign: 'center',
    flex:1,
    paddingRight:65
  },
});

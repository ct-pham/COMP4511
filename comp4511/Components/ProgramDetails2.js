import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { style } from '@mui/system';
import LeftIcon from 'react-native-vector-icons/AntDesign';

export default function ProgramDetails2() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Image source={require('../assets/centre.jpg')}/>
      </View>
      <LeftIcon 
        style = {styles.back}
        name = "left"
        size = {32}
        color = "#587C4B"
        onPress={() => navigation.pop()}
      />
      <View style={styles.container2}>
        <ScrollView style={styles.textWrapper}>
          <Text style={styles.title}>Program X</Text>
          <Text style={styles.bodyText}>
            Earn money while you help our environment with Program X. You can get 
            a 10-cent refund when you return an eligible drink container to one of 
            over 600 return points across NSW. Find out which containers you can 
            return, and where you can drop them off.  
          </Text>
          
          <Text style={styles.subheading}>Participation</Text>
          <Text style={styles.bodyText}>
            There are many ways to participate in Program X. By participating 
            you can also help protect the environment and support your community.
          </Text>
          <Text style={styles.bodyText}>{'\u2043' + ' '}Take your empty containers to a return point. </Text>
          <Text style={styles.bodyText}>
            {'\u2043' + ' '}Donate your containers to a local charity, school or 
            community group to help them fundraise. 
          </Text>
          <Text style={styles.bodyText}>
            {'\u2043' + ' '}Continue to use your yellow bin kerbside recycling service. 
          </Text>

          <Text style={styles.subheading}>Eligible Items</Text>
          <Text style={styles.bodyText}>
            Most empty 150-millilitre to 3-litre drink containers are eligible for a 10-cent 
            refund when presented to a NSW return point. The best way to identify an eligible 
            container is by the 10c refund marking.
          </Text>
          
          <Text style={styles.subheading}>Ineligible Items</Text>
          <Text style={styles.bodyText}>{'\u2043' + ' '}milk containers</Text>
          <Text style={styles.bodyText}>{'\u2043' + ' '}glass wine bottles</Text>
          <Text style={styles.bodyText}>{'\u2043' + ' '}glass spirit bottles</Text>
          <Text style={styles.bodyText}>{'\u2043' + ' '}juice bottles 1 litre and over</Text>
          <Text style={styles.bodyText}>{'\u2043' + ' '}cordial bottles</Text>
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
    height: '30%',
    backgroundColor: '#fff',
    alignItems: 'center',
  },  
  container2: {
    width:'100%',
    height: '70%',
    backgroundColor: '#587C4B',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  back: {
    transform: [{ translateX: -170 }, { translateY: 30 }],  
    position: 'absolute',
  },
  textWrapper: {
    flex:1,
    marginHorizontal:20,
  },
  title: {
    fontSize: 40,
    fontWeight: '700',
    color: '#fff',
  },
  bodyText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  subheading: {
    color: '#fff',
    fontSize: 24,
    alignSelf: 'flex-start',
    marginTop: 15,
  },
});

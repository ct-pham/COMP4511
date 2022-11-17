import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    useWindowDimensions, 
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';


export default function Items ({item}) {

    const navigation = useNavigation();
    return (
        <View 
            style={ styles.container}
        >

            <TouchableOpacity style = {styles.programContainer}
                onPress={() => navigation.navigate('ProgramPage' )}
            >
                
                <Image
                    source = {item.image}
                    style = {styles.image}
                />
                <View style = {styles.textBox}>
                    <Text style = {styles.title}>{item.title}</Text>
                    <Text style = {styles.location}>{item.location}</Text>
                </View>
                <Text style = {styles.miniDescription}>{item.miniDescription}</Text>
                <View style = {styles.flexBox}>
                    <Text style = {styles.earningtxt}>Earnings: {item.Total}</Text>
                    <TouchableOpacity 
                        style = {styles.button}
                        onPress={() => navigation.navigate('LogItem')}
                    >
                        <Text style = {styles.buttonText}>Log Item</Text>
                    </TouchableOpacity>
                </View>
                
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
        borderRadius:20,
        marginBottom: 30,
        shadowColor: '#171717',
        shadowOffset: {width: -10, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    item: {
        // padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 20,
        color: '#ffffff',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
        fontWeight: 'bold',
    },

    programContainer: {
        backgroundColor: '#587C4B',
        //alignItems: 'center',
        marginBottom: 1,
        height: 350,
        width:350,
        borderRadius:20,
        borderColor: '#587C4B',
        borderWidth:2,
        overflow:'hidden',
    },
    image: {
        width: 350,
        height: 200,
    },
    location:{
        color: '#ffffff',
        marginRight: 20,
        marginTop: 12,
        fontSize: 16,
        fontWeight: 'bold',
    },
    miniDescription:{
        color: '#ffffff',
        marginLeft:20,
        fontSize: 14,
    },
    earningtxt:{
        color: '#ffffff',
        marginLeft:20,
        marginTop: 20,
        fontSize: 16,
        fontWeight: 'bold',
    },
    textBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    flexBox:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    button: {
        backgroundColor: '#F2F2F2',
        width: 80,
        height: 30,
        marginTop:15,
        marginRight: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent:'center',
    },
    buttonText: {
        color: '#587C4B',
    },

});
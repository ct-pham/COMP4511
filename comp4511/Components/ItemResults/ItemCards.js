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


export default function Items ({item}) {

    return (
        <View style={ styles.container}>

            <View style = {styles.programContainer}>
                
                <Image
                    source = {item.image}
                    style = {styles.image}
                />
                <View style = {styles.textBox}>
                    <Text style = {styles.title}>{item.title}</Text>
                    <TouchableOpacity style = {styles.button}>
                        <Text style = {styles.buttonText}>Log Item</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        borderRadius:20,
        marginBottom: 20,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 20,
        color: '#ffffff',
        marginTop: 10,
        marginBottom: 20,
        marginLeft: 20,
    },

    programContainer: {
        backgroundColor: '#587C4B',
        //alignItems: 'center',
        marginBottom: 1,
        height: 250,
        width:350
    },
    image: {
        width: 350,
        height: 200,
    },
    textBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        backgroundColor: '#F2F2F2',
        width: 80,
        height: 30,
        marginTop:10,
        marginRight: 20,
        borderRadius: 10,
        alignItems: 'center',
    }

});
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

    const { width } = useWindowDimensions();
    return (
        <View style={ styles.container}>

            <View style = {[styles.programContainer, {width}]}>
                <Text style = {styles.title}>{item.title}</Text>
                <Text style = {styles.location}>{item.location}</Text>
                
                <Image
                    source = {item.map}
                    style = {styles.image}
                />
                <View style = {styles.textBox}>
                    <Text style = {styles.text}>{item.Earning}</Text>
                    <Text style = {styles.text}>{item.Total}</Text>

                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
        color: '#ffffff',
        marginTop: 10,
        marginBottom: 20,
    },
    location: {
        fontSize: 20,
        color: '#ffffff',
        transform: [{translateX: -130}],
        marginBottom: 10,
    },
    text: {
        fontSize: 20,
        color: '#ffffff',
    },
    textBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginTop: 10,
        marginBottom: 10,
    },

    programContainer: {
        backgroundColor: '#587C4B',
        alignItems: 'center',
        marginBottom: 1,
    },
    image: {
        width: 350,
        height: 200,
    }

});
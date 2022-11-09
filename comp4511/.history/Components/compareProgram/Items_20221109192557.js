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
                    source = {item.image}
                    style = {styles.image}
                />
                <View>
                    <Text style = {styles.Earnings}>{item.Earning}</Text>
                    <Text style = {styles.Total}>{item.Total}</Text>

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
    },
    location: {
        fontSize: 16,
        color: '#ffffff',
    },
    Earnings: {
        fontSize: 16,
        color: '#ffffff',
    },


    programContainer: {
        backgroundColor: '#587C4B',
        alignItems: 'center',
        marginBottom: 1,
    },
    image: {
        width: 200,
        height: 200,
    }

});
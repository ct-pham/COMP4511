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
        <View style={ [styles.container, { width }]}>
            <View style = {styles.programContainer}>
                <Text style = {styles.title}>{item.title}</Text>
                <Text style = {styles.location}>{item.location}</Text>

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
        
        alignItems: 'center',
      },
      item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },
});
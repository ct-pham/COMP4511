import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';

import ProgramDetails from '../ProgramDetails';

import { useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LeftIcon from 'react-native-vector-icons/AntDesign';

export default function ProgramPage () {
    const navigation = useNavigation();
    const {height, width} = useWindowDimensions();
    return (
        <View style={ styles.container}>
            <Image 
                style = {{height:height/3, width: width}}
                source={require('./centre.jpg')}
            />  
            <LeftIcon 
                style = {styles.LeftIcon}
                name = "left"
                size = {32}
                color = "#587C4B"
                onPress={() => navigation.navigate('ItemResults')}
            />
            <View style = {styles.txtContainer}>
                <Text style = {styles.title}>Program X</Text>
                <Text style = {styles.description}>
                    Residents can drop-off plastic bottles and containers, soft plastics, clear, brown and green glass bottles and jars, paper and cardboard, aluminium and steel cans, including aerosols and bulk metals such as fridges, microwaves, etc. You can also visit the Centre to pick up material for reuse such as cardboard boxes.
                </Text>
                <Text style = {styles.title}>Details</Text>
                <Text style = {styles.details}>
                    Randwick Recycling Centre now accepts free of charge: paints, fluorescent tubes and globes, motor and other oils, car and household batteries, mobile phones, used ink cartridges and empty gas cylinders, smoke detectors, fire extinguishers, electronic waste and polystyrene foam. Please note that only household quantities are accepted i.e. kg or 20L
                </Text>
                <TouchableOpacity 
                    onPress = {() => navigation.navigate('LogItem')}
                    style = {styles.button}
                >
                    <Text style = {styles.buttonText}>Log Item</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    LeftIcon: {
        transform: [{ translateX: 20 }, { translateY: 50 }],  
        position: 'absolute',
    },
    container: {
        flex: 1,
        backgroundColor: '#587C4B',
    },
    txtContainer: {
        marginLeft:20,
        marginRight:20,
    },

    title: {
        fontSize: 24,
        color: '#ffffff',
        marginTop: 20,
        marginBottom: 5,
    },
    description: {
        fontSize: 16,
        color: '#ffffff',
    },
    details: {
        fontSize: 16,
        color: '#ffffff',
    },
    button: {
        backgroundColor: '#F2F2F2',
        width: '85%',
        height: '7.5%',
        marginTop: 50,
        marginRight: 20,
        marginLeft: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        color: '#587C4B',
        marginTop: 10,
        fontWeight: 'bold',
    },

    
});
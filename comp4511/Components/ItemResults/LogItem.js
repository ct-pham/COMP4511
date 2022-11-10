import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

export default function LogItem ( {navigation}) {

    return (
        <View style={styles.container}>
            <Icon 
                style = {styles.icon}
                name = "left"
                size = {32}
                color = "#587C4B"
            />
            <Text style = {styles.title}>Log Item</Text>
            <Text style = {styles.program}>Program X</Text>
            <Text style = {styles.subtitle}>Item </Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Glass Bottle"
                    placeholderTextColor="#587C4B"
                />
            </View>
            <Text style = {styles.subtitle}>Quantity</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="1"
                    placeholderTextColor="#587C4B"
                />
            </View>
            <Text style = {styles.subtitle2}>Earnings</Text>
            <Text style={styles.value}>$0.10</Text>

            <TouchableOpacity style = {styles.confirmBtn}>
                <Text style = {styles.confirmText} >Confirm</Text>
            </TouchableOpacity>
        </View>
    ) 
}

const styles = StyleSheet.create({
    icon: {
      transform: [{ translateX: -150 }, { translateY: -40 }],  
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#587C4B',
        marginBottom: 40,
    },
    program: {
        fontSize: 26,
        color: '#587C4B',
    },
    subtitle: {
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10,
    },
    inputView: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#000000', 
        height: 40,
        width: '80%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        opacity: 0.8,
        alignItems: 'center',
        borderRadius: 10,
        borderColor: '#587C4B',
    },
    TextInput: {
        fontSize: 20,
        fontWeight: '600',
    },
    subtitle2: {
        fontSize: 20,
        marginTop: 40,
        marginBottom: 10,
    },
    value: {
        fontSize: 64,
        color: '#587C4B',
        marginTop: 20,
        marginBottom: '20%',
    },
    confirmBtn: {
        backgroundColor: '#587C4B',
        width: '80%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom:20,
        //transform: [{translateY: 200}],
    },
    confirmText: {
        color: 'white',
        fontSize: 16,
        
    },

});

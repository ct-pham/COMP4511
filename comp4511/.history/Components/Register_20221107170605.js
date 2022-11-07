import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default function Login( {navigation}) {
    return (
        <View style={styles.container}>
            <View>
                <Icon 
                    name = "earth-outline"
                    size = {100}
                    color = "#587C4B"
                />
            </View>

            <Text style = {styles.title}>Recycle App</Text>
            <Text style = {styles.subtitle}>Register</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Username..."
                    placeholderTextColor="#003f5c"
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password..."
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Confirm Password..."
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                />
            </View>
            <View style = {styles.termStyle}>
                <Text>By registering, you confirm that you accept our Terms of Service and Privacy policy</Text>
            </View>

            <TouchableOpacity style = {styles.btnStyle}>
                <Text style={styles.registerBtn}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress = {console.log('Register')}
                style = {styles.btnStyle2}
            >
                <Text style={styles.btn2}>Already have an account? Login</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                style = {styles.btnStyle2}
            >
                <Text style={styles.btn2}>Use app without signing up</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
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
    },
    button: {
        borderRadius: 25,
    },
    btnStyle: {
        backgroundColor: '#587C4B',
        width: '80%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom:20,
    },
    btnStyle2: {
        backgroundColor: '#F2F2F2',
        borderRadius: 10,
        outlineColor: '#587C4B',
        outlineWidth: 2,
        outlineStyle:  'solid',
        width: '80%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#587C4B',
    },
    subtitle: {
        fontSize: 24,
        fontWeight: 'semibold',
        color: '#587C4B',  
    },
    termStyle: {
        width: '80%',
        height: 40,
        alignItems: 'center',
    },
    registerBtn: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'semibold',
    },
    btn2: {
        fontSize: 16,
        color: '#587C4B',
    }
});
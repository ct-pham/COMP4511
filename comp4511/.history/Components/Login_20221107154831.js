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
            <Text style = {styles.subtitle}>Login</Text>
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

            <TouchableOpacity style = {styles.btnStyle}>
                <Text style={styles.loginBtn}>Log In</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress = {console.log('Register')}
            >
                <Text style={styles.loginBtn}>Don't have an account? Register</Text>
            </TouchableOpacity>
            
            <TouchableOpacity>
                <Text style={styles.loginBtn}>Use app without signing up</Text>
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
        width: '70%',
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
        width: '70%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
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
});
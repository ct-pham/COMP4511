import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import { HiOutlineGlobe } from 'react-icons/hi';

export default function Login() {
    return (
        <View style={styles.container}>
            <View>
                <HiOutlineGlobe size={100} color="#000" />
            </View>
            <Text>Recycle App</Text>
            <Text>Login</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email."
                    placeholderTextColor="#003f5c"
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password."
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                />
            </View>

            <TouchableOpacity style = {styles.button}>
                <Text style={styles.loginBtn}>Log In</Text>
            </TouchableOpacity>

            <TouchableOpacity>
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
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputView: {
        backgroundColor: '#465881',
        borderRadius: 30,
        width: '70%',
        height: 45,
        marginBottom: 20,
    },
    button: {
        width: '70%',  
        borderRadius: 25,
    }
});
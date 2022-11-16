import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';

export default function ProgramPage ({item}) {
    return (
        <View style={ styles.container}>
            <View style = {styles.programContainer}>
                <Image source={item.image}/>  
                <Text style = {styles.title}>{item.title}</Text>
                <Text style = {styles.description}>{item.description}</Text>
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
    container: {
        flex: 1,
        backgroundColor: '#587C4B',
    },
});
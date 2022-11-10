import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';

export default function ProgramPage () {
    return (
        <View style={ styles.container}>
            <View style = {styles.programContainer}>
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
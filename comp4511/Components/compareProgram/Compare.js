import { 
    StyleSheet, 
    Text, 
    SafeAreaView, 
    statusBar,
    FlatList,
    View,
} from 'react-native';
import Items from './Items';

import ProgramDetails from './ProgramDetails';

export default function Compare() {
    return (
        <SafeAreaView style={styles.container}>
            <View style = {styles.titleContainer}>
                <Text style = {styles.title}> Compare Programs</Text>
            </View>
            <FlatList
                data = {ProgramDetails}
                renderItem={({ item }) => <Items item = {item} />}
                showsVerticalScrollIndicator
                
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {

        height: '10%',

    },
    title: {
        fontSize: 32,
        marginTop: 50,
        color: '#587C4B',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    }
});
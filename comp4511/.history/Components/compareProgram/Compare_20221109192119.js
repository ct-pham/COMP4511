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
                <Text style = {styles.title}> Compare</Text>
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
        height: 20,

    },
    title: {
        fontSize: 32,
        color: '#587C4B',
        fontWeight: 'bold',
        textAlign: 'center',
    }
});
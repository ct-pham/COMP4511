import { 
    StyleSheet, 
    Text, 
    SafeAreaView, 
    statusBar,
    FlatList,
} from 'react-native';
import Items from './Items';

import ProgramDetails from './ProgramDetails';

export default function Compare() {
    return (
        <SafeAreaView style={styles.container}>
        
            <Text style = {styles.title}> Compare</Text>
            <FlatList
                data = {ProgramDetails}
                renderItem={({ item }) => <Items item = {item} />}
                showsVerticalScrollIndicator
                
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 50,
        marginBottom: 50,
    },
    title: {
        fontSize: 32,
        color: '#587C4B',
        fontWeight: 'bold',
        textAlign: 'center',
    }
});
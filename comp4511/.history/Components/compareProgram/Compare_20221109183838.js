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
            <FlatList
                data = {ProgramDetails}
                renderItem={({ item }) => <Items item = {item} />}
                showsVerticalScrollIndicator
                
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

});
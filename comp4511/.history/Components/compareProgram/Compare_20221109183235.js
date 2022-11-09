import { 
    StyleSheet, 
    Text, 
    SafeAreaView, 
    statusBar 
} from 'react-native';
import { VirtualizedList } from 'react-native-web';
import Items from './Items';

import ProgramDetails from './ProgramDetails';

export default function Compare() {
    return (
        <SafeAreaView style={styles.container}>
            <VirtualizedList
                data = {ProgramDetails}
                renderItem={({ item }) => <Items item = {item} />}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

});
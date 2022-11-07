import { 
    StyleSheet, 
    Text, 
    SafeAreaView, 
    ScrollView, 
    tatusBar 
} from 'react-native';

import ProgramDetails from './ProgramDetails';

export default function Compare() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <ProgramDetails />
            </ScrollView>
        </SafeAreaView>
    );
}
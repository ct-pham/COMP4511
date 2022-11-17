import { 
    StyleSheet, 
    Text, 
    SafeAreaView, 
    statusBar,
    FlatList,
    View,
} from 'react-native';
import Items from './Items';

import ProgramDetails from '../ProgramDetails';
import { useNavigation } from '@react-navigation/native';
import LeftIcon from 'react-native-vector-icons/AntDesign';

export default function Compare() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <LeftIcon 
                style = {styles.back}
                name = "left"
                size = {32}
                color = "#587C4B"
                onPress={() => navigation.pop()}
            />
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
    },
    back: {
        paddingTop:30,
        paddingLeft:20,
    },
});
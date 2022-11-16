import {
    View,
    Text,
    StyleSheet,
    Image,
    useWindowDimensions,
    TouchableOpacity,
    StatusBar,
} from 'react-native';

const SelectCompare = (item) => {
    return (
        <SafeAreaView style={styles.container}>
            <LeftIcon 
                style = {styles.LeftIcon}
                name = "left"
                size = {32}
                color = "#587C4B"
            />
            <View style = {styles.titleContainer}>
                
                <Text style = {styles.title}> Glass Bottle</Text>
                <Text style = {styles.subtitle}> Disposal Options</Text>
                <TouchableOpacity 
                    style = {styles.buttonStyle}
                    onPress = {() => setToggle(!toggle)} 
                >
                    <View style = {styles.iconContainer}>
                        <Icon
                            style = {styles.icon}
                            name = 'filter'
                            size = {32}
                            color = '#587C4B'
                        />
                        <Text style = {styles.buttontxt}>Select to Compare </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style = {styles.list}>
                <FlatList
                    data = {ProgramDetails}
                    renderItem={({ item }) => <Items item = {item} />}
                    showsVerticalScrollIndicator
                    navigate = {navigation.navigate}
                    
                />
            </View>

        </SafeAreaView>
    )
}

export default SelectCompare;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: '#fff',
        opacity: 0.5,
    },
    LeftIcon: {
        transform: [{ translateX: 20 }],  
    },
    icon: {
        transform: [{ translateY: -5 }],
    },
    titleContainer: {

        height: '10%',
        marginBottom: '20%',
        alignItems: 'center',

    },
    title: {
        fontSize: 32,
        color: '#587C4B',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#587C4B',
        marginBottom: 20,
    },
    list: {
        alignItems: 'center',
    },
    iconContainer: {
        flexDirection: 'row',
        marginTop: 10,

    },
    buttonStyle: {
        borderRadius: 10,
        borderColor: "#587C4B",
        borderWidth: 2,
        backgroundColor: '#fff',
    },
    buttontxt: {
        fontSize: 16,
        color: '#587C4B',
    }
});
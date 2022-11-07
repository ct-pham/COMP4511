import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    useWindowDimensions, 
    TouchableOpacity 
} from 'react-native';
import { useState } from 'react';


export default function Items ({item}) {

    const { width } = useWindowDimensions();
    const [ toggle, setToggle ] = useState(true);
    return (
        <View style={ [styles.container, { width }]}>
            <Text style = {styles.title}>{item.title}</Text>
            <View style = {styles.imageContainer}>
                { 
                    toggle ? (
                        <Image 
                        source = {item.image}
                        style = {[styles.image, { width, resizeMode: 'contain' }]}
                        />
                    ) : null
                }
                <View style = {styles.buttonContainer}>
                    <TouchableOpacity 
                        style = {styles.button}
                        onPress = {() => setToggle(!toggle)}
                    >
                        <Text style = {styles.buttonText}>Toggle image</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style = {styles.descriptionContainer}>
                <Text style = {styles.description}>{item.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

});
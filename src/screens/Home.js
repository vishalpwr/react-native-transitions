import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import ViewContainer, { styles } from '../components/ViewContainer'
import Colors from '../constants/Colors'

const Home = ({navigation}) => {
    return (
        <ViewContainer>
            <TouchableOpacity style={_styles.button} onPress={() => navigation.navigate('Screen1')}>
                <Text style={styles.text}>Screen1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={_styles.button} onPress={() => navigation.navigate('Screen2')}>
                <Text style={styles.text}>Screen2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={_styles.button} onPress={() => navigation.navigate('Screen3')}>
                <Text style={styles.text}>Screen3</Text>
            </TouchableOpacity>
        </ViewContainer>
    )
}

export default Home

const _styles = StyleSheet.create({
    button: {
        padding: 16,
        margin: 10,
        backgroundColor: Colors.steelBlue,
    }
});
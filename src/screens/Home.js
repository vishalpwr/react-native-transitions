import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import ViewContainer, { styles } from '../components/ViewContainer'
import Colors from '../constants/Colors'

const Home = ({navigation}) => {
    return (
        <ViewContainer backgroundColor={Colors.black}>
            <TouchableOpacity style={_styles.button} onPress={() => navigation.navigate('ScreenA')}>
                <Text style={styles.text}>ScreenA</Text>
            </TouchableOpacity>
            <TouchableOpacity style={_styles.button} onPress={() => navigation.navigate('ScreenB')}>
                <Text style={styles.text}>ScreenB</Text>
            </TouchableOpacity>
            <TouchableOpacity style={_styles.button} onPress={() => navigation.navigate('ScreenC')}>
                <Text style={styles.text}>ScreenC</Text>
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
        borderRadius: 18
    }
});
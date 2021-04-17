import React from 'react'
import { View, Text } from 'react-native'
import ViewContainer, { styles } from "../components/ViewContainer";
import Colors from '../constants/Colors';

const ScreenC = () => {
    return (
        <ViewContainer backgroundColor={Colors.steelBlue}>
            <Text style={styles.text}>ScreenC</Text>
        </ViewContainer>
    )
}

export default ScreenC

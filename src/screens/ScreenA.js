import React from 'react'
import { View, Text } from 'react-native'
import ViewContainer, { styles } from "../components/ViewContainer";
import Colors from '../constants/Colors';

const ScreenA = () => {
    return (
        <ViewContainer backgroundColor={Colors.powderBlue}>
            <Text style={styles.text}>ScreenA</Text>
        </ViewContainer>
    )
}

export default ScreenA

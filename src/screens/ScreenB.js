import React from 'react'
import { View, Text } from 'react-native'
import ViewContainer, { styles } from "../components/ViewContainer";
import Colors from '../constants/Colors';

const ScreenB = () => {
    return (
        <ViewContainer backgroundColor={Colors.red}>
            <Text style={styles.text}>ScreenB</Text>
        </ViewContainer>
    )
}

export default ScreenB

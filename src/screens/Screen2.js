import React from 'react'
import { View, Text } from 'react-native'
import ViewContainer, { styles } from "../components/ViewContainer";
import Colors from '../constants/Colors';

const Screen2 = () => {
    return (
        <ViewContainer backgroundColor={Colors.skyBlue}>
            <Text style={styles.text}>Screen2</Text>
        </ViewContainer>
    )
}

export default Screen2

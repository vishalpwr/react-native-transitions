import React from 'react'
import { View, Text } from 'react-native'
import ViewContainer, { styles } from "../components/ViewContainer";
import Colors from '../constants/Colors';

const Screen1 = () => {
    return (
        <ViewContainer backgroundColor={Colors.powderBlue}>
            <Text style={styles.text}>Screen1</Text>
        </ViewContainer>
    )
}

export default Screen1

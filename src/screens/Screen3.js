import React from 'react'
import { View, Text } from 'react-native'
import ViewContainer, { styles } from "../components/ViewContainer";
import Colors from '../constants/Colors';

const Screen3 = () => {
    return (
        <ViewContainer backgroundColor={Colors.steelBlue}>
            <Text style={styles.text}>Screen3</Text>
        </ViewContainer>
    )
}

export default Screen3

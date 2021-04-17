import React from 'react'
import { Text } from 'react-native'
import ViewContainer, { styles } from "../components/ViewContainer";
import Colors from '../constants/Colors';

const ScreenE = () => {
    return (
        <ViewContainer backgroundColor={Colors.skyBlue}>
            <Text style={styles.text}>ScreenE</Text>
        </ViewContainer>
    )
}

export default ScreenE

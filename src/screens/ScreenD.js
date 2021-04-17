import React from 'react'
import { Text } from 'react-native'
import ViewContainer, { styles } from "../components/ViewContainer";
import Colors from '../constants/Colors';

const ScreenD = () => {
    return (
        <ViewContainer backgroundColor={Colors.green}>
            <Text style={styles.text}>ScreenD</Text>
        </ViewContainer>
    )
}

export default ScreenD

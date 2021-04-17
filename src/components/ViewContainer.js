import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        color: 'white',
    }
})

const ViewContainer = ({children, backgroundColor}) => {
    return (
        <View style={[styles.container, {backgroundColor}]}>
            {children}
        </View>
    )
}

export default ViewContainer

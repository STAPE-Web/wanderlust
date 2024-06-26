import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'

interface Props {
    children: string,
    onPress?: () => void
}

const ButtonSmall: FC<Props> = ({ children, onPress }) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.Button}>
            <Text style={styles.Text}>{children}</Text>
        </TouchableOpacity>
    )
}

export default ButtonSmall

const styles = StyleSheet.create({
    Button: {
        backgroundColor: "#14A0E6",
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        paddingHorizontal: 25
    },
    Text: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "semibold"
    }
})
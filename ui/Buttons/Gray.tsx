import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'

interface Props {
    children: string,
    onPress?: () => void
}

const ButtonGray: FC<Props> = ({ children, onPress }) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.Button}>
            <Text style={styles.Text}>{children}</Text>
        </TouchableOpacity>
    )
}

export default ButtonGray

const styles = StyleSheet.create({
    Button: {
        width: "100%",
        flex: 1,
        backgroundColor: "#DFE5ED",
        height: 45,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
    },
    Text: {
        color: "#002D73",
        fontSize: 16,
        fontFamily: "semibold"
    }
})
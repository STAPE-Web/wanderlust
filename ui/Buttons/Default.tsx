import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'

interface Props {
    children: string,
    onPress?: () => void
}

const ButtonDefault: FC<Props> = ({ children, onPress }) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.Button}>
            <Text style={styles.Text}>{children}</Text>
        </TouchableOpacity>
    )
}

export default ButtonDefault

const styles = StyleSheet.create({
    Button: {
        width: "100%",
        flex: 1,
        backgroundColor: "#14A0E6",
        height: 45,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
    },
    Text: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "semibold"
    }
})
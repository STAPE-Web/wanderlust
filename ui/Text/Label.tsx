import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'

interface Props {
    text: string
}

const Label: FC<Props> = ({ text }) => {
    return (
        <Text style={styles.Label}>{text}</Text>
    )
}

export default Label

const styles = StyleSheet.create({
    Label: {
        fontSize: 17,
        fontFamily: "semibold",
        color: "#002D73"
    }
})
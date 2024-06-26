import { StyleSheet, Text } from 'react-native'
import React, { FC } from 'react'

interface Props {
    text: string
}

const Title: FC<Props> = ({ text }) => {
    return (
        <Text style={styles.Title}>{text}</Text>
    )
}

export default Title

const styles = StyleSheet.create({
    Title: {
        color: "#0D387A",
        fontSize: 24,
        fontFamily: "semibold"
    }
})
import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'

interface Props {
    title: string
    amount: number
}

const ProfileAmount: FC<Props> = ({ amount, title }) => {
    return (
        <View style={styles.Box}>
            <Text style={styles.Amount}>{amount}</Text>
            <Text style={styles.Title}>{title}</Text>
        </View>
    )
}

export default ProfileAmount

const styles = StyleSheet.create({
    Box: {
        alignItems: "center",
        gap: 5
    },
    Amount: {
        color: "#002D73",
        fontSize: 24,
        fontFamily: "semibold"
    },
    Title: {
        color: "#002D73",
        fontSize: 14,
    }
})
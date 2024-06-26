import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { ArrowRightIcon } from './Icons'
import Label from './Text/Label'

interface Props {
    item: {
        title: string,
        description: string,
    }
}

const PremiumItem: FC<Props> = ({ item }) => {
    return (
        <View style={styles.PremiumItem}>
            <View style={styles.Box}>
                <Label text={item.title} />
                <Text style={styles.Description}>{item.description}</Text>
            </View>

            <ArrowRightIcon color='#003365' style={styles.Icon} />
        </View>
    )
}

export default PremiumItem

const styles = StyleSheet.create({
    PremiumItem: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        gap: 10
    },
    Box: {
        flex: 1,
        gap: 5,
        width: "100%"
    },
    Icon: {
        width: 24,
        height: 24
    },
    Description: {
        fontSize: 14,
        color: "#002D73",
    }
})
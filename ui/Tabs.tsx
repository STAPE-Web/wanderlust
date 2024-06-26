import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import React, { FC } from 'react'

interface Props {
    state: string
    array: string[]
    setState: React.Dispatch<React.SetStateAction<string>>
}

const Tabs: FC<Props> = ({ array, setState, state }) => {
    return (
        <View style={styles.Tabs}>
            {array.map((item, index) => (
                <TouchableOpacity
                    activeOpacity={0.7}
                    key={index}
                    style={[styles.Tab, state === item && styles.Active]}
                    onPress={() => setState(item)}
                >
                    <Text style={styles.Text}>{item}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default Tabs

const styles = StyleSheet.create({
    Tabs: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    Tab: {
        width: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        borderRadius: 25
    },
    Active: {
        backgroundColor: "#DFE5ED"
    },
    Text: {
        color: "#002D73",
        fontSize: 16,
        fontFamily: "semibold"
    }
})
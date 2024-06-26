import { Image, StyleSheet, View } from 'react-native'
import React, { FC } from 'react'
import { fillAchivements } from '@/functions'
import { AchivementsType } from '@/types'

interface Props {
    array: AchivementsType[]
}

const Achivements: FC<Props> = ({ array }) => {
    return (
        <View style={styles.Achivements}>
            {array.map((item, index) => (
                <Image source={fillAchivements(item)} key={index} style={styles.Image} />
            ))}
        </View>
    )
}

export default Achivements

const styles = StyleSheet.create({
    Achivements: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        backgroundColor: "#F4F6F9",
        borderRadius: 5,
        paddingVertical: 6,
        paddingHorizontal: 15
    },
    Image: {
        width: 40,
        height: 40
    }
})
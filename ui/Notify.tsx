import { Image, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { INotification } from '@/types'
import ButtonSmall from './Buttons/Small'
import Label from './Text/Label'

interface Props {
    item: INotification
}

const Notify: FC<Props> = ({ item }) => {
    return (
        <View style={styles.Notify}>
            <Image style={styles.Image} source={{ uri: item.image }} />

            <View style={styles.Box}>
                <Label text={item.text} />
                <Text style={styles.Description}>{item.description}</Text>
                {item.type === "firend" && <ButtonSmall>Добавить в друзья</ButtonSmall>}
            </View>
        </View>
    )
}

export default Notify

const styles = StyleSheet.create({
    Notify: {
        flexDirection: "row",
        flex: 1,
        alignItems: "flex-start",
        gap: 15
    },
    Image: {
        width: 50,
        height: 50,
        borderRadius: 100,
    },
    Box: {
        flex: 1,
        gap: 3,
        alignItems: "flex-start"
    },
    Description: {
        color: "#002D73",
        fontSize: 15,
    }
})
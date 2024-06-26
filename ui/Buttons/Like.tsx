import { StyleSheet, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { HeardIcon } from '../Icons'

interface Props {
    onPress?: () => void
}

const ButtonLike: FC<Props> = ({ onPress }) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.Button}>
            <HeardIcon style={styles.Icon} color='#1B75BC' />
        </TouchableOpacity>
    )
}

export default ButtonLike

const styles = StyleSheet.create({
    Button: {
        width: 30,
        height: 30,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F4F6F9"
    },
    Icon: {
        width: 20,
        height: 20
    }
})
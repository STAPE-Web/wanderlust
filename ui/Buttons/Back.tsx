import { StyleSheet, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { ArrowLeftIcon } from '../Icons'

interface Props {
    back: () => void
}

const ButtonBack: FC<Props> = ({ back }) => {
    return (
        <TouchableOpacity onPress={back} style={styles.Button}>
            <ArrowLeftIcon color='#003365' style={styles.Icon} />
        </TouchableOpacity>
    )
}

export default ButtonBack

const styles = StyleSheet.create({
    Button: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: "#F4F6F9"
    },
    Icon: {
        width: 24,
        height: 24
    }
})
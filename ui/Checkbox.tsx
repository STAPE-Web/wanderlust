import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { CheckIcon } from './Icons'

interface Props {
    checked: boolean,
    setCheck: React.Dispatch<React.SetStateAction<boolean>>,
    text?: string
}

const Checkbox: FC<Props> = ({ checked, setCheck, text }) => {
    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.Box} onPress={() => setCheck(!checked)}>
            <View style={[styles.Checkbox, checked && styles.Active]}>
                {checked && <CheckIcon color='#fff' />}
            </View>

            {text && <Text style={styles.Text}>{text}</Text>}
        </TouchableOpacity>
    )
}

export default Checkbox

const styles = StyleSheet.create({
    Box: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    Checkbox: {
        width: 20,
        height: 20,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#0D387A',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Active: {
        backgroundColor: '#0D387A'
    },
    Text: {
        color: '#0D387A',
        fontSize: 14,
        fontFamily: "semibold"
    }
})
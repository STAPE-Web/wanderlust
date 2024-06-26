import { StyleSheet, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { SearchIcon } from '../Icons'

interface Props {
    onPress?: () => void
}

const ButtonSearch: FC<Props> = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.Button}>
            <SearchIcon color='#003365' style={styles.Icon} />
        </TouchableOpacity>
    )
}

export default ButtonSearch

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
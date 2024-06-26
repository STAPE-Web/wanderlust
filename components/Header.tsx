import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import ButtonBack from '@/ui/Buttons/Back'
import Title from '@/ui/Text/Title'

interface Props {
    text?: string
    back: () => void
}

const Header: FC<Props> = ({ text, back }) => {
    return (
        <View style={styles.Header}>
            <ButtonBack back={back} />
            {text && <Title text={text} />}
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    Header: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center"
    }
})
import { Image, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { User2Icon } from './Icons'

interface Props {
    url: string
}

const Avatar: FC<Props> = ({ url }) => {
    return (
        <View style={styles.Avatar}>
            {url === ""
                ? <User2Icon color='#0D387A' style={styles.Icon} />
                : <Image source={{ uri: url }} style={styles.Image} />
            }
        </View>
    )
}

export default Avatar

const styles = StyleSheet.create({
    Avatar: {
        width: 75,
        height: 75,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F4F6F9",
        borderRadius: 100,
        overflow: "hidden"
    },
    Icon: {
        width: 30,
        height: 30
    },
    Image: {
        width: "100%",
        height: "100%"
    }
})
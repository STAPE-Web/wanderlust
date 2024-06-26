import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { FC, useState } from 'react'
import { CloseEyeIcon, EyeIcon } from './Icons'
import Label from './Text/Label'

interface Props {
    label?: string,
    value: string,
    onChangeText: (text: string) => void,
    keyboardType?: "email-address" | "phone-pad",
    type: "text" | "password"
}

const Input: FC<Props> = ({ label, onChangeText, type, value, keyboardType }) => {
    const [secure, setSecure] = useState(true)

    return (
        <View style={styles.Box}>
            {label && <Label text={label} />}

            <View style={styles.InputBox}>
                <TextInput
                    value={value}
                    secureTextEntry={type === "password" && secure}
                    keyboardType={keyboardType}
                    onChangeText={onChangeText}
                    style={styles.TextInput}
                />

                {type === "password" && <TouchableOpacity activeOpacity={0.7} style={styles.EyeButton} onPress={() => setSecure(!secure)}>
                    {secure
                        ? <EyeIcon style={styles.Icon} color='#003365' />
                        : <CloseEyeIcon style={styles.Icon} color='#003365' />
                    }
                </TouchableOpacity>}
            </View>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    Box: {
        gap: 10,
        flex: 1
    },
    InputBox: {
        flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10,
        backgroundColor: "#F4F6F9",
        height: 50,
        maxHeight: 50,
        paddingHorizontal: 15,
        borderRadius: 15,
    },
    Icon: {
        width: 28,
        height: 28,
    },
    TextInput: {
        height: "100%",
        width: "100%",
        flex: 1,
        fontSize: 16,
        color: "#002D73"
    },
    EyeButton: {
        flex: 1,
        width: 28,
        height: 28,
        maxWidth: 28
    }
})
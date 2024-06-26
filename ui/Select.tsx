import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { FC, useState } from 'react'
import { AuthFieldType } from '@/store/types'
import Label from './Text/Label'
import { ArrowDownIcon } from './Icons'

interface Props {
    label?: string
    value: string,
    setValue: (text: string, type: AuthFieldType) => void
    type: AuthFieldType,
    array: string[]
}

const Select: FC<Props> = ({ setValue, type, value, label, array }) => {
    const [active, setActive] = useState(false)

    const handleSelect = (item: string) => {
        setValue(item, type)
        setActive(false)
    }

    return (
        <View style={styles.Container}>
            {label && <Label text={label} />}

            <View style={styles.Dropdown}>
                <TouchableOpacity onPress={() => setActive(!active)} activeOpacity={0.7} style={styles.Selected}>
                    <Text style={styles.Text}>{value}</Text>
                    <ArrowDownIcon style={[styles.Icon, active && styles.Active]} color="#003365" />
                </TouchableOpacity>

                {active && (
                    <View style={styles.DropdownList} >
                        <ScrollView nestedScrollEnabled={true}>
                            {array.map((item, index) => (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => handleSelect(item)}
                                    activeOpacity={0.7}
                                    style={styles.DropdownItem}
                                >
                                    <Text>{item}</Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                )}
            </View>
        </View>
    )
}

export default Select

const styles = StyleSheet.create({
    Container: {
        width: "100%",
        flex: 1,
        flexDirection: "column",
        gap: 10,
    },
    Dropdown: {
        flex: 1,
        gap: 10,
    },
    Selected: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#F4F6F9",
        height: 50,
        maxHeight: 50,
        borderRadius: 15,
        paddingHorizontal: 15,
    },
    Icon: {
        width: 24,
        height: 24,
    },
    DropdownList: {
        width: "100%",
        backgroundColor: "#fff",
        borderColor: "#DFE5ED",
        borderWidth: 2,
        maxHeight: 150,
        borderRadius: 15,
        overflow: "hidden",
    },
    DropdownItem: {
        padding: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    Active: {
        transform: [{ rotate: '180deg' }],
    },
    Text: {
        fontFamily: "semibold",
        color: "#003365"
    }
})
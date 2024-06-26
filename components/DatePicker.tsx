import React, { FC, useState } from 'react';
import { TouchableOpacity, StyleSheet, Platform, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TripFieldType } from '@/store/types';
import { formatDate } from '@/functions';
import { CalendarIcon } from '@/ui/Icons';

interface Props {
    text: string;
    setValue: (value: string, type: TripFieldType) => void
    type: TripFieldType;
    value: string;
}

const DatePicker: FC<Props> = ({ setValue, text, type, value }) => {
    const [showPicker, setShowPicker] = useState(false);

    const handleChange = (_: any, selectedDate: any) => {
        setShowPicker(Platform.OS === 'ios');
        if (selectedDate) {
            setValue(formatDate(selectedDate), type);
        }
    };

    const showDatePicker = () => {
        setShowPicker(true);
    };

    return (
        <>
            <TouchableOpacity activeOpacity={0.7} onPress={showDatePicker} style={styles.Button}>
                <Text style={styles.Text}>{value !== "" ? formatDate(value) : text}</Text>
                <CalendarIcon style={styles.Icon} color='#6E87AF' />
            </TouchableOpacity>

            {showPicker && (
                <DateTimePicker
                    value={value === "" ? new Date() : new Date(value)}
                    mode="date"
                    display="calendar"
                    onChange={handleChange}
                />
            )}
        </>
    );
};

const styles = StyleSheet.create({
    Button: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: "#F4F6F9",
        height: 50
    },
    Icon: {
        width: 24,
        height: 24
    },
    Text: {
        color: "#6E87AF",
        fontSize: 16,
        fontFamily: "semibold"
    }
});

export default DatePicker;

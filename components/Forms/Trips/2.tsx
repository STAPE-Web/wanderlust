import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { LocationIcon, User2Icon } from '@/ui/Icons'
import DatePicker from '@/components/DatePicker'
import useTripsStore from '@/store/trips'

const Step2 = () => {
    const changeData = useTripsStore(state => state.changeData)
    const startDate = useTripsStore(state => state.startDate)
    const endDate = useTripsStore(state => state.endDate)

    return (
        <View style={styles.Step}>
            <View style={styles.Location}>
                <LocationIcon style={styles.LocationIcon} />
                <TextInput placeholder='Где' placeholderTextColor="#AEBCD2" style={styles.LocationInput} />
            </View>

            <View style={styles.Row}>
                <DatePicker text="Туда" value={startDate} setValue={changeData} type='startDate' />
                <DatePicker text="Обратно" value={endDate} setValue={changeData} type='endDate' />
            </View>

            <View style={styles.Friends}>
                <User2Icon style={styles.UserIcon} color='#002D73' />
            </View>
        </View>
    )
}

export default Step2

const styles = StyleSheet.create({
    Step: {
        gap: 5
    },
    Row: {
        flex: 1,
        flexDirection: "row",
        gap: 5
    },
    Location: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        height: 50,
        backgroundColor: "#F4F6F9",
        paddingHorizontal: 15,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15
    },
    LocationIcon: {
        width: 30,
        height: 30,
    },
    LocationInput: {
        flex: 1,
        height: "100%",
        width: "100%",
        fontSize: 16,
        fontFamily: "semibold"
    },
    Friends: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        height: 50,
        backgroundColor: "#F4F6F9",
        paddingHorizontal: 15,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15
    },
    UserIcon: {
        width: 28,
        height: 28
    }
})
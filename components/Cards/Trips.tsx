import { calculateDays, fillTripDate } from '@/functions'
import { ITrips } from '@/types'
import { FC } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

interface Props {
    item: ITrips
}

const CardTrips: FC<Props> = ({ item }) => {
    return (
        <View style={styles.Card}>
            <View style={styles.ImageBox}>
                <View style={styles.Category}>
                    <Text style={styles.CategoryText}>{calculateDays(item.startDate, item.endDate)}</Text>
                </View>

                <Image source={{ uri: item.image }} style={styles.Image} />
            </View>

            <View style={styles.InfoBox}>
                <Text style={styles.Title} numberOfLines={2} ellipsizeMode="tail">{item.title}</Text>
                <Text style={styles.DateText}>{fillTripDate(item.startDate, item.endDate)}</Text>
            </View>
        </View>
    )
}

export default CardTrips

const styles = StyleSheet.create({
    Card: {
        width: "100%",
        backgroundColor: "#DFE5ED",
        borderRadius: 15,
        overflow: "hidden"
    },
    ImageBox: {
        width: "100%",
        flex: 1,
        height: 180,
        position: "relative",
    },
    Image: {
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: -1
    },
    Category: {
        padding: 5,
        backgroundColor: "#F4F6F9",
        position: "absolute",
        top: 15,
        left: 15,
        borderRadius: 25
    },
    CategoryText: {
        color: "#6E87AF",
        fontSize: 12,
        fontFamily: "semibold"
    },
    InfoBox: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        gap: 4
    },
    Title: {
        color: "#002D73",
        fontSize: 16,
        fontFamily: "semibold"
    },
    DateText: {
        color: "#6E87AF",
        fontSize: 14
    },
})
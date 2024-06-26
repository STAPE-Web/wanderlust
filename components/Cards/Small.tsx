import { ICards } from '@/types'
import ButtonLike from '@/ui/Buttons/Like'
import { LocationIcon } from '@/ui/Icons'
import { FC } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

interface Props {
    item: ICards
}

const CardSmall: FC<Props> = ({ item }) => {
    return (
        <View style={styles.Card}>
            <View style={styles.ImageBox}>
                <View style={styles.Category}><Text style={styles.CategoryText}>{item.category}</Text></View>

                <View style={styles.ButtonLike}>
                    <ButtonLike />
                </View>

                <Image source={{ uri: item.image }} style={styles.Image} />
            </View>

            <View style={styles.InfoBox}>
                <Text style={styles.Title} numberOfLines={2} ellipsizeMode="tail">{item.title}</Text>

                <View style={styles.Location}>
                    <LocationIcon style={styles.LocationIcon} color='#7E7E7E' />
                    <Text style={styles.LocationText}>{item.location}</Text>
                </View>
            </View>
        </View>
    )
}

export default CardSmall

const styles = StyleSheet.create({
    Card: {
        maxWidth: 205,
        width: "100%",
        backgroundColor: "#DFE5ED",
        borderRadius: 15,
        overflow: "hidden",
        flex: 1
    },
    ImageBox: {
        width: "100%",
        flex: 1,
        height: 120,
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
        top: 10,
        left: 10,
        borderRadius: 25
    },
    CategoryText: {
        color: "#6E87AF",
        fontSize: 12,
        fontFamily: "semibold"
    },
    InfoBox: {
        paddingHorizontal: 10,
        paddingVertical: 6,
        gap: 4
    },
    Title: {
        color: "#002D73",
        fontSize: 16,
        fontFamily: "semibold"
    },
    Location: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },
    LocationText: {
        color: "#6E87AF",
        fontSize: 14
    },
    ButtonLike: {
        position: "absolute",
        top: 10,
        right: 10
    },
    LocationIcon: {
        width: 15,
        height: 15
    }
})
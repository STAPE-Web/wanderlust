import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonDefault from '@/ui/Buttons/Default'
import { premiumList } from '@/constants'
import PremiumItem from '@/ui/PremiumItem'

const Tools = () => {
    return (
        <ScrollView style={styles.Page}>
            <Image style={styles.Illustration} source={require("@/assets/images/Illustration.gif")} />
            <Text style={styles.Title}>Wanderlust Premium</Text>

            <View style={styles.List}>
                {premiumList.map((item, index) => (
                    <PremiumItem item={item} key={index} />
                ))}
            </View>

            <ButtonDefault>Купить подписку</ButtonDefault>
        </ScrollView>
    )
}

export default Tools

const styles = StyleSheet.create({
    Page: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 15,
        paddingTop: 40,
    },
    List: {
        gap: 10,
        marginVertical: 50,
    },
    Title: {
        alignSelf: "center",
        color: "#0D387A",
        fontSize: 24,
        fontFamily: "semibold",
        marginTop: 20
    },
    Illustration: {
        width: 120,
        height: 120,
        alignSelf: "center"
    }
})
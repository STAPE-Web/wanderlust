import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '@/components/Header'
import useTripsStore from '@/store/trips'
import ButtonDefault from '@/ui/Buttons/Default'
import Step1 from '@/components/Forms/Trips/1'
import Step2 from '@/components/Forms/Trips/2'
import { router } from 'expo-router'
import { stepTripTitles } from '@/constants'

const NewTrip = () => {
    const changeStep = useTripsStore(state => state.changeStep)
    const step = useTripsStore(state => state.step)

    function fillSteps() {
        switch (step) {
            case 0: return <Step1 />
            case 1: return <Step2 />
        }
    }

    async function createTrip() {
        changeStep(0)
        router.push("/trips")
        alert("Путешествие создано")
    }

    return (
        <ScrollView style={styles.Page}>
            <Header back={() => step === 0 ? router.push("/trips") : changeStep(step - 1)} />

            <Text style={styles.Title}>{stepTripTitles[step]}</Text>

            <View style={styles.Form}>
                {fillSteps()}
            </View>

            <ButtonDefault onPress={() => step === 1 ? createTrip() : changeStep(step + 1)}>{step === 1 ? "Добавить" : "Продолжить"}</ButtonDefault>
        </ScrollView>
    )
}

export default NewTrip

const styles = StyleSheet.create({
    Page: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 15,
        paddingTop: 20
    },
    Title: {
        textAlign: "center",
        fontSize: 40,
        fontFamily: "semibold",
        color: "#0D387A",
        marginTop: 15
    },
    Form: {
        marginVertical: 50,
        flex: 1,
        gap: 10
    }
})
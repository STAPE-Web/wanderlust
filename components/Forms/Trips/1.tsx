import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from '@/ui/Input'
import useTripsStore from '@/store/trips'
import { TripFieldType } from '@/store/types'
import Upload from '@/components/Upload'

const Step1 = () => {
    const changeData = useTripsStore(state => state.changeData)
    const name = useTripsStore(state => state.name)
    const description = useTripsStore(state => state.description)

    function handleInput(text: string, type: TripFieldType) {
        changeData(text, type)
    }

    return (
        <>
            <Upload />
            <Input onChangeText={text => handleInput(text, "name")} type='text' value={name} label='Название' />
            <Input onChangeText={text => handleInput(text, "description")} type='text' value={description} label='Описание' />
        </>
    )
}

export default Step1

const styles = StyleSheet.create({})
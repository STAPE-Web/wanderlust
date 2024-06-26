import { StyleSheet, View } from 'react-native'
import Input from '@/ui/Input'
import useAuthStore from '@/store/auth'
import { AuthFieldType } from '@/store/types'
import Label from '@/ui/Text/Label'
import Select from '@/ui/Select'
import { dayArray, genderArray, monthArray, yearArray } from '@/constants'

const PersonalForm = () => {
    const changeData = useAuthStore(state => state.changeData)
    const username = useAuthStore(state => state.username)
    const day = useAuthStore(state => state.day)
    const month = useAuthStore(state => state.month)
    const year = useAuthStore(state => state.year)
    const gender = useAuthStore(state => state.gender)

    function handleData(text: string, type: AuthFieldType) {
        changeData(text, type)
    }

    return (
        <View style={styles.Form}>
            <Input label="Имя" onChangeText={(text) => handleData(text, "username")} type="text" value={username} />

            <View style={styles.Box}>
                <Label text="Дата рождения" />

                <View style={styles.SelectList}>
                    <Select array={dayArray} setValue={handleData} type='day' value={day} />
                    <Select array={monthArray} setValue={handleData} type='month' value={month} />
                    <Select array={yearArray} setValue={handleData} type='year' value={year} />
                </View>
            </View>

            <Select array={genderArray} setValue={handleData} type='gender' value={gender} label='Пол' />
        </View>
    )
}

export default PersonalForm

const styles = StyleSheet.create({
    Form: {
        flex: 1,
        gap: 12,
        marginTop: 30
    },
    Box: {
        flex: 1,
        gap: 10,
    },
    SelectList: {
        flex: 1,
        width: "100%",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: 10
    }
})
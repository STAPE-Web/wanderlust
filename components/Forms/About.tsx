import { StyleSheet, View } from 'react-native'
import useAuthStore from '@/store/auth'
import { AuthFieldType } from '@/store/types'
import Select from '@/ui/Select'
import { countryArray } from '@/constants'

const AboutForm = () => {
    const changeData = useAuthStore(state => state.changeData)
    const countryBorn = useAuthStore(state => state.countryBorn)
    const countryLive = useAuthStore(state => state.countryLive)

    function handleData(text: string, type: AuthFieldType) {
        changeData(text, type)
    }

    return (
        <View style={styles.Form}>
            <Select array={countryArray} setValue={handleData} type='countryBorn' value={countryBorn} label='Страна рождения' />
            <Select array={countryArray} setValue={handleData} type='countryLive' value={countryLive} label='Страна проживания' />
        </View>
    )
}

export default AboutForm

const styles = StyleSheet.create({
    Form: {
        flex: 1,
        gap: 12,
        marginTop: 30
    },
})
import { StyleSheet, View } from 'react-native'
import Input from '@/ui/Input'
import useAuthStore from '@/store/auth'
import { AuthFieldType } from '@/store/types'

const LoginForm = () => {
    const changeData = useAuthStore(state => state.changeData)
    const login = useAuthStore(state => state.login)
    const password = useAuthStore(state => state.password)

    function handleInput(text: string, type: AuthFieldType) {
        changeData(text, type)
    }

    return (
        <View style={styles.Form}>
            <Input label="Имя пользователя" onChangeText={(text) => handleInput(text, "login")} type="text" value={login} />
            <Input label="Пароль" onChangeText={(text) => handleInput(text, "password")} type="password" value={password} />
        </View>
    )
}

export default LoginForm

const styles = StyleSheet.create({
    Form: {
        flex: 1,
        gap: 12,
        marginTop: 30
    },
})
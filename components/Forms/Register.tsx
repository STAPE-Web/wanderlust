import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import Input from '@/ui/Input'
import useAuthStore from '@/store/auth'
import { AuthFieldType } from '@/store/types'
import Checkbox from '@/ui/Checkbox'

const RegisterForm = () => {
    const changeData = useAuthStore(state => state.changeData)
    const login = useAuthStore(state => state.login)
    const email = useAuthStore(state => state.email)
    const phone = useAuthStore(state => state.phone)
    const password = useAuthStore(state => state.password)
    const repeatPassword = useAuthStore(state => state.repeatPassword)
    const [check, setCheck] = useState(false)

    function handleInput(text: string, type: AuthFieldType) {
        changeData(text, type)
    }

    return (
        <View style={styles.Form}>
            <Input label="Имя пользователя" onChangeText={(text) => handleInput(text, "login")} type="text" value={login} />
            <Input label="E-mail" onChangeText={(text) => handleInput(text, "email")} type="text" keyboardType='email-address' value={email} />
            <Input label="Телефон" onChangeText={(text) => handleInput(text, "phone")} type="text" keyboardType='phone-pad' value={phone} />
            <Input label="Пароль" onChangeText={(text) => handleInput(text, "password")} type="password" value={password} />
            <Input label="Повторить пароль" onChangeText={(text) => handleInput(text, "repeatPassword")} type="password" value={repeatPassword} />

            <Checkbox checked={check} setCheck={setCheck} text="Я согласен с условием использования" />
        </View>
    )
}

export default RegisterForm

const styles = StyleSheet.create({
    Form: {
        flex: 1,
        gap: 12,
        marginTop: 30
    },
})
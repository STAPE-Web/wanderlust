import LoginForm from '@/components/Forms/Login';
import useGlobalStore from '@/store';
import ButtonDefault from '@/ui/Buttons/Default';
import ButtonGray from '@/ui/Buttons/Gray';
import Title from '@/ui/Text/Title';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';

export default function Login() {
    const changeIsAuth = useGlobalStore(state => state.changeIsAuth)
    const router = useRouter()

    async function SignIn() {
        changeIsAuth(true)
        router.push("/")
    }

    return (
        <ScrollView style={styles.Page}>
            <Title text="Авторизация" />

            <LoginForm />

            <View style={styles.ButtonBox}>
                <ButtonGray onPress={() => router.push("/register")}>Регистрация</ButtonGray>
                <ButtonDefault onPress={() => SignIn()}>Вход</ButtonDefault>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    Page: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 15,
        paddingTop: 30
    },
    ButtonBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 30,
        marginTop: 50,
        paddingHorizontal: 15,
        flex: 1,
        paddingBottom: 50
    }
});

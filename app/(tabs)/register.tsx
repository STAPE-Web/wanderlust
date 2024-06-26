import AboutForm from '@/components/Forms/About';
import PersonalForm from '@/components/Forms/Personal';
import RegisterForm from '@/components/Forms/Register';
import { stepTitles } from '@/constants';
import useGlobalStore from '@/store';
import useAuthStore from '@/store/auth';
import ButtonDefault from '@/ui/Buttons/Default';
import ButtonGray from '@/ui/Buttons/Gray';
import Title from '@/ui/Text/Title';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';

export default function Register() {
    const step = useAuthStore(state => state.step)
    const changeStep = useAuthStore(state => state.changeStep)
    const changeIsAuth = useGlobalStore(state => state.changeIsAuth)
    const router = useRouter()

    function fillSteps() {
        switch (step) {
            case 0: return <RegisterForm />;
            case 1: return <PersonalForm />;
            case 2: return <AboutForm />;
        }
    }

    async function CreateAccount() {
        changeStep(0)
        changeIsAuth(true)
        router.push("/")
    }

    return (
        <ScrollView style={styles.Page}>
            <Title text={stepTitles[step]} />

            {fillSteps()}

            <View style={styles.ButtonBox}>
                <ButtonGray onPress={() => step === 0 ? router.push("/login") : changeStep(step - 1)}>{step === 0 ? "Вход" : "Назад"}</ButtonGray>
                <ButtonDefault onPress={() => step === stepTitles.length - 1 ? CreateAccount() : changeStep(step + 1)}>{step === stepTitles.length - 1 ? "Войти" : "Далее"}</ButtonDefault>
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

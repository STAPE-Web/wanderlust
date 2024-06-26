import Header from '@/components/Header'
import { notificationsList } from '@/constants'
import Notify from '@/ui/Notify'
import { router } from 'expo-router'
import { StyleSheet, ScrollView, View } from 'react-native'

const Notifications = () => {
    return (
        <ScrollView style={styles.Page}>
            <Header text='Уведомления' back={() => router.push("/")} />

            <View style={styles.List}>
                {notificationsList.map((item, index) => (
                    <Notify item={item} key={index} />
                ))}
            </View>
        </ScrollView>
    )
}

export default Notifications

const styles = StyleSheet.create({
    Page: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 15,
        paddingTop: 20
    },
    List: {
        gap: 20,
        marginTop: 20
    }
})
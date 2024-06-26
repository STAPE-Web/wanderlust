import Achivements from '@/components/Achivements'
import Map from '@/components/Map'
import { achivementsList } from '@/constants'
import Avatar from '@/ui/Avatar'
import ButtonGray from '@/ui/Buttons/Gray'
import ButtonSearch from '@/ui/Buttons/Search'
import { MenuIcon } from '@/ui/Icons'
import ProfileAmount from '@/ui/ProfileAmount'
import Title from '@/ui/Text/Title'
import { ScrollView, StyleSheet, View } from 'react-native'

const Profile = () => {
    return (
        <ScrollView style={styles.Page}>
            <View style={styles.Header}>
                <View style={styles.HeaderBox}>
                    <ButtonSearch />
                    <Title text='nikname' />
                </View>

                <MenuIcon color='#003365' style={styles.MenuIcon} />
            </View>

            <View style={styles.InfoBox}>
                <View style={styles.Info}>
                    <Avatar url='https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />

                    <View style={styles.AmountBox}>
                        <ProfileAmount amount={0} title='Друзья' />
                        <ProfileAmount amount={0} title='Подписчики' />
                        <ProfileAmount amount={0} title='Подписки' />
                    </View>
                </View>

                <Title text='Никита Белов' />
                <ButtonGray>Редактировать профиль</ButtonGray>
                <Achivements array={achivementsList} />

                <View style={styles.MapBox}>
                    <Map />
                </View>
            </View>
        </ScrollView>
    )
}

export default Profile

const styles = StyleSheet.create({
    Page: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 15,
        paddingTop: 20,
    },
    MenuIcon: {
        width: 30,
        height: 30
    },
    Header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    HeaderBox: {
        alignItems: "center",
        flexDirection: "row",
        gap: 10
    },
    AmountBox: {
        flexDirection: 'row',
        gap: 15,
        flex: 1
    },
    InfoBox: {
        gap: 15,
        marginTop: 20
    },
    Info: {
        flex: 1,
        flexDirection: "row",
        gap: 40,
        alignItems: "center"
    },
    MapBox: {
        flex: 1,
        width: "100%",
        marginTop: 20
    }
})
import CardTrips from '@/components/Cards/Trips';
import { tabList, tripsList } from '@/constants';
import ButtonDefault from '@/ui/Buttons/Default';
import Tabs from '@/ui/Tabs';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

export default function Trips() {
    const [tab, setTab] = useState("Будущие")
    const router = useRouter()

    return (
        <View style={styles.Page}>
            <ScrollView style={styles.Scroll}>
                <Tabs array={tabList} setState={setTab} state={tab} />

                <View style={styles.CardList}>
                    {tripsList.map((item) => (
                        <CardTrips item={item} key={item.id} />
                    ))}
                </View>
            </ScrollView>

            <View style={styles.ButtonBox}>
                <ButtonDefault onPress={() => router.push("/trips/new")}>Создать новое путешествие</ButtonDefault>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Page: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 40
    },
    Scroll: {
        flex: 1,
        paddingHorizontal: 15
    },
    CardList: {
        marginTop: 30,
        gap: 15,
        paddingBottom: 20
    },
    ButtonBox: {
        flex: 1,
        maxHeight: 50,
        paddingHorizontal: 15,
        backgroundColor: "#fff",
        marginVertical: 20
    }
});

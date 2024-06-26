import CardDefault from '@/components/Cards/Default';
import CardSmall from '@/components/Cards/Small';
import { placesList } from '@/constants';
import { BellIcon } from '@/ui/Icons';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home() {
  const router = useRouter()

  return (
    <ScrollView style={styles.Page}>
      <View style={styles.Header}>
        <Text style={styles.Title}>Ciao Nikita</Text>

        <TouchableOpacity activeOpacity={0.7} onPress={() => router.push("/notifications")} style={styles.Notification}>
          <BellIcon color='#0D387A' />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.Scroll} horizontal showsHorizontalScrollIndicator={false}>
        {placesList.slice(0, 10).map((item, index) => (
          <View key={item.id} style={index === placesList.slice(0, 10).length - 1 ? styles.LastCard : styles.CardContainer}>
            <CardSmall item={item} />
          </View>
        ))}
      </ScrollView>

      <View style={styles.CardList}>
        {placesList.slice(10, 20).map((item) => (
          <CardDefault item={item} key={item.id} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Page: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
    paddingTop: 40
  },
  Notification: {
    width: 34,
    height: 34
  },
  Header: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: 'center',
    flexDirection: "row"
  },
  Title: {
    color: "#0D387A",
    fontSize: 32,
    fontFamily: "semibold"
  },
  Scroll: {
    marginTop: 40,
    paddingRight: 15,
  },
  CardContainer: {
    marginRight: 15,
  },
  LastCard: {
    marginRight: 15,
  },
  CardList: {
    marginTop: 30,
    gap: 15,
    paddingBottom: 70
  }
});

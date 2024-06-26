import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import useGlobalStore from '@/store';
import { navigationList } from '@/constants';
import { INavigate } from '@/types';
import { useRouter } from 'expo-router';

const Navigation = () => {
    const isAuth = useGlobalStore(state => state.isAuth);
    const [active, setActive] = useState("Home")
    const router = useRouter()

    function navigate(item: INavigate) {
        setActive(item.name)
        router.push(item.link)
    }

    return (
        <>{isAuth && (
            <View style={styles.Navigation}>
                {navigationList.map((item, index) => (
                    <TouchableOpacity key={index} onPress={() => navigate(item)}>
                        <item.icon
                            color={active === item.name ? "#14A0E6" : "#AEBCD2"}
                            style={styles.Icon}
                        />
                    </TouchableOpacity>
                ))}
            </View>
        )}</>
    )
}

export default Navigation

const styles = StyleSheet.create({
    Navigation: {
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 20,
        paddingBottom: 40,
        backgroundColor: "#EBEFF4",
        borderColor: "#DFE5ED",
        borderWidth: 1,
        maxHeight: 90,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    Icon: {
        width: 30,
        height: 30
    }
})
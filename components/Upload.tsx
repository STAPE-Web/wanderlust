import { Platform, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import * as ImagePicker from 'expo-image-picker';
import { ImageIcon } from '@/ui/Icons';

const Upload = () => {
    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Извините, но нам нужен доступ к вашей галерее для этой функции.');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
        });

        console.log(result)
    };

    return (
        <TouchableOpacity style={styles.Upload} onPress={() => pickImage()}>
            <ImageIcon style={styles.Icon} color='#002D73' />
        </TouchableOpacity>
    )
}

export default Upload

const styles = StyleSheet.create({
    Upload: {
        width: 75,
        height: 75,
        borderRadius: 100,
        backgroundColor: "#F4F6F9",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center"
    },
    Icon: {
        width: 34,
        height: 34
    }
})
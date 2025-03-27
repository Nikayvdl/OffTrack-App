import { useEffect } from "react";
import { StyleSheet, Text, View, ImageBackground, ScrollView } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";

const DATA = {
    "1": { title: "London", description: "Historische bezienswaardigheden en moderne charme.", flag: "🇬🇧", bg: require('../../assets/images/countries/londen.jpg') },
    "2": { title: "Paris", description: "De stad van de liefde en de Eiffeltoren.", flag: "🇫🇷", bg: require('../../assets/images/countries/paris.jpg') },
    "3": { title: "Tokyo", description: "Futuristische stad met een rijke traditie.", flag: "🇯🇵", bg: require('../../assets/images/countries/Tokyo.png') },
    "4": { title: "Barcelona", description: "Zon, strand en Gaudí.", flag: "🇪🇸", bg: require('../../assets/images/countries/Barcelona.png') },
    "5": { title: "Berlin", description: "Cultuur, geschiedenis en een bruisend nachtleven.", flag: "🇩🇪" },
    "6": { title: "Sydney", description: "Iconische haven en prachtige stranden.", flag: "🇦🇺" },
    "7": { title: "Rome", description: "Eeuwenoude geschiedenis en pasta.", flag: "🇮🇹" },
    "8": { title: "Moscow", description: "Imposante architectuur en rijke geschiedenis.", flag: "🇷🇺" },
    "9": { title: "Dublin", description: "Gezellige pubs en historische kastelen.", flag: "🇮🇪" },
    "10": { title: "Vienna", description: "Klassieke muziek en prachtige paleizen.", flag: "🇦🇹" },
    "11": { title: "Budapest", description: "De parel aan de Donau.", flag: "🇭🇺" },
    "12": { title: "Prague", description: "Middeleeuwse charme en gotische architectuur.", flag: "🇨🇿" },
    "13": { title: "Madrid", description: "Voetbal, kunst en Spaanse tapas.", flag: "🇪🇸" },
    "14": { title: "Amsterdam", description: "Grachten, fietsen en kunstmusea.", flag: "🇳🇱" },
    "15": { title: "Barcelona", description: "Nog een bezoek aan de zonnige stad!", flag: "🇪🇸" },
    "16": { title: "Copenhagen", description: "Hygge en kleurrijke havenhuizen.", flag: "🇩🇰" },
    "17": { title: "Lisbon", description: "Trammetjes en heerlijke pasteis de nata.", flag: "🇵🇹" },
    "18": { title: "Bangkok", description: "Drukke markten en prachtige tempels.", flag: "🇹🇭" },
    "19": { title: "Dubai", description: "Moderne wolkenkrabbers en luxe winkels.", flag: "🇦🇪" },
    "20": { title: "Toronto", description: "CN Tower en multiculturele charme.", flag: "🇨🇦" },
    "21": { title: "Singapore", description: "Schone stad met futuristische architectuur.", flag: "🇸🇬" },
    "22": { title: "Seoul", description: "K-pop, tech en traditionele paleizen.", flag: "🇰🇷" },
    "23": { title: "Rio de Janeiro", description: "Carnaval en prachtige stranden.", flag: "🇧🇷" },
    "24": { title: "Cape Town", description: "Tafelberg en prachtige natuur.", flag: "🇿🇦" },
};

export default function DetailScreen() {
    const { id } = useLocalSearchParams();
    const navigation = useNavigation();
    const item = DATA[id];

    useEffect(() => {
        if (item) {
            navigation.setOptions({ title: item.title });
        }
    }, [item]);

    if (!item) {
        return (
            <View style={styles.container}>
                <Text>Stad niet gevonden.</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            {item.bg ? (
                <ImageBackground source={item.bg} style={styles.image} imageStyle={{ borderRadius: 15 }}>
                    <View style={styles.overlay}>
                        <Text style={styles.title}>{item.flag} {item.title}</Text>
                    </View>
                </ImageBackground>
            ) : (
                <View style={[styles.image, styles.noImage]}>
                    <Text style={styles.noImageText}>Geen afbeelding beschikbaar</Text>
                </View>
            )}

            <View style={styles.textContainer}>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        padding: 20,
    },
    image: {
        height: 250,
        justifyContent: "flex-end",
        borderRadius: 15,
        overflow: "hidden",
    },
    overlay: {
        backgroundColor: "rgba(0,0,0,0.4)",
        padding: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
    },
    textContainer: {
        padding: 20,
    },
    description: {
        fontSize: 18,
    },
    noImage: {
        backgroundColor: "#CCC",
        alignItems: "center",
        justifyContent: "center",
    },
    noImageText: {
        fontSize: 16,
        color: "#666",
    },
});

import { StyleSheet, Text, View, FlatList, ImageBackground, Pressable } from "react-native";
import { Link } from "expo-router"; // Zorg ervoor dat je Link importeert

const DATA = [
  {
    id: "1",
    destination: "London",
    date: "maart 2024 - april 2024",
    flag: "🇬🇧",
    bg: require("../../../assets/images/countries/londen.jpg"),
  },
  {
    id: "2",
    destination: "Paris",
    date: "april 2024 - mei 2024",
    flag: "🇫🇷",
    bg: require("../../../assets/images/countries/paris.jpg"),
  },
  {
    id: "3",
    destination: "Tokyo",
    date: "februari 2024 - maart 2024",
    flag: "🇯🇵",
    bg: require("../../../assets/images/countries/Tokyo.png"),
  },
  {
    id: "4",
    destination: "Barcelona",
    date: "januari 2024 - februari 2024",
    flag: "🇪🇸",
    bg: require("../../../assets/images/countries/Barcelona.png"),
  },
  { id: "5", destination: "Berlin", date: "mei 2024 - juni 2024", flag: "🇩🇪" },
  {
    id: "6",
    destination: "Sydney",
    date: "juli 2024 - augustus 2024",
    flag: "🇦🇺",
  },
  { id: "7", destination: "Rome", date: "mei 2024 - juni 2024", flag: "🇮🇹" },
  { id: "8", destination: "Moscow", date: "april 2024 - mei 2024", flag: "🇷🇺" },
  { id: "9", destination: "Dublin", date: "mei 2024 - juni 2024", flag: "🇮🇪" },
  {
    id: "10",
    destination: "Vienna",
    date: "juni 2024 - juli 2024",
    flag: "🇦🇹",
  },
  {
    id: "11",
    destination: "Budapest",
    date: "juli 2024 - augustus 2024",
    flag: "🇭🇺",
  },
  {
    id: "12",
    destination: "Prague",
    date: "augustus 2024 - september 2024",
    flag: "🇨🇿",
  },
  {
    id: "13",
    destination: "Madrid",
    date: "september 2024 - oktober 2024",
    flag: "🇪🇸",
  },
  {
    id: "14",
    destination: "Amsterdam",
    date: "oktober 2024 - november 2024",
    flag: "🇳🇱",
  },
  {
    id: "15",
    destination: "Barcelona",
    date: "november 2024 - december 2024",
    flag: "🇪🇸",
  },
  {
    id: "16",
    destination: "Copenhagen",
    date: "december 2024 - januari 2025",
    flag: "🇩🇰",
  },
  {
    id: "17",
    destination: "Lisbon",
    date: "januari 2025 - februari 2025",
    flag: "🇵🇹",
  },
  {
    id: "18",
    destination: "Bangkok",
    date: "februari 2025 - maart 2025",
    flag: "🇹🇭",
  },
  {
    id: "19",
    destination: "Dubai",
    date: "maart 2025 - april 2025",
    flag: "🇦🇪",
  },
  {
    id: "20",
    destination: "Toronto",
    date: "april 2025 - mei 2025",
    flag: "🇨🇦",
  },
  {
    id: "21",
    destination: "Singapore",
    date: "mei 2025 - juni 2025",
    flag: "🇸🇬",
  },
  { id: "22", destination: "Seoul", date: "juni 2025 - juli 2025", flag: "🇰🇷" },
  {
    id: "23",
    destination: "Rio de Janeiro",
    date: "juli 2025 - augustus 2025",
    flag: "🇧🇷",
  },
  {
    id: "24",
    destination: "Cape Town",
    date: "augustus 2025 - september 2025",
    flag: "🇿🇦",
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>🌴 My Trips</Text>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Link href={`/screens/detailScreen?id=${item.id}`} style={{ flex: 1 }}>
            <ImageBackground
              source={item.bg}
              style={styles.card}
              imageStyle={styles.cardImage}
            >
              <View style={styles.overlay}>
                <View style={styles.flagContainer}>
                  <Text style={styles.flag}>{item.flag}</Text>
                  <Text style={styles.destination}>{item.destination}</Text>
                </View>
                <Text style={styles.date}>{item.date}</Text>
              </View>
            </ImageBackground>
          </Link>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />} // Dit voegt een scheidingslijn toe tussen de items
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    height: 200,
    width: "100%", // Zorg ervoor dat de kaart de volledige breedte van het scherm gebruikt
    justifyContent: "flex-end",
    borderRadius: 15,
    overflow: "hidden",
    zIndex: 1,
  },
  cardImage: {
    borderRadius: 15,
  },
  overlay: {
    flex: 1,
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: 15,
  },
  flagContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    alignSelf: "flex-start",
    height: 50,
  },
  flag: {
    fontSize: 20,
    marginRight: 5,
  },
  destination: {
    fontSize: 18,
    fontWeight: "bold",
  },
  date: {
    fontSize: 16,
    color: "white",
    marginTop: 5,
  },
  separator: {
    height: 10, // Pas deze waarde aan voor de gewenste ruimte tussen de kaarten
  },
});

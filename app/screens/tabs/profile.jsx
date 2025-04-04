import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ProfileScreen() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const storedUser = await AsyncStorage.getItem("user");
      if (storedUser) {
        const userData = JSON.parse(storedUser);
        setUserName(userData.email.split("@")[0]);
      }
    };
    fetchUser();
  }, []);

  const favorites = [
    {
      id: "1",
      image: require("../../../assets/images/countries/New_York.png"),
    },
    { id: "2", image: require("../../../assets/images/countries/Rome.png") },
    { id: "3", image: require("../../../assets/images/countries/paris.jpg") },
    {
      id: "4",
      image: require("../../../assets/images/countries/Barcelona.png"),
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header Image */}
      <Image
        source={require("../../../assets/images/Banner.png")}
        style={styles.headerImage}
      />

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.profileImageWrapper}>
          <Image
            source={require("../../../assets/images/pfp.jpg")}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.profileTextContainer}>
          <Text style={styles.name}>{userName || "User"}</Text>
          <Text style={styles.pronouns}>he/him</Text>
        </View>
      </View>

      {/* Bio Section */}
      <View style={styles.bioContainer}>
        <Text style={styles.bioText}>
          {userName} is a passionate traveler who loves discovering new places and
          immersing himself in different cultures. From tasting local delicacies
          to exploring historical sites, he finds joy in learning about the
          world. Travel is not just a hobby—it’s a way of life!
        </Text>
      </View>

      {/* Favorites Section */}
      <Text style={styles.favoritesTitle}>❤️ My favorites</Text>
      <FlatList
        data={favorites}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Image source={item.image} style={styles.favoriteImage} />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerImage: {
    width: "100%",
    height: 200,
  },
  profileSection: {
    left: 30,
    marginTop: -50, // Adjusts profile image position
  },
  profileImageWrapper: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "white",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileTextContainer: {
    marginTop: 10,
    left: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  pronouns: {
    fontSize: 14,
    color: "gray",
  },
  bioContainer: {
    backgroundColor: "#f8f8f8",
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  bioText: {
    fontSize: 14,
    textAlign: "center",
  },
  favoritesTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 10,
  },
  favoriteImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    margin: 10,
  },
});

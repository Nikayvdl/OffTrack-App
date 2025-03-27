import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

export default function Notifications() {
  const notifications = [
    { id: '1', name: 'Spaghettio', message: 'Ik heb zojuist mijn schoenen opgegeten. Smaakt naar kip.', image: require('../../../assets/images/user1.png') },
    { id: '2', name: 'Bert Flapdrol', message: 'Mijn goudvis heeft net zijn rijbewijs gehaald. Ik ben trots.', image: require('../../../assets/images/user2.png') },
    { id: '3', name: 'Donkersnoet', message: 'Waarom ruikt mijn telefoon naar verbrande toast?', image: require('../../../assets/images/user3.png') },
    { id: '4', name: 'Mister Pannenkoek', message: 'Ik heb net een boemerang weggegooid, maar hij komt niet terug. Nu ben ik bang.', image: require('../../../assets/images/user4.png') },
    { id: '5', name: 'Knakworstje', message: 'Ik heb net ontdekt dat je tanden kunt tellen. Best eng eigenlijk.', image: require('../../../assets/images/user5.png') },
    { id: '6', name: 'Gerard Maïonaise', message: 'Gisteren probeerde ik mijn sokken als handschoenen. Verrassend comfortabel.', image: require('../../../assets/images/user6.png') },
    { id: '7', name: 'Nikay de Koning', message: 'Ik heb net een privévliegtuig gekocht. Het is zo groot, zelfs mijn ego past erin. Iedereen zou een stukje van mijn succes moeten proeven.', image: require('../../../assets/images/user7.png') },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔔 Notifications</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notificationCard}>
            <Image source={item.image} style={styles.profileImage} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.name} posted:</Text>
              <Text style={styles.message}>{item.message}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  notificationCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
  },
  message: {
    color: 'gray',
  },
});

import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Picker } from '@react-native-picker/picker';

export default function AddDiaryEntry() {
  const [location, setLocation] = useState('');
  const [duration, setDuration] = useState('');
  const [diaryEntry, setDiaryEntry] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState('');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📖 New diary entry</Text>

      <Text style={styles.label}>Location of vacation</Text>
      <TextInput style={styles.input} value={location} onChangeText={setLocation} placeholder="Enter location" />

      <Text style={styles.label}>Banner image</Text>
      <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
        {selectedImage ? <Image source={{ uri: selectedImage }} style={styles.image} /> : <Text style={styles.plus}>+</Text>}
      </TouchableOpacity>

      <Text style={styles.label}>Duration</Text>
      <TextInput style={styles.input} value={duration} onChangeText={setDuration} placeholder="Enter duration" />

      <Text style={styles.label}>Diary entry</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        value={diaryEntry}
        onChangeText={setDiaryEntry}
        placeholder="Write your story..."
        multiline
      />

      <TouchableOpacity style={styles.submitButton} onPress={() => Alert.alert('Entry Submitted')}>
        <Text style={styles.submitText}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  imagePicker: {
    height: 150,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  plus: {
    fontSize: 40,
    color: '#aaa',
  },
  submitButton: {
    backgroundColor: 'black',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 10,
  },
  submitText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

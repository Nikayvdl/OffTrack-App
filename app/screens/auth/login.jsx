import { ImageBackground, Text, View, StyleSheet, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert("Validation Error", "Both fields are required.");
            return;
        }

        try {
            const userData = await AsyncStorage.getItem('user');
            if (!userData) {
                Alert.alert("Error", "No account found. Please register first!");
                return;
            }

            const { email: storedEmail, password: storedPassword } = JSON.parse(userData);

            if (email === storedEmail && password === storedPassword) {
                Alert.alert("Success", "Login successful!");
                router.push('/screens/tabs/home');
            } else {
                Alert.alert("Error", "Incorrect email or password!");
            }
        } catch (error) {
            Alert.alert("Error", "Something went wrong. Please try again.");
        }
    };

    return (
        <ImageBackground style={styles.background} source={require('../../../assets/images/damiano-baschiera-hFXZ5cNfkOk-unsplash(1).png')}>
            <View style={styles.overlay}>
                <Image source={require('../../../assets/images/Logo.png')} style={styles.logo} />

                <View style={styles.formContainer}>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Email Address" 
                        placeholderTextColor="#000"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <TextInput 
                        style={styles.input} 
                        placeholder="Password" 
                        placeholderTextColor="#000" 
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword} 
                    />
                </View>

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => router.push('/screens/auth/register')}>
                    <Text style={styles.accountText}>Don't already have an account? Sign up!</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        filter: 'brightness(1.5)',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        justifyContent: 'flex-end', 
        alignItems: 'center', 
        padding: 10,
    },
    logo: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        position: 'absolute',
        top: 40,
        left: 20,
    },
    formContainer: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    input: {
        width: '95%',
        height: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        color: '#000', 
        borderRadius: 15,
        paddingLeft: 15,
        marginBottom: 10,
        fontSize: 16,
    },
    button: {
        width: '95%',
        backgroundColor: '#000',
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
        marginBottom: 7,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    accountText: {
        color: '#fff', 
        fontSize: 14,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 15,
    },
});

export default Login;

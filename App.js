/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView } from 'react-native';
import CryptoJS from 'crypto-js';

const App = () => {
  const [message, setMessage] = useState('');
  const [encrypted, setEncrypted] = useState('');
  const [decrypted, setDecrypted] = useState('');

  const secretKey = 'mySecretKey123'; // Replace with a more secure key

  const handleEncrypt = () => {
    const ciphertext = CryptoJS.AES.encrypt(message, secretKey).toString();
    setEncrypted(ciphertext);
  };

  const handleDecrypt = () => {
    const bytes = CryptoJS.AES.decrypt(encrypted, secretKey);
    const originalMessage = bytes.toString(CryptoJS.enc.Utf8);
    setDecrypted(originalMessage);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.heading}>CryptoApp</Text>

        <Text style={styles.title}>Encryption and Decryption</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter message"
          value={message}
          onChangeText={setMessage}
        />

        <Button title="Encrypt" onPress={handleEncrypt} />

        {encrypted ? (
          <>
            <Text style={styles.text}>Encrypted: {encrypted}</Text>
            <Button title="Decrypt" onPress={handleDecrypt} />
          </>
        ) : null}

        {decrypted ? <Text style={styles.text}>Decrypted: {decrypted}</Text> : null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff', // Optional: Set background color
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start', // Align items at the top
  },
  heading: {
    textAlign: 'center',
    fontSize: 50,
    fontWeight: 'bold',
    padding: 20,
    marginBottom: 70,
    color:"#2196F3",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default App;



import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebaseConfig from '../services/firebaseConfig';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignIn = async () => {
    const auth = getAuth(); // Get the auth instance
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSuccess('Sign-in successful!');
      setError('');
    } catch (error) {
      setError('Sign-in failed: ' + error.message);
      setSuccess('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email:-"
        placeholderTextColor="#ecf0f1"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password:-"
        secureTextEntry
        placeholderTextColor="#ecf0f1"
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>SIGN IN</Text>
      </TouchableOpacity>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      {success ? <Text style={styles.success}>{success}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginLeft: 94,
    backgroundColor: '#34495e',
    width: 250,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    // marginBottom: 10,
    color: '#ecf0f1',
  },
  button: {
    backgroundColor: '#1abc9c',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  error: {
    color: 'white',
    marginTop: 10,
  },
  success: {
    color: 'green',
    marginTop: 10,
  },
});

export default SignIn;

import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { getAuth, signOut } from 'firebase/auth';
import firebaseConfig from '../services/firebaseConfig';

const SignOut = () => {
  const handleSignOut = async () => {
    const auth = getAuth(); // Get the auth instance
    try {
      await signOut(auth);
      alert('Signed out successfully!');
    } catch (error) {
      alert('Sign-out failed: ' + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Sign Out" onPress={handleSignOut} />
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
});

export default SignOut;

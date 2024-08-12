import React from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';
import { getAuth, signOut } from 'firebase/auth';

const SignOutScreen = ({ navigation }) => {
  const handleSignOut = async () => {
    const auth = getAuth(); // Get the auth instance
    try {
      await signOut(auth);
      Alert.alert('Signed out successfully!');
      navigation.navigate('Home'); // Navigate back to Home after sign-out
    } catch (error) {
      Alert.alert('Sign-out failed: ' + error.message);
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default SignOutScreen;

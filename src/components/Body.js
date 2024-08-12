import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window'); // Get screen width for responsiveness

const Body = ({ content, videoUri }) => {
  const navigation = useNavigation(); // Access navigation here
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [error, setError] = useState(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pauseAsync();
    } else {
      videoRef.current.playAsync();
    }
    setIsPlaying(!isPlaying);
  };

  const handleFeedbackPress = () => {
    navigation.navigate('Questionnaire'); // Navigate to Questionnaire screen
  };

  return (
    <View style={styles.body}>
      <Text style={styles.bodyText}>{content}</Text>
      <View style={styles.videoContainer}>
        <TouchableOpacity style={styles.playPauseOverlay} onPress={handlePlayPause}>
          <Video
            ref={videoRef}
            source={{ uri: videoUri }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay={isPlaying}
            isLooping
            onError={(e) => {
              setError(e);
              setIsPlaying(false);
            }}
            style={styles.video}
          />
          {!isPlaying && (
            <Ionicons
              name="play"
              size={24}
              color="#fff"
              style={styles.playPauseIcon}
            />
          )}
          {isPlaying && (
            <Ionicons
              name="pause"
              size={24}
              color="#fff"
              style={styles.playPauseIcon}
            />
          )}
        </TouchableOpacity>
        {error && <Text style={styles.errorText}>An error occurred while playing the video.</Text>}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleFeedbackPress}>
        <Text style={styles.buttonText}>Questionnaire</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  bodyText: {
    fontSize: 18,
    color: '#333',
    lineHeight: 24,
    marginBottom: 15,
    textAlign: 'center',
  },
  videoContainer: {
    position: 'relative',
    width: '100%',
    height: 100,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#000', 
  },
  video: {
    width: '100%',
    height: '100%',
  },
  playPauseOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Slight dark overlay for visibility
  },
  playPauseIcon: {
    opacity: 0.8,
  },
  errorText: {
    color: '#e74c3c',
    marginTop: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#f7e5a2',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 27,
  },
  buttonText: {
    color: '#333',
    fontSize: 16,
  },
});

export default Body;

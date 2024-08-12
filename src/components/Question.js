// src/components/Question.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Question = ({ question, options, onSelectOption, selectedOption, questionNumber }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{question}</Text>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.option,
            selectedOption === option && styles.selectedOption,
          ]}
          onPress={() => onSelectOption(option)}
        >
          <Text style={[
            styles.optionText,
            selectedOption === option && styles.selectedOptionText,
          ]}>
            {`\u2022 ${option}`} {/* Adding bullet point */}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dee2e6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4, // For Android shadow
  },
  questionText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#212529',
    marginBottom: 10,
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#f1f3f5',
    borderRadius: 5,
    marginBottom: 10,
  },
  selectedOption: {
    backgroundColor: '#f7e5a2',
  },
  optionText: {
    fontSize: 16,
    color: '#495057',
  },
  selectedOptionText: {
    color: '#212529',
    fontWeight: 'bold',
  },
});

export default Question;

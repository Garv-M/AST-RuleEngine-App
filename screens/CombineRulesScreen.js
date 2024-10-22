import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { combineRules } from '../API/api';

export default function CombineRulesScreen() {
  const [rules, setRules] = useState(['', '']); // Initial two empty rules

  const handleCombineRules = async () => {
    try {
      const response = await combineRules(rules);
      Alert.alert('Success', 'Rules combined successfully!', [{ text: 'OK' }]);
      setRules(['', '']);  // Reset input
    } catch (error) {
      Alert.alert('Error', 'Failed to combine rules.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Combine Two Rules</Text>

      <Text style={styles.label}>Enter Rule 1:</Text>
      <TextInput
        style={styles.input}
        value={rules[0]}
        onChangeText={(text) => setRules([text, rules[1]])}
        placeholder="Enter Rule 1 (e.g., age > 30 AND salary > 50000)"
      />

      <Text style={styles.label}>Enter Rule 2:</Text>
      <TextInput
        style={styles.input}
        value={rules[1]}
        onChangeText={(text) => setRules([rules[0], text])}
        placeholder="Enter Rule 2 (e.g., age > 30 AND salary > 50000)"
      />

      <TouchableOpacity style={styles.button} onPress={handleCombineRules}>
        <Text style={styles.buttonText}>Combine Rules</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: '#555555',
    alignSelf: 'flex-start',
  },
  input: {
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    width: '100%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginTop: 10,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
    textTransform: 'uppercase',
  },
});

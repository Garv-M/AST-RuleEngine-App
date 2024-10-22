import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { combineAllRules } from '../API/api';

export default function CombineAllRulesScreen() {
  const handleCombineAllRules = async () => {
    try {
      const response = await combineAllRules();
      Alert.alert('Success', 'All rules combined successfully!', [{ text: 'OK' }]);
    } catch (error) {
      Alert.alert('Error', 'Failed to combine all rules.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Combine All Rules</Text>
      <TouchableOpacity style={styles.button} onPress={handleCombineAllRules}>
        <Text style={styles.buttonText}>Combine Now</Text>
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
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginVertical: 10,
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

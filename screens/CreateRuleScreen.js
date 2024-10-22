import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { createRule } from '../API/api';

export default function CreateRuleScreen() {
  const [rule, setRule] = useState('');

  const handleCreateRule = async () => {
    try {
      const response = await createRule(rule);
      Alert.alert('Success', 'Rule created successfully!', [{ text: 'OK' }]);
      setRule('');  // Reset input
    } catch (error) {
      Alert.alert('Error', 'Failed to create rule.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Rule</Text>

      <Text style={styles.label}>Enter Rule:</Text>
      <TextInput
        style={styles.input}
        value={rule}
        onChangeText={setRule}
        placeholder="e.g., age > 30 AND salary > 50000"
      />

      <TouchableOpacity style={styles.button} onPress={handleCreateRule}>
        <Text style={styles.buttonText}>Create Rule</Text>
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

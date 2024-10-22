import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { evaluateRule } from '../API/api';

export default function EvaluateRuleScreen() {
  const [ruleAST, setRuleAST] = useState('');
  const [userData, setUserData] = useState('');

  const handleEvaluateRule = async () => {
    try {
      const parsedAST = JSON.parse(ruleAST);  // Convert the ruleAST to JSON object
      const parsedUserData = JSON.parse(userData); // Convert userData to JSON object
      const response = await evaluateRule(parsedAST, parsedUserData);
      Alert.alert('Evaluation Result', response ? 'Rule passed' : 'Rule failed', [{ text: 'OK' }]);
    } catch (error) {
      Alert.alert('Error', 'Failed to evaluate rule.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Evaluate Rule</Text>

      <Text style={styles.label}>Enter Rule AST (JSON):</Text>
      <TextInput
        style={styles.input}
        value={ruleAST}
        onChangeText={setRuleAST}
        multiline
        placeholder="Enter Rule AST in JSON format"
      />

      <Text style={styles.label}>Enter User Data (JSON):</Text>
      <TextInput
        style={styles.input}
        value={userData}
        onChangeText={setUserData}
        multiline
        placeholder="Enter User Data in JSON format"
      />

      <TouchableOpacity style={styles.button} onPress={handleEvaluateRule}>
        <Text style={styles.buttonText}>Evaluate Rule</Text>
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
    height: 100,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    width: '100%',
    marginBottom: 20,
    textAlignVertical: 'top', // Ensures multiline input starts at the top
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

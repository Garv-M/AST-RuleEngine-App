import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { updateRule } from '../API/api';

export default function UpdateRuleScreen({ route, navigation }) {
  const { ruleId, ruleString } = route.params; // ruleId and initial rule string
  const [rule, setRule] = useState(ruleString);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleUpdateRule = async () => {
    setIsUpdating(true); // Start loading
    try {
      const response = await updateRule(ruleId, rule);
      Alert.alert('Success', response.message || 'Rule updated successfully!');
      navigation.goBack();
      route.params.onGoBack && route.params.onGoBack();
    } catch (error) {
      Alert.alert('Error', 'Failed to update rule.');
      console.error('Update error:', error);
    } finally {
      setIsUpdating(false); // Stop loading
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Rule</Text>

      <Text style={styles.label}>Edit Rule String:</Text>
      <TextInput
        style={styles.input}
        value={rule}
        onChangeText={setRule}
        multiline
        placeholder="Edit rule string"
      />

      {isUpdating ? (
        <ActivityIndicator size="large" color="#2196F3" />
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleUpdateRule} disabled={isUpdating}>
          <Text style={styles.buttonText}>Update Rule</Text>
        </TouchableOpacity>
      )}
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
    textAlignVertical: 'top',
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

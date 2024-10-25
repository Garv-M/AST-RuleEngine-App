import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { fetchAllRules } from '../API/api';

export default function RulesListScreen({ navigation }) {
  const [rules, setRules] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadRules = async () => {
    setLoading(true);
    try {
      const data = await fetchAllRules();
      setRules(data);
    } catch (error) {
      console.error('Failed to load rules:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRules();
  }, []);

  if (loading) {
    return <ActivityIndicator style={styles.loader} size="large" color="#2196F3" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Rules</Text>
      <FlatList
        data={rules}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.ruleItem}
            onPress={() =>
              navigation.navigate('UpdateRule', {
                ruleId: item.id,
                ruleString: item.rule,
                onGoBack: loadRules,
              })
            }
          >
            <Text style={styles.ruleText}>{item.rule}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
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
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 20,
    textAlign: 'center',
  },
  ruleItem: {
    backgroundColor: '#2196F3',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  ruleText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    textTransform: 'uppercase',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    height: 10,
    backgroundColor: 'transparent',
  },
});

import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { fetchRecommendations } from './api';
import ProductCard from './ProductCard';

export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const results = await fetchRecommendations(query);
      setRecommendations(results);
    } catch (err) {
      setError('Failed to fetch recommendations. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI Product Advisor</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g., A laptop for a student"
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Find Products" onPress={handleSearch} />
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text style={styles.error}>{error}</Text>}
      <FlatList
        data={recommendations}
        keyExtractor={(item) => item.product_name}
        renderItem={({ item }) => <ProductCard {...item} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginVertical: 10,
  },
  list: {
    paddingTop: 10,
  },
});

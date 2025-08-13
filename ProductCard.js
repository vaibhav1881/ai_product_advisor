import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProductCard({
  product_name,
  brand,
  price,
  category,
  description,
  reason,
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{product_name}</Text>
      <Text style={styles.brand}>by {brand}</Text>
      <Text style={styles.price}>${price}</Text>
      <Text style={styles.category}>{category}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.reasonTitle}>Why it's a good match:</Text>
      <Text style={styles.reason}>{reason}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  brand: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 8,
  },
  category: {
    fontStyle: 'italic',
    color: '#555',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    marginBottom: 12,
  },
  reasonTitle: {
    fontWeight: 'bold',
    marginTop: 8,
  },
  reason: {
    fontSize: 14,
  },
});

import React from 'react';
import { View, Text, StyleSheet, ImageSourcePropType, Image } from 'react-native';
import colors from '../../../colors';

interface FinanceCardProps {
  title: string;
  value: string;
  icon: ImageSourcePropType;
  color: string;
}

export const FinanceCard = ({ title, value, icon, color }: FinanceCardProps) => (
  <View style={[styles.card, { backgroundColor: color }]}> 
    <Image source={icon} style={styles.icon} />
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    padding: 18,
    marginRight: 18,
    minWidth: 220,
    elevation: 2,
  },
  icon: {
    width: 38,
    height: 38,
    marginRight: 16,
  },
  title: {
    color: colors.textLight,
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    color: colors.textLight,
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 4,
  },
}); 
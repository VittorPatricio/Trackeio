
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FinanceCard } from "../../components/FinanceCard";
import { Card } from "../../../../types/types";

interface StartTabProps {
    cards: Card[];
}

const StartTab = ({cards}: StartTabProps) => {



    return (
        <View>
            <View style={styles.cardsRow}>
              {cards.map((card, idx) => (
                <FinanceCard key={idx} {...card} />
              ))}
            </View>
            <View style={styles.cardsRow}>
              {cards.map((card, idx) => (
                <FinanceCard key={idx} {...card} />
              ))}
            </View>
            <View style={styles.cardsRow}>
              {cards.map((card, idx) => (
                <FinanceCard key={idx} {...card} />
              ))}
            </View>
            <View style={styles.cardsRow}>
              {cards.map((card, idx) => (
                <FinanceCard key={idx} {...card} />
              ))}
            </View>
            <View style={styles.cardsRow}>
              {cards.map((card, idx) => (
                <FinanceCard key={idx} {...card} />
              ))}
            </View>
            <View style={styles.cardsRow}>
              {cards.map((card, idx) => (
                <FinanceCard key={idx} {...card} />
              ))}
            </View>
            <View style={styles.cardsRow}>
              {cards.map((card, idx) => (
                <FinanceCard key={idx} {...card} />
              ))}
            </View>
            <View style={styles.cardsRow}>
              {cards.map((card, idx) => (
                <FinanceCard key={idx} {...card} />
              ))}
            </View>
            <View style={styles.cardsRow}>
              {cards.map((card, idx) => (
                <FinanceCard key={idx} {...card} />
              ))}
            </View>
            <View style={styles.cardsRow}>
              {cards.map((card, idx) => (
                <FinanceCard key={idx} {...card} />
              ))}
            </View>
            <View style={styles.cardsRow}>
              {cards.map((card, idx) => (
                <FinanceCard key={idx} {...card} />
              ))}
            </View>
            <View style={styles.cardsRow}>
              {cards.map((card, idx) => (
                <FinanceCard key={idx} {...card} />
              ))}
            </View>
            <View style={styles.cardsRow}>
              {cards.map((card, idx) => (
                <FinanceCard key={idx} {...card} />
              ))}
            </View>
            <View style={styles.cardsRow}>
              {cards.map((card, idx) => (
                <FinanceCard key={idx} {...card} />
              ))}
            </View>
            <View style={styles.cardsRow}>
              {cards.map((card, idx) => (
                <FinanceCard key={idx} {...card} />
              ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  cardsRow: {
    flexDirection: 'row',
    marginBottom: 24,
    paddingHorizontal: 20,
    justifyContent: 'space-evenly',
  },
})

export default StartTab;
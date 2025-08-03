
import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface GoalTabProps {
  
}

const GoalTab = ({}: GoalTabProps) => {



    return (
        <View style={styles.container}>
            <Text>GoalTab</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
})

export default GoalTab;
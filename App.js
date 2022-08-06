import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import GoalInput from "./components/GoalInput/GoalInput";
import GoalItem from "./components/GoalItem/GoalItem";

export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoalHandler = (goal) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: goal, id: Math.random().toString },
    ]);
  };
  const DeleteGoal = (item) => {
    setGoals((currentGoals) =>
      currentGoals.filter((goal) => goal.id !== item.id)
    );
  };
  return (
    <View style={styles.container}>
      <GoalInput submit={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          keyExtractor={(itemData, index) => itemData.id}
          renderItem={(itemData) => (
            <GoalItem onDelete={DeleteGoal} goal={itemData.item} />
          )}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

  goalsContainer: {
    flex: 5,
  },
});

import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ goal, onDelete }) => {
  return (
    <Pressable onPress={onDelete.bind(this, goal)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{goal.text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "#fff",
  },
});

export default GoalItem;

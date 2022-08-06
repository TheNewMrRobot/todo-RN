import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const GoalInput = ({ value, onChange, submit }) => {
  const [goal, setGoal] = useState("");
  const goalHandler = (goal) => {
    setGoal(goal);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={goalHandler}
        style={styles.input}
        placeholder="your goals"
        value={goal}
      />
      <Button
        onPress={() => {
          if (goal) {
            submit(goal);
            setGoal("");
          }
        }}
        title="Add Goal"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
  },
  input: {
    borderColor: "black",
    width: "70%",
    borderWidth: 1,
    marginRight: 8,
    padding: 8,
  },
});

export default GoalInput;

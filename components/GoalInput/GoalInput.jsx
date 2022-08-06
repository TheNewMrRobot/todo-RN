import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

const GoalInput = ({ value, onChange, submit, visible, closeModal }) => {
  const [goal, setGoal] = useState("");
  const goalHandler = (goal) => {
    setGoal(goal);
  };
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.img}
          source={require("../../assets/images/goal.png")}
        />
        <TextInput
          onChangeText={goalHandler}
          style={styles.input}
          placeholder="your goals"
          value={goal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.btn}>
            <Button
              color="#b180f0"
              onPress={() => {
                if (goal) {
                  submit(goal);
                  setGoal("");
                  closeModal();
                }
              }}
              title="Add Goal"
            />
          </View>
          <View style={styles.btn}>
            <Button color="#f31282" title="Cancel" onPress={closeModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    padding: 16,
    backgroundColor: "#311b6b",
  },
  input: {
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    width: "70%",
    borderWidth: 1,
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  img: {
    height: 100,
    width: 100,
    margin: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    margin: 15,
  },
  btn: {
    marginHorizontal: 10,
  },
});

export default GoalInput;

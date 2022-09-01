import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

const GoalInput = (props) => {
  const [enteredGoalTxt, setEnteredGoalTxt] = useState("");

  function goalInputHandler(enteredTxt) {
    // console.log("This is a test: ", enteredTxt);
    setEnteredGoalTxt(enteredTxt);
  }

  const AddGoalHandler = () => {
    props.onAddGoal(enteredGoalTxt);
    setEnteredGoalTxt("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.txtInput}
          placeholder="Your course goals!"
          onChangeText={goalInputHandler}
          value={enteredGoalTxt}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color='#FF0707'/>
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={AddGoalHandler} color="#5e0acc" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#63E9EA",
  },
  txtInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 8,
    width: "90%",
    marginRight: 8,
    padding: 10,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

import { useState } from "react";
import { StyleSheet, View, FlatList, Button, Text } from "react-native";
import { StatusBar } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalOff, setmodalOn] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const startAddGoalHandler = () => {
    setmodalOn(true);
  };

  const endAddGoalHandler = () => {
    setmodalOn(false);
  };

  const addGoalHandler = (enteredGoalTxt) => {
    //console.log(enteredGoalTxt);
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalTxt, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  };

  const delGoalHandler = (id) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <>
      <StatusBar style='auto' />
      <View style={styles.appContainer}>
        <Text style={{marginBottom: 15, color:"#FEFEFE", fontSize: 25}}> List of my Goals: </Text>
        <Button
          title="Add new Goal"
          color="#7938CE"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={modalOff}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  onDeleteItem={delGoalHandler}
                  id={itemData.item.id}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    marginTop: 25,
    marginBottom: 8

  },
});

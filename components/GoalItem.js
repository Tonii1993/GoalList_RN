import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#06023D" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.goalTxt}> {props.text} </Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalTxt: {
    color: "white",
    padding: 8,
  },
});

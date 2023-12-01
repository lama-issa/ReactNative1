import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Modal } from "react-native";

const Goalinput = (props) => {
  const [goal, setgoal] = useState(""); //goal is a state variable representing the text entered in the TextInput

  const goalHandler = (enteredText) => {
    setgoal(enteredText);
  };


  const AddgoalHandler = () => {
    props.onaddG(goal);
    setgoal("");  //to set the input empty when you back to Goalinput page
  };

  console.log(goal);

  return (
    <Modal visible={props.visb} animationType="slide">
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <TextInput
          placeholder="Enter Name"
          onChangeText={goalHandler}
          value={goal}
          style={styles.test}
        />
        <View style={styles.buttonContainr}>
          <View style={styles.button}>
            <Button title="Cancle" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={AddgoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  ); //Button call onaddG then forward to App.js
};
const styles = StyleSheet.create({
  test: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
    marginBottom: 10,
  },
  buttonContainr: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});

export default Goalinput;

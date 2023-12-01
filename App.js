import { useState, useEffect } from "react";
import { View, FlatList, Button, TextInput } from "react-native";
import Goalitem from "./components/Goalitem";
import Goalinput from "./components/Goalinput";

export default function App() {
  const [course, setcourse] = useState([]);
  const [isAddMode, setisAddMode] = useState(false);


  // useEffect(() => {
  //   if (course.length <= 0) {
  //     setcourse((currentGoals) => [
  //       { id: Math.random().toString(), value: 'goaltitle' },
  //     ]);
  //   }
  // }, [course]); // Run the effect whenever the 'name' state changes
  console.log(course);
  
  const addHandler = (goaltitle) => {
    setcourse((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goaltitle },
    ]);
    setisAddMode(false); 

    //course صار عنده ...key & value ...(array of objects)
    //id هو key
    //const addHandler = () => { setcourse((currentGoals) => [...currentGoals, { id: Math.random().toString(), value: goal }]); };: Defines a function addHandler which is an event handler that adds the current goal to the course array. It uses the spread operator (...) to create a new array with the existing goals (currentGoals) and the new goal, which is an object with an id and a value.
  };

  const removeGoalHandler = (goalId) => {
    console.log(goalId);
    setcourse((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };
//uses the filter array method to create a new array that includes only the goals whose id does not match the provided goalId.
//currentGoals is the current state array, and goal is an individual item in that array during the filtering process. The purpose of the code is to create a new array that excludes the goal with the specified goalId.
//goal is an individual element within the array of goals. It represents each item in the currentGoals array during the filtering process.

  const cancelgoal = () => {
    setisAddMode(false);
  };

  return (
    <View style={{ padding: 30 }}>
      <Button title="ADD NEW" onPress={() => setisAddMode(true)} />
      <Goalinput onaddG={addHandler} visb={isAddMode} onCancel={cancelgoal} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={course}
        renderItem={(itemData) => (
          <Goalitem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
  //item : key & value عبارة عن اوبجكت فيها
  //renderItem: called for every items in your (data-->course) to render a list of items
}

import { DataTable, Text } from "react-native-paper";
import { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Button, TextInput, List } from "react-native-paper";
import SelectListDays from "../SelectListDays";
import { storeDataDemarr } from "../../async-storage/helpers";
import { boxStyles, uiStyles } from "../../css/styles";

const ChoresSettings = ({ data, setReload } = props) => {
  const [selectedDemarr, setSelectedDemarr] = useState("");
  const [choreTextDemarr, setChoreTextDemarr] = useState("");

  const choreArrayMap = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  };

  function deleteItemChore(indexChore, indexDay) {
    data.chores[indexChore].list.splice(indexDay, 1);
    console.log(data.chores);
    storeDataDemarr(data);
    setReload((prev) => !prev);
  }

  function addItemChore(day) {
    data.chores
      .find((item) => day === item.name)
      .list.push({ task: choreTextDemarr, checked: false });
    console.log(data.chores);
    storeDataDemarr(data);
    setReload((prev) => !prev);
  }
  return (
    <View>
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            ...boxStyles.standardBox,
          }}
        >
          <TextInput
            backgroundColor={uiStyles.colorPrimary}
            label="Input Chore Name"
            value={choreTextDemarr}
            onChangeText={(text) => setChoreTextDemarr(text)}
          />
          <SelectListDays setSelectedDemarr={setSelectedDemarr} />
          <Button
            style={{ width: 150, margin: 5 }}
            mode="contained"
            onPress={() => addItemChore(selectedDemarr)}
          >
            Add Chore
          </Button>
        </View>
      </View>
      {data.chores.map((item, index) => {
        return (
          <View key={index + 7}>
            <Text variant="">{choreArrayMap[index]}</Text>
            {data.chores[index].list.map((dayItem, indexDay) => {
              console.log(dayItem.task);
              return (
                <TouchableOpacity
                  key={Math.random()}
                  onLongPress={() => deleteItemChore(index, indexDay)}
                >
                  <List.Item
                    key={index + 100}
                    title={dayItem.task}
                    left={(props) => (
                      <List.Icon {...props} icon="arrow-right" />
                    )}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        );
      })}
    </View>
  );
};
export default ChoresSettings;

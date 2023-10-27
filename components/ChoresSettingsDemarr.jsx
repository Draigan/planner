import { Text } from "react-native-paper";
import { View, TouchableOpacity } from "react-native";
import { Button, TextInput, List } from "react-native-paper";
import SelectListDays from "./SelectListDays";

const ChoresSettingsDemarr = ({
  dataDemarr,
  choreTextDemarr,
  setSelectedDemarr,
  setChoreTextDemarr,
  setReload,
  storeDataDemarr,
} = props) => {
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
    dataDemarr.chores[indexChore].list.splice(indexDay, 1);
    console.log(dataDemarr.chores);
    storeDataDemarr(dataDemarr);
    setReload((prev) => !prev);
  }

  return (
    <View>
      <Text variant="displaySmall">Chores</Text>
      <TextInput
        label="Input Chore"
        value={choreTextDemarr}
        onChangeText={(text) => setChoreTextDemarr(text)}
      />
      <Text variant="headlineSmall">Choose Day</Text>
      <SelectListDays setSelectedDemarr={setSelectedDemarr} />
      <Button
        style={{ width: 150, margin: 5 }}
        mode="contained"
        onPress={() => handleAddNewTask("demarr")}
      >
        Add Chore
      </Button>
      <Text variant="headlineSmall">Current Chores</Text>
      {dataDemarr.chores.map((item, index) => {
        return (
          <View key={index + 7}>
            <Text variant="headlineSmall">{choreArrayMap[index]}</Text>
            {dataDemarr.chores[index].list.map((dayItem, indexDay) => {
              console.log(dayItem);
              return (
                <TouchableOpacity
                  key={Math.random()}
                  onLongPress={() => deleteItemChore(index, indexDay)}
                >
                  <List.Item
                    key={index + 100}
                    title={dayItem.task}
                    left={(props) => <List.Icon {...props} icon="heart" />}
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
export default ChoresSettingsDemarr;

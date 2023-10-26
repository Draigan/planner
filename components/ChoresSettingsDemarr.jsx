import { Text } from "react-native-paper";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Button, List } from "react-native-paper";
import SelectListDays from "./SelectListDays";

const ChoresSettingsDemarr = ({
  dataDemarr,
  textDemarr,
  setSelectedDemarr,
  setTextDemarr,
  setReload,
  storeDataDemarr,
} = props) => {
  function deleteItemChore(indexChore, indexDay) {
    // dataDemarr.chores[indexChore].splice(indexDay, 1);
    // console.log(dataDemarr.chores);
    // storeDataDemarr(dataDemarr);
    // setReload((prev) => !prev);
  }
  const choreArrayMap = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  };
  return (
    <View>
      <Text variant="displaySmall">Chores</Text>
      <TextInput
        label="Input Chore"
        value={textDemarr}
        onChangeText={(text) => setTextDemarr(text)}
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
              return (
                <TouchableOpacity
                  key={Math.random()}
                  onLongPress={() => deleteItemChore(index, indexDay)}
                >
                  <List.Item
                    key={index + 100}
                    title={dayItem}
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
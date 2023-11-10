import { DataTable } from "react-native-paper";
import { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Button, TextInput, List, Divider } from "react-native-paper";
import { boxStyles, uiStyles, demarrStyles } from "../../css/styles";

const MorningRoutineSettings = ({ data, storeData, setReload } = props) => {
  const [morningRoutineTextDemarr, setMorningRoutineTextDemarr] = useState("");

  function deleteItem(index) {
    data.morningRoutine.splice(index, 1);
    storeData(data);
    setReload((prev) => !prev);
  }

  function addItem() {
    data.morningRoutine.push({
      name: morningRoutineTextDemarr,
      checked: false,
    });
    storeData(data);
    setReload((prev) => !prev);
  }
  return (
    <View>
      <Divider />
      <DataTable>
        {data.morningRoutine.map((item, index) => {
          return (
            <View key={index}>
              <TouchableOpacity onLongPress={() => deleteItem(index)}>
                <DataTable.Row>
                  <DataTable.Cell>{item.name}</DataTable.Cell>
                </DataTable.Row>
              </TouchableOpacity>
              <Divider />
            </View>
          );
        })}
      </DataTable>
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            ...boxStyles.standardBox,
          }}
        >
          <TextInput
            backgroundColor={uiStyles.colorPrimary}
            label="Input morning routine item..."
            value={morningRoutineTextDemarr}
            onChangeText={(text) => setMorningRoutineTextDemarr(text)}
          />
          <Button
            style={{ width: 150, margin: 5 }}
            mode="contained"
            onPress={() => addItem()}
          >
            Add
          </Button>
        </View>
      </View>
    </View>
  );
};
export default MorningRoutineSettings;

import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Button, DataTable, List, Text, TextInput } from "react-native-paper";
import { uiStyles } from "../../css/styles";
import { storeDataDemarr } from "../../async-storage/helpers";
export default function TaskSettings({ data, setReload } = props) {
  const [textDemarr, setTextDemarr] = useState("");
  const [numberDemarr, setNumberDemarr] = useState(null);

  function deleteItem(index, name) {
    data.tasks.splice(index, 1);
    storeDataDemarr(data);
    setReload((prev) => !prev);
  }

  function handleAddNewTask() {
    data.tasks.push({
      name: textDemarr,
      points: numberDemarr,
      checked: false,
    });
    storeDataDemarr(data);
    setReload((prev) => !prev);
  }
  return (
    <>
      <DataTable>
        {data.tasks.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onLongPress={() => deleteItem(index, "demarr")}
            >
              <DataTable.Row>
                <DataTable.Cell>{item.name}</DataTable.Cell>
              </DataTable.Row>
            </TouchableOpacity>
          );
        })}
      </DataTable>
      <TextInput
        backgroundColor={uiStyles.colorPrimary}
        label="Task Name"
        value={textDemarr}
        onChangeText={(text) => setTextDemarr(text)}
      />
      <TextInput
        backgroundColor={uiStyles.colorPrimary}
        keyboardType="numeric"
        label="Points"
        value={numberDemarr}
        onChangeText={(number) => setNumberDemarr(number)}
      />
      <Button
        style={{ width: 150, margin: 5 }}
        mode="contained"
        onPress={() => handleAddNewTask()}
      >
        Add New Task
      </Button>
    </>
  );
}

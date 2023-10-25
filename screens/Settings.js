import { useEffect, useState } from "react";
import SelectListDays from "../components/SelectListDays";
import moment from "moment";
import { Text, TextInput, Button, List } from "react-native-paper";
import { ScrollView, TouchableOpacity, View } from "react-native";
import {
  getDataDemarr,
  storeDataDemarr,
  storeDataDraigan,
  getDataDraigan,
} from "../async-storage/helpers";
import ChoresSettingsDemarr from "../components/ChoresSettingsDemarr";

export default function Settings({ navigation }) {
  const [textDraigan, setTextDraigan] = useState("");
  const [textDemarr, setTextDemarr] = useState("");
  const [requiredPointsDemarr, setRequiredPointsDemarr] = useState(null);
  const [requiredPointsDraigan, setRequiredPointsDraigan] = useState(null);
  const [dataDraigan, setDataDraigan] = useState(null);
  const [dataDemarr, setDataDemarr] = useState(null);
  const [numberDemarr, setNumberDemarr] = useState(null);
  const [reload, setReload] = useState(false);
  const [demarrAccordianValue, setDemarrAccordianValue] = useState(false);
  const [draiganAccordianValue, setDraiganAccordianValue] = useState(false);
  const [selected, setSelected] = useState("");
  const [selectedDemarr, setSelectedDemarr] = useState("");

  // For Dates
  console.log(moment().format("dddd"));

  async function getDatas() {
    const draiganData = await getDataDraigan();
    setDataDraigan(draiganData);
    const demarrData = await getDataDemarr();
    setDataDemarr(demarrData);
  }
  // On Focus
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getDatas();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  //On Mount
  useEffect(() => {
    getDatas();
  }, []);

  useEffect(() => {
    setDataDemarr(null);
    setDataDraigan(null);
    getDatas();
  }, [reload]);

  function handleAddNewTask(name) {
    if (name === "demarr") {
      dataDemarr.tasks.push({
        name: textDemarr,
        points: numberDemarr,
        checked: false,
      });
      storeDataDemarr(dataDemarr);
    }
    setReload((prev) => !prev);
  }

  function setRequiredPoints(name) {
    if (name === "draigan") {
      dataDraigan.requiredPoints = Number(requiredPointsDraigan);
      storeDataDraigan(dataDraigan);
    } else if (name === "demarr") {
      dataDemarr.requiredPoints = Number(requiredPointsDemarr);

      storeDataDemarr(dataDemarr);
    }
  }

  function deleteItem(index, name) {
    if (name === "demarr") {
      dataDemarr.tasks.splice(index, 1);
      storeDataDemarr(dataDemarr);
    } else if (name === "draigan") {
      storeDataDraigan(dataDemarr);
      data.Draigan.tasks.splice(index, 1);
    }
    setReload((prev) => !prev);
  }

  return (
    dataDraigan &&
    dataDemarr && (
      <ScrollView>
        <List.Section>
          <List.Accordion
            onPress={() => {
              setDemarrAccordianValue(!demarrAccordianValue);
            }}
            expanded={demarrAccordianValue}
            title="Demarr"
            id="1"
          >
            <Text variant="displaySmall">Tasks</Text>
            <TextInput
              label="Task Name"
              value={textDemarr}
              onChangeText={(text) => setTextDemarr(text)}
            />
            <TextInput
              keyboardType="numeric"
              label="Points"
              value={numberDemarr}
              onChangeText={(number) => setNumberDemarr(number)}
            />
            <Button
              style={{ width: 150, margin: 5 }}
              mode="contained"
              onPress={() => handleAddNewTask("demarr")}
            >
              Add New Task
            </Button>
            <Text variant="headlineSmall">Current Tasks</Text>
            {dataDemarr.tasks.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onLongPress={() => deleteItem(index, "demarr")}
                >
                  <List.Item
                    title={item.name}
                    description={item.points}
                    left={(props) => <List.Icon {...props} icon="heart" />}
                  />
                </TouchableOpacity>
              );
            })}
            <ChoresSettingsDemarr
              textDemarr={textDemarr}
              dataDemarr={dataDemarr}
              setSelectedDemarr={setSelectedDemarr}
              storeDataDemarr={storeDataDemarr}
              setReload={setReload}
            />
            <Text variant="displaySmall">Jackpot Settings</Text>
            <TextInput
              keyboardType="numeric"
              label="Required Points For Jackpot"
              value={requiredPointsDemarr}
              onChangeText={(text) => setRequiredPointsDemarr(text)}
            />
            <Button
              style={{ width: 150, margin: 5 }}
              mode="contained"
              onPress={() => setRequiredPoints("demarr")}
            >
              Set
            </Button>
          </List.Accordion>
          <List.Accordion
            expanded={draiganAccordianValue}
            title="Draigan"
            id="2"
          >
            <Text> Draigan </Text>
          </List.Accordion>
        </List.Section>
      </ScrollView>
    )
  );
}

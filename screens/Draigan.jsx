import { Text, ScrollView, View } from "react-native";
import { useEffect, useState } from "react";
import { getDataDraigan, storeDataDraigan } from "../async-storage/helpers.js";
import { Checkbox, Button, DataTable } from "react-native-paper";
import moment from "moment";
import { demarrStyles } from "../css/styles.jsx";

export default function Draigan({ navigation }) {
  const storeData = storeDataDraigan;
  const [data, setData] = useState(null);
  const [checked, setChecked] = useState(false);
  const [points, setPoints] = useState(0);
  const [reload, setReload] = useState(false);
  const [requiredPoints, setRequiredPoints] = useState(0);
  const [chorePoints, setChorePoints] = useState(0);
  const [choresRequired, setChoresRequired] = useState(null);
  const [morningRoutinePoints, setMorningRoutinePoints] = useState(0);
  const [morningRoutinePointsRequired, setMorningRoutinePointsRequired] =
    useState();
  const [currentDay, setCurrentDay] = useState("");
  const [newDay, setNewDay] = useState(false);

  const day = moment().format("dddd");
  // const day = "Thursday";

  //Retrieve from sql-lite
  async function getData() {
    const data = await getDataDraigan();
    console.log(data)
    setData(data);
    pointChecker(data);
    chorePointChecker(data);
    morningRoutinePointsChecker(data);
    setRequiredPoints(data.requiredPoints);
    setMorningRoutinePointsRequired(data.morningRoutine.length);
    setChoresRequired(
      data.chores.find((item) => day === item.name).list.length,
    );
    setReload((prev) => !reload);
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getData();
      // checkForNewDay();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation, reload]);

  // On Mount
  useEffect(() => {
    getData();
    // checkForNewDay();
  }, []);

  function checkForNewDay() {
    if (day != currentDay) {
      setCurrentDay(day);
      resetChecked();
      console.log("new day");
    }
  }
  function resetChecked() {
    data.tasks.forEach((item) => {
      item.checked = false;
    });
    data.chores.forEach((item) => {
      item.list.forEach((listItem) => (listItem.checked = false));
      console.log(item);
    });
    setChorePoints(0);
    storeData(data);
    setReload((prev) => !prev);
  }

  function isJackpotReady() {
    if (chorePoints < choresRequired) return;
    if (morningRoutinePoints < morningRoutinePointsRequired) return;
    if (points < requiredPoints) return;
    resetChecked();
    setPoints(0);
    navigation.navigate("Jackpot");
  }

  function morningRoutinePointsChecker(data) {
    let points = 0;
    data.morningRoutine.forEach((item) => {
      if (item.checked) {
        points += 1;
      }
    });
    setMorningRoutinePoints(points);
  }

  function chorePointChecker(data) {
    let points = 0;
    data.chores
      .find((item) => day === item.name)
      .list.forEach((item) => {
        if (item.checked) {
          points += 1;
        }
      });
    setChorePoints(points);
  }

  function pointChecker(data) {
    let points = 0;
    data.tasks.forEach((item) => {
      if (item.checked) {
        points += item.points;
      }
    });
    setPoints(points);
  }

  return (
    data && (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <DataTable>
            <DataTable.Header style={demarrStyles.colorPrimary}>
              <DataTable.Title sortDirection="descending">
                Morning Routine
              </DataTable.Title>
              <DataTable.Title></DataTable.Title>
              <DataTable.Title>
                {morningRoutinePoints} of {morningRoutinePointsRequired}
              </DataTable.Title>
            </DataTable.Header>

            {data.morningRoutine.map((item, index) => (
              <DataTable.Row key={index}>
                <DataTable.Cell>{item.name}</DataTable.Cell>
                <DataTable.Cell></DataTable.Cell>
                <DataTable.Cell>
                  <Checkbox
                    status={item.checked ? "checked" : "unchecked"}
                    onPress={() => {
                      item.checked = !item.checked;
                      morningRoutinePointsChecker(data);
                      storeData(data);
                      console.log(item.checked);
                    }}
                  />
                </DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable>
          <DataTable>
            <DataTable.Header style={demarrStyles.colorPrimary}>
              <DataTable.Title sortDirection="descending">
                Daily Tasks
              </DataTable.Title>
              <DataTable.Title>Points</DataTable.Title>
              <DataTable.Title>
                {points} of {data.requiredPoints}
              </DataTable.Title>
            </DataTable.Header>
            {data.tasks.map((item, index) => (
              <DataTable.Row key={index}>
                <DataTable.Cell>{item.name}</DataTable.Cell>
                <DataTable.Cell>{item.points}</DataTable.Cell>
                <DataTable.Cell>
                  <Checkbox
                    status={item.checked ? "checked" : "unchecked"}
                    onPress={() => {
                      item.checked = !item.checked;
                      pointChecker(data);
                      storeData(data);
                    }}
                  />
                </DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable>
          <DataTable>
            <DataTable.Header style={demarrStyles.colorPrimary}>
              <DataTable.Title sortDirection="descending">
                Chores for {day}
              </DataTable.Title>
              <DataTable.Title></DataTable.Title>
              <DataTable.Title>
                {chorePoints} of {choresRequired}
              </DataTable.Title>
            </DataTable.Header>

            {data.chores
              .find((item) => day === item.name)
              .list.map((item, index) => (
                <DataTable.Row key={index}>
                  <DataTable.Cell>{item.task}</DataTable.Cell>
                  <DataTable.Cell></DataTable.Cell>
                  <DataTable.Cell>
                    <Checkbox
                      status={item.checked ? "checked" : "unchecked"}
                      onPress={() => {
                        item.checked = !item.checked;
                        chorePointChecker(data);
                        storeData(data);
                        console.log(item.checked);
                      }}
                    />
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
          </DataTable>
        </ScrollView>
        <View
          style={{
            backgroundColor: "#cccccc",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Button
            style={{
              backgroundColor:
                points >= requiredPoints &&
                  chorePoints >= choresRequired &&
                  morningRoutinePoints >= morningRoutinePointsRequired
                  ? "red"
                  : "black",
              width: 150,
              margin: 5,
            }}
            mode="contained"
            onPress={() => {
              isJackpotReady();
            }}
          >
            JACKPOT!
          </Button>
          <Button
            style={{ width: 150, margin: 5 }}
            mode="contained"
            onPress={() => {
              resetChecked();
              setPoints(0);
            }}
          >
            Reset
          </Button>
        </View>
      </View>
    )
  );
}

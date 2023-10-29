import { Text, ScrollView, View } from "react-native";
import { useEffect, useState } from "react";
import { getDataDemarr, storeDataDemarr } from "../async-storage/helpers.js";
import { Checkbox, Button, DataTable } from "react-native-paper";
import Jackpot from "./Jackpot.jsx";
import moment from "moment";

export default function Demarr({ navigation }) {
  const [data, setData] = useState(null);
  const [checked, setChecked] = useState(false);
  const [points, setPoints] = useState(0);
  const [reload, setReload] = useState(false);
  const [requiredPoints, setRequiredPoints] = useState();
  const [chorePoints, setChorePoints] = useState(0);
  const [choresRequired, setChoresRequired] = useState(null);
  const [currentDay, setCurrentDay] = useState("");
  const [newDay, setNewDay] = useState(false);

  const day = moment().format("dddd");
  // const day = "Thursday";

  //Retrieve from sql-lite
  async function getData() {
    const data = await getDataDemarr();
    setData(data);
    pointChecker(data);
    chorePointChecker(data);
    setRequiredPoints(data.requiredPoints);
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
    storeDataDemarr(data);
    setReload((prev) => !prev);
  }

  function isJackpotReady() {
    if (chorePoints < choresRequired) return;
    if (points < requiredPoints) return;
    resetChecked();
    setPoints(0);
    navigation.navigate("Jackpot");
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
            <DataTable.Header>
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
                      item.checked
                        ? setPoints((prevPoints) => prevPoints + item.points)
                        : setPoints((prevPoints) => prevPoints - item.points);
                      pointChecker(data);
                      storeDataDemarr(data);
                    }}
                  />
                </DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable>
          <DataTable>
            <DataTable.Header>
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
                        // item.checked
                        //   ? setChorePoints((prevPoints) => prevPoints + 1)
                        //   : setChorePoints((prevPoints) => prevPoints - 1);
                        chorePointChecker(data);
                        storeDataDemarr(data);
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
                points >= requiredPoints && chorePoints >= choresRequired
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

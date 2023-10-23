import { Text, ScrollView, View } from "react-native";
import { useEffect, useState } from "react";
import { getDataDemarr, storeDataDemarr } from "../async-storage/helpers.js";
import { Checkbox, Button, DataTable } from "react-native-paper";
import Jackpot from "./Jackpot.jsx";

export default function Demarr({ navigation }) {
  const [data, setData] = useState(null);
  const [checked, setChecked] = useState(false);
  const [points, setPoints] = useState(0);
  const [reload, setReload] = useState(false);
  const [requiredPoints, setRequiredPoints] = useState();

  //Retrieve from sql-lite
  async function getData() {
    const data = await getDataDemarr();
    setData(data);
    pointChecker(data);
    setRequiredPoints(data.requiredPoints);
  }

  // On Focus
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getData();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation, reload]);

  // On Mount
  useEffect(() => {
    getData();
  }, []);

  function resetChecked() {
    data.tasks.forEach((item) => {
      item.checked = false;
      console.log(item.checked);
    });
    console.log(data);
    storeDataDemarr(data);
    setReload((prev) => !prev);
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
                Activity
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
              backgroundColor: points >= requiredPoints ? "red" : "#654EA3",
              width: 150,
              margin: 5,
            }}
            mode="contained"
            onPress={() => {
              resetChecked();
              setPoints(0);
              navigation.navigate("Jackpot");
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

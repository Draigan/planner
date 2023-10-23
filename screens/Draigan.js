import { Text, ScrollView, View } from "react-native";
import { useState } from "react";
import { getDataDraigan, storeDataDraigan } from "../async-storage/helpers.js";
import { Checkbox, DataTable } from "react-native-paper";

export default function Draigan() {
  const [data, setData] = useState(null);
  const [checked, setChecked] = useState(false);
  const [points, setPoints] = useState(0);

  // Retrieve Data
  getDataDraigan().then((data) => setData(data));

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
              <DataTable.Title></DataTable.Title>
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
                      storeDataDraigan(data);
                    }}
                  />
                </DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable>
        </ScrollView>
      </View>
    )
  );
}

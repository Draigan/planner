import { DataTable, Text } from "react-native-paper";
import { getDataMoney, storeDataMoney } from "../../async-storage/helpers"
import { useState, useEffect } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import moment from "moment";
import SelectListMonths from "../SelectListMonths";

const MoneyDataTable = () => {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [numberOfItemsPerPageList] = useState([10, 5, 2]);
  const [itemsPerPage, onItemsPerPageChange] = useState(
    numberOfItemsPerPageList[0]
  );
  const [balance, setBalance] = useState();
  const [spent, setSpent] = useState(20);
  const [recieved, setRecieved] = useState(100)
  const [month, setMonth] = useState(moment().format("MMMM"))
  let from;
  let to;
  let monthData;


  const [data, setData] = useState(null);

  async function getData() {
    let data = await getDataMoney();
    setData(data);
    setLoading(false);
    return;
  }

  if (!loading) {
    monthData = data.transactions.filter((item) => item.month === month)
    console.log(monthData)
    from = page * itemsPerPage;
    to = Math.min((page + 1) * itemsPerPage, data.transactions.length);

  }

  //Mount
  useEffect(() => {
    getData();
  }, [])


  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  if (!loading) {
    return (
      <View style={{ justifyContent: "space-between", height: "100%" }}>
        {/*header*/}
        <View style={{ backgroundColor: "green", flexDirection: "row", justifyContent: "space-evenly" }}>
          <Text variant="titleSmall" style={{ color: "white" }}>Current Month: {month} </Text>
        </View>
        <View>
          <SelectListMonths month={month} setMonth={setMonth} />
        </View>
        <DataTable style={{ flex: 1 }}>
          <DataTable.Header>
            <DataTable.Title>Credit</DataTable.Title>
            <DataTable.Title >Debit</DataTable.Title>
            <DataTable.Title >Description</DataTable.Title>
          </DataTable.Header>

          {monthData.slice(from, to).map((item) => (
            <DataTable.Row key={item.key}>
              <DataTable.Cell>{item.type}</DataTable.Cell>
              <DataTable.Cell >{item.value}</DataTable.Cell>
              <DataTable.Cell >{item.description}</DataTable.Cell>
            </DataTable.Row>
          ))}

          <DataTable.Pagination
            page={page}
            numberOfPages={Math.ceil(data.transactions.length / itemsPerPage)}
            onPageChange={(page) => setPage(page)}
            label={`${from + 1}-${to} of ${data.transactions.length}`}
            numberOfItemsPerPageList={numberOfItemsPerPageList}
            numberOfItemsPerPage={itemsPerPage}
            onItemsPerPageChange={onItemsPerPageChange}
            showFastPaginationControls
            selectPageDropdownLabel={'Rows per page'}
          />
        </DataTable>

        {/*footer*/}
        <View style={{ backgroundColor: "green", flexDirection: "row", justifyContent: "space-evenly" }}>
          <Text variant="titleSmall" style={{ color: "white" }}>Current Balance: {data.balance}</Text>
          <Text variant="titleSmall" style={{ color: "white" }}>Recieved: {recieved}</Text>
          <Text variant="titleSmall" style={{ color: "white" }}>Spent: {spent}</Text>
        </View>
      </View>
    );
  }
};


export default MoneyDataTable

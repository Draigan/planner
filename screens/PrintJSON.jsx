import { Button, Text } from "react-native-paper"
import { getDataDemarr, getDataDraigan, getDataMoney } from "../async-storage/helpers"
import { useEffect, useState } from "react"
const PrintJSON = () => {

  const [loading, setLoading] = useState(true)
  const [dataDemarr, setDataDemarr] = useState(null)
  const [dataDraigan, setDataDraigan] = useState(null)
  const [dataMoney, setDataMoney] = useState(null)
  const [reload, setReload] = useState(false)

  async function getData() {
    setLoading(true);
    const demarrData = await getDataDemarr();
    setDataDemarr(demarrData)
    const draiganData = await getDataDraigan();
    setDataDraigan(draiganData);
    const moneyData = await getDataMoney();
    setDataMoney(moneyData);
    setLoading(false);
  }
  useEffect(() => {
    getData();

  }, [])
  useEffect(() => {
    getData();

  }, [reload])
  if (!loading) {
    return (
      <>
        <Button onPress={() => setReload(prev => !prev)}>
          Refresh</Button>
        <Text selectable> {JSON.stringify(dataDemarr)}
          {JSON.stringify(dataDraigan)}
          {JSON.stringify(dataMoney)}
        </Text>
      </>

    )
  }
}

export default PrintJSON

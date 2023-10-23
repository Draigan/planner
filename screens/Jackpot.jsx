import { Text } from "react-native-paper";
import { View } from "react-native";
import { useEffect, useState } from "react";

const Jackpot = () => {
  const [centerNumber, setCenterNumber] = useState(0);
  const [credit, setCredit]= useState(0)
  function changeCenterNumber() {
    if (credit === 0) return;
    setCenterNumber(0)
    setCredit(0)
    for (let i = Math.floor(Math.random() * 1000) + 1; i > 0; i--) {
      setTimeout(() => setCenterNumber((prev) => prev + 1), i * 10);
    }
console.log( Math.floor(Math.random() * 1000))
  }
  useEffect(() => {
   setCredit(1);
  }, [])
  return (
    <View
      style={{ height: "100%", justifyContent: "center", alignItems: "center" }}
    >
      <View
        style={{
          width: 150,
          height: 150,
          backgroundColor: "blue",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text onPress={changeCenterNumber} variant="displayLarge">
          {centerNumber}
        </Text>
      </View>
      <Text>JACKPOT = 950+ </Text>
      <Text>WIN = 700+ </Text>
    </View>
  );
};

export default Jackpot;

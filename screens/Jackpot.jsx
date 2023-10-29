import { Text } from "react-native-paper";
import { Image, View } from "react-native";
import { useEffect, useState } from "react";
import { Winner } from "../components/Winner";
import { TouchableOpacity } from "react-native-gesture-handler";

const Jackpot = () => {
  const [centerNumber, setCenterNumber] = useState(0);
  const [credit, setCredit] = useState(0);
  const [centerNumberTimer, setCenterNumberTimer] = useState();
  const [finalNumber, setFinalNumber] = useState(undefined);
  const [finalNumberTimer, setFinalNumberTimer] = useState();

  function changeCenterNumber() {
    if (credit === 0) return;
    setFinalNumber(undefined);
    setCenterNumber(0);
    setCredit((prev) => prev - 1);
    let firstRound = true;
    for (let i = Math.floor(Math.random() * 1000) + 1; i > 0; i--) {
      // This gives us the jackpot number only once
      if (firstRound) {
        setFinalNumberTimer(() =>
          setTimeout(() => {
            setFinalNumber(i);
            console.log("finalNumber");
            console.log(finalNumber);
          }, i * 10),
        );
        firstRound = false;
      }
      // This gives us the jackpot number in little chunks for the animation
      setCenterNumberTimer(() => {
        return setTimeout(() => setCenterNumber((prev) => prev + 1), i * 10);
      });
    }
    console.log(Math.floor(Math.random() * 1000));
  }

  // On mount
  useEffect(() => {
    setCredit(11);
    return () => {
      clearTimeout(centerNumberTimer);
      clearTimeout(finalNumberTimer);
    };
  }, []);

  return (
    <View
      style={{
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <Winner finalNumber={finalNumber} />
      <TouchableOpacity
        onPress={() => {
          changeCenterNumber();
        }}
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
          <Text variant="displayLarge">{centerNumber}</Text>
        </View>
      </TouchableOpacity>
      <Text style={{ color: "white" }}>JACKPOT = 950+ </Text>
      <Text style={{ color: "white" }}>WIN = 700+ </Text>
      <Text style={{ color: "white" }}>{credit}</Text>
    </View>
  );
};

export default Jackpot;

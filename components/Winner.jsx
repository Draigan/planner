import { useState, useEffect } from "react";
import { Text } from "react-native-paper";
import { Image } from "react-native";

export function Winner({ finalNumber } = props) {
  const [showWinner, setShowWinner] = useState(false);
  useEffect(() => {
    const flashInterval = setInterval(() => {
      setShowWinner((prev) => !prev);
    }, 200);
    return () => clearInterval(flashInterval);
  }, []);
  if (finalNumber >= 800) {
    return (
      <>
        <Text
          style={{ color: "green", opacity: showWinner ? 1 : 0 }}
          variant="displayLarge"
        >
          JACKPOT!! {finalNumber}
        </Text>
        <Image source={require("../assets/fireworks1.gif")} />
      </>
    );
  } else if (finalNumber >= 600 && finalNumber < 800) {
    return (
      <>
        <Text
          style={{ color: "green", opacity: showWinner ? 1 : 0 }}
          variant="displayLarge"
        >
          WINNER!!!!!
        </Text>
        <Image source={require("../assets/fireworks1.gif")} />
      </>
    );
  } else if (finalNumber < 600) {
    return (
      <>
        <Text
          style={{ color: "red", opacity: showWinner ? 1 : 0 }}
          variant="displayLarge"
        >
          SORRY PLAY AGAIN
        </Text>
        <Image source={require("../assets/200w.gif")} />
      </>
    );
  }
}

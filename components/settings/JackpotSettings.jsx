import { useState } from "react";
import { Button, Text, TextInput } from "react-native-paper";

export default function JackpotSettings({
  data,
  setReload,
  storeData
} = props) {
  const [requiredPointsDemarr, setRequiredPointsDemarr] = useState("");
  function setRequiredPoints() {
    data.requiredPoints = Number(requiredPointsDemarr);

    storeData(data);
    setReload((prev) => !prev);
  }
  return (
    <>
      <TextInput
        keyboardType="numeric"
        label={`Required Points ${data.requiredPoints.toString()}`}
        value={requiredPointsDemarr}
        onChangeText={(text) => setRequiredPointsDemarr(text)}
      />
      <Button
        style={{ width: 150, margin: 5 }}
        mode="contained"
        onPress={() => setRequiredPoints()}
      >
        Set
      </Button>
    </>
  );
}

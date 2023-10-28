import { useState } from "react";
import { Button, Text, TextInput } from "react-native-paper";
import { storeDataDemarr } from "../async-storage/helpers";

export default function JackpotSettingsDemarr({
  dataDemarr,
  setReload,
} = props) {
  const [requiredPointsDemarr, setRequiredPointsDemarr] = useState("");
  function setRequiredPoints() {
    dataDemarr.requiredPoints = Number(requiredPointsDemarr);

    storeDataDemarr(dataDemarr);
    setReload((prev) => !prev);
  }
  return (
    <>
      <TextInput
        keyboardType="numeric"
        label={`Required Points ${dataDemarr.requiredPoints.toString()}`}
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

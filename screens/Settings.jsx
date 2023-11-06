import { Text, TextInput, Button, List } from "react-native-paper";
import { ScrollView, TouchableOpacity, View } from "react-native";
import {
  getDataDemarr,
  storeDataDemarr,
  storeDataDraigan,
  getDataDraigan,
} from "../async-storage/helpers";
import { draiganStyles } from "../css/styles";
import { useState, useEffect } from "react";
import DemarrSettings from "../components/demarr/DemarrSettings";

export default function Settings({ navigation }) {
  // Demarr States
  const [demarrAccordianValue, setDemarrAccordianValue] = useState(false);
  const [demarrTaskAccordian, setDemarrTaskAccordian] = useState(false);
  const [demarrMorningRoutineAccordian, setDemarrMorningRoutineAccordian] =
    useState(false);
  const [demarrChoreAccordian, setDemarrChoreAccordian] = useState(false);
  const [demarrJackpotAccordian, setDemarrJackpotAccordian] = useState(false);

  const [textDraigan, setTextDraigan] = useState("");
  const [requiredPointsDraigan, setRequiredPointsDraigan] = useState(null);
  const [draiganAccordianValue, setDraiganAccordianValue] = useState(false);

  const [reload, setReload] = useState(false);
  const [dataDemarr, setDataDemarr] = useState(null);
  const [dataDraigan, setDataDraigan] = useState(null);

  async function getDatas() {
    const draiganData = await getDataDraigan();
    setDataDraigan(draiganData);
    const demarrData = await getDataDemarr();
    setDataDemarr(demarrData);
  }
  // On Focus
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getDatas();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  //On Mount
  useEffect(() => {
    getDatas();
  }, []);

  useEffect(() => {
    setDataDemarr(null);
    setDataDraigan(null);
    getDatas();
  }, [reload]);

  return (
    dataDraigan &&
    dataDemarr && (
      <ScrollView>
        <List.Section>
          <DemarrSettings
            setDemarrAccordianValue={setDemarrAccordianValue}
            demarrAccordianValue={demarrAccordianValue}
            demarrTaskAccordian={demarrTaskAccordian}
            setDemarrTaskAccordian={setDemarrTaskAccordian}
            setDemarrJackpotAccordian={setDemarrJackpotAccordian}
            demarrJackpotAccordian={demarrJackpotAccordian}
            setDemarrChoreAccordian={setDemarrChoreAccordian}
            demarrChoreAccordian={demarrChoreAccordian}
            demarrMorningRoutineAccordian={demarrMorningRoutineAccordian}
            setDemarrMorningRoutineAccordian={setDemarrMorningRoutineAccordian}
            dataDemarr={dataDemarr}
            setReload={setReload}
          />
          <List.Accordion
            style={draiganStyles.colorPrimary}
            expanded={draiganAccordianValue}
            title="Draigan"
            id="2"
          ></List.Accordion>
        </List.Section>
      </ScrollView>
    )
  );
}

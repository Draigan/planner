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
import MainSettings from "../components/draigan/MainSettings";
import DemarrSettings from "../components/demarr/DemarrSettings.jsx"

export default function Settings({ navigation }) {
  // Demarr States
  const [dataDemarr, setDataDemarr] = useState(null);
  const [demarrAccordianValue, setDemarrAccordianValue] = useState(false);
  const [demarrTaskAccordian, setDemarrTaskAccordian] = useState(false);
  const [demarrMorningRoutineAccordian, setDemarrMorningRoutineAccordian] =
    useState(false);
  const [demarrChoreAccordian, setDemarrChoreAccordian] = useState(false);
  const [demarrJackpotAccordian, setDemarrJackpotAccordian] = useState(false);

  //Draigan States
  const [dataDraigan, setDataDraigan] = useState(null);
  const [draiganAccordianValue, setDraiganAccordianValue] = useState(false);
  const [draiganTaskAccordian, setDraiganTaskAccordian] = useState(false);
  const [draiganMorningRoutineAccordian, setDraiganMorningRoutineAccordian] =
    useState(false);
  const [draiganChoreAccordian, setDraiganChoreAccordian] = useState(false);
  const [draiganJackpotAccordian, setDraiganJackpotAccordian] = useState(false);

  const [requiredPointsDraigan, setRequiredPointsDraigan] = useState(null);

  const [reload, setReload] = useState(false);

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
        {/* Demarr */}
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
        {/* Draigan */}
          <MainSettings
            setAccordianValue={setDraiganAccordianValue}
            accordianValue={draiganAccordianValue}
           taskAccordian={draiganTaskAccordian}
            setTaskAccordian={setDraiganTaskAccordian}
            setJackpotAccordian={setDraiganJackpotAccordian}
            jackpotAccordian={draiganJackpotAccordian}
            setChoreAccordian={setDraiganChoreAccordian}
            choreAccordian={draiganChoreAccordian}
            morningRoutineAccordian={draiganMorningRoutineAccordian}
            setMorningRoutineAccordian={setDraiganMorningRoutineAccordian}
            data={dataDraigan}
            setReload={setReload}
          />

      </ScrollView>
    )
  );
}

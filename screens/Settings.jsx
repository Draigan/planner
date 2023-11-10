import { ScrollView } from "react-native";
import {
  getDataDemarr,
  storeDataDemarr,
  storeDataDraigan,
  getDataDraigan,
} from "../async-storage/helpers";
import { useState, useEffect } from "react";
import MainSettings from "../components/settings/MainSettings.jsx";
import { demarrStyles, draiganStyles } from "../css/styles";

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
        <MainSettings
          setAccordianValue={setDemarrAccordianValue}
          accordianValue={demarrAccordianValue}
          taskAccordian={demarrTaskAccordian}
          setTaskAccordian={setDemarrTaskAccordian}
          setJackpotAccordian={setDemarrJackpotAccordian}
          jackpotAccordian={demarrJackpotAccordian}
          setChoreAccordian={setDemarrChoreAccordian}
          choreAccordian={demarrChoreAccordian}
          morningRoutineAccordian={demarrMorningRoutineAccordian}
          setMorningRoutineAccordian={setDemarrMorningRoutineAccordian}
          data={dataDemarr}
          storeData={storeDataDemarr}
          setReload={setReload}
          userStyle={demarrStyles}
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
          storeData={storeDataDraigan}
          setReload={setReload}
          userStyle={draiganStyles}
        />

      </ScrollView>
    )
  );
}

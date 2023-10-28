import SelectListDays from "../components/SelectListDays";
import moment from "moment";
import { Text, TextInput, Button, List } from "react-native-paper";
import { ScrollView, TouchableOpacity, View } from "react-native";
import {
  getDataDemarr,
  storeDataDemarr,
  storeDataDraigan,
  getDataDraigan,
} from "../async-storage/helpers";
import ChoresSettingsDemarr from "../components/ChoresSettingsDemarr";
import TaskSettingsDemarr from "../components/TaskSettingsDemarr";
import JackpotSettingsDemarr from "../components/JackpotSettingsDemarr";
import { demarrStyles } from "../css/styles";
import { useState, useEffect } from "react";

export default function Settings({ navigation }) {
  // Demarr States
  const [demarrAccordianValue, setDemarrAccordianValue] = useState(false);
  const [dataDemarr, setDataDemarr] = useState(null);
  const [demarrTaskAccordian, setDemarrTaskAccordian] = useState(false);
  const [demarrChoreAccordian, setDemarrChoreAccordian] = useState(false);
  const [demarrJackpotAccordian, setDemarrJackpotAccordian] = useState(false);

  const [textDraigan, setTextDraigan] = useState("");
  const [requiredPointsDraigan, setRequiredPointsDraigan] = useState(null);
  const [dataDraigan, setDataDraigan] = useState(null);
  const [reload, setReload] = useState(false);
  const [draiganAccordianValue, setDraiganAccordianValue] = useState(false);

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
          <List.Accordion
            style={demarrStyles.background}
            onPress={() => {
              setDemarrAccordianValue(!demarrAccordianValue);
            }}
            expanded={demarrAccordianValue}
            title="Demarr"
            id="1"
          >
            <List.Accordion
              onPress={() => {
                setDemarrTaskAccordian(!demarrTaskAccordian);
              }}
              expanded={demarrTaskAccordian}
              title="Tasks"
              id="1"
            >
              <TaskSettingsDemarr
                dataDemarr={dataDemarr}
                storeDataDemarr={storeDataDemarr}
                setReload={setReload}
              />
            </List.Accordion>
            <List.Accordion
              onPress={() => {
                setDemarrChoreAccordian(!demarrChoreAccordian);
              }}
              expanded={demarrChoreAccordian}
              title="Chores"
              id="1"
            >
              <ChoresSettingsDemarr
                dataDemarr={dataDemarr}
                storeDataDemarr={storeDataDemarr}
                setReload={setReload}
              />
            </List.Accordion>
            <List.Accordion
              onPress={() => {
                setDemarrJackpotAccordian(!demarrJackpotAccordian);
              }}
              expanded={demarrJackpotAccordian}
              title="Jackpot Settings"
              id="1"
            >
              <JackpotSettingsDemarr
                dataDemarr={dataDemarr}
                storeDataDemarr={storeDataDemarr}
                setReload={setReload}
              />
            </List.Accordion>
          </List.Accordion>
          <List.Accordion
            expanded={draiganAccordianValue}
            title="Draigan"
            id="2"
          ></List.Accordion>
        </List.Section>
      </ScrollView>
    )
  );
}

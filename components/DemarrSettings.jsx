import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { List } from "react-native-paper";
import { demarrStyles } from "../css/styles";
import TaskSettingsDemarr from "./TaskSettingsDemarr";
import ChoresSettingsDemarr from "./ChoresSettingsDemarr";
import JackpotSettingsDemarr from "./JackpotSettingsDemarr";
export default function DemarrSettings({
  dataDemarr,
  storeDataDemarr,
  setReload,
  demarrAccordianValue,
  setDemarrAccordianValue,
  demarrTaskAccordian,
  setDemarrTaskAccordian,
  demarrChoreAccordian,
  setDemarrChoreAccordian,
  demarrJackpotAccordian,
  setDemarrJackpotAccordian,
} = props) {
  return (
    <List.Section>
      <List.Accordion
        style={demarrStyles.colorPrimary}
        onPress={() => {
          setDemarrAccordianValue(!demarrAccordianValue);
          // If we close the main accordian, close its children
          if (!demarrAccordianValue) {
            setDemarrTaskAccordian(false);
            setDemarrChoreAccordian(false);
          }
        }}
        expanded={demarrAccordianValue}
        title="Demarr"
        id="1"
      >
        <List.Accordion
          style={demarrStyles.colorSecondary}
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
          style={demarrStyles.colorSecondary}
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
          style={demarrStyles.colorSecondary}
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
    </List.Section>
  );
}

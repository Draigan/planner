import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Text, List } from "react-native-paper";
import { demarrStyles } from "../../css/styles";
import TaskSettings from "./TaskSettings";
import ChoresSettings from "./ChoresSettings";
import DemarrSettings from "../demarr/DemarrSettings.jsx"
import JackpotSettings from "./JackpotSettings";
import MorningRoutineSettings from "./MorningRoutineSettings";

export default function MainSettings({
  data,
  storeDataDemarr,
  setReload,
  accordianValue,
  setAccordianValue,
  taskAccordian,
  setTaskAccordian,
  choreAccordian,
  setChoreAccordian,
  jackpotAccordian,
  setJackpotAccordian,
  setMorningRoutineAccordian,
  morningRoutineAccordian,
} = props) {
  return (
    <List.Section>
      <List.Accordion
        style={demarrStyles.colorPrimary}
        onPress={() => {
          setAccordianValue(!accordianValue);
          // If we close the main accordian, close its children
          if (!accordianValue) {
            setTaskAccordian(false);
            setChoreAccordian(false);
          }
        }}
        expanded={accordianValue}
        title="Demarr"
        id="1"
      >
        <List.Accordion
          style={demarrStyles.colorSecondary}
          onPress={() => {
            setMorningRoutineAccordian(!morningRoutineAccordian);
          }}
          expanded={morningRoutineAccordian}
          title="Morning Routine"
          id="6"
        >
          <MorningRoutineSettings
            setReload={setReload}
            data={data}
          />
        </List.Accordion>
        <List.Accordion
          style={demarrStyles.colorSecondary}
          onPress={() => {
            setTaskAccordian(!taskAccordian);
          }}
          expanded={taskAccordian}
          title="Tasks"
          id="1"
        >
          <TaskSettings
            data={data}
            storeDataDemarr={storeDataDemarr}
            setReload={setReload}
          />
        </List.Accordion>
        <List.Accordion
          style={demarrStyles.colorSecondary}
          onPress={() => {
            setChoreAccordian(!choreAccordian);
          }}
          expanded={choreAccordian}
          title="Chores"
          id="1"
        >
          <ChoresSettings
            data={data}
            storeDataDemarr={storeDataDemarr}
            setReload={setReload}
          />
        </List.Accordion>
        <List.Accordion
          style={demarrStyles.colorSecondary}
          onPress={() => {
            setJackpotAccordian(!jackpotAccordian);
          }}
          expanded={jackpotAccordian}
          title="Jackpot Settings"
          id="1"
        >
          <JackpotSettings
            data={data}
            storeDataDemarr={storeDataDemarr}
            setReload={setReload}
          />
        </List.Accordion>
      </List.Accordion>
    </List.Section>
  );
}

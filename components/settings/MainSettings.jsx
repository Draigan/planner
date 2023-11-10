import { useState } from "react";
import { List } from "react-native-paper";
import { demarrStyles } from "../../css/styles";
import TaskSettings from "./TaskSettings";
import ChoresSettings from "./ChoresSettings";
import JackpotSettings from "./JackpotSettings";
import MorningRoutineSettings from "./MorningRoutineSettings";

export default function MainSettings({
  data,
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
  storeData
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
        title={data.userName}
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
            storeData={storeData}
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
            storeData={storeData}
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
            storeData={storeData}
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
            storeData={storeData}
            setReload={setReload}
          />
        </List.Accordion>
      </List.Accordion>
    </List.Section>
  );
}

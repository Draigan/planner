import AsyncStorage from "@react-native-async-storage/async-storage";

// Set Storage
const storeDataDraigan = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("draigan", jsonValue);
  } catch (e) {
    error.log(e);
  }
};

const storeDataDemarr = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("demarr", jsonValue);
  } catch (e) {
    error.log(e);
  }
};

// Retrieve Storage

const getDataDraigan = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("draigan");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

const getDataDemarr = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("demarr");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};
// Temporary values for demarr and draigan storage

storeDataDraigan({
  tasks: [
    { name: "Brushed teeth", points: 5, checked: false },
    { name: "Exercised", points: 5, checked: true },
    { name: "Out of bed by 8", points: 3, checked: false },
    { name: "Brushed teeth", points: 5, checked: false },
    { name: "Exercised", points: 5, checked: true },
    { name: "Out of bed by 8", points: 3, checked: false },
    { name: "Brushed teeth", points: 5, checked: false },
    { name: "Exercised", points: 5, checked: true },
    { name: "Out of bed by 8", points: 3, checked: false },
    { name: "Brushed teeth", points: 5, checked: false },
    { name: "Exercised", points: 5, checked: true },
    { name: "Out of bed by 8", points: 3, checked: false },
  ],
  requiredPoints: 10,
  chores: [
    { name: "Sunday", list: ["Water Plants", "Eat food"] },
    { name: "Monday", list: ["do stuff", "eat health", "love plants"] },
    { name: "Tuesday", list: ["eat cheese", "run", "bike", "swim"] },
    { name: "WednesDay", list: ["laze around", "do stuff"] },
    { name: "Thursday", list: ["Try I guess", "hello world"] },
    {
      name: "Friday",
      list: ["123", "forty fivbe thousand", "doing stuff again", "run"],
    },
    { name: "Saturday", list: ["nothing day"] },
  ],
});

storeDataDemarr({
  tasks: [
    { name: "Brushed teeth", points: 5, checked: false },
    { name: "Exercised", points: 5, checked: true },
    { name: "Out of bed by 8", points: 3, checked: false },
    { name: "Brushed teeth", points: 5, checked: false },
    { name: "Exercised", points: 5, checked: true },
    { name: "Out of bed by 8", points: 3, checked: false },
    { name: "Brushed teeth", points: 5, checked: false },
    { name: "Exercised", points: 5, checked: true },
    { name: "Out of bed by 8", points: 3, checked: false },
    { name: "Brushed teeth", points: 5, checked: false },
    { name: "Exercised", points: 5, checked: true },
    { name: "Out of bed by 8", points: 3, checked: false },
  ],
  requiredPoints: 10,
  chores: [
    { name: "Sunday", list: ["Water Plants", "Eat food"] },
    { name: "Monday", list: ["do stuff", "eat health", "love plants"] },
    { name: "Tuesday", list: ["eat cheese", "run", "bike", "swim"] },
    { name: "WednesDay", list: ["laze around", "do stuff"] },
    { name: "Thursday", list: ["Try I guess", "hello world"] },
    {
      name: "Friday",
      list: ["123", "forty fivbe thousand", "doing stuff again", "run"],
    },
    { name: "Saturday", list: ["nothing day"] },
  ],
});

export { storeDataDraigan, storeDataDemarr, getDataDraigan, getDataDemarr };

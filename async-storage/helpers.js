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

const storeDataMoney = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("money", jsonValue);
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

const getDataMoney = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("money");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};
// Temporary values for demarr and draigan storage

storeDataDraigan({
  userName: "Draigan",
  slug: "draigan",
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
  morningRoutine: [
    { name: "Wake up by 9", checked: false },
    { name: "make coffee", checked: false },
    { name: "eat", checked: false },
    { name: "brush teeth", checked: false },
    { name: "Wake up by 9", checked: false },
  ],
  chores: [
    {
      name: "Sunday",
      list: [
        { task: "1Water Plants", checked: false },
        { task: "2Water Plants", checked: false },
      ],
    },
    {
      name: "Monday",
      list: [
        { task: "3Water Plants", checked: false },
        { task: "4Water Plants", checked: false },
        { task: "5Water Plants", checked: false },
      ],
    },
    {
      name: "Tuesday",
      list: [
        { task: "6Water Plants", checked: false },
        { task: "7Water Plants", checked: false },
        { task: "8Water Plants", checked: false },
        { task: "9Water Plants", checked: false },
      ],
    },
    {
      name: "WednesDay",
      list: [
        { task: "xWater Plants", checked: false },
        { task: "yWater Plants", checked: false },
      ],
    },
    {
      name: "Thursday",
      list: [
        { task: "rWater Plants", checked: false },
        { task: "nWater Plants", checked: false },
      ],
    },
    {
      name: "Friday",
      list: [
        { task: "ajWater Plants", checked: false },
        { task: "cWater Plants", checked: false },
        { task: "bWater Plants", checked: false },
        { task: ",Water Plants", checked: false },
      ],
    },
    { name: "Saturday", list: [{ task: "Water Plants", checked: false }] },
  ],
});

storeDataDemarr({
  userName: "Demarr",
  slug: "demarr",
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
  morningRoutine: [
    { name: "Wake up by 9", checked: false },
    { name: "make coffee", checked: false },
    { name: "eat", checked: false },
    { name: "brush teeth", checked: false },
    { name: "Wake up by 9", checked: false },
  ],
  chores: [
    {
      name: "Sunday",
      list: [
        { task: "1Water Plants", checked: false },
        { task: "2Water Plants", checked: false },
      ],
    },
    {
      name: "Monday",
      list: [
        { task: "3Water Plants", checked: false },
        { task: "4Water Plants", checked: false },
        { task: "5Water Plants", checked: false },
      ],
    },
    {
      name: "Tuesday",
      list: [
        { task: "6Water Plants", checked: false },
        { task: "7Water Plants", checked: false },
        { task: "8Water Plants", checked: false },
        { task: "9Water Plants", checked: false },
      ],
    },
    {
      name: "WednesDay",
      list: [
        { task: "xWater Plants", checked: false },
        { task: "yWater Plants", checked: false },
      ],
    },
    {
      name: "Thursday",
      list: [
        { task: "rWater Plants", checked: false },
        { task: "nWater Plants", checked: false },
      ],
    },
    {
      name: "Friday",
      list: [
        { task: "ajWater Plants", checked: false },
        { task: "cWater Plants", checked: false },
        { task: "bWater Plants", checked: false },
        { task: ",Water Plants", checked: false },
      ],
    },
    { name: "Saturday", list: [{ task: "Water Plants", checked: false }] },
  ],
});

storeDataMoney({
  transactions: [
    { type: "expense", value: 10, key: 1, description: "lost 10 bucks" },
    { type: "credit", value: 20, key: 2, description: "found 20 bucks" },
    { type: "expense", value: 10, key: 1, description: "lost 10 bucks" },
    { type: "expense", value: 10, key: 1, description: "lost 10 bucks" },
    { type: "expense", value: 10, key: 1, description: "lost 10 bucks" },
    { type: "expense", value: 10, key: 1, description: "lost 10 bucks" },
    { type: "expense", value: 10, key: 1, description: "lost 10 bucks" },
    { type: "expense", value: 10, key: 1, description: "lost 10 bucks" },
    { type: "credit", value: 20, key: 2, description: "found 20 bucks" },
    { type: "credit", value: 20, key: 2, description: "found 20 bucks" },
    { type: "credit", value: 20, key: 2, description: "found 20 bucks" },
    { type: "credit", value: 20, key: 2, description: "found 20 bucks" },
    { type: "credit", value: 20, key: 2, description: "found 20 bucks" },
    { type: "credit", value: 20, key: 2, description: "found 20 bucks" },
  ]
})
export { getDataMoney, storeDataMoney, storeDataDraigan, storeDataDemarr, getDataDraigan, getDataDemarr };

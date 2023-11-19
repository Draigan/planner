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
    { name: "Take child outside", points: 2, checked: false },
    { name: "Meditate", points: 1, checked: false },
    { name: "Read a book", points: 2, checked: false },
    { name: "Grocery Shopping", points: 3, checked: false },
    { name: "Dance", points: 2, checked: false },
    { name: "Learn a vim command", points: 1, checked: false },
    { name: "Learn a programming concept", points: 1, checked: false },
    { name: "Play toys with Nathan", points: 1, checked: false },
  ],
  requiredPoints: 10,
  morningRoutine: [
    { name: "Wake up by 8", checked: false },
    { name: "Nathan routine", checked: false },
    { name: "Brush teeth with Nathan", checked: false },
    { name: "Feed child", checked: false },
    { name: "Make coffee", checked: false },
    { name: "wake Demarr up at 8:55", checked: false },
    { name: "Exercise", checked: false },
    { name: "Stretch", checked: false },
  ],
  chores: [
    {
      name: "Sunday",
      list: [
        { task: "Take Nathan outside", checked: false },
        { task: "Clean upstairs bathroom", checked: false },
      ],
    },
    {
      name: "Monday",
      list: [
        { task: "Water Plants", checked: false },
        { task: "Empty dehumidifier", checked: false },
        { task: "Take out trash", checked: false },
        { task: "Cook dinner", checked: false },
      ],
    },
    {
      name: "Tuesday",
      list: [
        { task: "Vaccum upstairs", checked: false },
        { task: "Clean studio", checked: false },
      ],
    },
    {
      name: "WednesDay",
      list: [

        { task: "Clean Nathan's room", checked: false },
        { task: "Cook dinner", checked: false },
      ],
    },
    {
      name: "Thursday",
      list: [
        { task: "Take Nathan outside", checked: false },
      ],
    },
    {
      name: "Friday",
      list: [
        { task: "Organize something", checked: false },
        { task: "Cook dinner", checked: false },
      ],
    },
    { name: "Saturday", list: [{ task: "Clean couch", checked: false }] },
  ],
});

storeDataDemarr({
  userName: "Demarr",
  slug: "demarr",
  tasks: [
    { name: "Take Nathan outside", points: 3, checked: false },
    { name: "Read a book", points: 1, checked: false },
    { name: "Organize a cupboard", points: 1, checked: false },
    { name: "Sweep living room", points: 1, checked: false },
    { name: "Grocery shopping", points: 3, checked: false },
    { name: "Going to Sally", points: 2, checked: false },
    { name: "Activity with Nathan", points: 1, checked: false },
    { name: "Get sunlight", points: 2, checked: false },
    { name: "Play toys with Nathan", points: 1, checked: false },
  ],
  requiredPoints: 5,
  morningRoutine: [
    { name: "Out of bed by 9", checked: false },
    { name: "Brush teeth", checked: false },
    { name: "Get dressed", checked: false },
    { name: "Plan Day", checked: false },
    { name: "Plan for Nathan", checked: false },
    { name: "Workout", checked: false },
  ],
  chores: [
    {
      name: "Sunday",
      list: [
        { task: "Nathan's hair", checked: false },
        { task: "Laundry", checked: false },
        { task: "Cook dinner", checked: false },
      ],
    },
    {
      name: "Monday",
      list: [
        { task: "Vaccum downstairs", checked: false },
        { task: "Vaccuum stairs", checked: false },
      ],
    },
    {
      name: "Tuesday",
      list: [
        { task: "Friends", checked: false },
        { task: "Cook dinner", checked: false },

      ],
    },
    {
      name: "WednesDay",
      list: [
        { task: "Friends", checked: false },
        { task: "Deep clean counters ", checked: false },
      ],
    },
    {
      name: "Thursday",
      list: [
        { task: "Friends", checked: false },
        { task: "Cook dinner", checked: false },
      ],
    },
    {
      name: "Friday",
      list: [
        { task: "Mop", checked: false },
        { task: "Clean upstairs bathroom", checked: false },
      ],
    },
    {
      name: "Saturday", list: [{ task: "Change sheets", checked: false },

      { task: "Clean microwave", checked: false },
      { task: "Cook dinner", checked: false },
      ]
    },
  ],
});

storeDataMoney({
  balance: 0,
  transactions: [
    { type: "expense", value: 10, key: 1, month: "January", description: "lost 10 bucks" },
    { type: "credit", value: 10, key: 2, month: "January", description: "lost 10 bucks" },
    { type: "expense", value: 10, key: 3, month: "February", description: "lost 10 asdasdbucks" },
    { type: "credit", value: 10, key: 4, month: "February", description: "lost 10 buckasdasdasdasdasdasdasdasdasdasds" },
  ]
})
export { getDataMoney, storeDataMoney, storeDataDraigan, storeDataDemarr, getDataDraigan, getDataDemarr };

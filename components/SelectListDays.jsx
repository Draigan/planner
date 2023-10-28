import { SelectList } from "react-native-dropdown-select-list";

const SelectListDays = (props) => {
  const data = [
    { key: "1", value: "Sunday", disabled: false },
    { key: "2", value: "Monday" },
    { key: "3", value: "Tuesday" },
    { key: "4", value: "Wednesday" },
    { key: "5", value: "Thursday", disabled: false },
    { key: "6", value: "Friday" },
    { key: "7", value: "Saturday" },
  ];

  return (
    <SelectList
      setSelected={(val) => props.setSelectedDemarr(val)}
      data={data}
      save="value"
      placeholder="Choose Day"
      search={false}
    />
  );
};

export default SelectListDays;

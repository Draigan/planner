import { SelectList } from "react-native-dropdown-select-list";

const SelectListDays = (props) => {
  const data = [
    { key: "1", value: "Sunday", disabled: true },
    { key: "2", value: "Monday" },
    { key: "3", value: "Tuesday" },
    { key: "4", value: "Thursday", disabled: true },
    { key: "5", value: "Friday" },
    { key: "6", value: "Saturday" },
  ];

  return (
    <SelectList
      setSelected={(val) => props.setSelectedDemarr(val)}
      data={data}
      save="value"
    />
  );
};

export default SelectListDays;

import { SelectList } from "react-native-dropdown-select-list";

const SelectListMonths = (props) => {
  const data = [
    { key: "1", value: "January", disabled: false },
    { key: "2", value: "February" },
    { key: "3", value: "March" },
    { key: "4", value: "April" },
    { key: "5", value: "May", disabled: false },
    { key: "6", value: "June" },
    { key: "7", value: "July" },
    { key: "8", value: "August" },
    { key: "9", value: "September" },
    { key: "10", value: "October" },
    { key: "11", value: "November" },
    { key: "12", value: "December" },
  ];

  return (
    <SelectList
      setSelected={(val) => props.setMonth(val)}
      data={data}
      save="value"
      placeholder="Choose Month"
      search={false}
    />
  );
};

export default SelectListMonths;

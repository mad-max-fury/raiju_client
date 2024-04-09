import React, { useState, useEffect } from "react";
import Select, { ActionMeta, SingleValue, StylesConfig } from "react-select";
import { Typography } from "../typography";

const styles: any = {
  // @ts-expect-error
  control: (provided, state) => ({
    ...provided,
    height: "100%",
    width: "100%",
    borderRadius: "8px",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "14px",
    border: "1px solid #33333329",
    boxShadow: state.isFocused ? 0 : 0,
    "&:hover": {
      borderColor: state.isFocused ? "#B1B0B3" : 0,
    },
  }),
  // @ts-expect-error
  option: (provided, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...provided,
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "14px",
      backgroundColor: isDisabled
        ? null
        : isFocused
        ? "#F5F5F5"
        : isSelected
        ? "#B1B0B3"
        : null,
      color: isSelected ? "#2e2e2e" : isFocused ? "#2e2e2e" : null,
      cursor: "pointer",
    };
  },
};
export interface SelectOption {
  value: string;
  label: string;
}

interface SelectCompProps {
  height?: number;
  options: any;
  onChange?: any;
  label: string;
  name: string;
  id: string;
  value?: any;
}

const SelectComp: React.FC<SelectCompProps> = ({
  height = 50,
  options,
  onChange,
  label,
  name,
  id,
  value,
}) => {
  const [selectedOption, setSelectedOption] = useState<any>(value ?? null);

  const handleSelectChange = (newValue: SingleValue<any>): void => {
    setSelectedOption(newValue);
    onChange && onChange(newValue);
  };
  return (
    <div className="flex flex-col h-full gap-2 relative z-[inherit]">
      <label htmlFor={id}>
        <Typography variant={"body-s"} color={"gray-2"}>
          {label}
        </Typography>
      </label>
      <div className=" [&>*]:h-full" style={{ height: `${height}px` }}>
        <Select
          name={name}
          id={id}
          value={selectedOption}
          options={options}
          onChange={handleSelectChange}
          styles={styles}
          components={{
            IndicatorSeparator: null,
          }}
        />
      </div>
    </div>
  );
};

export default SelectComp;

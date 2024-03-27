import React, { useState, useEffect } from "react";
import Select, { ActionMeta, SingleValue } from "react-select";
import { Typography } from "../typography";

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectCompProps {
  height?: number;
  options: SelectOption[];
  onChange?: (value: SingleValue<SelectOption>) => void;
  label: string;
  name: string;
  id: string;
}

const SelectComp: React.FC<SelectCompProps> = ({
  height = 50,
  options,
  onChange,
  label,
  name,
  id,
}) => {
  const [selectedOption, setSelectedOption] = useState<SelectOption | null>(
    null
  );

  const handleSelectChange = (newValue: SingleValue<SelectOption>): void => {
    setSelectedOption(newValue);
    onChange && onChange(newValue);
  };
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>
        <Typography variant={"body-s"} color={"gray-2"}>
          {label}
        </Typography>
      </label>
      <div style={{ height: `${height}px` }}>
        <Select
          name={name}
          id={id}
          value={selectedOption}
          options={options}
          onChange={handleSelectChange}
        />
      </div>
    </div>
  );
};

export default SelectComp;

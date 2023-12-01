import { useState } from "react";
import Select from "react-select";

export const CustomSelect = ({
  name,
  method,
  options,
  label,
  placeholder,
  icon,
  selected,
  ...rest
}) => {
    const [selectedOption, setSelectedOption] = useState(null);
  return (
    <>
    <section className="w-full mb-3">
    {label && (
          <label className="text-neutral-800 text-sm font-medium mb-2">
            {label}
          </label>
        )}
        <Select
          name={name}
          placeholder={placeholder}
          autoFocus={false}
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
          className="w-full h-100 bg-zinc-300 rounded-xl py-2 px-4 text-black md:text-base text-sm font-normal outline-none"
        />
      </section>
    </>
  );
};

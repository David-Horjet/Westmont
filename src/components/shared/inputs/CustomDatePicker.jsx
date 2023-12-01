import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const CustomDatePicker = ({ name, label }) => {
  const [startDate, setStartDate] = useState("");
  return (
    <>
      <section className="w-full">
      {label && (
          <label className="text-neutral-800 text-sm font-medium mb-2">
            {label}
          </label>
        )}
          <ReactDatePicker
          name={name}
          showIcon={true}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          placeholderText="Set date"
          className="datepicker-input w-full bg-zinc-300 rounded-xl py-2 px-4 text-black md:text-base text-sm font-normal outline-none focus:outline-none"
        />
      </section>
    </>
  );
};
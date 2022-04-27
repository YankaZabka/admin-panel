import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
  name: string;
  label: string;
  startDate: Date | undefined;
  endDate: Date | undefined;
  selected: Date | undefined;
  minDate?: Date | undefined;
  maxDate?: Date | undefined;
  selectsStart?: boolean;
  selectsEnd?: boolean;

  onChange(date: Date): void;
}

const DateInput: React.FC<Props> = ({ name, label, ...props }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <DatePicker {...props} />
    </>
  );
};

export default DateInput;

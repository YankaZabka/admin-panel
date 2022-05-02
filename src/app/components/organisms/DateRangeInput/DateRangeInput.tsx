import React, { useState } from "react";
import DateInput from "../../molecules/DateInput";
import { notifyError } from "../../notify";
import classes from "./DateRangeInput.module.css";

interface Props {
  name: string;
  label: string;
  minDate?: string;
  maxDate?: string;
}

const DateRangeInput: React.FC<Props> = ({ name, label, minDate, maxDate }) => {
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();

  return (
    <>
      <label htmlFor={name} className={classes.label}>
        {label}
      </label>
      <div id={name} className={classes.container}>
        <DateInput
          name="startDate"
          label="Start date"
          startDate={startDate}
          endDate={endDate}
          onChange={(date) => {
            if (endDate) {
              if (date > endDate) {
                notifyError("Start value cannot be greater than end value!");
                return;
              }
            }
            return setStartDate(date);
          }}
          selected={startDate}
          selectsStart
          minDate={minDate ? new Date(minDate) : undefined}
          maxDate={maxDate ? new Date(maxDate) : undefined}
        />
        <DateInput
          name="endDate"
          label="End date"
          startDate={startDate}
          endDate={endDate}
          onChange={(date) => {
            if (startDate) {
              if (date < startDate) {
                notifyError("End value cannot be less than start value!");
                return;
              }
            }
            return setEndDate(date);
          }}
          selected={endDate}
          selectsEnd
          minDate={minDate ? new Date(minDate) : undefined}
          maxDate={maxDate ? new Date(maxDate) : undefined}
        />
      </div>
    </>
  );
};

export default DateRangeInput;

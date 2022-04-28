import React, { useState } from "react";
import { notifyError } from "../../../../notify";
import DateInput from "../../molecules/DateInput";

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
      <label htmlFor={name} style={{ fontWeight: "bold" }}>
        {label}
      </label>
      <div
        id={name}
        style={{
          border: "1px solid black",
          borderRadius: "5px",
          padding: "5px",
          backgroundColor: "white",
        }}
      >
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

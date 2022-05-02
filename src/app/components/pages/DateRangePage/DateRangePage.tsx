import React from "react";
import AnimationContainer from "../../organisms/AnimationContainer/AnimationContainer";
import DateRangeInput from "../../organisms/DateRangeInput";
import FormContainer from "../../organisms/FormContainer";

const DateRangePage: React.FC = () => {
  return (
    <AnimationContainer>
      <FormContainer title="Date range input">
        <DateRangeInput name="dateRange" label="Date range" />
      </FormContainer>
    </AnimationContainer>
  );
};

export default DateRangePage;

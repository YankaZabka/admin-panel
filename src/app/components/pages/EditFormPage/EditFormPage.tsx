import React from "react";
import FormContainer from "../../organisms/FormContainer";
import EditForm from "../../organisms/forms/EditForm";

const EditFormPage: React.FC = () => {
  return (
    <FormContainer title="Edit">
      <EditForm />
    </FormContainer>
  );
};

export default EditFormPage;

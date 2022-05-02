import React from "react";
import FormContainer from "../../organisms/FormContainer";
import CreateForm from "../../organisms/forms/CreateForm";

const CreateFormPage: React.FC = () => {
  return (
    <FormContainer title="Create">
      <CreateForm />
    </FormContainer>
  );
};

export default CreateFormPage;

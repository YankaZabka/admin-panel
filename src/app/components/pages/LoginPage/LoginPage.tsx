import React from "react";
import PublicRoute from "../../molecules/PublicRoute";
import AnimationContainer from "../../organisms/AnimationContainer/AnimationContainer";
import FormContainer from "../../organisms/FormContainer";
import LoginForm from "../../organisms/forms/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <PublicRoute>
      <AnimationContainer>
        <FormContainer title="Login">
          <LoginForm />
        </FormContainer>
      </AnimationContainer>
    </PublicRoute>
  );
};

export default LoginPage;

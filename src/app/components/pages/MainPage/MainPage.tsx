import React from "react";
import PrivateRoute from "../../molecules/PrivateRoute";
import AdminPage from "../../organisms/AdminPage";
import AnimationContainer from "../../organisms/AnimationContainer/AnimationContainer";

const MainPage: React.FC = () => {
  return (
    <PrivateRoute>
      <AnimationContainer>
        <AdminPage />
      </AnimationContainer>
    </PrivateRoute>
  );
};

export default MainPage;

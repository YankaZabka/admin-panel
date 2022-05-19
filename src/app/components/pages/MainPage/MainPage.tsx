import React from "react";
import PrivateRoute from "../../molecules/PrivateRoute";
import AdminPage from "../../organisms/AdminPage";

const MainPage: React.FC = () => {
  return (
    <PrivateRoute>
      <AdminPage />
    </PrivateRoute>
  );
};

export default MainPage;

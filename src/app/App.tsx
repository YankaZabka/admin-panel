import React from "react";
import "antd/dist/antd.css";
import "react-toastify/dist/ReactToastify.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Layout, Result, Button } from "antd";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
  Link,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./components/molecules/Footer/Footer";
import AdminPage from "./components/organisms/AdminPage";
import AlbumShowPage from "./components/organisms/AlbumShowPage";
import AlbumsTable from "./components/organisms/AlbumsTable/index";
import AnimationContainer from "./components/organisms/AnimationContainer/AnimationContainer";
import DateRangeInput from "./components/organisms/DateRangeInput";
import FormContainer from "./components/organisms/FormContainer/index";
import CreateForm from "./components/organisms/forms/CreateForm";
import EditForm from "./components/organisms/forms/EditForm";
import LoginForm from "./components/organisms/forms/LoginForm";
import Header from "./components/organisms/Header/Header";
import PhotoInfo from "./components/organisms/PhotoInfo";
import PhotosTable from "./components/organisms/PhotosTable";
import WelcomePage from "./components/organisms/WelcomePage";
import AuthProvider from "./contexts/providers/AuthProvider";
import useAuth from "./hooks/useAuth";
import classes from "./App.module.css";

const { Content } = Layout;

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
});

const PrivateRoute: React.FC = ({ children }) => {
  const auth: any = useAuth();
  const location = useLocation();

  return auth.loggedIn ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

const PublicRoute: React.FC = ({ children }) => {
  const auth: any = useAuth();
  const location = useLocation();

  return auth.loggedIn ? (
    <Navigate to="/" state={{ from: location }} />
  ) : (
    <>{children}</>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />

          <Layout className={classes.layout}>
            <Header />

            <Content className={`site-layout ${classes.content}`}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <PrivateRoute>
                      <AnimationContainer>
                        <AdminPage />
                      </AnimationContainer>
                    </PrivateRoute>
                  }
                >
                  <Route index element={<WelcomePage />} />
                  <Route
                    path="dateRange"
                    element={
                      <AnimationContainer>
                        <FormContainer title="Date range input">
                          <DateRangeInput name="dateRange" label="Date range" />
                        </FormContainer>
                      </AnimationContainer>
                    }
                  />
                  <Route path="albums" element={<AlbumsTable />} />
                  <Route
                    path="albums/create"
                    element={
                      <FormContainer title="Create">
                        <CreateForm />
                      </FormContainer>
                    }
                  />
                  <Route path="albums/:id" element={<AlbumShowPage />}>
                    <Route path="photos" element={<PhotosTable />} />
                    <Route path="photos/:id" element={<PhotoInfo />} />
                  </Route>
                  <Route
                    path="albums/:id/edit"
                    element={
                      <FormContainer title="Edit">
                        <EditForm />
                      </FormContainer>
                    }
                  />
                </Route>
                <Route
                  path="/login"
                  element={
                    <PublicRoute>
                      <AnimationContainer>
                        <FormContainer title="Login">
                          <LoginForm />
                        </FormContainer>
                      </AnimationContainer>
                    </PublicRoute>
                  }
                />
                <Route
                  path="*"
                  element={
                    <Result
                      status="404"
                      title="404"
                      subTitle="Sorry, the page you visited does not exist."
                      extra={
                        <Button type="primary">
                          <Link to="/">Back Home</Link>
                        </Button>
                      }
                    />
                  }
                />
              </Routes>
            </Content>

            <Footer />
          </Layout>
        </BrowserRouter>
      </ApolloProvider>
    </AuthProvider>
  );
};

export default App;

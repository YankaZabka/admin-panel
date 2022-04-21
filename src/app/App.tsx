import React from "react";
import "antd/dist/antd.css";
import "react-toastify/dist/ReactToastify.css";
import { blue } from "@ant-design/colors";
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
import AlbumsTable from "./components/organisms/AlbumsTable/index";
import AnimationContainer from "./components/organisms/AnimationContainer/AnimationContainer";
import FormContainer from "./components/organisms/FormContainer/index";
import LoginForm from "./components/organisms/forms/LoginForm";
import Header from "./components/organisms/Header/Header";
import AuthProvider from "./contexts/providers/AuthProvider";
import useAuth from "./hooks/useAuth";

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

          <Layout style={{ minHeight: "100vh" }}>
            <Header />

            <Content
              className="site-layout"
              style={{
                padding: "0 50px",
                backgroundColor: blue[2],
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Routes>
                <Route
                  path="/"
                  element={
                    <PrivateRoute>
                      <AnimationContainer>
                        <AlbumsTable />
                      </AnimationContainer>
                    </PrivateRoute>
                  }
                />
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

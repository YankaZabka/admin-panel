import React from "react";
import "antd/dist/antd.css";
import "react-toastify/dist/ReactToastify.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Layout } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./components/molecules/Footer/Footer";
import AlbumShowPage from "./components/organisms/AlbumShowPage";
import AlbumsTable from "./components/organisms/AlbumsTable/index";
import Header from "./components/organisms/Header/Header";
import WelcomePage from "./components/organisms/WelcomePage";
import AlbumsPage from "./components/pages/AlbumsPage/AlbumsPage";
import CreateFormPage from "./components/pages/CreateFormPage";
import DateRangePage from "./components/pages/DateRangePage/DateRangePage";
import EditFormPage from "./components/pages/EditFormPage";
import LoginPage from "./components/pages/LoginPage";
import MainPage from "./components/pages/MainPage/MainPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import AuthProvider from "./contexts/providers/AuthProvider";
import classes from "./App.module.css";

const { Content } = Layout;

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
});

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
                <Route path="/" element={<MainPage />}>
                  <Route index element={<WelcomePage />} />
                  <Route path="dateRange" element={<DateRangePage />} />
                  <Route
                    path="albums/*"
                    element={
                      <AlbumsPage
                        table={<AlbumsTable />}
                        createForm={<CreateFormPage />}
                        editForm={<EditFormPage />}
                        showPage={<AlbumShowPage />}
                      />
                    }
                  />
                </Route>
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<NotFoundPage />} />
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

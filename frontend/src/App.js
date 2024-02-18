import React, { lazy, Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import userContext from "./components/contextAPI/userContext";

const Home = lazy(() => import("./pages/Home"));
const Menu = lazy(() => import("./pages/Menu"));
const Admin = lazy(() => import("./pages/Admin"));
const NotFoundPage = lazy(() => import("./pages/NotFound"));
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));

const loading = () => <p>Loading...</p>;

function App() {
  const [userAuth, setUserAuth] = useState({});

  return (
    <Suspense fallback={loading}>
      <userContext.Provider value={{ userAuth, setUserAuth }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </userContext.Provider>
    </Suspense>
  );
}

export default App;

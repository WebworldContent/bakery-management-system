import React, {lazy, Suspense} from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import('./pages/Home'));
const Menu = lazy(() => import ('./pages/Menu'));
const Admin = lazy(() => import('./pages/Admin'));

const loading = () => <p>Loading...</p>

function App() {
  return (
    <Suspense fallback={loading}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
    </Suspense>
  );
}

export default App;

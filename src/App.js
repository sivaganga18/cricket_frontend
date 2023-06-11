import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const LoginIn = lazy(() => import("./components/screen/LoginScreen"));
const Home = lazy(() => import("./components/screen/HomeScreen"));

function App() {
  return (
    <>
      <Suspense>
        <Routes>
          {/* <Route path="/" element={<LoginIn />} /> */}
          <Route path="/home" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

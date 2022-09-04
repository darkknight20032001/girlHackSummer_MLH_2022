import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./Components/LoginPage";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./Components/RegisterPage";
import MainPage from "./Components/MainPage";
import SignInPage from "./Components/SignInPage";
import Helpline from "./Components/Helpline";
import SignOut from "./Components/SignOut";
import Travel from "./Components/Travel";
import TravelEdit from "./Components/TravelEdit";
import DetectLocation from "./Components/DetectLocation";

import HomePage from "./Components/HomePage.js";

import AboutUs from "./Components/AboutUs";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/mainPage"
            element={
              <MainPage showModal={showModal} setShowModal={setShowModal} />
            }
          />
          <Route
            path="/loginPage"
            element={
              <SignInPage showModal={showModal} setShowModal={setShowModal} />
            }
          />
          <Route path="/helpline" element={<Helpline />} />
          <Route path="/signOut" element={<SignOut />} />
          <Route
            path="/travel"
            element={
              <Travel showModal={showModal} setShowModal={setShowModal} />
            }
          />
          <Route
            path="/travelEdit"
            element={
              <TravelEdit showModal={showModal} setShowModal={setShowModal} />
            }
          />
          {/* <Route path="/detectLocation" element={<DetectLocation />} /> */}
          <Route path="/aboutUs" element={<AboutUs />} />

          <Route
            path="/homePage"
            element={
              <HomePage showModal={showModal} setShowModal={setShowModal} />
            }
          />

          {/* <Route path="/tableShow" element={<TableShow />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

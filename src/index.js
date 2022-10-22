import { react, useEffect, useState } from "react";
import reactDom from "react-dom/client";
import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";
import "./style.css";
import { getRoutines, getActivities } from "./api";
import { Navbar, Routines, Home, Activities } from "./components/index";

const App = () => {
  const [routines, setRoutines] = useState([]);
  const retrievePublicRoutines = async () => {
    const results = await getRoutines();
    setRoutines(results);
  };

  const [activities, setActivities] = useState([]);
const retrieveAllActvities = async () => {
  const results = await getActivities();
  setActivities(results);
};

  useEffect(() => {
    retrievePublicRoutines();
  }, []);
  useEffect(() => {
    retrieveAllActvities()
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/routines" element={<Routines routines={routines} navigate={useNavigate} />} />
        <Route path="/activities" element={<Activities activities={activities} navigate={useNavigate} />} />
      </Routes>
    </div>
  );
};


const app = document.querySelector("#app");
const root = reactDom.createRoot(app);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

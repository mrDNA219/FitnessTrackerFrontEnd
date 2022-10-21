import { react, useEffect, useState } from "react";
import reactDom from "react-dom/client";
import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";
import "./style.css";
import { getRoutines } from "./api";
import { Navbar, Routines, Home } from "./components/Index";

const App = () => {
  const [routines, setRoutines] = useState([]);
  const retrievePublicRoutines = async () => {
    const results = await getRoutines();
    setRoutines(results);
  };

  useEffect(() => {
    retrievePublicRoutines();
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/routines" element={<Routines routines={routines} navigate={useNavigate} />} />
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

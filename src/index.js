import { react, useEffect, useState } from "react";
import reactDom from "react-dom/client";
import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";
import "./style.css";
import { getRoutines, getActivities } from "./api";
import { Navbar, Routines, Home, Activities, Login, Register } from "./components/index";

const App = () => {
  const [routines, setRoutines] = useState([]);
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});
  const [activities, setActivities] = useState([]);

  console.log("token:", token)

  const navigate = useNavigate();
  const retrievePublicRoutines = async () => {
    const results = await getRoutines();
    setRoutines(results);
  };

const retrieveAllActvities = async () => {
  const results = await getActivities();
  setActivities(results);
};
const getToken = async () => {
  const storedToken = window.localStorage.getItem('token');
  if(!token){
    if(storedToken){
      setToken(storedToken);
    }
    return;
  }
}


  useEffect(() => {
    retrievePublicRoutines();
  }, []);
  useEffect(() => {
    retrieveAllActvities()
  }, []);
  
  

  return (
    <div>
      <Navbar setToken={setToken} token={token}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/routines" element={<Routines routines={routines} navigate={navigate} />} />
        <Route path="/activities" element={<Activities activities={activities} navigate={navigate} />} />
        <Route path='/login' element={<Login setToken={setToken} navigate={navigate}/>} />
        <Route path='/register' element={<Register setToken={setToken} navigate={navigate} />} />

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

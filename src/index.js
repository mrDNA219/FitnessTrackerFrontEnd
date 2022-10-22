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
    retrieveAllActvities
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


export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${baseURL}/users/register`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        }
      })
    })
    const result = await response.json();
    return result;
  } catch(error) {
    console.log('error registering user')
  }
}

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${baseURL}/users/login`,{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username,
          password
        }
      })
    })
    
    const result = await response.json();
    
    return result;
    
  } catch(ex) {
    console.log('error logging in user')
  }
}


export const getUserDetails = async (token) => {
  try {
    const response = await fetch(`${baseURL}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })
    
    const result = await response.json();
    return result;
    
  } catch(ex) {
    console.log('error getting users details')
  }
}


const app = document.querySelector("#app");
const root = reactDom.createRoot(app);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

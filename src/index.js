import {react, useEffect, useState} from 'react';
import reactDom from 'react-dom/client';
import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";
import './style.css';
import { getRoutines } from './api';

const App = () => {
    const [routines, setRoutines] = useState([]);
    const retrievePublicRoutines = async () => {
        const results = await getRoutines();
        setRoutines(results);
        console.log(results)
    }
    useEffect(() => {
        retrievePublicRoutines();
    }, [])
    return(
        <div>
            {
            routines.map((routine) => {
            const {id, creatorName,creatorId, name, goal} = routine;
            return(
                <div key={id}>
                    <h3>{name}</h3>
                    <p>Creator: {creatorName}</p>
                    <p>Goal: {goal}</p>
                    <p>CreatorId: {creatorId}</p>
                </div>
            )
            })
            }
        </div>
    )
}


const app = document.querySelector('#app')
const root = reactDom.createRoot(app)
root.render(
<BrowserRouter>
    <App />
</BrowserRouter>
)
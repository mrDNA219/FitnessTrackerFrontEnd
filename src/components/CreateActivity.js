// create a new activity as a register user

import {React, useState} from "react";

import { createActivity  } from "../api";

const CreateActivity = ({token, navigate, retrieveAllActivities}) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const newActivity = {
        name: name,
        description: description
    }
    async function addActivity(){
        await createActivity(token, newActivity);
         retrieveAllActivities();
        navigate('/activities')
    }
    return (
        <div class ="c-activity"><img src="https://img.icons8.com/nolan/344/exercise.png"></img>
        <form onSubmit={(e) => {
            e.preventDefault();
            addActivity();
        }}>
            <input type='text' className="inputs" placeholder="Enter Name" onChange={(e) => setName(e.target.value)}></input>
            <input type='text' className="inputs" placeholder="Describe activity" onChange={(e) => setDescription(e.target.value)}></input>
            <hr></hr>
            <button type="submit" name="create-activity">Create New Activity</button>

        </form></div>
    )  
}
export default CreateActivity
// create a new activity as a register user

import {React, useState} from "react";

import { createActivity, getActivities  } from "../api";

const CreateActivity = ({token, navigate, retrieveAllActivities}) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

   
    async function addActivity(){
        const newActivity = {
            name: name,
            description: description
        }
        const result= await createActivity(token, newActivity);
        if (result.error) {
            console.error(result.error)
            setErrorMessage('activity already exists')
        } else {
         retrieveAllActivities();
        navigate('/activities')
    }
    }
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            addActivity();
        }}>
              {
        errorMessage ? (
        <div>{errorMessage}</div>
        ) : (null)
      }
            <input type='text' className="inputs" placeholder="Enter Name" onChange={(e) => setName(e.target.value)}></input>
            <input type='text' className="inputs" placeholder="Describe activity" onChange={(e) => setDescription(e.target.value)}></input>
            <hr></hr>
            <button type="submit" name="create-activity">Create New Activity</button>

        </form>
    )
}
export default CreateActivity
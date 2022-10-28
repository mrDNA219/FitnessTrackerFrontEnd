// will create new routine
import {React, useState} from "react";

import { createRoutine } from "../api";

const CreateRoutine = ({token, navigate}) => {
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');
    const [isPublic, setIsPublic] = useState(false);
    const newRoutine = {
        name: name,
        goal: goal,
        isPublic: isPublic
    }
    async function addRoutine(){
        await createRoutine(token, newRoutine);
        navigate('./myroutines')
    }
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            addRoutine();
        }}>
            <input type='text' className="inputs" placeholder="Enter Name" onChange={(e) => setName(e.target.value)}></input>
            <input type='text' className="inputs" placeholder="Enter Goal" onChange={(e) => setGoal(e.target.value)}></input>
            <p>Check box if you want the routine to be public:</p>
            <input type='checkbox' className="checkbox" placeholder="true" onChange={(e) => setIsPublic(e.target.checked)}></input>
            <hr></hr>
            <button type="submit" name="create-routine">Create New Routine</button>

        </form>
    )
}
export default CreateRoutine

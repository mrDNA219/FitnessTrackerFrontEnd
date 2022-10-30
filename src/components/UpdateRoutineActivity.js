import {react, useState} from "react";
import { updateRoutineActivity } from "../api";

const UpdateRoutineActivity = ({token, routineActivityId, getMyRoutinesHelper, setActivateUpdateActivity}) => {
    const [newCount, setNewCount] = useState(0);
    const [newDuration, setNewDuration] = useState(0);

    const updatedRoutineActivity = {
        count: newCount,
        duration: newDuration
    }
    async function updatedRoutineActivityHelper(){
        await updateRoutineActivity(token, routineActivityId, updatedRoutineActivity);
        getMyRoutinesHelper();
    }
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            updatedRoutineActivityHelper();
            setActivateUpdateActivity(0);

        }}>
            <input className="inputs" type="number" placeholder="Enter new count" onChange={(e) => setNewCount(e.target.value)}></input>
            <input className="inputs" type="number" placeholder="Enter new duration" onChange={(e) => setNewDuration(e.target.value)}></input>
            <button type="submit">Submit Activity Changes</button>
        </form>
    )
}
export default UpdateRoutineActivity
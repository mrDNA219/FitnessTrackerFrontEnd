import  {react, useState} from "react";
import { useParams } from "react-router-dom";
import { updateRoutine } from "../api";
const EditRoutine = ({token, myRoutines, getMyRoutinesHelper, navigate}) => {
    const  {routineId}  = useParams()
    const newId = routineId.toString().replace(':', '')
    const parsedId = parseInt(newId)
    const [currentRoutine] = myRoutines.filter((routine) => routine.id === parsedId)
    
    const {name, goal, isPublic } = currentRoutine;
    
    const [newName, setNewName] = useState(name);
    const [newGoal, setNewGoal] = useState(goal);
    const [newIsPublic, setNewIsPublic] = useState(isPublic);

    async function editRoutine(){
        const updatedRoutine = {
            token: token,
            name: newName,
            goal: newGoal,
            isPublic: newIsPublic,
            id: parsedId
        }
        await updateRoutine(updatedRoutine);
        getMyRoutinesHelper();
        navigate('./myroutines')
    }
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            editRoutine();
        }}>
            <input type='text' className="inputs" placeholder="Enter New Name" onChange={(e) => setNewName(e.target.value)}></input>
            <input type='text' className="inputs" placeholder="Enter New Goal" onChange={(e) => setNewGoal(e.target.value)}></input>
            <p>Check box if you want the routine to be public:</p>
            <input type='checkbox' className="checkbox" placeholder="true" onChange={(e) => setNewIsPublic(e.target.checked)}></input>
            <hr></hr>
            <button type="submit" name="create-routine">Edit Routine</button>
        </form>
    )
}
export default EditRoutine
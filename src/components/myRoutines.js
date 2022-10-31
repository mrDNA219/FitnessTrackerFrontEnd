// after logging in....lists all routines created by user
import {react, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { getRoutinesByUser, deleteRoutine, updateRoutine, getActivities, deleteRoutineActivity} from "../api";
import {AddActivity, UpdateRoutineActivity} from "./index"

const EditRoutine = ({token, myRoutines, routineId, getMyRoutinesHelper, setActivateEdit}) => {
  
  const [currentRoutine] = myRoutines.filter((routine) => routine.id === routineId)
  
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
          id: routineId
      }
      await updateRoutine(updatedRoutine);
      getMyRoutinesHelper();
      
  }
  return (
      <form onSubmit={(e) => {
          e.preventDefault();
          editRoutine();
          setActivateEdit(0);
      }}>
          <input type='text' className="inputs" placeholder="Enter New Name" onChange={(e) => setNewName(e.target.value)}></input>
          <input type='text' className="inputs" placeholder="Enter New Goal" onChange={(e) => setNewGoal(e.target.value)}></input>
          <p>Check box if you want the routine to be public:</p>
          <input type='checkbox' className="checkbox" placeholder="true" onChange={(e) => setNewIsPublic(e.target.checked)}></input>
          <hr></hr>
          <button type="submit" name="create-routine" >Submit Changes</button>
      </form>
  )
}

const MyRoutines = ({token, username}) => {
    const [myRoutines, setMyRoutines] = useState([]);
    const [activateEdit, setActivateEdit] = useState(0);
    const [activateAddActivity, setActivateAddActivity] = useState(0);
    const [activateUpdateActivity, setActivateUpdateActivity] = useState(0);

    

    const getMyRoutinesHelper = async () => {
      if(username && token) {
      const results = await getRoutinesByUser(token, username);
      setMyRoutines(results)
      }
    };
    
    useEffect(() => {
      getMyRoutinesHelper()
    }, [username, token, activateAddActivity]);

    async function deleteRoutineActivityHelper(id){
      await deleteRoutineActivity(token, id);
      getMyRoutinesHelper();
    }

    async function handleDelete(id){
     await deleteRoutine(token, id);
      getMyRoutinesHelper();
    }
   
    if(myRoutines.length){
        return (
          <div style={{ display:'flex', flexDirection:'column', alignItems:'center'}}>
            <Link to='/createroutine' style={{fontWeight:"bold", color:"#3244ac", textAlign:'center', width:'25%', position:"sticky", top:"9rem", fontFamily:"Courier New", fontSize:"1.5rem", textShadow:"-1px -1px 1px rgba(255, 255, 255, .1), 1px 1px 1px rgba(0, 0, 0, .5)" }} >Create New Routine</Link>
            <div className="container-allMyRoutines">
              <h2>My Routines:</h2>
              {myRoutines.map((routine) => {
                const { id, creatorName, name, goal, isPublic, activities} = routine;
               
        
                return (
                  <div key={id} className='container-singleMyRoutine'>
                    <hr></hr>
                    <h2>{name}</h2>
                    <p>Creator: {creatorName}</p>
                    <p>Goal: {goal}</p> 
                    <p>IsPublic: {isPublic.toString()}</p>
                    <div className="button-container">
                      <button onClick={() => setActivateEdit(id)}>Edit Routine</button>
                      {
                        activateEdit === id ? <EditRoutine setActivateEdit={setActivateEdit} token={token} myRoutines={myRoutines} routineId={id} getMyRoutinesHelper={getMyRoutinesHelper} /> : null
                      }
                    </div>
                    <div className="button-container">
                      <button onClick={() => setActivateAddActivity(id)}>Add Activity</button>
                      {
                        activateAddActivity === id ? <AddActivity routineId={id} setActivateAddActivity={setActivateAddActivity} /> : null
                      }
                    </div>
                    <div className="button-container">
                    <button onClick={() => handleDelete(id)}>Delete Routine</button>
                    </div>
                    <div className="container-allRoutineActivities">
                    {activities.map((activity) => {
                      return (
                        <div key={activity.id} className='container-singleRoutineActivity'>
                          <h3>Activity:</h3>
                          <p>Name: {activity.name}</p>
                          <p>Description: {activity.description}</p>
                          <p>Duration: {activity.duration}</p>
                          <p>Count: {activity.count}</p>
                          <div className="button-container">
                            <button onClick={() => setActivateUpdateActivity(activity.id)}>Update Routine Activity</button>
                            {
                            activateUpdateActivity === activity.id ? <UpdateRoutineActivity token={token} routineActivityId={activity.routineActivityId} getMyRoutinesHelper={getMyRoutinesHelper} setActivateUpdateActivity={setActivateUpdateActivity}/> : null
                            }
                          </div>
                          <div className="button-container">
                            <button onClick={() => deleteRoutineActivityHelper(activity.routineActivityId)}>Delete activity</button>
                          </div>
                        </div>
                      );
                    })}
                    </div>
                  </div>
                );
              })}
            </div>
            </div>
          );
        } else {
            return(
                <div>
                  <Link to='/createroutine'>Create New Routine</Link>
                  <p className="no-routines-message">You have not yet created any routines!</p>
                </div>
            )
        }
    }
export default MyRoutines

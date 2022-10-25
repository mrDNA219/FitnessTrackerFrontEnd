// after logging in....lists all routines created by user
import {react, useState} from "react";


const MyRoutines = ({token, username}) => {
    const [myRoutines, setMyRoutines] = useState([]);
    const getMyRoutinesHelper = async (token, username) => {
        const results = await getRoutinesByUser(token, username);
        setMyRoutines(results)
        
    };
    console.log(myRoutines)
    if(myRoutines.length){
        return (
            <div className="container-allRoutines">
              {myRoutines.map((routine) => {
                const { id, creatorName, name, goal, activities } = routine;
        
                return (
                  <div key={id} className='container-singleRoutine'>
                    <hr></hr>
                    <h2>{name}</h2>
                    <p>Creator: {creatorName}</p>
                    <p>Goal: {goal}</p> 
                    <div className="container-allRoutineActivities">
                    {activities.map((activity) => {
                      return (
                        <div key={activity.id} className='container-singleRoutineActivity'>
                          <h3>Activity:</h3>
                          <p>Name: {activity.name}</p>
                          <p>Description: {activity.description}</p>
                          <p>Duration: {activity.duration}</p>
                          <p>Count: {activity.count}</p>
                        </div>
                      );
                    })}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        } else {
            return(
                <div className="no-routines-message">You have not yet created any routines!</div>
            )
        }
    }
export default MyRoutines

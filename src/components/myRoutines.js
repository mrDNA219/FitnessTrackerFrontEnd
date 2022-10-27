// after logging in....lists all routines created by user
import {react, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { getRoutinesByUser } from "../api";

const MyRoutines = ({token, myRoutines, getMyRoutinesHelper}) => {
  
  

    useEffect(() => {
      getMyRoutinesHelper();
    }, []);
    if(myRoutines.length){
        return (
          <div>
            <Link to='/createroutine' style={{display:"flex", justifyContent:"center", color:"blue"}} >Create New Routine</Link>
            <div className="container-allRoutines">
              <h2>My Routines:</h2>
              {myRoutines.map((routine) => {
                const { id, creatorName, name, goal, isPublic, activities} = routine;
        
                return (
                  <div key={id} className='container-singleRoutine'>
                    <hr></hr>
                    <h2>{name}</h2>
                    <p>Creator: {creatorName}</p>
                    <p>Goal: {goal}</p> 
                    <p>IsPublic: {isPublic.toString()}</p>
                    <Link to={`/routines/edit-routine/:${id}`}>Edit Routine</Link>
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

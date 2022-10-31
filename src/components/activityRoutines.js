import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import {activityRoutines} from '../api';

const ActivityRoutines = ({ activities }) => {
    const { activityId } = useParams();
    const [routines,setRoutines] = useState([])
    async function retrieveAllPublicRoutines() {        
        const results = await activityRoutines(activityId)
        setRoutines(results);
      }

      useEffect(()=>{
        retrieveAllPublicRoutines()
    },[activityId])

    return (
        <div className="container-allRoutines">
            <h2>All Routines Containing Activity:</h2>
            {routines.map((routine) => {
        const {activities, creatorId, creatorName, goal, id, isPublic, name} = routine;

        return (
            <div key={id} className='container-singleRoutine'>
              <hr></hr>
              <h2>{name}</h2>
              <p>Creator: {creatorName}</p>
              <p>Goal: {goal}</p>
              <h4>Activities</h4>
              <ul>
                    {
                        activities.map((activity) => {
                            const {name, description, duration, count, id} = activity;
                            return (
                                <li key={id}>
                                    <h3>{name}</h3>
                                    <p>Description: {description}</p>
                                    <p>Duration: {duration}</p>
                                    <p>Count: {count}</p>
                                </li>
                            )
                        })
                    }
                    </ul>


              </div>

        )

        

            })

        }



       </div>
    )

}
export default ActivityRoutines;
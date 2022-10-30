import {React, useState, useEffect} from "react";
import {addActivityToRoutine, getActivities} from '../api'
const AddActivity = ({routineId, setActivateAddActivity}) => {
    const [currentActivityId, setCurrentActivityId] = useState([]);
    const [count, setCount] = useState(0);
    const [duration, setDuration] = useState(0);
    const [allActivities, setAllActivities] = useState([]);
    
    
    async function getAllActivitiesHelper(){
      const results = await getActivities();
      setAllActivities(results)
    }
    useEffect(() => {
      getAllActivitiesHelper();
    }, []);
    
    async function joinActivityToRoutine(){
      const activityToAdd = {
        activityId: currentActivityId,
        count: count,
        duration: duration
      }
      await addActivityToRoutine(routineId, activityToAdd);
      
    }
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        joinActivityToRoutine();
        setActivateAddActivity(0);

      }}>
        <fieldset>
        <select id="activity-dropdown" onChange={e => setCurrentActivityId(e.target.value)}>
          <option>Select An Activity</option>
          {
            allActivities.map((activity) => {
              return <option key={activity.id} value={activity.id}>{activity.name}</option>
            })
          }
        </select>
        </fieldset>
        <input type="number" className="inputs" placeholder="Enter Count" onChange={(e) => setCount(e.target.value)}></input>
        <input type="number" className="inputs" placeholder="Enter Duration" onChange={(e) => setDuration(e.target.value)}></input>
        <button type="submit">Add Activity</button>
      </form>
    )
  }
  export default AddActivity
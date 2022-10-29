import react from "react";
const AddActivity = (routineId, activities, getMyRoutinesHelper) => {
    const [currentActivity, setCurrentActivity] = useState([]);
  
    const {id, count, duration } = currentActivity;
    console.log(activities)
    async function joinActivityToRoutine(){
      const activityToAdd = {
        activityId: id,
        count: count,
        duration: duration
      }
      await addActivityToRoutine(routineId, activityToAdd);
      getMyRoutinesHelper();
    }
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        joinActivityToRoutine();
      }}>
        <fieldset>
        <select id="activity-dropdown" value={currentActivity} onChange={e => setCurrentActivity(e.target.value)}>
          {
            activities.map((activity) => {
              return <option value={activity}>{activity.name}</option>
            })
          }
        </select>
        </fieldset>
        <button type="submit">Add Activity</button>
      </form>
    )
  }
  export default AddActivity
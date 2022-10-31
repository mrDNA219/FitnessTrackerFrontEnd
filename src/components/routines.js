// As any user on the Routines tab, I want to:

// see a list of all public routines showing:
// The routine name, goal, and creator's username
// A list of activities for the routine, including their name, description, and duration and/or count

// As a registered user on the My Routines tab, I want to:

// be shown a form to create a new routine

// the form should have text fields for name and goal
// for each routine which is owned by me I should

// be able to update the name and goal for the routine
// be able to delete the entire routine
// be able to add an activity to a routine via a small form which has a dropdown for all activities, an inputs for count and duration
// be able to update the duration or count of any activity on the routine
// be able to remove any activity from the routine
import { react } from "react";
import "../style.css";

const Routines = ({ routines }) => {
  return (
    <div className="container-allRoutines">
      <h2>All Public Routines:</h2>
      <p>Scroll on routine to see it's activities</p>
      {routines.map((routine) => {
        const { id, creatorName, name, goal, activities } = routine;

        return (
          <div key={id} className='container-singleRoutine'>
            
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
};
export default Routines;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { updateActivity } from '../api';
import "../style.css";


const EditActivity = ({ activities, retrieveAllActivities, navigate, token }) => {
  const { activityID } = useParams();
  console.log(activityID);
  if (activities.length) {
    const currentActivity = activities.filter(activity => activity.id === parseInt(activityID));

    // console.log(currentActivity)
    const { name, description } = currentActivity;

    const [newName, setNewName] = useState(name);
    const [newDescription, setNewDescription] = useState(description);


    async function editActivity() {
      const updatedActivity = {
        name: newName,
        description: newDescription,
        id: activityID
      }
    //   console.log("check", token)
      await updateActivity(token, updatedActivity)
      navigate('/activities')
      retrieveAllActivities
    }

    return (

      <div className="edit-main-div" >
        <form onSubmit={(e) => {
          e.preventDefault();
          editActivity();


        }}>
          <h1>Edit Activity</h1>

          <input type='text' className="inputs" placeholder={name} onChange={(e) => setNewName(e.target.value)}></input>
          <input type='text' className="inputs" placeholder={description} onChange={(e) => setNewDescription(e.target.value)}></input>
          <hr></hr>
          <button type="submit" name="edit-activity" >Submit Changes</button>
        </form>
      </div>
    )
  }
  return <h1>Activities Loading</h1>
}

export default EditActivity;
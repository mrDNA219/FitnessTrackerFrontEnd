// As an unregistered visitor on the Activities tab, I want to:

// see a list of all activities which have been created
// As a registered user on the Activities tab, I want to:

// be shown a form to create a new activity (by name and description)
// be shown an error if the activity already exists


import { react } from "react";
import { Link } from "react-router-dom";
import "../style.css";


const Activities = ({ activities, token}) => {
    return (
      <div>
        {
         token ? <Link to='/createactivity' style={{fontWeight:"bold", color:"#3244ac", textAlign:'center', width:'25%', position:"sticky", top:"9rem", fontFamily:"Courier New", fontSize:"1.5rem", textShadow:"-1px -1px 1px rgba(255, 255, 255, .1), 1px 1px 1px rgba(0, 0, 0, .5)" }} >Create New Activity</Link> : null

        }
      <div className="container-allActivities">
        {activities.map((activity) => {
          const { id, name, description } = activity;
  
          return (
            <div key={id} className='container-singleActivity'>
              
              <Link to={`/activities/routines/${id}`} style={{ color:"blue"}}><h4>{name}</h4></Link>
              <p>description: {description}</p>
              
              <p>
              {
         token ? <Link to={`/edit-activities/activities/${id}`} style={{ color:"blue"}} >Edit Activity</Link> : null

        }
              </p>
            </div>
          );
        })}
      </div>
      </div>
    );
  };
  export default Activities;
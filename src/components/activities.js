// As an unregistered visitor on the Activities tab, I want to:

// see a list of all activities which have been created
// As a registered user on the Activities tab, I want to:

// be shown a form to create a new activity (by name and description)
// be shown an error if the activity already exists

import { react } from "react";
import "../style.css";


const Activities = ({ activities }) => {
    return (
      <div className="container-allActivities">
        {activities.map((activity) => {
          const { id, name, description } = activity;
  
          return (
            <div key={id} className='container-singleActivity'>
              <hr></hr>
              <h2>{name}</h2>
              <p>description: {description}</p>
            </div>
          );
        })}
      </div>
    );
  };
  export default Activities;
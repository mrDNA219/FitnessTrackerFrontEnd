const baseURL = 'http://fitnesstrac-kr.herokuapp.com/api'

export const getRoutines = async () => {
    try{
        const response = await fetch(`${baseURL}/routines`, {
            headers: {
                'Content-Type': 'application/json'
              }
        });
        const results = await response.json();
        return results;
    } catch(error){
        console.error(error)
    }
}

export const getActivities = async () => {
  try{
      const response = await fetch(`${baseURL}/activities`, {
          headers: {
              'Content-Type': 'application/json'
            }
      });
      const results = await response.json();
      return results;
  } catch(error){
      console.error(error)
  }
}

export const registerUser = async (username, password) => {
    try {
      const response = await fetch(`${baseURL}/users/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
             username,
             password
        })
      })
      const result = await response.json();
      return result;
    } catch(error) {
      console.log('error registering user')
    }
  }
  
  export const loginUser = async (username, password) => {
    try {
      const response = await fetch(`${baseURL}/users/login`,{
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
      })
      
      const result = await response.json();
      
      return result;
      
    } catch(ex) {
      console.log('error logging in user')
    }
  }
  
  
  export const getUserDetails = async (token) => {
    try {
      const response = await fetch(`${baseURL}/users/me`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      })
      
      const result = await response.json();
      return result;
      
    } catch(ex) {
      console.log('error getting users details')
    }
  }
  export const getRoutinesByUser = async (token, username) => {
    try{
      const response = await fetch(`${baseURL}/users/${username}/routines`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    const result = await response.json();
    return result

    } catch(error){
      console.error("error getting routines by username")
    }
  }
  export const createRoutine = async (token, {name, goal, isPublic}) => {
    try {
      const response = await fetch(`${baseURL}/routines`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }, 
        body: JSON.stringify({
           name,
           goal,
           isPublic
        })
      });
      const result = await response.json();
      return result
    } catch (error) {
      console.error("error creating routine")
    }
  }
  export const updateRoutine = async ({token, name, goal, isPublic, id}) => {
    try {
      const response = await fetch(`${baseURL}/routines/${[id]}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          name,
          goal,
          isPublic
        })
      });
      const result = await response.json();
      return result
    } catch (error) {
      console.error('error updating routine')
    }
  }
  export const deleteRoutine = async (token, id) => {
    try {
      const response = await fetch(`${baseURL}/routines/${id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const result = await response.json();
      return result
    } catch (error) {
      console.error("error deleting routine")
    }
  }

  export const createActivity = async (token, {name, description}) => {
    try {
      const response = await fetch(`${baseURL}/activities`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }, 
        body: JSON.stringify({
           name,
           description
        })
      });
      const result = await response.json();
      return result
    } catch (error) {
      console.error("error creating activtity")
    }
  }

  export const updateActivity = async (token, { name, description, id } ) => {
    try {
      const response = await fetch(`${baseURL}/activities/${id}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
  
          name,
          description,
  
        })
      })
      const result = await response.json();
      return (result)
  
    } catch (error) {
      console.error('error updating activity')
    }
  }

  export const activityRoutines = async (activityId) => {
    try {
      const response = await fetch(`${baseURL}/activities/${activityId}/routines`, {
        headers: {
          'Content-Type': 'application/json'
        },
      })
      const result = await response.json();
      return result
    } catch (error) {
      console.log('error getting public routines')
    } 
  }
  export const addActivityToRoutine = async (routineId, {activityId, count, duration}) => {
    try {
      const response = await fetch(`${baseURL}/routines/${routineId}/activities`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          activityId: activityId,
          count: count,
          duration: duration
        })
      });
      const result = await response.json();
      return result
    } catch (error) {
      console.error("error adding activity to routine")
    }
  }
  export const updateRoutineActivity = async ({id, count, duration}) => {
    try {
      const response = await fetch(`${baseURL}/routine_activities/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
          count: count,
          duration: duration
        })
      });
      const result = await response.json();
      return result
    } catch (error) {
      console.error("error updating routine activity")
    }
  }
  export const deleteRoutineActivity = async (token, id) => {
    try {
      const response = await fetch(`${baseURL}/routine_activities/${id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const result = await response.json();
      return result
    } catch (error) {
      console.error("error deleting routine activity")
    }
  }
  
  
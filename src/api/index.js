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
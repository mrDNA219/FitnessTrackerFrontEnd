// displays info about site functionality
import react from "react";
const Home = () => {
  return (
    <div>
      <h1 className="welcome-message">Welcome to Fitness Trac.kr!</h1>
      <p className="home-p">This is an app for creating workout routines!</p>
      <p className="home-p">Please login/register to be able to create routines</p>
      <div style={{alignItems:'center', display:'flex', justifyContent:'center'}}className="image-container">
      <img className="home-image" src="https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"></img>
      </div>
    </div>
    
  );
};
export default Home;

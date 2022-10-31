// displays info about site functionality
import react from "react";
const Home = () => {
  return (
    <div className="home-container">
      <div className="welcome-message">
      <h1><span><img className="welcome-img"src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-weight-lifting-fitness-at-home-flaticons-lineal-color-flat-icons-2.png"></img>Welcome to Fitness Trac.kr!<img class="welcome-img"src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-weight-lifting-fitness-at-home-flaticons-lineal-color-flat-icons-2.png"></img></span></h1>
      </div>
      <p className="home-p">This is an app for creating workout routines!</p>
      <p className="home-p">Please login/register to be able to create routines</p>
      <div style={{alignItems:'center', display:'flex', justifyContent:'center'}}className="image-container">
      <div><img className="home-image" src="https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"></img></div>
      </div>
    </div>

  );
};
export default Home;

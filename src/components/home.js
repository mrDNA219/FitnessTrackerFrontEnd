// displays info about site functionality
import react from "react";
const Home = () => {
  return (
    <div>
      <h1 className="welcome-message">Welcome to Fitness Trac.kr!</h1>
      <p className="home-p">This is an app for creating workout routines!</p>
      <p className="home-p">Please login/register to be able to create routines</p>
      <div style={{alignItems:'center', display:'flex', justifyContent:'center'}}className="image-container">
        <img src="https://image.shutterstock.com/image-photo/closeup-weightlifter-clapping-hands-before-600w-461236648.jpg"></img>
      </div>
    </div>
    
  );
};
export default Home;

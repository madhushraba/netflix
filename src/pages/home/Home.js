import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
// import Login from "../login/Login";
// import Register from "../register/Register";

const Home = () => {
  return (
    <div className="home">
      <Navbar /> 
      <Featured/>
      <List/>
      <List/>
      <List/>
      
      <List/>
      {/* <Register/> */}
      {/* <Login/> */}
    </div>
  );
};

export default Home;
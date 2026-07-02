import {
  useEffect,
  useState
} from "react";
import Logout from "./Logout";
import Navbar from "./Navbar";
import home from "../assets/images/home_back.jpg"
import BudgetTracker from "./BudgetTracker";
import { useNavigate } from "react-router-dom";





function Home(){
   

   

    return (
        <div  >

        {/* <p> welcome to the home page {username}</p> */}
        
        {/* <div className="pt-32"></div> */}
        <BudgetTracker/>
        
        </div>
    )
}
export default Home;
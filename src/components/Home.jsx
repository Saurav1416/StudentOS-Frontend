import {
  useEffect,
  useState
} from "react";
import Logout from "./Logout";
import Navbar from "./Navbar";
import home from "../assets/images/home_back.jpg"
import BudgetTracker from "./BudgetTracker";



function Home(){

     const [username, setUsername] =
    useState("");

    useEffect(()=> {

        async function fetchuser(){
            const token = await localStorage.getItem('token')

            const response = await fetch( "http://localhost:3000",
                {
                    headers : {Authorization : `Bearer ${token}`}
                }
            )
            const data = await response.json()
            setUsername(data.username);
        }
        fetchuser()
    })

    return (
        <div className='h-screen w-full bg-zinc-700 '
         style={{ backgroundImage: `url(${home})` }}
        >

        {/* <p> welcome to the home page {username}</p> */}
        <Navbar/>
        <div className="pt-32"></div>
        <BudgetTracker/>
        
        </div>
    )
}
export default Home;
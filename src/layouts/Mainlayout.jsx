import { Outlet, useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar";
import {
  useEffect,
  useState
} from "react";

function Mainlayout (){
    const navigate = useNavigate()

     useEffect(()=> {

        async function fetchuser(){
            const token = await localStorage.getItem('token')

            const response = await fetch( "http://localhost:3000",
                {
                    headers : {Authorization : `Bearer ${token}`}
                }
            )
            const data = await response.json()
            if(!data.success){
                localStorage.removeItem("token");
                navigate("/login")
                alert("expired jwt removed from local storage")

            }
            
        }
        fetchuser()
    },[])

    return(
        <>
         <div className='min-h-screen
      bg-gradient-to-br from-[#2D2A7A] via-[#413C9B] to-[#5B57C7]
      px-6"  '>
        
        
        <Navbar/>

        <Outlet/>
        </div></>
    )
}

export default Mainlayout ;
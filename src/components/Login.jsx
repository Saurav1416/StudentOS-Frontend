import react, {useState} from 'react';
import {useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import background from "../assets/images/girl_cup.jpg";


function Login( ){
  const navigate = useNavigate();
const [username,setUsername] = useState("")
const [password,setPassword] = useState("")

const handlesubmit = async (e)=> {
    e.preventDefault()

    const response = await fetch ( "http://localhost:3000/login" ,
       { method: 'Post',

        headers : {
            "Content-Type": "Application/Json"

        },
        body :
         JSON.stringify({
          username,
          password})
       }

    )

    const data = await response.json()

    if( data.success) {
        localStorage.setItem("token",data.token)
        navigate('/')
    }else{
        alert('Wrong password')
    }


};

 return (
    <div className="bg-cover  flex  justify-between p-20 items-center  min-h-screen bg-gray-900 "
    
     style={{ backgroundImage: `url(${background})` }}>
        <div className=" absolute  inset-0 bg-black-900/40">

        </div>
        <div className="p- relative z-index-10  rounded-md border border-white/20 bg-white/10 backdrop-blur-lg shadow-2xl">
            <form onSubmit={handlesubmit}  className=" inset-0 flex flex-col space-y-4  text-white p-20 text-center">< h1>Welcome Back</h1>
        <input type="text" className="bg-transparent text-white placeholder-white/70  pl-3 bg-blue-200  border border-white/30 focus:border-white hover:border-white rounded-full p-1 mt-10 "
        placeholder="Username"
        onChange={(e)=> setUsername(e.target.value)}/>

         <input type="password"
         className=" border border-white/30 placeholder-white/70  hover:border-white bg-transparent pl-3 p-1 rounded-full mb-10  pr-13 text-white mx-0 "
        placeholder="Password"
        onChange={(e)=> setPassword(e.target.value)}/>

        <button className="bg-white text-black font-semibold  border-1 border-transparent  
  hover:border-black 
  hover:border-1 
  hover:cursor-pointer rounded-full p-1">LOGIN</button>

        <Link to="/signup" className="text-center">
            Create Account
            </Link>
        </form>
        </div>

        
        
    </div>
    
 )
}

export default Login;

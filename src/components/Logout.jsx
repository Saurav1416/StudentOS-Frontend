import { useNavigate } from "react-router-dom";


function Logout({css}){
    const navigate = useNavigate();
    async function sam(){
    

     localStorage.removeItem('token');

     navigate('/login')
   }


   return (

    
       <button onClick={sam} className={css}>
        Logout 
       </button>
       
       
       
   )

}

export default Logout;
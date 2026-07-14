import { createPortal } from "react-dom";

function Portalsubject({semester,menuPos,setispop,sub,fetchsub}){

  const deletecat = async ()=> {
    
    const token = await localStorage.getItem('token')
     const response = await fetch(`http://localhost:3000/subject/${semester}`,
      {
        method: "DELETE",
        headers: {"Content-Type":"application/json", Authorization:`Bearer ${token}`},
        body: JSON.stringify({
          name:sub.name
          
        })
      } )
      const data = await response.json()
      if(!data.success){
        alert(data.message)
      }
      await fetchsub()
      alert(data.message)

      
  }

    return (
        createPortal(
    <div
      style={{
        position: "fixed",
        top: menuPos.top,
        left: menuPos.left,
      }}
      className="z-[9999] w-28 rounded-lg bg-white/10 border border-white/20 backdrop-blur-lg shadow-xl flex flex-col overflow-hidden"
    >
      <button
        
        className="px-3 py-2 text-white hover:bg-gray-600"
      >
        More
      </button>

      <button
        onClick={() =>{ 
          deletecat();
          setispop(false)}}
        className="px-3 py-2 text-white hover:bg-gray-600"
      >
        Delete
      </button>
    </div>,
    document.getElementById("am")
  )
    )
}
export default Portalsubject;
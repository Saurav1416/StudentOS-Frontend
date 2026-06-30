import { createPortal } from "react-dom";

function portal({menuPos,setispop,bam,category,fetchCategories}){

  const deletecat = async ()=> {
    
    const token = await localStorage.getItem('token')
     const response = await fetch("http://localhost:3000/budget",
      {
        method: "DELETE",
        headers: {"Content-Type":"application/json", Authorization:`Bearer ${token}`},
        body: JSON.stringify({
          name:category.name,
          spent:category.spent
        })
      } )
      const data = await response.json()
      if(!data.success){
        alert("data.message")
      }
      fetchCategories()
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
        onClick={() => {
          bam();
          setispop(false);
        }}
        className="px-3 py-2 text-white hover:bg-gray-600"
      >
        Clear
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
export default portal;
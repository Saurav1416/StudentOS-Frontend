import { MoreHorizontal } from 'lucide-react'
import {useState } from 'react'
import { createPortal } from "react-dom";
import Portal from './Portal';

function BudgetCategory({ category,fetchCategories }) {

  const [spent,setspent] = useState("")
  const [ispop, setispop]= useState(false)
  const [menuPos, setMenuPos] = useState({
  top: 0,
  left: 0,
});
 const handleMenu = (e) => {                     // react passes synthetic event directly into func so if fucn expect it passes it without doing (e)=> handleMenu(e)
  const rect = e.currentTarget.getBoundingClientRect();   //provides position of elt  when event fires (like click)

  setMenuPos({
    top: rect.bottom + 4,
    left: rect.right-110 // menu width ≈ 110px
  });

  setispop((prev) => !prev);
};

  const sam = async() => {
     const token = await localStorage.getItem('token')
    
    const a = Number(category.spent) + Number(spent)
    try {
       const response = await fetch('http://localhost:3000/budget',
        {
          method: 'PATCH',
          headers : {"Content-Type" : "application/json",Authorization : `Bearer ${token}`},
          body: 
            JSON.stringify(
              {
                name:category.name,
                spent:a
              }
            )
          
        }
       )
       const data = await response.json()
       if( data.success){
        alert("Spending Updated")

       }
       else{
        alert("Spendings not updated try again")
       }
       

    }catch(err){
      alert(err)
    }
    finally{
      
      fetchCategories()
      setspent("")
    }
  
    
  }
   const bam = async() => {

     const token = await localStorage.getItem('token')

    const a=0;
      const response = await fetch("http://localhost:3000/budget",
        {
          method: "PATCH",
          headers : { "Content-Type": "application/json", Authorization : `Bearer ${token}`},
          body: JSON.stringify({
            name : category.name,
            spent:  Number(a)
          
          })
        }
      )
      const data = await response.json()
      if( data.success){
        fetchcategories()
        alert(`${category.name} reset to 0`)
      }else{
        alert(


          "err"
        )
      }

    
   }
  
  return (
    <div className="
      relative
      overflow-hidden
      rounded-3xl
      border border-white/20
      bg-white/10
      backdrop-blur-lg
      shadow-xl
      p-6
      transition-all
      duration-300
      hover:bg-white/15
      hover:scale-[1.02]
      hover:shadow-2xl
    ">

      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
<div className="relative z-10  ">
       <div className= "flex  justify-between"> 
       
          <h3 className="text-xl font-bold text-white">
          {category.name}
            </h3>
          
          
          <div>
            <button onClick={handleMenu }
          >
              <MoreHorizontal/>
          </button>
          {ispop && <Portal menuPos={menuPos} setispop={setispop} bam={bam} category={category} fetchCategories={fetchCategories}/>
  }
          </div>
           {/* <button onClick={bam}
            className="text-white/70 hover:cursor-pointer hover:scale-[1.04] hover:text-white hover:font-bold"
            >
              Clear
          </button >  */}
          </div>
        
         <div className="mt-4 flex justify-between items-center"> <span className="text-white/70 text-sm ">
            Total Spent
          </span>

          <input className="text-xl  
          w-24       
    font-bold   
    text-white
    px-2 py-1         
    rounded-md        
    focus:ring-0
    hover:cursor-text
    text-center 
    focus:ring-0
    focus:outline-none
    hover:cursor-text  text-center"
          placeholder={` ₹ ${category.spent}`}
          value={spent}
          
          onChange= { (e)=>setspent(e.target.value)} // this set spent as string so we do number(spent) when sending to backend

          
          />

          <button  onClick={sam}
          className="hover:font-bold hover:cursor-pointer text-white  hover:scale-[1.04]"
           type="submit">
            ADD
          </button></div>
           
         
       
      </div>

    </div>
    
  );
}

export default BudgetCategory;
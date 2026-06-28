import { useEffect, useState } from "react";
import BudgetCategory from "./BudgetCategory";

function BudgetTracker() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [spent ,setspent] =useState('')

  async function fetchCategories() {
     const token = await localStorage.getItem('token')
    try {
      const res = await fetch("http://localhost:3000/budget",
        {
          headers: {Authorization : `Bearer ${token}`}
        }
      );
      const data = await res.json();

      setCategories(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  async function addCategory() {
    if (!newCategory.trim()) return;
     const token = await localStorage.getItem('token')

    const category = {
      
      name: newCategory,
      spent: spent?spent:0,
    };

    try {
      const response = await fetch("http://localhost:3000/budget", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",Authorization : `Bearer ${token}`
        },
        body: JSON.stringify(category),
      });

      setNewCategory("");
      setspent("")

      // refresh list
      const data = await response.json()
      if( data.success) {
         fetchCategories();
         
          

      }else {
        alert(data.message)
      }
      
    
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className="p-6">
      <div className="flex gap-3 mb-5">
        <input
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="New Category"
          className="px-3 py-2 rounded-lg text-black border border-white/20 backdrop-blur-lg shadow-2xl text-white font-bold hover:scale-[1.02]"
        />
        <input
          onChange={(e)=> setspent(e.target.value)}
          value={spent}
          placeholder="Spending"
          className="px-3 py-2 rounded-lg text-black border border-white/20 backdrop-blur-lg shadow-2xl text-white font-bold hover:scale-[1.02]"
         / >
          
          
        
        <button
          onClick={addCategory}
          className="bg-purple-500 px-4 rounded-lg text-white text-2xl text-center hover:scale-[1.04] hover:bg-purple-700 hover:font-bold"
        >
          +
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {categories.map((cat,i) => (
          <BudgetCategory
            key={i}
            category={cat}
            fetchcategories={()=>fetchCategories()}
          />
        ))}
      </div>
    </div>
  )
}

export default BudgetTracker;
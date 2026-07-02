import SubjectCard from "./SubjectCard";
import { useState,useEffect } from "react";

export default function SubjectTracker() {
    const [allsub,setallsub] = useState([])
    const [semester,setsemester]= useState(Number(1))

    const fetchsub= async ()=> {
        const token = await localStorage.getItem("token")
        
        const response = await fetch (`http://localhost:3000/subject/${semester}`,
            {
                headers: {"Content-Type":"application/json", Authorization:`Bearer ${token}`}
            }
        );
        const data = await response.json();
        if(!data.success){
            alert(data.message);
            return;
        }
            setallsub(data.subjects)    //if not using prev state then no need for (prev)=> ...  | Also here states changes so complete component renders again and screen data get updated
    }                                  //data.subject is an array of objects ( subject are stored as object)
    // const semesterchange = async ()=> {
    //     setsemester()
    //     fetchsub()
    // }


    useEffect(()=>{

        fetchsub()
    },[])

  return (
    <div className="px-6 mt-10">

      {/* Filters */}

      <div className="flex justify-between mb-10">

        <div className="flex gap-5">

          <button className="glassButton">
            All Subjects
          </button>

          <button className="glassButton">
            Semester 1
          </button>

        </div>

        <div className="flex gap-4">

          <input
            placeholder="Search Subject..."
            className="
            w-80
            rounded-2xl
            border
            border-white/10
            bg-white/10
            px-5
            py-3
            text-white
            placeholder:text-gray-400
            outline-none
            "
          />

          <button
            className="
            h-14
            w-14
            rounded-2xl
            bg-gradient-to-r
            from-violet-500
            to-fuchsia-500
            text-3xl
            "
          >
            +
          </button>

        </div>

      </div>

      {/* Cards */}

      <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-7">

       {allsub.map( (sub,index)=>(                          //sub is an object 
        <SubjectCard sub={sub} key={index} />
       )
    )}
       
        {/* <SubjectCard />
        <SubjectCard />
        <SubjectCard />
        <SubjectCard />
        <SubjectCard />
        <SubjectCard /> */}

      </div>

    </div>
  );
}




//   async function fetchSubject(){
    //     const token = await localStorage.getItem('token')
    //     try{
    //     const response = await fetch( ('http://localhost:/8000/subject'),
    //     {
    //         headers: {"Content-Type": "application/json", Authorization:`Bearer ${token}`}
    //     })
    //     const data = await response.json();
    //     setsubject(data)

    //     }catch(err){
    //         console.log(err)
    //     }

    // }
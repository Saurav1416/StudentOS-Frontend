import { Users, UserX, Database } from "lucide-react";
import { MoreHorizontal } from "lucide-react";

export default function SubjectCard( {sub,fetchsub,semester}) {

 const incrementabs= async()=>{
  const token = localStorage.getItem("token")
    const response = await fetch(`http://localhost:3000/subject/${semester}`,
      {
        method:'PATCH',
        headers: { "Content-Type": "application/json", Authorization:`Bearer ${token}`},
        body: JSON.stringify({
          name:sub.name,
          operation:"incrementabs"
        })
      }
    )
    const data = await response.json();
    if(!data.success){
      alert( `${data.message}`)
    }else{
       await fetchsub()
      alert(`incremeted absents in ${sub.name}`)
    }
 }
  return (
    <div
      className="
      group
      rounded-3xl
      border border-white/10
      bg-white/10
      backdrop-blur-xl
      p-6
      transition-all
      
      hover:border-violet-400/40
      hover:shadow-[0_0_30px_rgba(168,85,247,.25)]
      cursor-pointer
      "
    >
      {/* Top */}

      <div className="flex justify-between">

        <div className="flex gap-4">

          <div
            className="
            w-16
            h-16
            rounded-2xl
            bg-gradient-to-br
            from-violet-500/40
            to-blue-500/20
            flex
            items-center
            justify-center
            "
          >
            <Database size={30} className="text-violet-300" />
          </div>

          <div>

            <h2 className="text-2xl font-bold text-white">
             {sub.name}
            </h2>

            <p className="text-gray-300 mt-1">
              {sub.code}
            </p>

          </div>

        </div>

        <MoreHorizontal
          className="text-white/60 group-hover:text-white"
          size={26}
        />

      </div>

      {/* Divider */}

      <div className="my-6 border-t border-white/10"></div>

      {/* Bottom */}

      <div className="flex justify-between items-center">

        <div className="flex gap-10">

          <div className="flex items-center gap-3">

            <Users className="text-cyan-300" />

            <div>

              <p className="text-gray-400 text-sm">
                Total Lectures
              </p>

              <h3 className="text-3xl font-bold text-white">
                {sub.totalAttendance}
              </h3>

            </div>

          </div>

          <div className="w-px bg-white/10"></div>

          <div className="flex items-center gap-3">

            <UserX className="text-pink-300" />

            <div>

              <p className="text-gray-400 text-sm">
                Absent
              </p>

              <h3 className="text-3xl font-bold text-pink-300">
                {sub.absent}
              </h3>

            </div>

          </div>

        </div>

        <button
          className="
          h-14
          w-14
          rounded-full
          bg-gradient-to-r
          from-violet-500
          to-fuchsia-500
          text-3xl
          text-white
          transition
          hover:scale-110
          "

          onClick={incrementabs}
        >
          +
        </button>

      </div>

    </div>
  );
}
 import { Link } from "react-router-dom";
 import { ArrowLeft } from "lucide-react";
import Navbar from "./Navbar";
// const SubjectTracker= ()=>{

//     return (

//         <div>

//         </div>
//     )
// }

// export default SubjectTracker;

export default function DetailedSub() {
  return (
    <main className="min-h-screen   bg-gradient-to-br from-[#2D2A7A] via-[#413C9B] to-[#5B57C7]
      px-6 -8 py-4 text-white">

        <Navbar/>
       <Link 
  to="/" 
  className="flex items-center gap-2 text-white hover:underline"
>
  <ArrowLeft className="w-5 h-5" />
  <span>Back to Subjects</span>
</Link>


      {/* SUBJECT HEADER */}

      <section className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 mt-5">

        <div className="flex justify-between items-start">

          <div>

            <h1 className="text-4xl font-bold">
              Database Management Systems
            </h1>

            <p className="text-gray-400 mt-2">
              DBMS101 • Semester 3
            </p>

          </div>

          <div className="text-right">

            <p className="text-gray-400">
              Credits
            </p>

            <h2 className="text-5xl font-bold text-violet-300">
              4
            </h2>

          </div>

        </div>

      </section>



      {/* LECTURE STATS */}

      <section className="grid md:grid-cols-2 gap-6 mt-8">

        <div className="rounded-3xl bg-white/5 border border-white/10 p-6">

          <p className="text-gray-400">
            Total Lectures
          </p>

          <h2 className="text-5xl font-bold mt-2">
            48
          </h2>

        </div>

        <div className="rounded-3xl bg-red-500/10 border border-red-300/20 p-6">

          <p className="text-red-300">
            Lectures Absent
          </p>

          <h2 className="text-5xl font-bold mt-2">
            6
          </h2>

        </div>

      </section>



      {/* MARKS TABLE */}

      <section className="rounded-3xl bg-white/5 border border-white/10 p-8 mt-8">

        <h2 className="text-2xl font-semibold mb-8">
          Marks Details
        </h2>

        <div className="grid grid-cols-7 text-center">

          <div></div>

          <div>Quiz 1</div>

          <div>Quiz 2</div>

          <div>Midterm</div>

          <div>Endterm</div>

          <div>Assignment</div>

          <div>Viva</div>


          {/* MAX SCORE */}

          <div className="font-semibold text-left py-6">
            Max Score
          </div>

          {[10,10,30,40,10,10].map((item)=>(
            <div className="py-6">{item}</div>
          ))}


          {/* YOUR SCORE */}

          <div className="font-semibold text-left py-6">
            Your Score
          </div>

          {[8,7,24,32,9,9].map((item)=>(
            <div className="py-4">

              <input

                defaultValue={item}

                className="
                w-20
                rounded-xl
                bg-[#102347]
                border
                border-white/10
                text-center
                py-2
                outline-none
                "

              />

            </div>
          ))}



          {/* PERCENTAGE */}

          <div className="font-semibold text-left py-6">
            Percentage
          </div>

          {["80%","70%","80%","80%","90%","90%"].map((item)=>(
            <div className="py-6 text-green-400 font-semibold">
              {item}
            </div>
          ))}

        </div>

      </section>



      {/* SUMMARY */}

      <section className="grid md:grid-cols-3 gap-6 mt-8">

        <div className="rounded-3xl bg-white/5 border border-white/10 p-8">

          <p className="text-gray-400">
            Overall Percentage
          </p>

          <h2 className="text-5xl mt-3 font-bold text-violet-300">
            80%
          </h2>

        </div>

        <div className="rounded-3xl bg-white/5 border border-white/10 p-8">

          <p className="text-gray-400">
            Total Obtained
          </p>

          <h2 className="text-5xl mt-3 font-bold">
            89 / 110
          </h2>

        </div>

        <div className="rounded-3xl bg-white/5 border border-white/10 p-8">

          <p className="text-gray-400">
            Grade
          </p>

          <h2 className="text-5xl mt-3 font-bold text-green-400">
            A
          </h2>

        </div>

      </section>

    </main>
  );
}
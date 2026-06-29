import { createPortal } from "react-dom";
function portal({menuPos,setispop,bam}){

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
        onClick={() => setispop(false)}
        className="px-3 py-2 text-white hover:bg-gray-600"
      >
        Close
      </button>
    </div>,
    document.getElementById("am")
  )
    )
}
export default portal;
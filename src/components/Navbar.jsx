import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MoreHorizontal } from "lucide-react";
import Logout from "./Logout";
import { createPortal } from "react-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className=" top-0 left-0 w-full z-50 px-15 py-4">
      <div className="grid grid-cols-3 items-center rounded-3xl border border-white/20 bg-white/10 backdrop-blur-lg shadow-2xl px-8 py-3">

        {/* Left Section */}
        <div className="justify-self-start flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-xl">
            F
          </div>

          <h1 className="text-2xl font-bold text-white">
            Overall App
          </h1>
        </div>

        {/* Center Section */}
        <div className="justify-self-center flex items-center gap-14 text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-purple-300 font-semibold"
                : "text-white hover:text-purple-300 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/subject"
            className={({ isActive }) =>
              isActive
                ? "text-purple-300 font-semibold"
                : "text-white hover:text-purple-300 transition"
            }
          >
           Subjects
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? "text-purple-300 font-semibold"
                : "text-white hover:text-purple-300 transition"
            }
          >
            Profile
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-purple-300 font-semibold"
                : "text-white hover:text-purple-300 transition"
            }
          >
           Subjects
          </NavLink>
        </div>

        {/* Right Section */}
        <div className="justify-self-end relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-white hover:text-purple-300 transition"
          >
            <MoreHorizontal size={30} />
          </button>

          {showMenu && createPortal(
            <div className="absolute top-26 right-8 z-50 w-56 overflow-hidden rounded-2xl border border-white/20 bg-white/20 backdrop-blur-lg shadow-2xl ">
              <button className="w-full px-5 py-4 text-left text-white hover:bg-white/10 transition">
                Settings
              </button>

              <button className="w-full px-5 py-4 text-left text-white hover:bg-white/10 transition">
                Theme
              </button>

              <Logout css="w-full px-5 py-4 text-left text-red-300 hover:bg-white/10 transition" />

            </div>,document.getElementById("portal-root")
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
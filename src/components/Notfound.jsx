
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center
      bg-gradient-to-br from-[#2D2A7A] via-[#413C9B] to-[#5B57C7]
      px-6"    
    >
      <div
        className="max-w-lg w-full rounded-3xl
        border border-white/20
        bg-white/10
        backdrop-blur-xl
        shadow-2xl
        p-10
        text-center"
      >
        <h1 className="text-8xl font-extrabold text-white">404</h1>

        <h2 className="mt-4 text-3xl font-bold text-white">
          Page Not Found
        </h2>

        <p className="mt-4 text-white/70 leading-relaxed">
          Oops! The page you're looking for doesn't exist or may have been
          moved.
        </p>

        <Link
          to="/"
          className="inline-block mt-8
          rounded-xl
          bg-purple-600
          px-6 py-3
          text-white
          font-semibold
          transition-all
          duration-300
          hover:bg-purple-500
          hover:scale-105"
          
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
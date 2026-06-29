import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from "./components/Login";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import  Signup  from "./components/Signup";
import NotFound from "./components/Notfound";
import Mainlayout from "./layouts/Mainlayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<Login />}
        />
        <Route path="/signup" element={<Signup/>} />

         <Route path="/" element={<Mainlayout />}>
          <Route index element= {
            <ProtectedRoute>
            <Home/>
            </ProtectedRoute>}/>
           <Route path="*" element={
          <ProtectedRoute>
            <NotFound/>
            </ProtectedRoute>}/>
             </Route> 
        {/*  instead of making mainlayout and parent and child route we can also make sibling route and apply protected route to them so they redirect to /login  */}
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
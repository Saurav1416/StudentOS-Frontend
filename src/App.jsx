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
import SubjectDetails from "./components/SubjectTracker";
import SubjectTraker from "./components/SubjectTracker";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<Login />}
        />
        <Route path="/signup" element={<Signup/>} />

         <Route path="/" element={ <ProtectedRoute><Mainlayout />  </ProtectedRoute>}>
          <Route index element= {
            
            <Home/>}/>
            
           <Route path="*" element={
          
            <NotFound/>}/>
            <Route path="/subject" element={<SubjectTraker/>}/>
             </Route> 
        {/*  instead of making mainlayout and parent and child route we can also make sibling route and apply protected route to them so they redirect to /login  */}
        

       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
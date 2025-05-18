import { Fragment } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthForm from "./Pages/AuthForm";
import Home from "./Pages/Home";
const App = () => {
  return (
   
      <Router>
        <Routes>
            <Route path="/" element={<AuthForm/>}/>
            <Route path="/home" element={<Home/>}/>
        </Routes>
      </Router>

    
  )
};

export default App
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/Sign-Up";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";
import Header from "./components/Header";


function App() {
  return (
    <div>
     <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        
        <Route path="/Profile" element={<Profile/>}/>

        <Route path="/sign-in" element={<SignIn/>}/>

        <Route path="/sign-up" element={<SignUp/>}/>

        <Route path="/forgot-password" element={<ForgotPassword/>}/>

        <Route path="/offers" element={<Offers/>}/>

        
      </Routes>
     </Router>
    </div>
  );
}

export default App;

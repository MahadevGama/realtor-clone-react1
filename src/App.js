import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/Sign-Up";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CreateListing from "./pages/CreateListing";


function App() {
  return (
    <div>
     <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="/Profile" element={<PrivateRoute/>}>

        <Route path="/Profile" element={<Profile/>}/>

        </Route>
        

        <Route path="/SignIn" element={<SignIn/>}/>

        <Route path="/sign-up" element={<SignUp/>}/>

        <Route path="/forgot-password" element={<ForgotPassword/>}/>

        <Route path="/Offers" element={<Offers/>}/>
        <Route path="/create-listing" element={<CreateListing/>}/>

        
      </Routes>
     </Router>

     <ToastContainer
         position="bottom-center"
         autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
       theme="dark"
       />

     
    </div>
  );
}

export default App;

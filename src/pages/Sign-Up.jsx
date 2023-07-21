import React, { useState } from 'react'
//import {AiFillEyeInvisible,AiFillEye} from "react-icon/Ai"
import { AiFillEyeInvisible,AiFillEye } from "react-icons/ai";
import {Link} from "react-router-dom";
import OAuth from '../components/OAuth';
import {getAuth,createUserWithEmailAndPassword,updateProfile} from "firebase/auth";
import {db} from "../firebase";
import { serverTimestamp, setDoc,doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


export default function SignUp() {
  const[showPassword,setShowPassword] =useState(false);
  const[formData,setFormData] =useState({
    name:"",
    email:"",
    password: '',
  });



  const{name,email,password}=formData;
  const navigate=useNavigate();

  function onChange(e){
   // console.log(e.target.value);
   setFormData((prevState)=>({
    ...prevState,
    [e.target.id]: e.target.value,
   }));

  }

 async function onSubmit(e){
   e.preventDefault();

  try {

    const auth =  getAuth();
    const userCredential= await createUserWithEmailAndPassword(
      auth,
      email,
      password);


    updateProfile(auth.currentUser,{
      displayName:name,
    })

    const user = userCredential.user;
    const formDataCopy={...formData};
    delete formDataCopy.password;
    formDataCopy.timestamp=serverTimestamp();

    await setDoc(doc (db,"users",user.uid),formDataCopy);
    toast.success("signup was successful");
    navigate("/");
   // console.log(user);
    
  } catch (error) {
   // console.log(error);
   toast.error("something went wrong with the registration")
    
  }

  }
  return (
    
      <section>
        <h1 className='text-3xl text-center mt-6 font-bold'>Sign up</h1>
        <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
          <div className='md:w-[67%] lg:w-[50%] mb-12 md:m-6'>
            <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80" alt="key" className='w-full rounded-2xl' />
          </div>
          <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-14'>
            
              <form onSubmit={onSubmit}>
              <input className=' mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-red-500 rounded transition ease-in-out' 
              type="name" 
              id='name'
              value={name}
              onChange={onChange}
              placeholder=' Full Name'/>

              <input className=' mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' 
              type="email" 
              id='email'
              value={email}
              onChange={onChange}
              placeholder='Email address'/>


              <div className="relative mb-6">

              <input className=' w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' 
              type={showPassword ? "text" : "password"} 
              id='password'
              value={password}
              onChange={onChange}
              placeholder='Password'/>

             {showPassword ? (<AiFillEyeInvisible  className="absolute right-3 top-3 text-xl cursor-pointer" onClick={()=>setShowPassword((prevState)=>!prevState)} />):(<AiFillEye  className="absolute right-3 top-3 text-xl cursor-pointer" onClick={()=>setShowPassword((prevState)=>!prevState)}/>)}
              </div>
              <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
                <p className='mb-6'> Have an account?
                  <Link to="/signIn" className='text-red-600 hover:text-green-500 transition duration-200 ease-in-out ml-2'>SIGN IN</Link>
                </p>
                <p>
                  <Link to="/forgot-password" className='text-blue-600 hover:text-green-500 transition duration-200 ease-in-out '>Forgot Password?</Link>
                </p>
              </div>
            
            <button className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded-md shadow-md hover:bg-blue-900 transition duration-1000 ease-in-out hover:shadow-lg active:bg-green-300' type="submit">sign Up</button>
          <div className='my-4 flex items-center before:border-t  before:flex-1  before:border-gray-800 after:border-t after:flex-1 after:border-gray-800'>
            <p className='text-center font-bold mx-4'>OR</p>
          </div>
          <OAuth/>
          </form>
          </div>
        </div>
      </section>
  
  )
}

import React, { useState } from 'react'
//import {AiFillEyeInvisible,AiFillEye} from "react-icon/Ai"
//import { AiFillEyeInvisible,AiFillEye } from "react-icons/ai";
import {Link} from "react-router-dom";
import OAuth from '../components/OAuth';
import { toast } from 'react-toastify';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

export default function ForgotPassword() {
  //const[showPassword,setShowPassword] =useState(false);
  const[email,setEmail] =useState("");

 // const{email,password}=formData;

 {/* function onChange(e){
   // console.log(e.target.value);
   setFormData((prevState)=>({
    ...prevState,
    [e.target.id]: e.target.value,
   }));*/}

   function onChange(e){
    setEmail(e.target.value);

  }

  async function onSubmit(e){
    e.preventDefault();
    try {

      const auth=getAuth();

      await sendPasswordResetEmail(auth,email);

      toast.success("Email sent successfully")


      
    } catch (error) {

      toast.error("could not send reset password")
      
    }

  }
  return (
    
      <section>
        <h1 className='text-3xl text-center mt-6 font-bold'>Forgot Password</h1>
        <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
          <div className='md:w-[67%] lg:w-[50%] mb-12 md:m-6'>
            <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80" alt="key" className='w-full rounded-2xl' />
          </div>
          <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-14'>
            
              <form onSubmit={onSubmit}>
              <input className=' mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' 
              type="email" 
              id='email'
              value={email}
              onChange={onChange}
              placeholder='Email address'/>

            {/* <div className="relative mb-6">

             <input className=' w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' 
              type={showPassword ? "text" : "password"} 
               id='password'
               value={password}
               onChange={onChange}
               placeholder='Password'/>

              {showPassword ? (<AiFillEyeInvisible  className="absolute right-3 top-3 text-xl cursor-pointer" onClick={()=>setShowPassword((prevState)=>!prevState)} />):(<AiFillEye  className="absolute right-3 top-3 text-xl cursor-pointer" onClick={()=>setShowPassword((prevState)=>!prevState)}/>)}
              </div>*/}


              
              <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
                <p className='mb-6'>Don't have an account?
                  <Link to="/sign-up" className='text-red-600 hover:text-green-500 transition duration-200 ease-in-out ml-2'>Register</Link>
                </p>
                <p>
                  <Link to="/signIn" className='text-blue-600 hover:text-green-500 transition duration-200 ease-in-out '>sign in instead</Link>
                </p>
              </div>
            
            <button className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded-md shadow-md hover:bg-blue-900 transition duration-1000 ease-in-out hover:shadow-lg active:bg-green-300' type="submit">send reset password</button>
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
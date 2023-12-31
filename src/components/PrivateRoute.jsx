import React from 'react'
import { Outlet ,Navigate} from 'react-router-dom';
import { useAuthStatus }from '../Hooks/useAuthStatus';
import Spinner from './Spinner';

export default function PrivateRoute() {
  //  const loggedIn=false;
  const {loggedIn,checkingStatus}=useAuthStatus();
  if(checkingStatus){
   return <Spinner/>
  }
  return loggedIn ?  <Outlet/> : <Navigate to="/signIn" />;
}

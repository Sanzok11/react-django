import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const PrivateRoutes = () => {
    let {user} = useContext(AuthContext); 
    console.log(user);

    return( 
      user ? <Outlet /> : <Navigate to='/' />
)}


  export default PrivateRoutes;
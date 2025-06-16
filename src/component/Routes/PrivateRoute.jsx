import React, { use } from 'react';

import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import Loading from '../pages/Loading';
const PrivateRoute = ({children}) => {

const {user , loading} = use(AuthContext)
    const location = useLocation()

    if(loading) {
        return <Loading></Loading>
    }

if(!user){
    return <Navigate to='/login' state={{from : location}}></Navigate>
}





    return children
};

export default PrivateRoute;
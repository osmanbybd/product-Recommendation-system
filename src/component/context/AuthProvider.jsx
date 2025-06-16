import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/fiirebase.init';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';

const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null)
    const [loading , setLoading] = useState(true)
     const provider = new GoogleAuthProvider()


const signUpNow = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
}


const loginUser = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
}


const updateUser = (updateDate) =>{
    return updateProfile(auth.currentUser, updateDate)
}



const userLogOut = () =>{
    return signOut(auth)
}

const googlLogin = () =>{
    return signInWithPopup(auth, provider)
}




useEffect(() =>{

    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
        setLoading(false)
        console.log(currentUser)
    })


    return () =>{
        unSubscribe()
    }

} ,[])



    const userInfo ={
        signUpNow,
        updateUser,
        loginUser,
        user,
        loading,
        setUser,
        userLogOut,
        googlLogin
    }
    
    return <AuthContext value={userInfo}>
        {children}
    </AuthContext>
};

export default AuthProvider;
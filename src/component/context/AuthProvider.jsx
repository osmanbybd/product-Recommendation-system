import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, getIdToken, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/fiirebase.init';


const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null)
    const [loading , setLoading] = useState(true)
   


const signUpNow = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}


const loginUser = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}


const updateUser = (updateDate) =>{
    setLoading(true)
    return updateProfile(auth.currentUser, updateDate)
}



const userLogOut = () =>{
    setLoading(true)
    return signOut(auth)
}

const googlLogin = (provider) =>{
    setLoading(true)
    return signInWithPopup(auth, provider)
}




useEffect(() =>{

    const unSubscribe = onAuthStateChanged(auth, async(currentUser) =>{
        setUser(currentUser)
        setLoading(false)
        console.log(currentUser)


        if(currentUser){
            const token = await getIdToken(currentUser)
            localStorage.setItem('accessToken', token)
        }else{
            localStorage.removeItem('accessToken')
        }
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
    
    return <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;
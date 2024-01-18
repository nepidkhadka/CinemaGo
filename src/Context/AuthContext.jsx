import { useContext, createContext, useState,useEffect } from "react";
import {signInWithEmailAndPassword, signOut, onAuthStateChanged, createUserWithEmailAndPassword} from "firebase/auth"
import {auth, db} from "../Services/firebase"

const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{
    const [user, setuser] = useState(["ram"]);

    const signup = (email, password)=>{
        createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = (email, password)=>{
        return signOut(auth)
    }

    useEffect(()=>{

    })

    return(
        <AuthContext.Provider value={{user,login, signup, logout}}>
        {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = ()=>{
    return(
        useContext(AuthContext)
    )
}

export default AuthContext;
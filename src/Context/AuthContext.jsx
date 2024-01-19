import { useContext, createContext, useState,useEffect } from "react";
import {signInWithEmailAndPassword, signOut, onAuthStateChanged, createUserWithEmailAndPassword} from "firebase/auth"
import {auth, db} from "../Services/firebase"
import { doc, setDoc } from "firebase/firestore";


const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{
    const [user, setuser] = useState([]);

    const signup = async (email, password)=>{
        try {
          await createUserWithEmailAndPassword(auth, email, password);
          setDoc(doc(db, "users", email),{
            favourite:[]
          })
        } catch (error) {
          alert("Signup error:", error.message);
        }
      }

    const login = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setuser(user);
          });
        
          return () => unsubscribe();
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
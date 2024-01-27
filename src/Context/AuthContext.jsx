import { useContext, createContext, useState,useEffect } from "react";
import {signInWithEmailAndPassword, signOut, onAuthStateChanged, createUserWithEmailAndPassword} from "firebase/auth"
import {auth, db} from "../Services/firebase"
import { doc, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{
    const nav = useNavigate()

    const [user, setuser] = useState([]);

    const signup = async (email, password)=>{
        // try {
          toast.promise(
            createUserWithEmailAndPassword(auth, email, password),
             {
               loading: 'Registering...',
               success: ()=>{
                setDoc(doc(db, "users", email),{
                  favourite:[]
                })
                nav("/")
                return <b>Register Success</b>
               },
               error: (err)=>{
                return <b>Registeration Failed : {err.message}</b>
               },
             },
             
          )
        // } catch (error) {
        //   toast.error(error.message)
        //   // alert("Signup error:", error.message);
        // }

        // try {
        //   await createUserWithEmailAndPassword(auth, email, password);
        //   setDoc(doc(db, "users", email),{
        //     favourite:[]
        //   })
        // } catch (error) {
        //   toast.error(error.message)
        //   // alert("Signup error:", error.message);
        // }
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
    }, [])

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
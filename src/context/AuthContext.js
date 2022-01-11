import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../helpers/firebase";


export const AuthContext = createContext()

const AuthContextProvider = (props) => {

    const [currentUser, setcurrentUser] = useState()

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setcurrentUser(currentUser)
        })
    }, [])



    return(
        <AuthContext.Provider value={{currentUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
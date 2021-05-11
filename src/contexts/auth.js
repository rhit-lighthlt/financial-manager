import React, { createContext, useState, useEffect } from "react"
import firebase from "../firebase"
const AuthContext = createContext({user: null})



export default function AuthContextProvider (props) {
    const [userState, setUser] = useState({
        user: firebase.auth().currentUser
    })
    useEffect(firebase.auth().onAuthStateChanged(
        (user) => {
            setUser({
                ...userState, user
            })
        }
    ), [])

    return (
        <AuthContext.Provider value={userState}>
            {props.children}
        </AuthContext.Provider>
    )
}
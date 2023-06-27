import React from 'react'
import { useState } from "react"
import { UserContext } from "../contexts/UserContext"

export const UserProvider = ({children})=> {

    const [userLoggedIn, setUserLoggedIn] = useState(false)
    return (
        <UserContext.Provider value={{userLoggedIn, setUserLoggedIn}}>
            {children}
        </UserContext.Provider>
    )
}
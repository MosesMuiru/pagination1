import React from 'react'

import { useState,createContext } from 'react'

const UserContext = createContext();
//in order to accesss the context we use useContext api



function Hook() {

    const [user,setUser] = useState("Jessee")
  return (
    <UserContext.Provider value={user}>
        <h1> <p>thelll user </p> {user}</h1>
    </UserContext.Provider>
  )
}

export default Hook
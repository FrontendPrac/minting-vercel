import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router'

const AuthContext = React.createContext()
export function useGlobalContext() {

  return useContext(AuthContext)

}

export function GlobalContextProvider({ children }) {
  const route = new useRouter()
  const [currentUser, SetCurrentUser] = useState()
  const [network, setNetwork] = useState('')
  const [isloading, Setloading] = useState(true)


  useEffect(() => {
    Setloading(false)
    

  }, [])


  const value = {
    currentUser,
    SetCurrentUser,
    network,
    setNetwork

  }

  return (
    <AuthContext.Provider value={value}>
      {!isloading && children}
    </AuthContext.Provider>
  )
}


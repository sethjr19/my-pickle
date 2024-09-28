import { View, Text } from 'react-native'
import React, {createContext, useState, useEffect, useContext} from 'react'
import { supabase } from '../lib/supabase';
import { Session } from '@supabase/supabase-js'

const AuthContext = createContext({
  session: null,
  user: null
})

export const AuthProvider = ( { children }) =>  {
    const [session, setSession] = useState(null)

    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
      })
  
      supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })
    }, [])

  return (
    <AuthContext.Provider value={{session, user: session?.user}}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
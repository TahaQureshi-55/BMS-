"use client"

import type React from "react"
import { createContext, useState, useContext, useEffect } from "react"

type AuthContextType = {
  isLoggedIn: boolean
  email: string | null
  login: (email: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState<string | null>(null)

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn")
    const storedEmail = localStorage.getItem("userEmail")
    if (loggedIn === "true" && storedEmail) {
      setIsLoggedIn(true)
      setEmail(storedEmail)
    }
  }, [])

  const login = (userEmail: string) => {
    setIsLoggedIn(true)
    setEmail(userEmail)
    localStorage.setItem("isLoggedIn", "true")
    localStorage.setItem("userEmail", userEmail)
  }

  const logout = () => {
    setIsLoggedIn(false)
    setEmail(null)
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("userEmail")
  }

  return <AuthContext.Provider value={{ isLoggedIn, email, login, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}


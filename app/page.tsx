"use client"

import Link from "next/link"
import { useAuth } from "../contexts/AuthContext"
import Dashboard from "../components/Dashboard"

export default function Home() {
  const { isLoggedIn } = useAuth()

  if (isLoggedIn) {
    return <Dashboard />
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-primary">Welcome to Beneficiary Management System</h1>
      <p className="text-xl mb-8 text-secondary-foreground">Please log in or sign up to continue.</p>
      <div className="space-x-4">
        <Link
          href="/login"
          className="bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
        >
          Log In
        </Link>
        <Link
          href="/signup"
          className="bg-secondary text-secondary-foreground py-2 px-4 rounded-md hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-50"
        >
          Sign Up
        </Link>
      </div>
    </div>
  )
}


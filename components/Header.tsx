"use client"

import Link from "next/link"
import { useAuth } from "../contexts/AuthContext"

export default function Header() {
  const { isLoggedIn, email, logout } = useAuth()

  return (
    <header className="bg-secondary p-4 text-secondary-foreground">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-primary">
          BMS
        </Link>
        <nav>
          <ul className="flex space-x-4">
            {isLoggedIn ? (
              <>
                <li className="text-primary">{email}</li>
                <li>
                  <button onClick={logout} className="text-primary hover:underline">
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/login" className="text-primary hover:underline">
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/signup" className="text-primary hover:underline">
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}


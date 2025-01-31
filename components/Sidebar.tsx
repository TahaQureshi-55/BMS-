"use client"

import Link from "next/link"
import { Home, UserPlus, Scan, Search } from "lucide-react"
import { useAuth } from "../contexts/AuthContext"

const Sidebar = () => {
  const { isLoggedIn } = useAuth()

  return (
    <div className="bg-secondary text-secondary-foreground w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <h2 className="text-2xl font-semibold text-center mb-6 text-primary">BMS</h2>
      <nav>
        <Link
          href="/"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-accent hover:text-accent-foreground"
        >
          <Home className="inline-block mr-2" size={20} />
          Dashboard
        </Link>
        {isLoggedIn && (
          <>
            <Link
              href="/registration"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-accent hover:text-accent-foreground"
            >
              <UserPlus className="inline-block mr-2" size={20} />
              Registration
            </Link>
            <Link
              href="/token-scanner"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-accent hover:text-accent-foreground"
            >
              <Scan className="inline-block mr-2" size={20} />
              Token Scanner
            </Link>
            <Link
              href="/search"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-accent hover:text-accent-foreground"
            >
              <Search className="inline-block mr-2" size={20} />
              Search
            </Link>
          </>
        )}
      </nav>
    </div>
  )
}

export default Sidebar


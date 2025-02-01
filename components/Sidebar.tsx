"use client"

import { useState } from "react"
import Link from "next/link"
import { Home, UserPlus, Scan, Search, Menu } from "lucide-react"
import { useAuth } from "../contexts/AuthContext"

const Sidebar = () => {
  const { isLoggedIn } = useAuth()
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const handleLinkClick = () => {
    setIsOpen(false) // Close sidebar when any link is clicked
  }

  return (
    <>
      {/* Sidebar Toggle Button (Mobile) */}
      <button
        className="fixed top-[70px] left-4 z-50 md:hidden bg-primary text-primary-foreground p-2 rounded-md"
        onClick={toggleSidebar}
      >
        <Menu size={16} />
      </button>

      {/* Overlay to close sidebar when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={handleLinkClick}
        />
      )}

      {/* Sidebar */}
      <div
        className={`bg-secondary text-secondary-foreground w-64 space-y-6 py-7 px-2 fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition duration-200 ease-in-out z-40`}
      >
        <h2 className="text-2xl font-semibold text-center mb-6 text-primary">BMS</h2>
        <nav>
          <Link
            href="/"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-accent hover:text-accent-foreground"
            onClick={handleLinkClick}
          >
            <Home className="inline-block mr-2" size={20} />
            Dashboard
          </Link>
          {isLoggedIn && (
            <>
              <Link
                href="/registration"
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-accent hover:text-accent-foreground"
                onClick={handleLinkClick}
              >
                <UserPlus className="inline-block mr-2" size={20} />
                Registration
              </Link>
              <Link
                href="/token-scanner"
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-accent hover:text-accent-foreground"
                onClick={handleLinkClick}
              >
                <Scan className="inline-block mr-2" size={20} />
                Token Scanner
              </Link>
              <Link
                href="/search"
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-accent hover:text-accent-foreground"
                onClick={handleLinkClick}
              >
                <Search className="inline-block mr-2" size={20} />
                Search
              </Link>
            </>
          )}
        </nav>
      </div>
    </>
  )
}

export default Sidebar

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import { AuthProvider } from "../contexts/AuthContext"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BMS",
  description: "A system for managing beneficiaries and their assistance requests",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground`}>
        <AuthProvider>
          <div className="flex flex-col h-screen">
            <Header />
            <div className="flex flex-1 overflow-hidden">
              <Sidebar />
              <main className="flex-1 overflow-auto p-6">{children}</main>
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}


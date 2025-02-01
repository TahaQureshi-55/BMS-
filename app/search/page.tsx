"use client"

import ProtectedRoute from "../../components/ProtectedRoute"
import React, { useState } from "react"
import { Search, User, CreditCard, FileText } from "lucide-react"

export default function SearchPage() {
  return (
    <ProtectedRoute>
      <SearchComponent />
    </ProtectedRoute>
  )
}

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState<{ id: number; name: string; cnic: string; purpose: string }[]>([])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchResults([
      { id: 1, name: "John Doe", cnic: "1234567890123", purpose: "Financial Aid" },
      { id: 2, name: "Jane Smith", cnic: "9876543210987", purpose: "Medical Assistance" },
    ])
  }

  return (
    <div className="p-4 sm:p-6 bg-background min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-6 text-center sm:text-left">
        Search Beneficiaries
      </h1>

      <div className="bg-secondary rounded-lg shadow p-4 sm:p-6">
        <form onSubmit={handleSearch} className="mb-6">
          <div className="flex flex-col sm:flex-row">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by CNIC, Phone, or Name"
              className="w-full sm:flex-grow rounded-md sm:rounded-l-md bg-accent text-accent-foreground border-accent px-3 py-2 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            />
            <button
              type="submit"
              className="mt-2 sm:mt-0 w-full sm:w-auto bg-primary text-primary-foreground px-4 py-2 rounded-md sm:rounded-r-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 flex justify-center items-center"
            >
              <Search className="mr-2" size={20} />
              Search
            </button>
          </div>
        </form>

        {searchResults.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-primary text-center sm:text-left">
              Search Results
            </h2>
            <div className="space-y-4">
              {searchResults.map((result) => (
                <div key={result.id} className="bg-accent rounded-lg p-4 sm:p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <InfoRow icon={User} label="Name" value={result.name} />
                    <InfoRow icon={CreditCard} label="CNIC" value={result.cnic} />
                    <InfoRow icon={FileText} label="Purpose" value={result.purpose} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// Reusable Info Row Component
const InfoRow = ({ icon: Icon, label, value }: { icon: any; label: string; value: string }) => (
  <div className="flex items-center bg-secondary p-3 rounded-md shadow-sm">
    <Icon className="mr-3 text-primary" size={20} />
    <span className="font-medium text-accent-foreground">{label}:</span>
    <span className="ml-2 text-secondary-foreground">{value}</span>
  </div>
)

"use client"

import ProtectedRoute from "../../components/ProtectedRoute"
import { useState, type React } from "react"
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
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchResults([
      { id: 1, name: "John Doe", cnic: "1234567890123", purpose: "Financial Aid" },
      { id: 2, name: "Jane Smith", cnic: "9876543210987", purpose: "Medical Assistance" },
    ])
  }

  return (
    <div className="p-6 bg-background min-h-screen">
      <h1 className="text-3xl font-bold text-primary mb-6">Search Beneficiaries</h1>
      <div className="bg-secondary rounded-lg shadow p-6">
        <form onSubmit={handleSearch} className="mb-6">
          <div className="flex">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by CNIC, Phone, or Name"
              className="flex-grow rounded-l-md bg-accent text-accent-foreground border-accent focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-4 py-2 rounded-r-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            >
              <Search className="inline-block mr-2" size={20} />
              Search
            </button>
          </div>
        </form>
        {searchResults.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-primary">Search Results</h2>
            <div className="space-y-4">
              {searchResults.map((result) => (
                <div key={result.id} className="bg-accent rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center">
                      <User className="mr-2 text-primary" size={20} />
                      <span className="font-medium text-accent-foreground">Name:</span>
                      <span className="ml-2 text-secondary-foreground">{result.name}</span>
                    </div>
                    <div className="flex items-center">
                      <CreditCard className="mr-2 text-primary" size={20} />
                      <span className="font-medium text-accent-foreground">CNIC:</span>
                      <span className="ml-2 text-secondary-foreground">{result.cnic}</span>
                    </div>
                    <div className="flex items-center">
                      <FileText className="mr-2 text-primary" size={20} />
                      <span className="font-medium text-accent-foreground">Purpose:</span>
                      <span className="ml-2 text-secondary-foreground">{result.purpose}</span>
                    </div>
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


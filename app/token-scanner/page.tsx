"use client"

import ProtectedRoute from "../../components/ProtectedRoute"
import { useState, type React } from "react" // Added React import
import { Scan, User, CreditCard, FileText, AlertCircle } from "lucide-react"

export default function TokenScannerPage() {
  return (
    <ProtectedRoute>
      <TokenScanner />
    </ProtectedRoute>
  )
}

function TokenScanner() {
  const [tokenId, setTokenId] = useState("")
  const [beneficiaryData, setBeneficiaryData] = useState(null)

  const handleScan = (e: React.FormEvent) => {
    e.preventDefault()
    setBeneficiaryData({
      name: "John Doe",
      cnic: "1234567890123",
      purpose: "Financial Aid",
      status: "In Progress",
    })
  }

  return (
    <div className="p-6 bg-background min-h-screen">
      <h1 className="text-3xl font-bold text-primary mb-6">Token Scanner</h1>
      <div className="bg-secondary rounded-lg shadow p-6">
        <form onSubmit={handleScan} className="mb-6">
          <div className="flex">
            <input
              type="text"
              value={tokenId}
              onChange={(e) => setTokenId(e.target.value)}
              placeholder="Enter Token ID"
              className="flex-grow rounded-l-md bg-accent text-accent-foreground border-accent focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-4 py-2 rounded-r-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            >
              <Scan className="inline-block mr-2" size={20} />
              Scan
            </button>
          </div>
        </form>
        {beneficiaryData && (
          <div className="bg-accent rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4 text-primary">Beneficiary Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <User className="mr-2 text-primary" size={20} />
                <span className="font-medium text-accent-foreground">Name:</span>
                <span className="ml-2 text-secondary-foreground">{beneficiaryData.name}</span>
              </div>
              <div className="flex items-center">
                <CreditCard className="mr-2 text-primary" size={20} />
                <span className="font-medium text-accent-foreground">CNIC:</span>
                <span className="ml-2 text-secondary-foreground">{beneficiaryData.cnic}</span>
              </div>
              <div className="flex items-center">
                <FileText className="mr-2 text-primary" size={20} />
                <span className="font-medium text-accent-foreground">Purpose:</span>
                <span className="ml-2 text-secondary-foreground">{beneficiaryData.purpose}</span>
              </div>
              <div className="flex items-center">
                <AlertCircle className="mr-2 text-primary" size={20} />
                <span className="font-medium text-accent-foreground">Status:</span>
                <span className="ml-2 text-secondary-foreground">{beneficiaryData.status}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}


"use client"

import ProtectedRoute from "../../components/ProtectedRoute"
import { useState, FormEvent } from "react"
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
  const [beneficiaryData, setBeneficiaryData] = useState<{
    name: string
    cnic: string
    purpose: string
    status: string
  } | null>(null)

  const handleScan = (e: FormEvent) => {
    e.preventDefault()
    setBeneficiaryData({
      name: "John Doe",
      cnic: "1234567890123",
      purpose: "Financial Aid",
      status: "In Progress",
    })
  }

  return (
    <div className="p-4 sm:p-6 bg-background min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-6 text-center sm:text-left">
        Token Scanner
      </h1>
      
      <div className="bg-secondary rounded-lg shadow p-4 sm:p-6">
        <form onSubmit={handleScan} className="mb-6">
          <div className="flex flex-col sm:flex-row">
            <input
              type="text"
              value={tokenId}
              onChange={(e) => setTokenId(e.target.value)}
              placeholder="Enter Token ID"
              className="w-full sm:flex-grow rounded-md sm:rounded-l-md bg-accent text-accent-foreground border-accent px-3 py-2 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            />
            <button
              type="submit"
              className="mt-2 sm:mt-0 w-full sm:w-auto bg-primary text-primary-foreground px-4 py-2 rounded-md sm:rounded-r-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 flex justify-center items-center"
            >
              <Scan className="mr-2" size={20} />
              Scan
            </button>
          </div>
        </form>

        {beneficiaryData && (
          <div className="bg-accent rounded-lg p-4 sm:p-6">
            <h2 className="text-xl font-semibold mb-4 text-primary text-center sm:text-left">
              Beneficiary Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InfoRow icon={User} label="Name" value={beneficiaryData.name} />
              <InfoRow icon={CreditCard} label="CNIC" value={beneficiaryData.cnic} />
              <InfoRow icon={FileText} label="Purpose" value={beneficiaryData.purpose} />
              <InfoRow icon={AlertCircle} label="Status" value={beneficiaryData.status} />
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

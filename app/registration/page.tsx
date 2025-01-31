"use client"

import ProtectedRoute from "../../components/ProtectedRoute"
import { useState } from "react"
import { UserPlus } from "lucide-react"

export default function RegistrationPage() {
  return (
    <ProtectedRoute>
      <RegistrationForm />
    </ProtectedRoute>
  )
}

function RegistrationForm() {
  const [formData, setFormData] = useState({
    cnic: "",
    name: "",
    phone: "",
    address: "",
    purpose: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ cnic: "", name: "", phone: "", address: "", purpose: "" })
  }

  return (
    <div className="p-6 bg-background min-h-screen">
      <h1 className="text-3xl font-bold text-primary mb-6">Beneficiary Registration</h1>
      <div className="bg-secondary rounded-lg shadow p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-secondary-foreground" htmlFor="cnic">
              CNIC
            </label>
            <input
              className="mt-1 block w-full rounded-md bg-accent text-accent-foreground border-accent focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              id="cnic"
              type="text"
              placeholder="CNIC"
              name="cnic"
              value={formData.cnic}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-secondary-foreground" htmlFor="name">
              Name
            </label>
            <input
              className="mt-1 block w-full rounded-md bg-accent text-accent-foreground border-accent focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              id="name"
              type="text"
              placeholder="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-secondary-foreground" htmlFor="phone">
              Phone
            </label>
            <input
              className="mt-1 block w-full rounded-md bg-accent text-accent-foreground border-accent focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              id="phone"
              type="tel"
              placeholder="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-secondary-foreground" htmlFor="address">
              Address
            </label>
            <input
              className="mt-1 block w-full rounded-md bg-accent text-accent-foreground border-accent focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              id="address"
              type="text"
              placeholder="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-secondary-foreground" htmlFor="purpose">
              Purpose
            </label>
            <select
              className="mt-1 block w-full rounded-md bg-accent text-accent-foreground border-accent focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              id="purpose"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              required
            >
              <option value="">Select Purpose</option>
              <option value="financial">Financial Aid</option>
              <option value="medical">Medical Assistance</option>
              <option value="education">Educational Support</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <button
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              type="submit"
            >
              <UserPlus className="mr-2" size={20} />
              Register Beneficiary
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}


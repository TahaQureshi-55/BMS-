"use client"

import { useAuth } from "../contexts/AuthContext"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { Users, UserPlus, Activity, AlertCircle, Clock, DollarSign } from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  const { isLoggedIn, email } = useAuth()

  if (!isLoggedIn) {
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

  const departmentData = [
    { name: "Financial", value: 70 },
    { name: "Medical", value: 50 },
    { name: "Education", value: 30 },
    { name: "Other", value: 20 },
  ]

  const distributionData = [
    { name: "Cash", value: 4000 },
    { name: "Food", value: 3000 },
    { name: "Medical Supplies", value: 2000 },
    { name: "Education Materials", value: 1000 },
  ]

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

  const recentActivities = [
    { id: 1, action: "New beneficiary registered", time: "2 hours ago" },
    { id: 2, action: "Aid distributed to 50 families", time: "4 hours ago" },
    { id: 3, action: "Emergency request processed", time: "1 day ago" },
    { id: 4, action: "Monthly report generated", time: "2 days ago" },
  ]

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-primary">Welcome to BMS Dashboard, {email}!</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <DashboardCard title="Total Beneficiaries" value="1,250" icon={<Users size={24} />} />
        <DashboardCard title="New Registrations" value="50" icon={<UserPlus size={24} />} />
        <DashboardCard title="Pending Requests" value="28" icon={<Clock size={24} />} />
        <DashboardCard title="Total Aid Distributed" value="$125,000" icon={<DollarSign size={24} />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-secondary rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-primary">Department Activity</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={departmentData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip contentStyle={{ backgroundColor: "#1F2937", border: "none" }} />
              <Legend />
              <Bar dataKey="value" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-secondary rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-primary">Aid Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={distributionData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {distributionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-secondary rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-primary">Recent Activities</h2>
          <ul className="space-y-4">
            {recentActivities.map((activity) => (
              <li key={activity.id} className="flex items-center space-x-3">
                <Activity className="text-primary" size={20} />
                <div>
                  <p className="text-secondary-foreground">{activity.action}</p>
                  <p className="text-sm text-secondary-foreground/70">{activity.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-secondary rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-primary">Urgent Requests</h2>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <AlertCircle className="text-red-500" size={20} />
              <div>
                <p className="text-secondary-foreground">Emergency medical aid needed</p>
                <p className="text-sm text-secondary-foreground/70">2 hours ago</p>
              </div>
            </li>
            <li className="flex items-center space-x-3">
              <AlertCircle className="text-yellow-500" size={20} />
              <div>
                <p className="text-secondary-foreground">Food shortage in District A</p>
                <p className="text-sm text-secondary-foreground/70">1 day ago</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function DashboardCard({ title, value, icon }) {
  return (
    <div className="bg-secondary rounded-lg shadow p-6 flex items-center">
      <div className="rounded-full bg-accent p-3 mr-4">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-secondary-foreground">{title}</h3>
        <p className="text-2xl font-bold text-primary">{value}</p>
      </div>
    </div>
  )
}


"use client";

import Link from "next/link";
import {
  Car,
  Wrench,
  TrendingUp,
  Calendar,
  DollarSign,
  Package,
  Plus,
  Users,
} from "lucide-react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  mockCars,
  monthlyRevenueData,
  dailyActivityData,
  serviceTypeData,
  getDashboardStats,
} from "@/lib/mockData";

export default function Dashboard() {
  const stats = getDashboardStats();

  const recentCars = mockCars.slice(0, 5);

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Car className="w-8 h-8 text-purple-500" />
              <div>
                <h1 className="text-2xl font-bold text-white">
                  Premium Auto Care
                </h1>
                <p className="text-sm text-slate-400">Workshop Management CRM</p>
              </div>
            </div>
            <Link
              href="/add-car"
              className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Plus className="w-5 h-5" />
              <span>Add New Car</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm font-medium">
                  Cars In Service
                </p>
                <p className="text-3xl font-bold text-white mt-2">
                  {stats.carsInService}
                </p>
              </div>
              <div className="bg-purple-500/10 p-3 rounded-lg">
                <Wrench className="w-8 h-8 text-purple-500" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-green-500">Active now</span>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm font-medium">
                  Completed Today
                </p>
                <p className="text-3xl font-bold text-white mt-2">
                  {stats.carsCompleted}
                </p>
              </div>
              <div className="bg-green-500/10 p-3 rounded-lg">
                <Package className="w-8 h-8 text-green-500" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-green-500">Ready for billing</span>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm font-medium">
                  Pending Delivery
                </p>
                <p className="text-3xl font-bold text-white mt-2">
                  {stats.carsPendingDelivery}
                </p>
              </div>
              <div className="bg-amber-500/10 p-3 rounded-lg">
                <Calendar className="w-8 h-8 text-amber-500" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-amber-500">Awaiting pickup</span>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm font-medium">
                  Monthly Revenue
                </p>
                <p className="text-3xl font-bold text-white mt-2">
                  ₹{(stats.monthlyRevenue / 1000).toFixed(0)}K
                </p>
              </div>
              <div className="bg-purple-500/10 p-3 rounded-lg">
                <DollarSign className="w-8 h-8 text-purple-500" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-green-500">+12% from last month</span>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Monthly Revenue Chart */}
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-4">
              Monthly Revenue Trend
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyRevenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e293b",
                    border: "1px solid #475569",
                    borderRadius: "8px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#8b5cf6"
                  strokeWidth={3}
                  dot={{ fill: "#8b5cf6", r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Service Type Distribution */}
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-4">
              Service Type Distribution
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={serviceTypeData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {serviceTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e293b",
                    border: "1px solid #475569",
                    borderRadius: "8px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Daily Activity Chart */}
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-4">
              Daily Intake vs Delivery (This Week)
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dailyActivityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="date" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e293b",
                    border: "1px solid #475569",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Bar dataKey="intake" fill="#8b5cf6" name="Intake" />
                <Bar dataKey="delivery" fill="#10b981" name="Delivery" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Cars Table */}
        <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-700">
            <h3 className="text-lg font-semibold text-white">Recent Cars</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-700/50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                    Car Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                    Owner
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                    Service Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                    Delivery Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {recentCars.map((car) => (
                  <tr key={car.id} className="hover:bg-slate-700/30">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <Car className="w-5 h-5 text-purple-500 mr-3" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            {car.carName} {car.model}
                          </div>
                          <div className="text-sm text-slate-400">
                            {car.registrationNumber}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-white">{car.ownerName}</div>
                      <div className="text-sm text-slate-400">
                        {car.ownerPhone}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          car.serviceStatus === "in-service"
                            ? "bg-purple-500/10 text-purple-400"
                            : car.serviceStatus === "completed"
                            ? "bg-green-500/10 text-green-400"
                            : car.serviceStatus === "pending-delivery"
                            ? "bg-amber-500/10 text-amber-400"
                            : "bg-blue-500/10 text-blue-400"
                        }`}
                      >
                        {car.serviceStatus.replace("-", " ").toUpperCase()}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-300">
                      {car.serviceType}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-white">
                      ₹{car.totalAmount.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-300">
                      {new Date(car.estimatedDeliveryDate).toLocaleDateString(
                        "en-IN",
                        {
                          day: "2-digit",
                          month: "short",
                        }
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

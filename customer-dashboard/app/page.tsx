"use client";

import {
  Car,
  Calendar,
  TrendingUp,
  FileText,
  Download,
  AlertCircle,
  CheckCircle2,
  IndianRupee,
  Gauge,
  Clock,
  MapPin,
} from "lucide-react";
import {
  carProfile,
  serviceHistory,
  healthMetrics,
  resaleEstimate,
  calculateOverallHealth,
  getNextServiceReminder,
} from "@/lib/mockData";

export default function CustomerDashboard() {
  const overallHealth = calculateOverallHealth();
  const serviceReminder = getNextServiceReminder();

  const getHealthColor = (score: number) => {
    if (score >= 90) return "text-green-500";
    if (score >= 75) return "text-purple-500";
    if (score >= 60) return "text-amber-500";
    return "text-red-500";
  };

  const getHealthBgColor = (score: number) => {
    if (score >= 90) return "bg-green-500/10";
    if (score >= 75) return "bg-purple-500/10";
    if (score >= 60) return "bg-amber-500/10";
    return "bg-red-500/10";
  };

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
                <p className="text-sm text-slate-400">Customer Portal</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-400">Welcome back,</p>
              <p className="text-lg font-semibold text-white">
                {carProfile.ownerName}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Car Profile Card */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg p-6 mb-8 border border-purple-500/20">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <Car className="w-10 h-10 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {carProfile.carName} {carProfile.model}
                </h2>
                <p className="text-purple-100 mt-1">
                  {carProfile.registrationNumber} • {carProfile.year} •{" "}
                  {carProfile.fuelType}
                </p>
                <div className="flex items-center space-x-6 mt-4 text-sm text-purple-100">
                  <div className="flex items-center">
                    <Gauge className="w-4 h-4 mr-1" />
                    {carProfile.currentKm.toLocaleString()} km
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Last Service:{" "}
                    {new Date(carProfile.lastServiceDate).toLocaleDateString(
                      "en-IN",
                      { day: "2-digit", month: "short", year: "numeric" }
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="bg-white/10 px-4 py-2 rounded-lg">
                <p className="text-sm text-purple-100">Overall Health</p>
                <p className="text-3xl font-bold text-white mt-1">
                  {overallHealth}%
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Next Service Reminder */}
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-amber-500/10 p-2 rounded-lg">
                <AlertCircle className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-lg font-semibold text-white">
                Next Service Due
              </h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">At KM:</span>
                <span className="text-white font-semibold">
                  {serviceReminder.nextServiceKm.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Remaining:</span>
                <span className="text-purple-400 font-semibold">
                  {serviceReminder.kmRemaining.toLocaleString()} km
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Or by date:</span>
                <span className="text-white font-semibold">
                  {serviceReminder.recommendedDate}
                </span>
              </div>
              <div className="pt-3 border-t border-slate-700">
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition-colors">
                  Book Service
                </button>
              </div>
            </div>
          </div>

          {/* Resale Value Estimate */}
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-green-500/10 p-2 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold text-white">
                Resale Value
              </h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-slate-400">Estimated Value</p>
                <p className="text-3xl font-bold text-white mt-1">
                  ₹{(resaleEstimate.currentValue / 100000).toFixed(2)}L
                </p>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Annual Depreciation:</span>
                <span className="text-amber-400">
                  {resaleEstimate.depreciationRate}%
                </span>
              </div>
              <div className="pt-3 border-t border-slate-700">
                <p className="text-xs text-slate-400">
                  Based on condition, mileage, and market demand
                </p>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-purple-500/10 p-2 rounded-lg">
                <FileText className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold text-white">Quick Stats</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Total Services:</span>
                <span className="text-white font-semibold">
                  {serviceHistory.length}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Total Spent:</span>
                <span className="text-white font-semibold">
                  ₹
                  {serviceHistory
                    .reduce((sum, s) => sum + s.totalAmount, 0)
                    .toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Owner Since:</span>
                <span className="text-white font-semibold">
                  {new Date(carProfile.purchaseDate).toLocaleDateString(
                    "en-IN",
                    { month: "short", year: "numeric" }
                  )}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Avg. Service:</span>
                <span className="text-white font-semibold">
                  ₹
                  {Math.round(
                    serviceHistory.reduce((sum, s) => sum + s.totalAmount, 0) /
                      serviceHistory.length
                  ).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Car Health Score */}
        <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white">
              Car Health Score
            </h3>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span className="text-slate-400 text-sm">
                Last checked:{" "}
                {new Date(carProfile.lastServiceDate).toLocaleDateString(
                  "en-IN"
                )}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {healthMetrics.map((metric) => (
              <div
                key={metric.component}
                className={`${getHealthBgColor(
                  metric.score
                )} rounded-lg p-4 border border-slate-700`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-medium text-white">
                    {metric.component}
                  </h4>
                  <span
                    className={`text-2xl font-bold ${getHealthColor(
                      metric.score
                    )}`}
                  >
                    {metric.score}
                  </span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                  <div
                    className={`h-2 rounded-full`}
                    style={{
                      width: `${metric.score}%`,
                      backgroundColor: metric.color,
                    }}
                  ></div>
                </div>
                <p className="text-xs text-slate-400">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service History Timeline */}
        <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
          <h3 className="text-xl font-semibold text-white mb-6">
            Service History
          </h3>
          <div className="space-y-6">
            {serviceHistory.map((service, index) => (
              <div
                key={service.id}
                className="relative pl-8 pb-6 border-l-2 border-purple-500 last:border-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-purple-500 border-4 border-slate-800"></div>

                <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-700">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        {service.serviceType}
                      </h4>
                      <div className="flex items-center space-x-4 mt-1 text-sm text-slate-400">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(service.date).toLocaleDateString("en-IN", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                        <span className="flex items-center">
                          <Gauge className="w-4 h-4 mr-1" />
                          {service.kmReading.toLocaleString()} km
                        </span>
                        <span className="flex items-center">
                          <FileText className="w-4 h-4 mr-1" />
                          {service.invoiceNumber}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-white">
                        ₹{service.totalAmount.toLocaleString()}
                      </p>
                      <button className="flex items-center space-x-1 text-purple-400 hover:text-purple-300 text-sm mt-1">
                        <Download className="w-4 h-4" />
                        <span>Invoice</span>
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-sm font-semibold text-slate-300 mb-2">
                        Work Done:
                      </h5>
                      <ul className="space-y-1">
                        {service.workDone.map((work, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-slate-400 flex items-start"
                          >
                            <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {work}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-slate-300 mb-2">
                        Parts Replaced:
                      </h5>
                      <ul className="space-y-1">
                        {service.partsReplaced.map((part, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-slate-400 flex items-start"
                          >
                            <MapPin className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                            {part}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-600 flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4 text-slate-400">
                      <span>Labour: ₹{service.labourCharges}</span>
                      <span>Parts: ₹{service.partsCharges}</span>
                    </div>
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        service.status === "completed"
                          ? "bg-green-500/10 text-green-400"
                          : "bg-amber-500/10 text-amber-400"
                      }`}
                    >
                      {service.status.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resale Value Factors */}
        <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 mt-8">
          <h3 className="text-xl font-semibold text-white mb-6">
            Factors Affecting Resale Value
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resaleEstimate.factorsAffecting.map((factor, index) => (
              <div
                key={index}
                className={`rounded-lg p-4 border ${
                  factor.impact === "positive"
                    ? "bg-green-500/10 border-green-500/20"
                    : factor.impact === "negative"
                    ? "bg-red-500/10 border-red-500/20"
                    : "bg-slate-700/30 border-slate-700"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold text-white">
                    {factor.factor}
                  </h4>
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      factor.impact === "positive"
                        ? "bg-green-500/20 text-green-400"
                        : factor.impact === "negative"
                        ? "bg-red-500/20 text-red-400"
                        : "bg-slate-600 text-slate-300"
                    }`}
                  >
                    {factor.impact === "positive"
                      ? "+"
                      : factor.impact === "negative"
                      ? "-"
                      : "~"}
                  </span>
                </div>
                <p className="text-xs text-slate-400">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

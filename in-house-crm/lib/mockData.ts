export interface Car {
  id: string;
  carName: string;
  model: string;
  year: number;
  registrationNumber: string;
  fuelType: string;
  kmRun: number;
  ownerName: string;
  ownerPhone: string;
  ownerEmail: string;
  complaints: string;
  serviceStatus: "in-service" | "completed" | "pending-delivery" | "delivered";
  intakeDate: string;
  estimatedDeliveryDate: string;
  actualDeliveryDate?: string;
  serviceType: string;
  totalAmount: number;
}

export interface Invoice {
  id: string;
  carId: string;
  carName: string;
  registrationNumber: string;
  serviceDate: string;
  workDone: string[];
  partsReplaced: string[];
  labourCharges: number;
  partsCharges: number;
  totalAmount: number;
  status: "paid" | "pending" | "partial";
}

export interface MonthlyRevenue {
  month: string;
  revenue: number;
}

export interface DailyActivity {
  date: string;
  intake: number;
  delivery: number;
}

export interface ServiceTypeData {
  name: string;
  value: number;
  color: string;
}

export interface DashboardStats {
  carsInService: number;
  carsCompleted: number;
  carsPendingDelivery: number;
  monthlyRevenue: number;
  totalRevenue: number;
}

// Mock data for cars
export const mockCars: Car[] = [
  {
    id: "1",
    carName: "Honda City",
    model: "ZX MT",
    year: 2019,
    registrationNumber: "MH12AB1234",
    fuelType: "Petrol",
    kmRun: 45000,
    ownerName: "Rajesh Kumar",
    ownerPhone: "+91 98765 43210",
    ownerEmail: "rajesh.kumar@email.com",
    complaints: "Engine overheating, AC not cooling properly",
    serviceStatus: "in-service",
    intakeDate: "2024-03-15",
    estimatedDeliveryDate: "2024-03-20",
    serviceType: "Major Service",
    totalAmount: 15000,
  },
  {
    id: "2",
    carName: "Maruti Swift",
    model: "VXI",
    year: 2020,
    registrationNumber: "MH14CD5678",
    fuelType: "Petrol",
    kmRun: 32000,
    ownerName: "Priya Sharma",
    ownerPhone: "+91 98765 43211",
    ownerEmail: "priya.sharma@email.com",
    complaints: "Brake noise, wheel alignment needed",
    serviceStatus: "completed",
    intakeDate: "2024-03-12",
    estimatedDeliveryDate: "2024-03-14",
    actualDeliveryDate: "2024-03-14",
    serviceType: "Repair",
    totalAmount: 8500,
  },
  {
    id: "3",
    carName: "Hyundai Creta",
    model: "SX",
    year: 2021,
    registrationNumber: "MH01EF9012",
    fuelType: "Diesel",
    kmRun: 28000,
    ownerName: "Amit Patel",
    ownerPhone: "+91 98765 43212",
    ownerEmail: "amit.patel@email.com",
    complaints: "Regular service due",
    serviceStatus: "pending-delivery",
    intakeDate: "2024-03-10",
    estimatedDeliveryDate: "2024-03-16",
    actualDeliveryDate: "2024-03-15",
    serviceType: "Regular Service",
    totalAmount: 12000,
  },
  {
    id: "4",
    carName: "Tata Nexon",
    model: "XZ Plus",
    year: 2022,
    registrationNumber: "MH02GH3456",
    fuelType: "Electric",
    kmRun: 15000,
    ownerName: "Sneha Desai",
    ownerPhone: "+91 98765 43213",
    ownerEmail: "sneha.desai@email.com",
    complaints: "Battery check, software update",
    serviceStatus: "in-service",
    intakeDate: "2024-03-14",
    estimatedDeliveryDate: "2024-03-17",
    serviceType: "Regular Service",
    totalAmount: 6000,
  },
  {
    id: "5",
    carName: "Mahindra XUV700",
    model: "AX7",
    year: 2023,
    registrationNumber: "MH03IJ7890",
    fuelType: "Diesel",
    kmRun: 8000,
    ownerName: "Vikram Singh",
    ownerPhone: "+91 98765 43214",
    ownerEmail: "vikram.singh@email.com",
    complaints: "Suspension noise, dashboard warning light",
    serviceStatus: "completed",
    intakeDate: "2024-03-11",
    estimatedDeliveryDate: "2024-03-13",
    actualDeliveryDate: "2024-03-13",
    serviceType: "Repair",
    totalAmount: 18000,
  },
  {
    id: "6",
    carName: "Kia Seltos",
    model: "HTX",
    year: 2021,
    registrationNumber: "MH04KL2345",
    fuelType: "Petrol",
    kmRun: 38000,
    ownerName: "Neha Gupta",
    ownerPhone: "+91 98765 43215",
    ownerEmail: "neha.gupta@email.com",
    complaints: "Transmission jerking, oil change needed",
    serviceStatus: "pending-delivery",
    intakeDate: "2024-03-13",
    estimatedDeliveryDate: "2024-03-16",
    actualDeliveryDate: "2024-03-16",
    serviceType: "Major Service",
    totalAmount: 14000,
  },
];

// Mock data for invoices
export const mockInvoices: Invoice[] = [
  {
    id: "INV001",
    carId: "2",
    carName: "Maruti Swift VXI",
    registrationNumber: "MH14CD5678",
    serviceDate: "2024-03-14",
    workDone: [
      "Brake pad replacement",
      "Wheel alignment",
      "Brake fluid top-up",
      "General inspection",
    ],
    partsReplaced: ["Front brake pads", "Brake fluid"],
    labourCharges: 3500,
    partsCharges: 5000,
    totalAmount: 8500,
    status: "paid",
  },
  {
    id: "INV002",
    carId: "5",
    carName: "Mahindra XUV700 AX7",
    registrationNumber: "MH03IJ7890",
    serviceDate: "2024-03-13",
    workDone: [
      "Suspension repair",
      "Dashboard sensor replacement",
      "Full vehicle inspection",
      "Road test",
    ],
    partsReplaced: ["Front suspension bushings", "Dashboard sensor module"],
    labourCharges: 8000,
    partsCharges: 10000,
    totalAmount: 18000,
    status: "paid",
  },
  {
    id: "INV003",
    carId: "3",
    carName: "Hyundai Creta SX",
    registrationNumber: "MH01EF9012",
    serviceDate: "2024-03-15",
    workDone: [
      "Engine oil change",
      "Oil filter replacement",
      "Air filter cleaning",
      "Brake inspection",
      "Battery check",
    ],
    partsReplaced: ["Engine oil (5L)", "Oil filter", "Air filter"],
    labourCharges: 4000,
    partsCharges: 8000,
    totalAmount: 12000,
    status: "pending",
  },
  {
    id: "INV004",
    carId: "6",
    carName: "Kia Seltos HTX",
    registrationNumber: "MH04KL2345",
    serviceDate: "2024-03-16",
    workDone: [
      "Transmission service",
      "Engine oil change",
      "Transmission fluid replacement",
      "Full diagnostic scan",
    ],
    partsReplaced: [
      "Transmission fluid",
      "Engine oil (4.5L)",
      "Oil filter",
      "Transmission filter",
    ],
    labourCharges: 6000,
    partsCharges: 8000,
    totalAmount: 14000,
    status: "pending",
  },
  {
    id: "INV005",
    carId: "1",
    carName: "Honda City ZX MT",
    registrationNumber: "MH12AB1234",
    serviceDate: "2024-03-20",
    workDone: [
      "Radiator repair",
      "AC gas refill",
      "Coolant replacement",
      "Thermostat replacement",
    ],
    partsReplaced: ["Radiator cap", "AC gas", "Coolant", "Thermostat"],
    labourCharges: 7000,
    partsCharges: 8000,
    totalAmount: 15000,
    status: "pending",
  },
];

// Monthly revenue data for charts
export const monthlyRevenueData: MonthlyRevenue[] = [
  { month: "Sep", revenue: 125000 },
  { month: "Oct", revenue: 145000 },
  { month: "Nov", revenue: 135000 },
  { month: "Dec", revenue: 165000 },
  { month: "Jan", revenue: 155000 },
  { month: "Feb", revenue: 185000 },
  { month: "Mar", revenue: 195000 },
];

// Daily intake/delivery activity
export const dailyActivityData: DailyActivity[] = [
  { date: "Mon", intake: 4, delivery: 3 },
  { date: "Tue", intake: 5, delivery: 4 },
  { date: "Wed", intake: 3, delivery: 5 },
  { date: "Thu", intake: 6, delivery: 3 },
  { date: "Fri", intake: 4, delivery: 6 },
  { date: "Sat", intake: 7, delivery: 5 },
  { date: "Sun", intake: 2, delivery: 4 },
];

// Service type distribution
export const serviceTypeData: ServiceTypeData[] = [
  { name: "Regular Service", value: 45, color: "#8b5cf6" },
  { name: "Major Service", value: 25, color: "#7c3aed" },
  { name: "Repair", value: 20, color: "#f59e0b" },
  { name: "Body Work", value: 10, color: "#10b981" },
];

// Dashboard stats calculation
export const getDashboardStats = (): DashboardStats => {
  const carsInService = mockCars.filter(
    (car) => car.serviceStatus === "in-service"
  ).length;
  const carsCompleted = mockCars.filter(
    (car) => car.serviceStatus === "completed"
  ).length;
  const carsPendingDelivery = mockCars.filter(
    (car) => car.serviceStatus === "pending-delivery"
  ).length;

  const currentMonthRevenue = monthlyRevenueData[monthlyRevenueData.length - 1].revenue;
  const totalRevenue = mockCars.reduce((sum, car) => sum + car.totalAmount, 0);

  return {
    carsInService,
    carsCompleted,
    carsPendingDelivery,
    monthlyRevenue: currentMonthRevenue,
    totalRevenue,
  };
};

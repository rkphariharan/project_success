export interface CarProfile {
  registrationNumber: string;
  carName: string;
  model: string;
  year: number;
  fuelType: string;
  currentKm: number;
  ownerName: string;
  ownerPhone: string;
  ownerEmail: string;
  purchaseDate: string;
  lastServiceDate: string;
  nextServiceDue: number;
}

export interface ServiceRecord {
  id: string;
  date: string;
  serviceType: string;
  kmReading: number;
  workDone: string[];
  partsReplaced: string[];
  labourCharges: number;
  partsCharges: number;
  totalAmount: number;
  invoiceNumber: string;
  status: "completed" | "in-progress";
}

export interface HealthMetric {
  component: string;
  score: number;
  status: "excellent" | "good" | "fair" | "poor";
  lastChecked: string;
  description: string;
  color: string;
}

export interface ResaleEstimate {
  currentValue: number;
  depreciationRate: number;
  factorsAffecting: {
    factor: string;
    impact: "positive" | "negative" | "neutral";
    description: string;
  }[];
}

// Mock car profile
export const carProfile: CarProfile = {
  registrationNumber: "MH12AB1234",
  carName: "Honda City",
  model: "ZX MT",
  year: 2019,
  fuelType: "Petrol",
  currentKm: 45000,
  ownerName: "Rajesh Kumar",
  ownerPhone: "+91 98765 43210",
  ownerEmail: "rajesh.kumar@email.com",
  purchaseDate: "2019-04-15",
  lastServiceDate: "2024-03-20",
  nextServiceDue: 50000,
};

// Mock service history
export const serviceHistory: ServiceRecord[] = [
  {
    id: "SRV001",
    date: "2024-03-20",
    serviceType: "Major Service",
    kmReading: 45000,
    workDone: [
      "Engine oil change",
      "Oil filter replacement",
      "Air filter replacement",
      "Spark plug replacement",
      "Brake system inspection",
      "Battery health check",
      "Coolant top-up",
    ],
    partsReplaced: [
      "Engine oil (5L Synthetic)",
      "Oil filter",
      "Air filter",
      "Spark plugs (4 units)",
      "Coolant",
    ],
    labourCharges: 4000,
    partsCharges: 8500,
    totalAmount: 12500,
    invoiceNumber: "INV-2024-001",
    status: "completed",
  },
  {
    id: "SRV002",
    date: "2023-11-15",
    serviceType: "Regular Service",
    kmReading: 40000,
    workDone: [
      "Engine oil change",
      "Oil filter replacement",
      "Brake pad inspection",
      "Tire rotation",
      "Wheel alignment",
    ],
    partsReplaced: ["Engine oil (4.5L)", "Oil filter"],
    labourCharges: 2500,
    partsCharges: 3000,
    totalAmount: 5500,
    invoiceNumber: "INV-2023-089",
    status: "completed",
  },
  {
    id: "SRV003",
    date: "2023-07-10",
    serviceType: "Repair",
    kmReading: 36000,
    workDone: [
      "AC compressor repair",
      "AC gas refill",
      "AC filter replacement",
      "Cooling system check",
    ],
    partsReplaced: ["AC gas (R134a)", "AC cabin filter", "AC belt"],
    labourCharges: 3500,
    partsCharges: 5500,
    totalAmount: 9000,
    invoiceNumber: "INV-2023-056",
    status: "completed",
  },
  {
    id: "SRV004",
    date: "2023-03-05",
    serviceType: "Regular Service",
    kmReading: 32000,
    workDone: [
      "Engine oil change",
      "Oil filter replacement",
      "Air filter cleaning",
      "Brake fluid check",
      "Tire pressure adjustment",
    ],
    partsReplaced: ["Engine oil (4.5L)", "Oil filter"],
    labourCharges: 2000,
    partsCharges: 2800,
    totalAmount: 4800,
    invoiceNumber: "INV-2023-018",
    status: "completed",
  },
  {
    id: "SRV005",
    date: "2022-10-20",
    serviceType: "Major Service",
    kmReading: 28000,
    workDone: [
      "Transmission service",
      "Engine oil change",
      "Brake pad replacement",
      "Suspension check",
      "Battery replacement",
    ],
    partsReplaced: [
      "Transmission fluid",
      "Engine oil (5L)",
      "Oil filter",
      "Front brake pads",
      "Battery (12V 50Ah)",
    ],
    labourCharges: 5000,
    partsCharges: 12000,
    totalAmount: 17000,
    invoiceNumber: "INV-2022-145",
    status: "completed",
  },
];

// Mock car health metrics
export const healthMetrics: HealthMetric[] = [
  {
    component: "Engine",
    score: 92,
    status: "excellent",
    lastChecked: "2024-03-20",
    description: "Engine performance is excellent. Regular oil changes maintained.",
    color: "#10b981",
  },
  {
    component: "Transmission",
    score: 88,
    status: "excellent",
    lastChecked: "2024-03-20",
    description: "Smooth gear shifts. Recent service completed.",
    color: "#10b981",
  },
  {
    component: "Suspension",
    score: 78,
    status: "good",
    lastChecked: "2024-03-20",
    description: "Suspension working well. Some wear expected due to usage.",
    color: "#8b5cf6",
  },
  {
    component: "Brakes",
    score: 85,
    status: "good",
    lastChecked: "2024-03-20",
    description: "Brake system in good condition. Pads have 60% life remaining.",
    color: "#8b5cf6",
  },
  {
    component: "Electrical",
    score: 95,
    status: "excellent",
    lastChecked: "2024-03-20",
    description: "New battery installed. All electrical systems functioning properly.",
    color: "#10b981",
  },
  {
    component: "Cooling System",
    score: 82,
    status: "good",
    lastChecked: "2024-03-20",
    description: "Coolant levels optimal. Radiator in good condition.",
    color: "#8b5cf6",
  },
  {
    component: "Tires",
    score: 70,
    status: "fair",
    lastChecked: "2024-03-20",
    description: "Tread depth adequate. Consider replacement in next 5000 km.",
    color: "#f59e0b",
  },
  {
    component: "Battery",
    score: 98,
    status: "excellent",
    lastChecked: "2024-03-20",
    description: "Recently replaced. Expected life: 3-4 years.",
    color: "#10b981",
  },
];

// Calculate overall health score
export const calculateOverallHealth = (): number => {
  const totalScore = healthMetrics.reduce((sum, metric) => sum + metric.score, 0);
  return Math.round(totalScore / healthMetrics.length);
};

// Mock resale value estimate
export const resaleEstimate: ResaleEstimate = {
  currentValue: 685000,
  depreciationRate: 12,
  factorsAffecting: [
    {
      factor: "Regular Maintenance",
      impact: "positive",
      description: "Complete service history with authorized workshop",
    },
    {
      factor: "Low Mileage",
      impact: "positive",
      description: "Below average kilometers for a 2019 model",
    },
    {
      factor: "Age",
      impact: "negative",
      description: "5 years old - moderate depreciation applied",
    },
    {
      factor: "Single Owner",
      impact: "positive",
      description: "First owner - increases buyer confidence",
    },
    {
      factor: "No Accidents",
      impact: "positive",
      description: "Clean accident history",
    },
    {
      factor: "Market Demand",
      impact: "positive",
      description: "Honda City has strong resale demand",
    },
  ],
};

// Service reminder calculation
export const getNextServiceReminder = () => {
  const kmRemaining = carProfile.nextServiceDue - carProfile.currentKm;
  const lastService = new Date(carProfile.lastServiceDate);
  const daysSinceService = Math.floor(
    (new Date().getTime() - lastService.getTime()) / (1000 * 60 * 60 * 24)
  );

  return {
    kmRemaining,
    daysSinceService,
    nextServiceKm: carProfile.nextServiceDue,
    recommendedDate: new Date(
      lastService.getTime() + 180 * 24 * 60 * 60 * 1000
    ).toLocaleDateString("en-IN"),
  };
};

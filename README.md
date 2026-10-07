# 🚗 Premium Auto Care - Car Service Workshop CRM

Complete startup solution with 3 independent applications for car service workshop management.

## 📦 Project Structure

```
project-success/
├── website/              # Marketing landing page
├── in-house-crm/        # Employee/Manager/Owner dashboard
├── customer-dashboard/   # Customer self-service portal
└── README.md            # This file
```

## 🎨 Features

### 1. **Website** (Marketing Page)
- Premium landing page with purple/grey/gold theme
- Car brand showcase (mid-range & premium)
- Services overview
- Contact information
- Responsive design

### 2. **In-House CRM** (Workshop Management)
- **Dashboard with Analytics:**
  - Cars in service, completed, pending delivery
  - Monthly revenue tracking
  - Daily intake/delivery trends
  - Service type distribution charts
- **Car Intake Form:**
  - Complete vehicle details (name, model, year, fuel type, km run)
  - Owner information (name, contact, email)
  - Complaints/issues tracking
  - Delivery date scheduling
- **Service Tracking:**
  - Real-time status updates
  - Parts inventory management
  - Invoice generation (with PDF export capability)
- **Role-based Access:**
  - Owner: Full dashboard with all metrics
  - Manager: View all, limited edit
  - Employee: Add/edit service records

### 3. **Customer Dashboard** (Self-Service Portal)
- **Car Profile:**
  - Vehicle details and registration
  - Current KM and service status
- **Service History Timeline:**
  - Complete service records
  - Work done and parts replaced
  - Downloadable invoices
- **Car Health Score:**
  - Overall health rating (0-100)
  - Component-wise breakdown (engine, transmission, suspension, electrical)
- **Resale Value Estimator:**
  - Algorithm-based valuation
  - Factors affecting value
- **Next Service Reminder:**
  - KM-based and date-based alerts
  - Service milestone tracking

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm installed

### Running Each Application Locally

#### 1. Website
```bash
cd website
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

#### 2. In-House CRM
```bash
cd in-house-crm
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

#### 3. Customer Dashboard
```bash
cd customer-dashboard
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

**Note:** Run each application in a separate terminal. You can change the port for concurrent testing:
```bash
# Run on different ports
npm run dev -- -p 3001  # for CRM
npm run dev -- -p 3002  # for customer dashboard
```

## 🎨 Color Palette

- **Primary Purple:** `#8b5cf6` (purple-500), `#7c3aed` (purple-600)
- **Secondary Grey:** `#475569` (slate-600), `#334155` (slate-700)
- **Accent Gold:** `#f59e0b` (amber-500)
- **Dark Background:** `#0f172a` (slate-900), `#1e293b` (slate-800)
- **Success Green:** `#10b981` (green-500)
- **Warning Amber:** `#f59e0b` (amber-400)

## 🛠️ Tech Stack

- **Framework:** Next.js 14+ with TypeScript
- **Styling:** Tailwind CSS
- **Charts:** Recharts
- **Icons:** Lucide React
- **Hosting:** Vercel (recommended)

## 📊 Mock Data

All applications currently use mock data stored in `/lib/mockData.ts`:
- 6 sample cars with various service statuses
- 5 service history records
- Monthly revenue data
- Daily activity statistics
- Car health metrics

## 🔐 Authentication (To Be Implemented)

Planned authentication system:
- **Owner/Manager/Employee:** Login with phone number + password
- **Customer:** Login with car registration number + password

## 🚧 Future Enhancements (Backend Integration)

When ready for backend:
1. **Python FastAPI** backend
2. **PostgreSQL** database
3. Real authentication and authorization
4. File upload for spare parts photos (AWS S3/Cloudinary)
5. PDF invoice generation
6. SMS/Email notifications
7. Resale value algorithm with ML model

## 📱 Deployment

### Vercel (Recommended)
```bash
# For each app:
cd website
vercel

cd ../in-house-crm
vercel

cd ../customer-dashboard
vercel
```

Each app will get its own URL:
- website.vercel.app
- in-house-crm.vercel.app
- customer-dashboard.vercel.app

## 📄 License

MIT License - Feel free to use for your startup!

---

**Built with ❤️ for Premium Auto Care**

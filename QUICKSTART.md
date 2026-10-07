# 🚀 Quick Start Guide

## Step 1: Install Dependencies

Open **3 separate terminal windows** and run these commands:

### Terminal 1 - Website
```bash
cd website
npm install
```

### Terminal 2 - In-House CRM
```bash
cd in-house-crm
npm install
```

### Terminal 3 - Customer Dashboard
```bash
cd customer-dashboard
npm install
```

---

## Step 2: Run All Applications

Keep the 3 terminals open and run these commands:

### Terminal 1 - Website
```bash
npm run dev
```
**Opens at:** http://localhost:3000

### Terminal 2 - In-House CRM
```bash
npm run dev -- -p 3001
```
**Opens at:** http://localhost:3001

### Terminal 3 - Customer Dashboard
```bash
npm run dev -- -p 3002
```
**Opens at:** http://localhost:3002

---

## 📱 What You'll See

### 1. **Website (Port 3000)**
- Premium landing page with purple/grey/gold theme
- Hero section with "Book Service" CTA
- Car brands showcase (Maruti, Tata, Hyundai, Kia, BMW, Audi, Mercedes, etc.)
- Services overview (Mechanical, Electrical, ECM Updates)
- Contact section

### 2. **In-House CRM (Port 3001)**
- **Dashboard:**
  - 4 metric cards (Cars In Service, Completed, Pending, Revenue)
  - Daily activity line chart
  - Service distribution pie chart
  - Monthly revenue bar chart
  - Cars table with status
- **Add Car Button:** Opens car intake form
- **Car Intake Form:**
  - Vehicle details (name, model, year, fuel type, km)
  - Owner information (name, contact, email)
  - Service complaints
  - Delivery date

### 3. **Customer Dashboard (Port 3002)**
- **Car Profile Card:** Hyundai Creta with current KM and service dates
- **Health Score:** 82/100 with component breakdown
- **Resale Value:** ₹12.5L with value factors
- **Service History Timeline:** 5 complete service records
- **Service Milestones:** Progress tracker (10K, 20K, 30K, 40K km)

---

## 🎨 Test Features

### Website
- Scroll through all sections
- Click navigation links (Services, Brands, Contact)
- Check responsive design (resize browser)

### In-House CRM
- View dashboard metrics and charts
- Click "Add Car" button
- Fill out the car intake form
- Try "Export Report" button (mock for now)

### Customer Dashboard
- View car health score breakdown
- Scroll through service history timeline
- Check resale value factors
- View service milestones progress

---

## 🛑 Stop All Servers

Press `Ctrl + C` in each terminal window.

---

## 📝 Notes

- All data is **mock data** (no backend yet)
- Forms don't save (just show alerts)
- PDF exports not implemented yet
- Authentication not implemented yet
- When you're ready for backend, we'll add Python FastAPI + PostgreSQL

---

## 🎉 Next Steps

1. **Test all 3 apps locally**
2. **Customize brand name, colors, and data**
3. **Deploy to Vercel** (see main README.md)
4. **Plan backend integration** (authentication, database, file uploads)

---

**Happy Testing! 🚗💨**

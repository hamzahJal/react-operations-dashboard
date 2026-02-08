# 📊 Operations Monitoring Dashboard

> A modern, production-ready React dashboard for monitoring operational metrics, tracking KPIs, and managing real-time alerts across departments and teams.


## 🚀 Live Demo

**Check out the live application here:**

👉 https://hamzahjal.github.io/react-operations-dashboard/

---

## ✨ Features

### 📈 **Real-Time Monitoring**
- Live operational metrics tracking
- Efficiency, error rates, and SLA compliance monitoring
- Average handling time (AHT) analysis
- Simulated real-time alert system

### 📊 **Interactive Visualizations**
- Line charts for trend analysis
- Pie charts for error distribution
- Bar charts for department comparison
- Donut charts for SLA compliance
- Radar charts for multi-dimensional performance views

### 🏢 **Department Management**
- Compare performance across departments
- Multi-metric analysis
- Sortable data tables
- Performance rankings

### 👥 **Agent Performance Tracking**
- Individual agent statistics
- Search and filter capabilities
- Performance comparisons
- Real-time data from DummyJSON API

### 🎯 **Goal Tracking**
- Monthly operational targets
- Progress visualization with progress bars
- Status indicators (On Track / At Risk / Off Track)
- Historical trend analysis

### 🔔 **Alert Management**
- Real-time alert notifications
- Severity-based filtering (Critical / Warning / Info)
- Dismissible alerts
- Alert history tracking

### 📱 **Responsive Design**
- Mobile-first approach
- Works seamlessly on desktop, tablet, and mobile
- Adaptive layouts
- Touch-friendly interface

---

## 🛠️ Tech Stack

### **Frontend**
- **[React 18](https://react.dev)** - Modern React with hooks
- **[Vite](https://vitejs.dev)** - Lightning-fast build tool and dev server
- **[React Router](https://reactrouter.com)** - Client-side routing
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework

### **State Management**
- **[Zustand](https://github.com/pmndrs/zustand)** - Lightweight state management (1kb)

### **Data Visualization**
- **[Recharts](https://recharts.org)** - Composable charting library built on React components

### **UI Components**
- **[Lucide React](https://lucide.dev)** - Beautiful & consistent icon library
- **[date-fns](https://date-fns.org)** - Modern date utility library

### **API Integration**
- **[DummyJSON](https://dummyjson.com)** - Mock REST API for users and categories
- Custom mock data generators for operational metrics

---

## 📦 Installation & Setup

### Prerequisites

- **Node.js** 16.x or higher
- **npm** or **yarn**

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/hamzahJal/react-operations-dashboard.git
   cd react-operations-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run tests
npm run test
```

---

## 📁 Project Structure

```
operations-dashboard/
├── public/                  # Static assets
├── src/
│   ├── components/
│   │   ├── common/         # Reusable UI components
│   │   │   ├── MetricCard.jsx
│   │   │   ├── ChartContainer.jsx
│   │   │   ├── AlertCard.jsx
│   │   │   ├── ProgressBar.jsx
│   │   │   ├── StatusBadge.jsx
│   │   │   └── ...
│   │   ├── charts/         # Chart components
│   │   │   ├── EfficiencyChart.jsx
│   │   │   ├── ErrorDistributionChart.jsx
│   │   │   ├── SLAComplianceChart.jsx
│   │   │   └── ...
│   │   ├── layout/         # Layout components
│   │   │   ├── MainLayout.jsx
│   │   │   ├── Header.jsx
│   │   │   └── Sidebar.jsx
│   │   └── alerts/         # Alert components
│   ├── pages/              # Page components
│   │   ├── Dashboard.jsx
│   │   ├── Departments.jsx
│   │   ├── Agents.jsx
│   │   ├── Goals.jsx
│   │   └── Alerts.jsx
│   ├── stores/             # Zustand stores
│   │   ├── metricsStore.js
│   │   ├── alertsStore.js
│   │   ├── departmentsStore.js
│   │   ├── agentsStore.js
│   │   ├── goalsStore.js
│   │   └── uiStore.js
│   ├── services/           # API services
│   │   ├── api.js
│   │   └── dummyJsonService.js
│   ├── utils/              # Utility functions
│   │   ├── mockData.js
│   │   ├── formatters.js
│   │   ├── calculations.js
│   │   └── constants.js
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions CI/CD
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

---

## 🎨 Key Features Breakdown

### 1️⃣ Dashboard Page
- **4 Metric Cards**: Efficiency, Error Rate, Average Handling Time, SLA Compliance
- **Efficiency Trends Chart**: 30-day historical data with target line
- **Error Distribution**: Pie chart showing error categories
- **Department AHT**: Horizontal bar chart comparing departments
- **SLA Compliance**: Donut chart showing met vs. breached SLAs
- **Recent Alerts**: Live alert feed

### 2️⃣ Departments Page
- **Performance Radar Chart**: Multi-dimensional department comparison
- **Department Cards**: Individual metrics for each department
- **Sortable Table**: Comprehensive department data

### 3️⃣ Agents Page
- **Search & Filter**: Find agents by name or department
- **Agent Cards**: Individual performance statistics
- **DummyJSON Integration**: Real API data for realistic user profiles

### 4️⃣ Goals Page
- **Goal Cards**: Visual progress tracking with progress bars
- **Status Badges**: Color-coded status indicators
- **Trend Chart**: Historical goal progress over 6 months
- **Summary Stats**: Quick overview of goals by status

### 5️⃣ Alerts Page
- **Alert Summary**: Count by severity level
- **Severity Filters**: Filter by Critical, Warning, or Info
- **Dismissible Alerts**: Clean up your alert feed
- **Real-time Simulation**: New alerts appear every 10-30 seconds

---

## 🔧 Configuration

### Customizing Colors

Edit `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: '#3b82f6',    // Blue
      success: '#10b981',    // Green
      warning: '#f59e0b',    // Orange
      danger: '#ef4444',     // Red
      info: '#06b6d4'        // Cyan
    }
  }
}
```

### Customizing Mock Data

Edit `src/utils/mockData.js` to adjust:
- Efficiency ranges
- Error categories and frequencies
- Alert types and severities
- Department metrics

### API Integration

Replace mock data with real API calls in `src/services/api.js`:

```js
export async function fetchMetrics() {
  const response = await fetch('https://your-api.com/metrics');
  return response.json();
}
```

---

## 📊 Data Flow Architecture

```
┌─────────────┐
│   Pages     │ ← User interacts with UI
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Stores    │ ← Zustand state management
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Services   │ ← API calls & data fetching
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  API/Mock   │ ← DummyJSON or mock data generators
└─────────────┘
```

---

## 🧪 Testing

Run the test suite:

```bash
npm run test
```

Tests are located next to their source files:
- `Component.jsx` → `Component.test.jsx`
- `store.js` → `store.test.js`

---

## 🤝 Contributing

This is a portfolio project, but suggestions and improvements are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

Hamzah Jalila

- LinkedIn: https://www.linkedin.com/in/hamzahjalila/
- GitHub: github.com/hamzahJal
- Email: hamzahjalila@gmail.com

---

## 🙏 Acknowledgments

- **[DummyJSON](https://dummyjson.com)** - Free mock REST API
- **[Recharts](https://recharts.org)** - Amazing React charting library
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[Lucide](https://lucide.dev)** - Beautiful open-source icons
- **[Zustand](https://github.com/pmndrs/zustand)** - Lightweight state management

---

## 🌟 Show Your Support

If this project helped you, please consider giving it a ⭐️ on GitHub!

---

<p align="center">Made with ❤️ and React</p>
<p align="center">© 2024 Hamzah Jalila. All rights reserved.</p>




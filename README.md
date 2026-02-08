# Operations Monitoring Dashboard

A modern, production-ready dashboard for monitoring operational metrics, tracking KPIs, and managing alerts across departments and agents.

![Dashboard Preview](https://via.placeholder.com/800x400/3b82f6/ffffff?text=Operations+Dashboard)

## 🚀 Features

- **Real-time Metrics**: Track efficiency, error rates, handling times, and SLA compliance
- **Department Management**: Compare performance across departments with interactive charts
- **Agent Tracking**: Monitor individual agent performance and statistics
- **Goal Management**: Set and track progress toward operational targets
- **Alert System**: Real-time alerts with severity levels (simulated)
- **Interactive Charts**: Built with Recharts for beautiful data visualization
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **State Management**: Zustand for efficient, scalable state handling

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Recharts** - Composable charting library
- **Zustand** - Lightweight state management
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icon library
- **date-fns** - Modern date utility library

## 📦 Installation

### Prerequisites

- Node.js 16+ and npm/yarn

### Steps

1. **Clone or extract the project**
   ```bash
   cd operations-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   Navigate to `http://localhost:5173`

## 📝 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm run test
```

## 📁 Project Structure

```
operations-dashboard/
├── src/
│   ├── components/
│   │   ├── common/          # Reusable UI components
│   │   ├── charts/          # Chart components
│   │   ├── layout/          # Layout components
│   │   └── alerts/          # Alert-related components
│   ├── pages/               # Page components
│   ├── stores/              # Zustand stores
│   ├── services/            # API services
│   ├── hooks/               # Custom React hooks
│   ├── utils/               # Utility functions
│   └── assets/              # Static assets
├── public/                  # Public assets
└── package.json
```

## 🎨 Key Components

### MetricCard
Displays a single metric with trend indicator
```jsx
<MetricCard
  title="Efficiency"
  value="87%"
  change="+5.2%"
  trend="up"
  icon={Activity}
/>
```

### Charts
- **EfficiencyChart** - Line chart showing efficiency trends
- **ErrorDistributionChart** - Pie chart of error categories
- **DepartmentAHTChart** - Bar chart comparing department handling times
- **SLAComplianceChart** - Donut chart showing compliance ratio
- **GoalTrendChart** - Multi-line chart tracking goal progress

### Stores (Zustand)
- **metricsStore** - Overall metrics and KPIs
- **alertsStore** - Alert management and simulation
- **departmentsStore** - Department data
- **agentsStore** - Agent data with filtering
- **goalsStore** - Goal tracking
- **uiStore** - UI state (sidebar, theme)

## 🔌 API Integration

The dashboard integrates with:
- **DummyJSON API** (https://dummyjson.com) for user and category data
- **Mock data generators** for operational metrics

### DummyJSON Endpoints Used:
- `/users` - Transformed into agents
- `/products/categories` - Mapped to departments

## 🎯 Pages

1. **Dashboard** - Overview of all metrics with charts
2. **Departments** - Department-level performance comparison
3. **Agents** - Individual agent performance tracking
4. **Goals** - Monthly target tracking with progress bars
5. **Alerts** - Alert management with filtering

## 🔄 Real-time Features

The dashboard simulates real-time alerts that appear every 10-30 seconds with:
- Random severity levels (critical, warning, info)
- Department assignment
- Timestamp tracking
- Dismiss functionality

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```js
colors: {
  primary: '#3b82f6',
  success: '#10b981',
  warning: '#f59e0b',
  danger: '#ef4444',
  info: '#06b6d4'
}
```

### Mock Data
Modify generators in `src/utils/mockData.js` to customize:
- Efficiency ranges
- Error categories
- Alert types
- Department metrics

## 🚢 Deployment

### Build for Production
```bash
npm run build
```

The build output will be in the `dist/` directory.

### Deploy to Netlify, Vercel, or GitHub Pages
The app is ready to deploy to any static hosting service. See deployment guides below.

## 📊 Data Flow

1. Components call store actions
2. Stores fetch data from services
3. Services call DummyJSON or generate mock data
4. Data flows back through stores to components
5. Components render with updated data

## 🧪 Testing

Run tests with:
```bash
npm run test
```

Component and store tests are located next to their source files:
- `Component.jsx` → `Component.test.jsx`
- `store.js` → `store.test.js`

## 🤝 Contributing

This is a portfolio project, but suggestions are welcome!

## 📄 License

MIT License - feel free to use this project for your portfolio.

## 👤 Author

Your Name - [Your Portfolio URL]

## 🙏 Acknowledgments

- DummyJSON for the mock API
- Recharts for beautiful charts
- Tailwind CSS for styling
- Lucide for icons

---

**Note**: This dashboard uses simulated data for demonstration purposes. In a production environment, replace mock data generators with real API calls to your backend.
